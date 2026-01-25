/*
  Warnings:

  - You are about to drop the column `device` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `expiredAt` on the `RefreshToken` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `RefreshToken` DROP FOREIGN KEY `RefreshToken_userId_fkey`;

-- DropIndex
DROP INDEX `RefreshToken_userId_device_key` ON `RefreshToken`;

-- AlterTable
ALTER TABLE `RefreshToken` DROP COLUMN `device`,
    DROP COLUMN `expiredAt`;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_calendarId_fkey` FOREIGN KEY (`calendarId`) REFERENCES `Calendar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
