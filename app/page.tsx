import Accordion from "@/components/accordion";
import Button from "@/components/button";
import SectionCard from "@/components/section-card";
import ToolsCard from "@/components/tools-card";
import Image from "next/image";

const Points = ({
  btnText,
  description,
  jumpTo,
}: {
  btnText: string;
  description: string;
  jumpTo: string;
}) => (
  <div className="flex flex-col w-[186px] gap-y-2 text-center md:flex-col-reverse">
    <Button href={`#${jumpTo}`} className="w-full">
      {btnText}
    </Button>
    <p className="text-sm font-medium">{description}</p>
  </div>
);

export default function Home() {
  return (
    <main className="max-w-[100%]">
      <div className="flex justify-between md:flex-col gap-x-4">
        <div className="flex flex-col justify-end md:px-14">
          <div className="flex flex-col gap-y-[56px] pl-14 md:pl-0">
            <h1 className="text-[62px] lg:text-[36px] font-bold leading-normal md:text-center">
              Learn, contribute <br></br> and build on{" "}
              <span className="text-orange">bitcoin</span> <br></br>
              and <span className="text-green">lightning</span>
            </h1>
            <div>
              <ul className="list-disc text-2xl lg:text-lg leading-[150%] md:self-center">
                <li>Help build the future of money </li>
                <li>Challenge yourself & go down various rabbit holes</li>
                <li>
                  Build applications and infrastructure that have meaning and
                  impact
                </li>
              </ul>
            </div>
            <div className="flex justify-between gap-x-3 lg:flex-col lg:gap-y-4 md:flex-row">
              <Points
                btnText="Learn"
                description="Guided journey for development on bitcoin and lightning"
                jumpTo="learn"
              />
              <Points
                btnText="Contribute"
                description="Resources to teach you to contribute to bitcoin & lightning"
                jumpTo="contribute"
              />
              <Points
                btnText="Build"
                description="Hands-on and theoretical supports to build applications"
                jumpTo="build"
              />
            </div>
          </div>
        </div>
        <div className="relative h-[664px] w-[690px] md:w-full bg-green md:mt-10">
          <Image
            src="/hero.jpg"
            alt="Hero"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-col px-14">
        <h2
          id="learn"
          className="mt-[100px] text-5xl font-semibold text-center self-center mb-6"
        >
          Learn
        </h2>
        <div className="flex justify-between md:flex-col md:gap-y-4">
          <SectionCard
            alt="bitcoin-infra-development"
            body="Learning resources for your journey to become a Bitcoin Core developer."
            btnText="Learn"
            src="/bitcoin-infra-development.jpg"
            title="Bitcoin Infrastructure Development"
          />
          <SectionCard
            alt="lighting-infra-development"
            body="Learning resources for your journey to becoming a Infrastructure developer."
            btnText="Learn"
            src="/lighting-infra-development.jpg"
            title="Lightning Infrastructure Development"
          />
          <SectionCard
            alt="lighting-app-development"
            body="Discover the wide range of applications you can build with lightning."
            btnText="Learn"
            src="/lighting-app-development.jpg"
            title="Lightning Infrastructure Development"
          />
        </div>

        <div className="flex mt-32 md:flex-col md:gap-y-4">
          <div className="flex flex-col gap-y-6">
            <h2 id="build" className="text-5xl font-semibold text-center">
              Build
            </h2>
            <SectionCard
              alt="lighting-app-development"
              body="Discover the wide range of applications you can build with lightning."
              btnText="Learn"
              src="/build.jpg"
              title="Lightning Infrastructure Development"
              className="w-[95%]"
            />
          </div>
          <div className="flex flex-col gap-y-6">
            <h2 id="contribute" className="text-5xl font-semibold text-center">
              Contribute
            </h2>
            <SectionCard
              alt="lighting-app-development"
              body="Discover the wide range of applications you can build with lightning."
              btnText="Learn"
              src="/contribute.jpg"
              title="Lightning Infrastructure Development"
              className="w-[95%]"
            />
          </div>
        </div>

        <div className="mt-32 flex flex-col self-center text-center gap-y-2">
          <h2 className="text-5xl font-semibold">Tools to Explore</h2>
          <p className="text-xl leading-[140%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan tempus nunc, nec posuere magna sagittis euismod. Vestibulum
            sed justo ullamcorper, pharetra leo eget, accumsan quam. Fusce
            efficitur leo nisi, sed elementum arcu molestie
          </p>
          <div className="relative flex flex-col w-full min-h-[420px] xl:h-[600px] md:h-[1000px]">
            <Image alt="explore-map" src="/explore-map.jpg" fill />
            <div className="px-[80px] pb-10 absolute bottom-0 left-0 right-0 flex flex-col">
              <div className="flex justify-between xl:flex-col xl:items-center xl:gap-y-6">
                <div className="flex gap-x-10 md:flex-col md:gap-y-4">
                  <ToolsCard
                    alt=""
                    name="Bitcoin Transcripts"
                    src="/chat-btc.jpg"
                  />
                  <ToolsCard
                    alt=""
                    name="Bitcoin Transcripts"
                    src="/saving-satoshi.jpg"
                  />
                </div>
                <div className="flex gap-x-10 md:flex-col md:gap-y-4">
                  <ToolsCard
                    alt=""
                    name="Bitcoin Transcripts"
                    src="/bitcoin-transcript.jpg"
                  />
                  <ToolsCard
                    alt=""
                    name="Bitcoin Search"
                    src="/bitcoin-search.jpg"
                  />
                </div>
              </div>
              <div className="mt-[12px] md:w-[100px] w-[212px] self-center it">
                <Button href="#" className="w-full">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col self-center text-center mb-8 gap-y-5">
          <h2 className="text-5xl font-semibold md:text-3xl">FAQs</h2>
          <div className="flex flex-col gap-y-8">
            <Accordion
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum nemo necessitatibus quaerat rerum officiis nesciunt praesentium, id, itaque voluptatibus a tempora fuga laboriosam modi blanditiis incidunt earum. Tempore, deserunt?"
              title="I'm not a dev but I want to learn more about bitcoin"
            />
            <Accordion
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum nemo necessitatibus quaerat rerum officiis nesciunt praesentium, id, itaque voluptatibus a tempora fuga laboriosam modi blanditiis incidunt earum. Tempore, deserunt?"
              title="I'd like to learn how to become a dev"
            />
            <Accordion
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum nemo necessitatibus quaerat rerum officiis nesciunt praesentium, id, itaque voluptatibus a tempora fuga laboriosam modi blanditiis incidunt earum. Tempore, deserunt?"
              title="Where do I learn about funding in bitcoin and FOSS?"
            />
            <Accordion
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum nemo necessitatibus quaerat rerum officiis nesciunt praesentium, id, itaque voluptatibus a tempora fuga laboriosam modi blanditiis incidunt earum. Tempore, deserunt?"
              title="What is the meaning of life?"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
