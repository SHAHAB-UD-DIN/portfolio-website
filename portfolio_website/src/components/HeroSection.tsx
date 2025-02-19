import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";


export default function HeroSection() {
    return (
      <>
      <div className="items-center mt-20">
  
        <div className="justify-items-center">
          <Image src="/image.png" alt="Profile" width={110} height={110} className="" />
          <h1 className="mt-3">Hi! I'm Shahab Ud Din 👋</h1>
        </div>
  
        <div className="text-center">
          <h2 className="text-4xl font-semibold mt-3 ">frontend web developer</h2>
          <h3 className="mt-3">I'm a web developer and starting over a tech journey with Capregsoft</h3>
        </div>
  
        <div className="flex justify-center items-center gap-3 mt-4">
          <GitHubLogoIcon className="size-7"/>
          <LinkedInLogoIcon className="size-7"/>
          <InstagramLogoIcon className="size-7"/>
        </div>
  
        <div className="flex justify-center items-center gap-3 mt-7">
  
        <Button className="rounded-full">
          Contact me
          <ArrowRight />
        </Button>
  
        <Button variant={"outline"} className="rounded-full">
          my resume
          <Download />
        </Button>

        </div>
  
      </div>
      <div>
  
      </div>
      </>
    );
  }
  