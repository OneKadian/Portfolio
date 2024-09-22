// Core packages
import Image from "next/image";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          // preTitle="Synopsis"
          subTitle="Full-stack developer with a passion for building scalable web applications using technologies like Next.js/React.js, AWS, and Supabase."
        />
        <section className={about.content} id="about-me">
          {/* <div className={about.video}>
            <Iframe
              url="https://www.youtube.com/embed/bBIbux1ijtA"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={about.iframe}
            />
          </div> */}
          <div className={`${about.image} iframe-container`}>
            <ReactPlayer
              // url="https://www.youtube.com/watch?v=bBIbux1ijtA"
              url="https://youtu.be/CYcj3KbhH1o" // Embed Youtube video with proper URL format
              width="100%"
              height="calc(100vh - 20rem)" // Adjust height based on viewport height and desired padding
            />
          </div>
          <div className={about.copy}>
            {/* <CopyBlock 

							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
						/> */}
            <BadgesBlock
              title="Building stuff on the internet"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              //   icon="fingerprint"
              copy=" I focus on delivering high-quality, scalable solutions using modern technologies like Next.js and AWS, ensuring every project is built to perform seamlessly from concept to deployment."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "ReactJS", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
  { key: "google", name: "GCP", type: "devicon" },
];
