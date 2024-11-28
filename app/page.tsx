import About from "./components/section/About";
import Work from "./components/portfolio/Work";
import Skill from "./components/section/Skill";
import Profile from "./components/section/Profile";
import BackToTopButton from "./components/ui/BackToTopButton";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
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
