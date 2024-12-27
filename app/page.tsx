import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center">
      <h1 className={`${orbitron.className} text-4xl md:text-7xl text-mYellow`}>
        Club
        <span className="bg-mYellow text-mBlack font-black px-2 ml-2 rounded-2xl">
          Hive
        </span>
      </h1>
      <h1 className="text-3xl mt-10 text-mBlue">Coming Soon</h1>
    </div>
  );
}
