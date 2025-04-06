import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">サイト名</span>
        </Link>
        <nav className="flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            ホーム
          </Link>
          <Link
            href="/user"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            ユーザ
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            サービス
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            お問い合わせ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            ログイン
          </Button>
          <Button size="sm">新規登録</Button>
        </div>
      </div>
    </header>
  );
}
