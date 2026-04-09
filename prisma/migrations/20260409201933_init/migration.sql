-- CreateEnum
CREATE TYPE "StayType" AS ENUM ('EXPLORED', 'FUTURE', 'BUCKET_LIST');

-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('S', 'A', 'B', 'C', 'D');

-- CreateTable
CREATE TABLE "Hotel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "stayType" "StayType" NOT NULL,
    "tier" "Tier",
    "roomEntries" JSONB NOT NULL,
    "stayEntries" JSONB NOT NULL,
    "bucketListLocation" TEXT,
    "bucketListImageUrl" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DashboardPreferences" (
    "id" TEXT NOT NULL,
    "topPicks" JSONB NOT NULL,
    "topSuites" JSONB NOT NULL,
    "topFutureStays" JSONB NOT NULL,
    "topExperiences" JSONB NOT NULL,
    "topUnderrated" JSONB NOT NULL,
    "topReturnStays" JSONB NOT NULL,
    "displayPreferences" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DashboardPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Hotel_stayType_tier_position_idx" ON "Hotel"("stayType", "tier", "position");
