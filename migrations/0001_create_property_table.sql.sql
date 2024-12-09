-- CreateTable
CREATE TABLE "Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "parentId" INTEGER,
    CONSTRAINT "Property_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
