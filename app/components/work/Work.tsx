import MemoryBook from "./apps/MemoryBook";
import MemoBooksNote from "./apps/MemoBooksNote";
import Blog from "./apps/Blog";
import LaravelPractice from "./apps/LaravelPractice";
import LaravelAcademy from "./apps/LaravelAcademy";
import WorkSection from "./WorkSection";
import AnimatedItem from "../ui/AnimatedItem";

const Work = () => {
  const contents = [
    "オリジナルの自作アプリの一覧です。",
    "JavaScript/TypeScript」「React/Next.js」「Node.js/Express」「PostgreSQL/MongoDB」",
    "目的を持って作成していますが、基本的に新たなアプリ作成時は「未使用の技術を使用」しており、学習としての意味もあります。",
    "次は「PHP」「Laravel」を使用したアプリ開発をし、それ以降は使いこなせるように、Next.jsの簡単なアプリを複数作成予定。",
  ];

  return (
    <WorkSection id="works" title="Works">
      <AnimatedItem
        elementType="div"
        animation="fadeInOpacity"
        className="text-center break-words mb-12"
      >
        {contents.map((content, index) => (
          <p key={index} className="text-center">
            {content}
          </p>
        ))}
      </AnimatedItem>
      <MemoryBook />
      <MemoBooksNote />
      <LaravelAcademy />
      <Blog />
      <LaravelPractice />
    </WorkSection>
  );
};

export default Work;
