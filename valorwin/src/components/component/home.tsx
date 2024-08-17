import {Header} from "@/components/component/header"
import {Hero} from "@/components/component/hero"
import {Form} from "@/components/component/form"
import {HowItWorks} from "@/components/component/howitworks"
import {Footer} from "@/components/component/footer"
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SVGProps } from 'react';

export function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
        <Form />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}