
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import HomePage from './components/homePageData';
import { ChangeTheme } from "./components/changeColor";
import axios from "axios";
import SearchBox from "./components/search";


export default function Home() {


  return (
    <div className="">


      <SearchBox />
      <HomePage />


    </div>
  );
}
export const revalidate = 10;