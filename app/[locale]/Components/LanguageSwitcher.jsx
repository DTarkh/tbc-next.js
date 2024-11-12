"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { usePathname } from "@/i18n/routing"

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname()
  const [isPending, startTransition ] = useTransition()

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
    router.replace(`/${nextLocale}${pathname}`) }
  )
  }
  return (
    <select
      onChange={onSelectChange}
      className="bg-transparent p-2 dark:text-slate-200 text-slate-800 appearance-none rounded-lg"
    >
      <option value="en">ENG</option>
      <option value="ka">ქარ</option>
    </select>
  );
}
