-- CreateTable
CREATE TABLE "DraftPage" (
    "id" TEXT NOT NULL,
    "pageTitle" TEXT NOT NULL DEFAULT E'',
    "url" TEXT NOT NULL DEFAULT E'',
    "packageName" TEXT,
    "designOld" JSONB,
    "design" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]',
    "hideAccessibilityTab" BOOLEAN NOT NULL DEFAULT false,
    "accessibilityOld" JSONB,
    "accessibility" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]',
    "hideCodeTab" BOOLEAN NOT NULL DEFAULT false,
    "codeOld" JSONB,
    "code" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]',
    "relatedInfoOld" JSONB,
    "relatedInfo" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]',
    "published" TEXT,

    CONSTRAINT "DraftPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DraftPage_relatedPages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DraftPage_published_key" ON "DraftPage"("published");

-- CreateIndex
CREATE UNIQUE INDEX "_DraftPage_relatedPages_AB_unique" ON "_DraftPage_relatedPages"("A", "B");

-- CreateIndex
CREATE INDEX "_DraftPage_relatedPages_B_index" ON "_DraftPage_relatedPages"("B");

-- AddForeignKey
ALTER TABLE "DraftPage" ADD CONSTRAINT "DraftPage_published_fkey" FOREIGN KEY ("published") REFERENCES "Page"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DraftPage_relatedPages" ADD FOREIGN KEY ("A") REFERENCES "DraftPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DraftPage_relatedPages" ADD FOREIGN KEY ("B") REFERENCES "DraftPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
