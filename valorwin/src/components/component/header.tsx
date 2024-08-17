import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SVGProps } from 'react';


export function Header() {
    return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <CrosshairIcon className="size-6 text-primary" />
            <span className="sr-only">Valorant Win Predictor</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
            href="https://discord.com/invite/pCQyBd5zw9"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-900"
            prefetch={false}
            >
            Discord
            </Link>
        </nav>
    </header>
    )
  }

function CrosshairIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="22" x2="18" y1="12" y2="12" />
        <line x1="6" x2="2" y1="12" y2="12" />
        <line x1="12" x2="12" y1="6" y2="2" />
        <line x1="12" x2="12" y1="22" y2="18" />
      </svg>
    )
  }