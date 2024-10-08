import Link from "next/link";
import { SVGProps } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            How it Works
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our Valorant match prediction tool leverages historical data and machine learning to
            provide accurate win probability estimates for any given match.
          </p>
        </div>
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted rounded-lg p-6 text-center">
              <DatabaseIcon className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mt-4 text-foreground">Extensive Data</h3>
              <p className="text-muted-foreground">
                We collected and analyzed almost 500,000 rounds of Valorant from the T1, T2, and collegiate scene.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6 text-center">
              <CpuIcon className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mt-4 text-foreground">Machine Learning</h3>
              <p className="text-muted-foreground">
              Our Random Forest Classification model analyzes complex, high-dimensional data to capture non-linear relationships.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6 text-center">
              <GaugeIcon className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mt-4 text-foreground">Reliable Insights</h3>
              <p className="text-muted-foreground">
                Understand your team’s chances with precise win probability estimates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
  );
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
  );
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
  );
}
