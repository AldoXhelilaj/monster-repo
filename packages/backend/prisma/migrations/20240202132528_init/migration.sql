-- CreateTable
CREATE TABLE "Monster" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "level" INTEGER,
    "type" JSONB,

    CONSTRAINT "Monster_pkey" PRIMARY KEY ("id")
);
