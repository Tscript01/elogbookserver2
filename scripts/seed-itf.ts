import bcrypt from 'bcryptjs'
import { prisma } from '../src/config/prisma'

const createItfOfficialAccount = async () => {
  const email = process.env.ITF_OFFICIAL_EMAIL || 'zonal.official@itf.gov.ng'
  const rawPassword = process.env.ITF_OFFICIAL_PASSWORD || 'ITFAdmin@2026'
  const fullName = process.env.ITF_OFFICIAL_NAME || 'Engr. A. O. Bello (ITF Zonal Verifier)'

  const normalizedEmail = email.trim().toLowerCase()

  try {
    const existing = await prisma.user.findFirst({
      where: { email: normalizedEmail }
    })

    const passwordHash = await bcrypt.hash(rawPassword, 10)

    if (existing) {
      const updated = await prisma.user.update({
        where: { id: existing.id },
        data: {
          role: 'ITF_OFFICIAL' as any,
          password_hash: passwordHash,
          name: fullName
        }
      })
      console.log('Existing account updated to ITF_OFFICIAL:')
      console.log(`Email: ${updated.email}`)
      console.log(`Role: ${updated.role}`)
      console.log(`Password: ${rawPassword}`)
      return
    }

    const created = await prisma.user.create({
      data: {
        name: fullName,
        email: normalizedEmail,
        password_hash: passwordHash,
        role: 'ITF_OFFICIAL' as any
      }
    })

    console.log('ITF Official Account created successfully:')
    console.log(`ID: ${created.id}`)
    console.log(`Name: ${created.name}`)
    console.log(`Email: ${created.email}`)
    console.log(`Role: ${created.role}`)
    console.log(`Password: ${rawPassword}`)
  } catch (error) {
    console.error('Failed to provision ITF account:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

createItfOfficialAccount()