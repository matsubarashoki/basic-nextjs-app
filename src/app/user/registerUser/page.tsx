import { RegisterForm } from "@/features/user/registerUser/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">登録フォーム</h1>
      <RegisterForm />
    </div>
  );
}
