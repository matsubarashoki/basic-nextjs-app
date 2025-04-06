import BasicLayout from "@/components/basicLayout";
import { Toaster } from "@/components/ui/toaster";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BasicLayout>
      {children}
      <Toaster />
    </BasicLayout>
  );
}
