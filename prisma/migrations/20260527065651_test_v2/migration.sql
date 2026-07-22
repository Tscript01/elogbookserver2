/*
  Warnings:

  - Made the column `ind_supervisor_id` on table `placements` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "placements" ALTER COLUMN "ind_supervisor_id" SET NOT NULL,
ALTER COLUMN "inst_coordinator_id" DROP NOT NULL;
