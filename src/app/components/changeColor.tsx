
"use client"

import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"

export const ChangeTheme = () => {
    const { theme, setTheme } = useTheme()
    const changeBTN = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }
    return (
        <>

            <Card>
                <button onClick={changeBTN}>Dark Mode</button>
            </Card>
           
        </>
    )
}