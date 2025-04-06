import BasicLayout from "@/components/basicLayout";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BasicLayout>{children}</BasicLayout>;
}
