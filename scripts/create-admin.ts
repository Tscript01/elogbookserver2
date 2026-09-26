import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import {prisma} from '../src/config/prisma';

dotenv.config();

async function createAdmin() {
  const email = (process.argv[2] || 'admin@elogbook.com').toLowerCase().trim();
  const password = process.argv[3] || 'Admin@12345';
  const name = process.argv[4] || 'System Administrator';

  try {
    const existing = await prisma.user.findUnique({
      where: { email }
    });

    if (existing) {
      if (existing.role === 'ADMIN') {
        console.log(`Account with email ${email} is already an ADMIN.`);
        return;
      }

      await prisma.user.update({
        where: { email },
        data: { role: 'ADMIN' }
      });
      console.log(`Existing user ${email} elevated to ADMIN role.`);
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const admin = await prisma.user.create({
      data: {
        name,
        email,
        password_hash: passwordHash,
        role: 'ADMIN',
        department: 'SIWES Directorate'
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        created_at: true
      }
    });

    console.log('Administrator account created successfully:');
    console.table([admin]);
  } catch (error) {
    console.error('Failed to create admin account:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();