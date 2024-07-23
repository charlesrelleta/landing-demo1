import Image from "next/image";
import VideoPlayer from "./components/VideoPlayer";
import MainDescription from "./components/MainDescription";
import LogoMarquee from "./components/LogoMarquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainDescription />
      <VideoPlayer />
      <LogoMarquee />
    </main>
  );
}
