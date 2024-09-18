
"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ReactNode, useEffect, useState } from "react"
export const ChangeTheme = () => {
    const { theme, setTheme } = useTheme()

    const [State, SetState] = useState<string>()
    const changeBTN = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }

    useEffect(() => {
        SetState(
            theme == "light" ? "dark" : "light"
        )
    }, [theme])

    return (
        <>


            <button onClick={changeBTN}>
                {
                    State == "light" ?
                        <Moon/>
                        :
                       <Sun/>
                }


            </button>


        </>
    )
}