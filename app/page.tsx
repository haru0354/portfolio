import Main2ColumnImage from "./components/portfolio/Work";
import Skill from "./components/portfolio/Skill";
import Profile from "./components/portfolio/Profile";
import AnimatedItem from "./components/lib/AnimatedItem";

export default function Home() {
  return (
    <>
      <Main2ColumnImage />
      <Skill />
      <Profile />
      <AnimatedItem>test</AnimatedItem>
    </>
  );
}
