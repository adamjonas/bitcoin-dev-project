import Button from "@/components/button";
import HomeCarousel from "@/components/home-carousel";
import Pointer from "@/components/pointer";
import SectionCard from "@/components/section-card";
import { learnSection, pointers } from "@/content/data";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between md:flex-col gap-4 md:gap-y-6">
        <div className="flex basis-1/2 flex-grow flex-col justify-center px-14 md:px-7 md:order-2">
          <div className="flex flex-col gap-y-8 sm:gap-y-5">
            <h1 className="text-[52px] md:text-[30px] sm:text-2xl sm:text-center lg:text-[36px] font-bold leading-normal">
              Learn and contribute to{" "}
              <span className="text-orange">bitcoin</span> and{" "}
              <br className="md:hidden"></br>
              <span className="text-green">lightning</span> open source
            </h1>
            <div className="mt-4 md:mt-0 md:flex md:flex-col md:items-center">
              <h2 className="text-[32px] lg:text-[26px] md:text-[20px] sm:text-center font-medium leading-normal">
                Build the future of money
              </h2>
            </div>
            <div className="flex gap-x-5 lg:flex-col lg:gap-y-3 md:items-center">
              {pointers.map((pointer, index) => (
                <Pointer
                  className={
                    index === 1 ? "from-green !to-bright-cyan" : undefined
                  }
                  key={pointer.btnText}
                  {...pointer}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex-grow basis-1/2 object-cover pb-[50%] md:mx-14 sm:mx-7  md:order-1">
          <Image
            className="object-cover"
            src="/hero.jpg"
            alt="Hero"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col px-14 sm:px-7">
        <h2
          id={learnSection.slug}
          className="mt-32 md:mt-10 text-5xl md:text-2xl font-semibold text-center self-center mb-6"
        >
          {learnSection.title}
        </h2>
        <div className="flex justify-between gap-y-7 flex-wrap md:flex-col md:gap-y-4 md:items-center">
          {learnSection.data.map(({ shortTitle: _, ...section }) => (
            <SectionCard
              key={section.title}
              alt={section.title}
              className="w-[48%] md:w-10/12"
              {...section}
              href={`/${section.slug}`}
            />
          ))}
        </div>

        <div className="mt-32 md:mt-10 flex flex-col self-center text-center gap-y-2">
          <h2 className="text-5xl md:text-2xl font-semibold">Tools</h2>
          <p className="text-xl md:text-base leading-[140%] mx-20 sm:mx-0 my-6">
            Bitcoin and Lightning aim to solve some of the world&apos;s most
            difficult problems. While we recognize the enormity of the task, the
            Bitcoin Dev Project also aims to make Bitcoin and Lightning
            development enjoyable and approachable. Check out some of the tools
            and educational content made by us and our friends.
          </p>
          <div className="relative flex flex-col w-full md:h-[1200px] h-[530px] md:pt-5 bg-pale-orange rounded-xl">
            <div className="overflow-hidden pb-20 md:pb-5 absolute bottom-0 left-0 right-0 flex flex-col md:relative">
              <HomeCarousel />
              <div className="mt-[10px] w-[212px] md:w-[50vw] self-center it">
                <Button href="/tools" className="w-full">
                  Discover
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
