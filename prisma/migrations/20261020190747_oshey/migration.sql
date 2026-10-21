/*
  Warnings:

  - You are about to drop the column `accuracy_m` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `check_in_time` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `distance_m` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `is_mocked` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `presence_status` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `risk_score` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `submitted_from_ip` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `submitted_lat` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `submitted_lng` on the `daily_logs` table. All the data in the column will be lost.
  - You are about to drop the column `verification_flags` on the `daily_logs` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "daily_logs_presence_status_idx";

-- AlterTable
ALTER TABLE "daily_logs" DROP COLUMN "accuracy_m",
DROP COLUMN "check_in_time",
DROP COLUMN "distance_m",
DROP COLUMN "is_mocked",
DROP COLUMN "presence_status",
DROP COLUMN "risk_score",
DROP COLUMN "submitted_from_ip",
DROP COLUMN "submitted_lat",
DROP COLUMN "submitted_lng",
DROP COLUMN "verification_flags";

-- CreateTable
CREATE TABLE "daily_attendance" (
    "id" UUID NOT NULL,
    "placement_id" UUID NOT NULL,
    "attendance_date" DATE NOT NULL,
    "check_in_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submitted_lat" DOUBLE PRECISION,
    "submitted_lng" DOUBLE PRECISION,
    "accuracy_m" DOUBLE PRECISION,
    "distance_m" DOUBLE PRECISION,
    "presence_status" "PresenceStatus" NOT NULL DEFAULT 'PENDING',
    "submitted_from_ip" TEXT,
    "is_mocked" BOOLEAN NOT NULL DEFAULT false,
    "risk_score" INTEGER NOT NULL DEFAULT 0,
    "verification_flags" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "daily_attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "daily_attendance_placement_id_attendance_date_idx" ON "daily_attendance"("placement_id", "attendance_date");

-- CreateIndex
CREATE INDEX "daily_attendance_presence_status_idx" ON "daily_attendance"("presence_status");

-- CreateIndex
CREATE UNIQUE INDEX "daily_attendance_placement_id_attendance_date_key" ON "daily_attendance"("placement_id", "attendance_date");

-- CreateIndex
CREATE INDEX "daily_logs_weekly_submission_id_idx" ON "daily_logs"("weekly_submission_id");

-- CreateIndex
CREATE INDEX "final_clearances_itf_official_id_idx" ON "final_clearances"("itf_official_id");

-- CreateIndex
CREATE INDEX "late_filling_waivers_granted_by_id_idx" ON "late_filling_waivers"("granted_by_id");

-- CreateIndex
CREATE INDEX "logbook_approvals_supervisor_id_idx" ON "logbook_approvals"("supervisor_id");

-- CreateIndex
CREATE INDEX "password_reset_tokens_user_id_idx" ON "password_reset_tokens"("user_id");

-- CreateIndex
CREATE INDEX "refresh_tokens_user_id_idx" ON "refresh_tokens"("user_id");

-- CreateIndex
CREATE INDEX "virtual_spot_checks_coordinator_id_idx" ON "virtual_spot_checks"("coordinator_id");

-- AddForeignKey
ALTER TABLE "daily_attendance" ADD CONSTRAINT "daily_attendance_placement_id_fkey" FOREIGN KEY ("placement_id") REFERENCES "placements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
