import AnimatedItem from "../ui/AnimatedItem";

const skills = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "PHP", icon: "php" },
  { name: "Laravel", icon: "laravel" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
];

const SkillImage = () => {
  return (
    <AnimatedItem
      elementType="div"
      animation="fadeInRight"
      className="flex flex-col  justify-center p-4 bg-gray-600"
    >
      <h2 className="text-white text-xl text-center mb-4">使用言語・ライブラリ・フレームワーク</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {skills.map((skill) => (
          <img
            key={skill.icon}
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            title={skill.name}
            className="w-12 h-12 transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </AnimatedItem>
  );
};

export default SkillImage;
