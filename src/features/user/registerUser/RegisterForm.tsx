"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "./schema";

export function RegisterForm() {
  const { toast } = useToast();
  const [result, setResult] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await fetch("/api/registerUser", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("投稿に失敗しました");

      const json = await res.json();
      setResult(JSON.stringify(json, null, 2));

      toast({
        title: "投稿成功",
        description: "APIへの登録が成功しました 🎉",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "エラー",
        description: "投稿に失敗しました。もう一度お試しください。",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <div>
        <Input {...register("title")} placeholder="タイトル" />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div>
        <Textarea {...register("body")} placeholder="内容" />
        {errors.body && (
          <p className="text-sm text-red-500">{errors.body.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        登録
      </Button>

      {result && (
        <pre className="bg-gray-100 p-2 rounded mt-4 text-sm">{result}</pre>
      )}
    </form>
  );
}
