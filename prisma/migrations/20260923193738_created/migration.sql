/*
  Warnings:

  - A unique constraint covering the columns `[student_id]` on the table `placements` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "WaiverStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'REVOKED');

-- CreateEnum
CREATE TYPE "WaiverPaymentStatus" AS ENUM ('FREE_OVERRIDE', 'PENDING_PAYMENT', 'PAID', 'WAIVED');

-- CreateTable
CREATE TABLE "late_filling_waivers" (
    "id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "placement_id" UUID NOT NULL,
    "week_no" INTEGER NOT NULL,
    "reason" TEXT,
    "granted_by_id" UUID,
    "status" "WaiverStatus" NOT NULL DEFAULT 'ACTIVE',
    "payment_status" "WaiverPaymentStatus" NOT NULL DEFAULT 'PENDING_PAYMENT',
    "payment_ref" TEXT,
    "amount_paid" DECIMAL(10,2),
    "paid_at" TIMESTAMP(3),
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "late_filling_waivers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "late_filling_waivers_payment_ref_key" ON "late_filling_waivers"("payment_ref");

-- CreateIndex
CREATE INDEX "late_filling_waivers_student_id_week_no_idx" ON "late_filling_waivers"("student_id", "week_no");

-- CreateIndex
CREATE UNIQUE INDEX "late_filling_waivers_placement_id_week_no_status_key" ON "late_filling_waivers"("placement_id", "week_no", "status");

-- CreateIndex
CREATE UNIQUE INDEX "placements_student_id_key" ON "placements"("student_id");

-- CreateIndex
CREATE INDEX "placements_ind_supervisor_email_idx" ON "placements"("ind_supervisor_email");

-- AddForeignKey
ALTER TABLE "late_filling_waivers" ADD CONSTRAINT "late_filling_waivers_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_filling_waivers" ADD CONSTRAINT "late_filling_waivers_placement_id_fkey" FOREIGN KEY ("placement_id") REFERENCES "placements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "late_filling_waivers" ADD CONSTRAINT "late_filling_waivers_granted_by_id_fkey" FOREIGN KEY ("granted_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
