-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "pageTitle" TEXT NOT NULL DEFAULT E'',
    "author" TEXT,
    "url" TEXT NOT NULL DEFAULT E'',
    "content" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]',
    "cardTitle" TEXT NOT NULL DEFAULT E'',
    "cardDescription" TEXT NOT NULL DEFAULT E'',
    "cardDescriptionSecondary" TEXT NOT NULL DEFAULT E'',
    "cardImage" JSONB,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Article_author_idx" ON "Article"("author");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
