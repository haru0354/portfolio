import About from "./components/portfolio/About";
import Work from "./components/portfolio/Work";
import Skill from "./components/portfolio/Skill";
import Profile from "./components/portfolio/Profile";
import BackToTopButton from "./components/ui/BackToTopButton ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";

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
