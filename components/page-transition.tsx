"use client"

import { usePathname } from "next/navigation"

export function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();

    return(
        <div key={pathName} className="page-transition">
            {children}
        </div>
    )
}