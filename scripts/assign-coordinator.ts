import { PrismaClient, Role } from '../src/generated/prisma';

import {prisma} from '../src/config/prisma';

async function run() {
  // 1. Find or create a coordinator
  const coordinator = await prisma.user.findFirst({
    where: { role: Role.INST_COORDINATOR }
  });

  if (!coordinator) {
    console.error('No coordinator found! Make sure to create a user with role INST_COORDINATOR.');
    return;
  }

  // 2. Find any placement that currently has no coordinator assigned
  const placement = await prisma.placement.findFirst({
    where: { inst_coordinator_id: null },
    include: { student: true }
  });

  if (!placement) {
    console.log('No unassigned placement found. Assigning coordinator to the first available placement...');
    const anyPlacement = await prisma.placement.findFirst({ include: { student: true } });
    if (!anyPlacement) {
      console.error('No placements found in the database. A student needs to register a placement first.');
      return;
    }

    const updated = await prisma.placement.update({
      where: { id: anyPlacement.id },
      data: { inst_coordinator_id: coordinator.id },
      include: { student: true }
    });

    console.log(`Assigned coordinator ${coordinator.name} (${coordinator.email}) to student ${updated.student.name}`);
    return;
  }

  // 3. Assign coordinator to the unassigned placement
  const updated = await prisma.placement.update({
    where: { id: placement.id },
    data: { inst_coordinator_id: coordinator.id },
    include: { student: true }
  });

  console.log(`Success! Assigned ${coordinator.name} to ${updated.student.name} (Placement ID: ${updated.id})`);
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());