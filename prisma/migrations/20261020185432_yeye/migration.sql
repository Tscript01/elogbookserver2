/*
  Warnings:

  - You are about to drop the column `jon` on the `password_reset_tokens` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PresenceStatus" AS ENUM ('PENDING', 'VERIFIED_ON_SITE', 'OUT_OF_BOUNDS', 'HIGH_RISK_SPOOFED');

-- CreateEnum
CREATE TYPE "SpotCheckStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'FLAGGED_ABSENT');

-- DropForeignKey
ALTER TABLE "placements" DROP CONSTRAINT "placements_ind_supervisor_id_fkey";

-- DropForeignKey
ALTER TABLE "placements" DROP CONSTRAINT "placements_inst_coordinator_id_fkey";

-- AlterTable
ALTER TABLE "daily_logs" ADD COLUMN     "accuracy_m" DOUBLE PRECISION,
ADD COLUMN     "check_in_time" TIMESTAMP(3),
ADD COLUMN     "distance_m" DOUBLE PRECISION,
ADD COLUMN     "is_mocked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "presence_status" "PresenceStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "risk_score" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "submitted_from_ip" TEXT,
ADD COLUMN     "submitted_lat" DOUBLE PRECISION,
ADD COLUMN     "submitted_lng" DOUBLE PRECISION,
ADD COLUMN     "verification_flags" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "password_reset_tokens" DROP COLUMN "jon";

-- AlterTable
ALTER TABLE "placements" ADD COLUMN     "company_domain" TEXT,
ADD COLUMN     "company_lat" DOUBLE PRECISION,
ADD COLUMN     "company_lng" DOUBLE PRECISION,
ADD COLUMN     "company_rc_number" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "geofence_radius_m" INTEGER NOT NULL DEFAULT 200,
ADD COLUMN     "is_company_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "weekly_submissions" ADD COLUMN     "is_locked" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "verification_tokens" (
    "id" UUID NOT NULL,
    "placement_id" UUID NOT NULL,
    "token" TEXT NOT NULL,
    "week_no" INTEGER NOT NULL,
    "email" TEXT,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "virtual_spot_checks" (
    "id" UUID NOT NULL,
    "placement_id" UUID NOT NULL,
    "coordinator_id" UUID,
    "scheduled_at" TIMESTAMP(3) NOT NULL,
    "status" "SpotCheckStatus" NOT NULL DEFAULT 'SCHEDULED',
    "room_name" TEXT NOT NULL,
    "score" INTEGER,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "virtual_spot_checks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_messages" (
    "id" UUID NOT NULL,
    "placement_id" UUID NOT NULL,
    "sender_id" UUID NOT NULL,
    "sender_role" "Role" NOT NULL,
    "sender_name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "verification_tokens"("token");

-- CreateIndex
CREATE INDEX "verification_tokens_placement_id_week_no_idx" ON "verification_tokens"("placement_id", "week_no");

-- CreateIndex
CREATE UNIQUE INDEX "virtual_spot_checks_room_name_key" ON "virtual_spot_checks"("room_name");

-- CreateIndex
CREATE INDEX "virtual_spot_checks_placement_id_idx" ON "virtual_spot_checks"("placement_id");

-- CreateIndex
CREATE INDEX "chat_messages_placement_id_created_at_idx" ON "chat_messages"("placement_id", "created_at");

-- CreateIndex
CREATE INDEX "daily_logs_placement_id_week_no_idx" ON "daily_logs"("placement_id", "week_no");

-- CreateIndex
CREATE INDEX "daily_logs_presence_status_idx" ON "daily_logs"("presence_status");

-- CreateIndex
CREATE INDEX "logbook_approvals_weekly_submission_id_idx" ON "logbook_approvals"("weekly_submission_id");

-- CreateIndex
CREATE INDEX "placements_student_id_idx" ON "placements"("student_id");

-- CreateIndex
CREATE INDEX "placements_state_city_idx" ON "placements"("state", "city");

-- CreateIndex
CREATE INDEX "weekly_submissions_placement_id_status_idx" ON "weekly_submissions"("placement_id", "status");

-- AddForeignKey
ALTER TABLE "placements" ADD CONSTRAINT "placements_ind_supervisor_id_fkey" FOREIGN KEY ("ind_supervisor_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "placements" ADD CONSTRAINT "placements_inst_coordinator_id_fkey" FOREIGN KEY ("inst_coordinator_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_placement_id_fkey" FOREIGN KEY ("placement_id") REFERENCES "placements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "virtual_spot_checks" ADD CONSTRAINT "virtual_spot_checks_placement_id_fkey" FOREIGN KEY ("placement_id") REFERENCES "placements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "virtual_spot_checks" ADD CONSTRAINT "virtual_spot_checks_coordinator_id_fkey" FOREIGN KEY ("coordinator_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_placement_id_fkey" FOREIGN KEY ("placement_id") REFERENCES "placements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
