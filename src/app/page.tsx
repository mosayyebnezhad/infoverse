// app/page.tsx
import axios from 'axios'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import SearchBox from "./components/search";
import { ChangeTheme } from "./components/changeColor";

export default async function HomePage() {
  // استفاده از fetch برای دریافت داده‌ها
  const response = await axios.get("https://fa.wikipedia.org/w/api.php", {
    params: {
      action: "query",
      list: "random",
      rnlimit: "8",
      format: "json",
      origin: "*",
      rnnamespace: 0
    },
    headers: {
      'Cache-Control': 'no-store' // برای اطمینان از بارگذاری داده‌های تازه
    }
  });

  const data = response.data.query.random;

  return (
    <div className="">
      <ChangeTheme />
      <Card>
        <SearchBox />
        <div>
          {data.map((item: any) => (
            <Link key={item.id} href={`/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}

// مشخص کردن زمان به‌روز رسانی با ویژگی `revalidate`
export const revalidate = 10; // صفحه هر 10 ثانیه یکبار به‌روز می‌شود
