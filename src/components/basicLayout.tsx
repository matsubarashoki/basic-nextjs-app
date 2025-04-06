import { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export default function BasicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="h-px w-full bg-border" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
