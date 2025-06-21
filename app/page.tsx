import Header from "./components/layout/Header";
import About from "./components/section/About";
import Work from "./components/work/Work";
import Skill from "./components/section/Skill";
import Profile from "./components/section/Profile";
import Footer from "./components/layout/Footer";
import BackToTopButton from "./components/ui/BackToTopButton";
import SkillImage from "./components/section/SkillImage";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <SkillImage />
        <Work />
        <Skill />
        <Profile />
        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
}
