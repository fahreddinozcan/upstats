import { UpstashLogo } from "./components/icons/upstash-logo";
import { MainCard } from "./components/MainCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen pt-32">
      <MainCard />

      <div className="mb-4">
        <p className="text-center ">
          This application is using QStash for serverless task scheduling, and
          Upstash Redis for storing the state. <br /> You can see the Github
          repository{" "}
          <a
            href="https://github.com/fahreddinozcan/upstats"
            className="font-bold text-blue-500"
          >
            here
          </a>{" "}
          to learn how to utilize Upstash products with Next.js Server Side
          Rendering.
        </p>
      </div>
      <footer className="flex items-center justify-center w-full gap-3 py-4 bg-black">
        <span className="font-bold text-white">Powered by</span>
        <a href="https://www.upstash.com" target="_blank">
          <UpstashLogo />
        </a>
      </footer>
    </div>
  );
}
