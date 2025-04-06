import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BarChart,
  FileText,
  HelpCircle,
  Home,
  LayoutDashboard,
  Mail,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

const SidebarItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <TooltipProvider>
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>
        <div className="flex justify-center items-center py-4 hover:bg-accent cursor-pointer">
          <div className="text-muted-foreground w-6 h-6">{icon}</div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p className="text-sm">{text}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function Sidebar() {
  return (
    <div className="w-[72px] flex flex-col justify-between border-r h-full bg-background">
      <div className="flex flex-col items-center gap-1 mt-4">
        <SidebarItem icon={<LayoutDashboard />} text="ダッシュボード" />
        <SidebarItem icon={<Home />} text="ホーム" />
        <SidebarItem icon={<ShoppingCart />} text="製品" />
        <SidebarItem icon={<FileText />} text="サービス" />
        <SidebarItem icon={<Mail />} text="お問い合わせ" />
      </div>

      <div className="flex flex-col items-center gap-1 mb-4">
        <SidebarItem icon={<BarChart />} text="分析" />
        <SidebarItem icon={<Users />} text="ユーザー管理" />
        <SidebarItem icon={<Settings />} text="設定" />
        <SidebarItem icon={<HelpCircle />} text="ヘルプ" />
      </div>
    </div>
  );
}
