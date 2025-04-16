/*
  Warnings:

  - You are about to drop the `ServiceRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ServiceRecord" DROP CONSTRAINT "ServiceRecord_bikeId_fkey";

-- DropTable
DROP TABLE "ServiceRecord";

-- CreateTable
CREATE TABLE "ServiceRecords" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "ServiceStatus" NOT NULL,

    CONSTRAINT "ServiceRecords_pkey" PRIMARY KEY ("serviceId")
);

-- AddForeignKey
ALTER TABLE "ServiceRecords" ADD CONSTRAINT "ServiceRecords_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bikes"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
