/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'IND_SUPERVISOR', 'INST_COORDINATOR', 'ITF_OFFICIAL', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'SUBMITTED', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ClearanceStatus" AS ENUM ('PENDING', 'CLEARED', 'FLAGGED');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "placements" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "company_name" TEXT NOT NULL,
    "ind_supervisor_id" UUID NOT NULL,
    "inst_coordinator_id" UUID NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "placements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_logs" (
    "id" UUID NOT NULL,
    "placement_id" UUID NOT NULL,
    "weekly_submission_id" UUID NOT NULL,
    "week_no" INTEGER NOT NULL,
    "log_date" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT,
    "created_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekly_submissions" (
    "id" UUID NOT NULL,
    "placement_id" UUID NOT NULL,
    "week_no" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "weekly_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logbook_approvals" (
    "id" UUID NOT NULL,
    "weekly_submission_id" UUID NOT NULL,
    "supervisor_id" UUID NOT NULL,
    "approval_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cryptographic_signature_hash" TEXT NOT NULL,

    CONSTRAINT "logbook_approvals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "final_clearances" (
    "id" UUID NOT NULL,
    "placement_id" UUID NOT NULL,
    "coordinator_status" "ClearanceStatus" NOT NULL DEFAULT 'PENDING',
    "coordinator_cleared_at" TIMESTAMP(3),
    "itf_official_id" UUID,
    "itf_status" "ClearanceStatus" NOT NULL DEFAULT 'PENDING',
    "itf_cleared_at" TIMESTAMP(3),
    "final_pdf_hash" TEXT,
    "itf_stamp_hash" TEXT,
    "clearance_timestamp" TIMESTAMP(3),

    CONSTRAINT "final_clearances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "daily_logs_placement_id_log_date_key" ON "daily_logs"("placement_id", "log_date");

-- CreateIndex
CREATE UNIQUE INDEX "weekly_submissions_placement_id_week_no_key" ON "weekly_submissions"("placement_id", "week_no");

-- CreateIndex
CREATE UNIQUE INDEX "final_clearances_placement_id_key" ON "final_clearances"("placement_id");

-- AddForeignKey
ALTER TABLE "placements" ADD CONSTRAINT "placements_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "placements" ADD CONSTRAINT "placements_ind_supervisor_id_fkey" FOREIGN KEY ("ind_supervisor_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "placements" ADD CONSTRAINT "placements_inst_coordinator_id_fkey" FOREIGN KEY ("inst_coordinator_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_logs" ADD CONSTRAINT "daily_logs_placement_id_fkey" FOREIGN KEY ("placement_id") REFERENCES "placements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_logs" ADD CONSTRAINT "daily_logs_weekly_submission_id_fkey" FOREIGN KEY ("weekly_submission_id") REFERENCES "weekly_submissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_submissions" ADD CONSTRAINT "weekly_submissions_placement_id_fkey" FOREIGN KEY ("placement_id") REFERENCES "placements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logbook_approvals" ADD CONSTRAINT "logbook_approvals_weekly_submission_id_fkey" FOREIGN KEY ("weekly_submission_id") REFERENCES "weekly_submissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logbook_approvals" ADD CONSTRAINT "logbook_approvals_supervisor_id_fkey" FOREIGN KEY ("supervisor_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "final_clearances" ADD CONSTRAINT "final_clearances_placement_id_fkey" FOREIGN KEY ("placement_id") REFERENCES "placements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "final_clearances" ADD CONSTRAINT "final_clearances_itf_official_id_fkey" FOREIGN KEY ("itf_official_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
