import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SVGProps } from 'react';


export function Hero() {
    return (
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-primary">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary-foreground">
                        Predict Valorant Match Outcomes
                        </h1>
                        <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                        Leverage our machine learning model to predict the win probability for any Valorant match.
                        Tell your team how cooked you guys are. 😂
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <img
                        src="/hero-image.svg"
                        width="550"
                        height="310"
                        alt="Valorant"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
  }