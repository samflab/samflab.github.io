import React from "react";
import {
  SiHtml5,
  SiBootstrap,
  SiReact,
  SiJavascript,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiCplusplus,
  SiStorybook,
  SiVisualstudiocode,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { IoLogoSass, IoLogoCss3 } from "react-icons/io";
import { DiGit } from "react-icons/di";
import "../../styles/Resume.scss";

const SkillCard = ({ src, name }) => {
  return (
    <div className="skills-plate">
      <div className="icons">{src}</div> &nbsp;
      <span className="skill-name">{name}</span>
    </div>
  );
};
const SkillsIcons = () => {
  const styles = {
    height: "25",
    width: "25",
  };
  return (
    <div className="skills-card">
      <SkillCard src={<SiHtml5 style={styles} />} name="HTML" />
      <SkillCard src={<SiJavascript style={styles} />} name="Javascript" />
      <SkillCard src={<IoLogoCss3 style={styles} />} name="CSS" />
      <SkillCard src={<IoLogoSass style={styles} />} name="Sass" />
      <SkillCard src={<SiTailwindcss style={styles}/>} name="Tailwind"/>
      <SkillCard src={<SiBootstrap style={styles} />} name="Boostrap" />
      <SkillCard src={<SiReact style={styles} />} name="React JS" />
      <SkillCard src={<SiFlutter style={styles} />} name="Flutter" />
      <SkillCard src={<SiDart style={styles} />} name="Dart" />
      <SkillCard src={<SiFirebase style={styles} />} name="Firebase" />
      <SkillCard src={<SiPhp style={styles} />} name="PHP" />
      <SkillCard src={<SiMysql style={styles} />} name="MySql" />
      <SkillCard src={<SiNodedotjs style={styles}/>} name="Node JS"/>
      <SkillCard src={<DiGit style={styles} />} name="Git" />
      <SkillCard src={<SiVisualstudiocode style={styles} />} name="VS Code" />
      <SkillCard src={<SiStorybook style={styles}/>} name="Storybook"/>
    </div>
  );
};

export default SkillsIcons;
