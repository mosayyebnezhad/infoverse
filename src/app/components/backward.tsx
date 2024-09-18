"use client"
import { ArrowLeft } from "lucide-react"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"

export const Backward = () => {

    const router = useRouter()
    const handle = () => {

        router.back()

        // redirect('/article/[article]', '/article/1') // This will redirect to the article page with id 1
    }
    return (
        <ArrowLeft className="cursor-pointer" onClick={handle} />
    )
}