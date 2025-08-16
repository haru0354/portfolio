import About from "./components/section/About";
import SkillImage from "./components/section/SkillImage";
import Work from "./components/work/Work";
import Skill from "./components/section/Skill";
import Profile from "./components/section/Profile";
import FooterImage from "./components/section/footer-image/FooterImage";

export default function Home() {
  return (
    <main>
      <About />
      <SkillImage />
      <Work />
      <Skill />
      <Profile />
      <FooterImage />
    </main>
  );
}
