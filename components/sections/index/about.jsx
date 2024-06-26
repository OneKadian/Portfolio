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
          preTitle="Synopsis"
          subTitle="I excel in teamwork, with strong communication skills and a talent for self-directed learning.
		   My organized approach and eagerness for new challenges make me a valuable team member."
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
              url="https://www.youtube.com/watch?v=bBIbux1ijtA" // Embed Youtube video with proper URL format
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
              copy="I take ideas from concept to code. My passion lies in crafting the entire digital experience, from meticulous research and strategic planning to user-friendly web design and flawless execution."
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
  { key: "planet-moon", name: "Market Research", type: "fad" },
  { key: "qrcode", name: "Product Strategy", type: "fad" },
  { key: "window", name: "Web Design", type: "fad" },
  { key: "cubes", name: "Project Planning", type: "far" },
  { key: "layer-plus", name: "Communication", type: "fad" },
  { key: "solar-system", name: "Fullstack coder", type: "fad" },
];
