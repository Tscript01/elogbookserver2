-- AlterTable
ALTER TABLE "placements" ADD COLUMN     "city" TEXT,
ADD COLUMN     "state" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "assigned_city" TEXT,
ADD COLUMN     "assigned_state" TEXT;
