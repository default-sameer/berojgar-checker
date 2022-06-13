-- CreateTable
CREATE TABLE "Friends" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "jobStatus" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Friends_pkey" PRIMARY KEY ("id")
);
