"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";
import { MobileSidebar } from "./mobile-sidebar";
import { getNavSections } from "@/lib/navigation";

interface DocsLayoutClientProps {
  children: React.ReactNode;
}

export function DocsLayoutClient({ children }: DocsLayoutClientProps) {
  const pathname = usePathname();
  const sections = getNavSections(pathname);

  return (
    <>
      <MobileSidebar sections={sections} />
      <Sidebar sections={sections} />

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-8 md:py-16">
          {children}
        </div>
      </main>
    </>
  );
}
