import { DiscordIcon } from "@/assets/DiscordIcon";
import { GithubIcon } from "@/assets/GithubIcon";
import { MailIcon } from "@/assets/MailIcon";
import { RepoIcon } from "@/assets/RepoIcon";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {

  const discord = "https://discord.gg/nextui";
  const github = "https://github.com/Justus-Braun";
  const repo = github + "/my-website";

  return (
    <main className="h-screen bg-[#282c34]">
      <div className="flex flex-col content-center justify-center h-screen w-screen">
        <div className="m-auto">
          <p className="text-6xl text-center w-full mb-10">Justus Braun</p>
          <div className="flex flex-row gap-5">
            <Link href={discord} >
              <DiscordIcon />
            </Link>
            <Link href={github} >
              <GithubIcon />
            </Link>
            <Link href={repo} >
              <RepoIcon />
            </Link>
            <Link href={"mailto:justusbraun03@gmail.com"}>
              <MailIcon />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
