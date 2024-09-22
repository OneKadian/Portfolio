import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import Section from "../../structure/section";
import Container from "../../structure/container";

import space from "../../utils/spacing.util";

import Icon from "../../utils/icon.util";

import HeroBg from "../../blocks/hero.bg/bg-color-1";

import hero from "../../../styles/sections/index/hero.module.scss";
import button from "../../../styles/blocks/button.module.scss";

import content from "../../../content/index/hero.json";
import Node from "../../../public/img/nodejs.png";
import Next from "../../../public/img/nextjs.png";
import Reacto from "../../../public/img/react.png";
import AWS from "../../../public/img/aws.png";
import Image from "next/image";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {
  const [typingStatus, setTypingStatus] = useState("Initializing");

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25, // Adjust threshold as needed
    triggerOnce: true, // Only animate once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 }, // Slide up from bottom with opacity
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    // <Section classProp={`${hero.section}`}>
    //   <Container spacing={"VerticalXXXL"}>
    //     <TypeAnimation
    //       className={`${hero.preHeader}`}
    //       sequence={[
    //         content.intro.startDelay,
    //         () => {
    //           setTypingStatus("typing");
    //         },
    //         content.intro.start,
    //         () => {
    //           setTypingStatus("typed");
    //         },
    //         content.intro.deleteDelay,
    //         () => {
    //           setTypingStatus("deleting");
    //         },
    //         content.intro.end,
    //         () => {
    //           setTypingStatus("deleted");
    //         },
    //         content.intro.restartDelay,
    //       ]}
    //       speed={content.intro.speed}
    //       deletionSpeed={content.intro.deletionSpeed}
    //       wrapper={content.intro.wrapper}
    //       repeat={Infinity}
    //     />
    //     <section>
    //       <h1 className={hero.header}>{content.header.name}</h1>
    //       <h1 className={`${hero.header} ${hero.primaryDim}`}>
    //         {content.header.usp}
    //       </h1>
    //     </section>
    //     <section>
    //       <p
    //         className={`${hero.primaryBright} subtitle ${space([
    //           "verticalLrg",
    //         ])}`}
    //       >
    //         {content.paragraph}
    //       </p>
    //     </section>
    //     <section>
    //       <button
    //         className={`button ${button.primary}`}
    //         onClick={() => (window.location = "mailto:manageanirudh@gmail.com")}
    //       >
    //         {content.buttons.primary.title}
    //       </button>
    //       <button
    //         className={`button ${button.secondary} leaveSite`}
    //         onClick={() =>
    //           window.open("https://www.linkedin.com/in/onekadian/", "_blank")
    //         }
    //       >
    //         {content.buttons.secondary.title}
    //       </button>
    //     </section>
    //   </Container>
    //   <HeroBg theme="bg-color-1" />
    // </Section>

    <Section classProp={`${hero.section}`}>
      <Container spacing={"VerticalXXXL"}>
        <TypeAnimation
          className={`${hero.preHeader}`}
          sequence={[
            content.intro.startDelay,
            () => {
              setTypingStatus("typing");
            },
            content.intro.start,
            () => {
              setTypingStatus("typed");
            },
            content.intro.deleteDelay,
            () => {
              setTypingStatus("deleting");
            },
            content.intro.end,
            () => {
              setTypingStatus("deleted");
            },
            content.intro.restartDelay,
          ]}
          speed={content.intro.speed}
          deletionSpeed={content.intro.deletionSpeed}
          wrapper={content.intro.wrapper}
          repeat={Infinity}
        />
        <section>
          <h1 className={hero.header}>{content.header.name}</h1>
          <h1 className={`${hero.header} ${hero.primaryDim}`}>
            {content.header.usp}
          </h1>
        </section>

        {/* Row of Tech Logos */}
        <m.section
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          style={{
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {/* Repeat for each icon */}
            <div
              style={{
                height: "66px",
                width: "66px",
                display: "flex",
                padding: "1px",
              }}
            >
              <Image
                src={Next}
                alt="Next.js"
                height={64}
                width={64}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "66px",
                width: "66px",
                display: "flex",
                padding: "1px",
              }}
            >
              <Image
                src={Reacto}
                alt="React"
                height={64}
                width={64}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "66px",
                width: "66px",
                display: "flex",
                padding: "1px",
              }}
            >
              <Image
                src={Node}
                alt="Node.js"
                height={64}
                width={64}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                height: "66px",
                width: "66px",
                display: "flex",
                padding: "1px",
              }}
            >
              <Image
                src={AWS}
                alt="AWS"
                height={64}
                width={64}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Media Query for Laptop Screens */}
          <style jsx>{`
            @media (min-width: 1024px) {
              div {
                justify-content: flex-start; /* Justify items at start on larger screens */
              }
            }
          `}</style>
        </m.section>

        <section>
          <button
            className={`button ${button.primary}`}
            onClick={() => (window.location = "mailto:manageanirudh@gmail.com")}
          >
            {content.buttons.primary.title}
          </button>
          <button
            className={`button ${button.secondary} leaveSite`}
            onClick={() =>
              window.open("https://www.linkedin.com/in/onekadian/", "_blank")
            }
          >
            {content.buttons.secondary.title}
          </button>
        </section>
      </Container>
      <HeroBg theme="bg-color-1" />
    </Section>
  );
}
