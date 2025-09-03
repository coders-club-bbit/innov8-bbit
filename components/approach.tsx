"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MagicButton } from "@/components/ui/magic-button";

export const Approach = () => {
  return (
    <section id="schedule" className="w-full py-20">
      <h1 className="heading">
        Hackathon <span className="text-purple">Schedule</span>
      </h1>

      <h1 className="heading my-10">
        <span className="text-purple">13th Sept.</span>
      </h1>

      <div className="my-10 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Check-In & Registration (Admin Block)"
          icon={<MagicButton title="8:45 AM" asChild />}
          description="Participants register and receive their ID cards to officially kick off the event smoothly."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black"
          />
        </Card>

        <Card
          title="Opening Ceremony (Auditorium)"
          icon={<MagicButton title="9:15 AM" asChild />}
          description="Welcome address and event briefing to familiarize participants with rules, schedule, and expectations."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Hackathon Begins"
          icon={<MagicButton title="9:45 AM" asChild />}
          description="Coding and project work officially start. Teams and individuals begin innovating and developing."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card
          title="Flexible Lunch Break"
          icon={<MagicButton title="1:00 PM" asChild />}
          description="Participants may take a break and purchase food from various on-site stalls; lunch is not provided."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>

      </div>

      <div className="my-10 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Hackathon Continues"
          icon={<MagicButton title="2:15 PM" asChild />}
          description="Participants resume coding and project development with full focus."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card
          title="CODE NEXUS (Coding Challenge)"
          icon={<MagicButton title="5:00 PM" asChild />}
          description="An interactive coding competition that challenges participants with real-time problem-solving."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>

        <Card
          title="Dinner (Provided by College)"
          icon={<MagicButton title="9:00 PM" asChild />}
          description="Participants enjoy a meal arranged by the college to recharge for the night session."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card
          title="Hackathon Continues"
          icon={<MagicButton title="10:10 PM" asChild />}
          description="Overnight coding and project work session begins."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>





      

      <h1 className="heading my-20">
        <span className="text-purple">14th Sept.</span>
      </h1>

      <div className="my-10 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Freefire Tournament"
          icon={<MagicButton title="12:00 AM" asChild />}
          description="Friendly gaming competition designed for relaxation and team-building during the hackathon."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>

        <Card
          title="Surprise Fun Event"
          icon={<MagicButton title="3:00 AM" asChild />}
          description="A mystery activity introduced to boost morale and provide a break from coding."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="BGMI Tournament"
          icon={<MagicButton title="9:00 AM" asChild />}
          description="Competitive mobile gaming event for participants to engage in excitement and strategy."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>

        <Card
          title="Hackathon Resumes"
          icon={<MagicButton title="10:00 AM" asChild />}
          description="Focused project development and coding resumes after the morning gaming session."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

      <div className="my-10 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title="Lunch (Provided by College)"
          icon={<MagicButton title="1:00 PM" asChild />}
          description="Complimentary meal service to fuel participants for the day ahead."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Hackathon Continues"
          icon={<MagicButton title="2:15 PM" asChild />}
          description="Final coding and project development phase starts."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Tech Fusion & Quiz Competition"
          icon={<MagicButton title="2:30 PM" asChild />}
          description="Fun knowledge and technology quiz sessions with exciting prizes to test participant intellect."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>

        <Card
          title="Judgment Time"
          icon={<MagicButton title="4:00 PM" asChild />}
          description="Teams present their completed projects to the judging panel for evaluation."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card
          title="Official Hackathon Ends"
          icon={<MagicButton title="6:00 PM" asChild />}
          description="Formal closure of the hackathon with acknowledgments and thanks to participants and organizers."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

const Card = ({ title, description, icon, children }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>

        <h2 className="relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>

        <p
          className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
          style={{
            color: "#e4ecff",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
