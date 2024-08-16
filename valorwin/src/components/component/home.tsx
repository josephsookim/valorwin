/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/5d09Yl4MUEA
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Comfortaa } from 'next/font/google'

comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
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
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CrosshairIcon className="size-6 text-primary" />
          <span className="sr-only">Valorant Win Predictor</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Prediction Tool
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-primary">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary-foreground">
                  Predict Valorant Match Outcomes
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Leverage our advanced machine learning models to predict the win probability for any Valorant match.
                  Get insights to improve your team's strategy and performance.
                </p>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try the Prediction Tool
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Valorant"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="prediction-tool" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Valorant Match Prediction
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enter the details of your upcoming Valorant match and get the predicted win probability for each team.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl w-full grid gap-6 mt-10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="team1">Team 1</Label>
                  <Input id="team1" placeholder="Enter team name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="team2">Team 2</Label>
                  <Input id="team2" placeholder="Enter team name" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="team1-loadout">Team 1 Loadout</Label>
                  <Input id="team1-loadout" placeholder="Enter team 1 loadout" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="team2-loadout">Team 2 Loadout</Label>
                  <Input id="team2-loadout" placeholder="Enter team 2 loadout" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="team1-rounds">Team 1 Rounds Won</Label>
                  <Input id="team1-rounds" type="number" placeholder="Enter team 1 rounds won" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="team2-rounds">Team 2 Rounds Won</Label>
                  <Input id="team2-rounds" type="number" placeholder="Enter team 2 rounds won" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="map">Map</Label>
                  <Select id="map" className="mt-1">
                    <option value="">Select map</option>
                    <option value="bind">Bind</option>
                    <option value="haven">Haven</option>
                    <option value="split">Split</option>
                    <option value="ascent">Ascent</option>
                    <option value="icebox">Icebox</option>
                    <option value="breeze">Breeze</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="mode">Game Mode</Label>
                  <Select id="mode" className="mt-1">
                    <option value="">Select game mode</option>
                    <option value="competitive">Competitive</option>
                    <option value="unrated">Unrated</option>
                    <option value="spike-rush">Spike Rush</option>
                    <option value="deathmatch">Deathmatch</option>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Enter any additional details" className="mt-1" />
              </div>
              <div className="flex justify-center">
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Predict Match Outcome
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                How it Works
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our Valorant match prediction tool leverages historical data and advanced machine learning models to
                provide accurate win probability estimates for any given match.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <DatabaseIcon className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="text-xl font-semibold mt-4 text-foreground">Extensive Data</h3>
                  <p className="text-muted-foreground">
                    We collect and analyze millions of Valorant match data points to train our prediction models.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <CpuIcon className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="text-xl font-semibold mt-4 text-foreground">Advanced Models</h3>
                  <p className="text-muted-foreground">
                    Our team of data scientists continuously improve our machine learning algorithms to provide the most
                    accurate predictions.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <GaugeIcon className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="text-xl font-semibold mt-4 text-foreground">Reliable Insights</h3>
                  <p className="text-muted-foreground">
                    Get data-driven insights to help your team make informed decisions and improve their performance.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Valorant Win Predictor. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CpuIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
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


function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function GaugeIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}
