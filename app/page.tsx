import About from "./components/portfolio/About";
import Work from "./components/portfolio/Work";
import Skill from "./components/portfolio/Skill";
import Profile from "./components/portfolio/Profile";
import BackToTopButton from "./components/ui/BackToTopButton ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <Work />
        <Skill />
        <Profile />
        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
}
