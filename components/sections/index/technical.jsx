// Core packages
import Image from "next/image";

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
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Work Experience"
          //   preTitle="Hardskills"
          subTitle="As a creative technologist, I have been crafting intuitive digital experiences using a diverse set of tools and languages."
        />
        <section
          className={`${about.content} ${about.container}`}
          id="experience"
        >
          <div className={about.copy}>
            <CopyBlock
              title="Vice President, College Society"
              icon={["fat", "user-plus"]}
              copy="Jul 2019 - Jul 2020"
              copy2="I led the sponsorship department, managing various events and successfully reaching out to companies to secure sponsorships."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Marketing Strategist, Bloom Egg"
              copy="Aug 2020 - Nov 2021"
              copy2="I would take physical businesses online via high performing ecommerce websites,
			  and also generate successful Facebook ad campaigns with a ROAS exceeding 10x. By consistently delivering projects ahead of schedule and leveraging client feedback, I drove client acquisition and retention, contributing to agency growth."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Freelance Developer"
              copy="Jan 2022 - Present"
              copy2=" I have a passion for building innovative solutions that address real-world problems.
			   My journey has been driven by a relentless pursuit of knowledge and a knack for generating 
			   out-of-the-box ideas. As a developer, I've honed my skills across diverse projects, my ability 
			  to quickly learn new technologies and adapt to evolving industry trends makes me a valuable asset to any team"
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon={["fat", "laptop-code"]}
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "", name: "Shopify", type: "devicon" },
  { key: "facebook", name: "Facebook", type: "devicon" },
  { key: "canva", name: "Canva", type: "devicon" },
  //   { key: "vscode", name: "VSCode", type: "devicon" },
  //   { key: "mailbox", name: "Postman", type: "fas" },
  //   { key: "computer-mouse", name: "Click Up", type: "fas" },
  //   { key: "list-music", name: "Ableton", type: "fas" },
  //   { key: "aftereffects", name: "After Effects", type: "devicon" },
  //   { key: "premierepro", name: "Premiere Pro", type: "devicon" },
];

const tech = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "google", name: "GCP", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "tailwindcss", name: "Tailwind CSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "materialui", name: "Material UI", type: "devicon" },
  { key: "express", name: "Express.js", type: "devicon" },
  { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  { key: "github", name: "GitHub", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "stripe", name: "Stripe", type: "devicon" },
  { key: "supabase", name: "Supabase", type: "devicon" },
  { key: "openapi", name: "OpenAI", type: "devicon" },
  { key: "fastapi", name: "REST API", type: "devicon" },
  { key: "vercel", name: "Vercel", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
];
