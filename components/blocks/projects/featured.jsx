import Image from "next/image";
import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import Badges from "../../utils/badge.list.util";
import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/projects/featured.module.scss";

export default function FeaturedProject({ content }, index) {
  const {
    project,
    url,
    repo,
    repoUrl,
    descriptionTitle,
    description,
    stack,
    imageOptions,
    images,
  } = content;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <m.section
      key={index}
      className={css.project}
      ref={ref}
      variants={container}
      initial={["rest", "hidden"]}
      whileHover="hover"
      animate={controls}
    >
      <div className={css.details}>
        <div className={css.projectHeader}>
          <div className={css.header}>
            {/* Title links to repoUrl */}
            <h3
              className="highlight"
              onClick={() => window.open(repoUrl, "_blank")}
              style={{ cursor: "pointer" }}
            >
              {project}
            </h3>
            {/* Repo component links to repoUrl */}
            <span
              className={css.privateOr}
              onClick={() => window.open(repoUrl, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <i className="devicon-github-plain"></i>
              {repo}
            </span>
          </div>

          {/* Description links to url */}
          <div
            className={css.description}
            onClick={() => window.open(url, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <p>
              <strong>{descriptionTitle}</strong> {description}
            </p>
          </div>

          {/* Tags/Stack section links to url */}
          <div
            className={css.stackContainer}
            onClick={() => window.open(url, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <Badges
              list={stack}
              block="stack"
              fullContainer={false}
              color={false}
            />
          </div>

          {/* Arrow Icon links to url */}
          <m.div
            variants={""}
            className={css.viewProject}
            onClick={() => window.open(url, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <Icon icon={["fad", "arrow-right-to-bracket"]} />
          </m.div>
        </div>
      </div>

      <div className={css.imageContainer}>
        <span className={`${css.imageAnimationContainer}`}>
          {images.map(({ key, url, hover, h, w, websiteURL }, index) => {
            hover = hover === "left" ? hoverLeft : hoverRight;
            return (
              <m.div key={`${index}-${key}`} variants={item}>
                <m.div
                  variants={hover}
                  onClick={() => window.open(websiteURL, "_blank")}
                  style={{ cursor: "pointer" }} // Ensures the cursor changes to pointer
                >
                  <Image src={url} alt="x" height={h} width={w} />
                </m.div>
              </m.div>
            );
          })}
        </span>
      </div>
    </m.section>
  );
}

const container = {
  hidden: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.0625,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.25,
    },
  },
  rest: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
  hover: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
};

const item = {
  hidden: {
    y: 75,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.35,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const hoverLeft = {
  rest: {
    x: 0,
  },
  hover: {
    x: -20,
  },
};

const hoverRight = {
  rest: {
    x: 0,
  },
  hover: {
    x: 20,
  },
};
