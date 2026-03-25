import { Header } from "@/components/layout/header";
import { DocsLayoutClient } from "@/components/layout/docs-layout-client";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex pt-16 min-h-screen bg-ds-background">
        <DocsLayoutClient>{children}</DocsLayoutClient>
      </div>
    </>
  );
}
