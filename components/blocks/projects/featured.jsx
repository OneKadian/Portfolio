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
            <h3
              className="highlight"
              onClick={() => window.open(repoUrl, "_blank")}
              style={{ cursor: "pointer" }}
            >
              {project}
            </h3>
            <span
              className={css.privateOr}
              onClick={() => window.open(repoUrl, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <i className="devicon-github-plain"></i>
              {repo}
            </span>
          </div>
          <div className={css.description}>
            {/* Title */}
            <Link href={url}>
              <p>
                <strong>{descriptionTitle}</strong> {description}
              </p>
            </Link>
          </div>
          <Link href={url}>
            <div className={css.stackContainer}>
              <Badges
                list={stack}
                block="stack"
                fullContainer={false}
                color={false}
              />
            </div>
          </Link>

          <m.div variants={""} className={css.viewProject}>
            <Link href={url}>
              <a style={{ cursor: "pointer" }}>
                <Icon icon={["fad", "arrow-right-to-bracket"]} />
              </a>
            </Link>
          </m.div>
        </div>
        {/* </Link> */}
        {/* Ends */}
        {/* </div> */}
      </div>

      <div className={css.imageContainer}>
        <span className={`${css.imageAnimationContainer}`}>
          {images.map(({ key, url, hover, h, w, websiteURL }, index) => {
            hover = hover === "left" ? hoverLeft : hoverRight;
            return (
              <m.div key={`${index}-${key}`} variants={item}>
                <Link href={websiteURL} className="cursor-pointer">
                  <m.div variants={hover}>
                    <Image src={url} alt="x" height={h} width={w} />
                  </m.div>
                </Link>
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
