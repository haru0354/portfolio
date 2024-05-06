import Work from "./components/portfolio/Work";
import Skill from "./components/portfolio/Skill";
import Profile from "./components/portfolio/Profile";
import BackToTopButton from "./components/ui/BackToTopButton ";

export default function Home() {
  return (
    <main>
      <Work />
      <Skill />
      <Profile />
      <BackToTopButton />
    </main>
  );
}
