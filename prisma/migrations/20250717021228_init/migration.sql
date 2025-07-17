-- CreateTable
CREATE TABLE "manik_data" (
    "id" SERIAL NOT NULL,
    "file_name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "accessed" DATE,
    "uploaded" DATE NOT NULL,

    CONSTRAINT "manik_data_pkey" PRIMARY KEY ("id")
);
