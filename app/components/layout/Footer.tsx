import AnimatedItem from "../ui/AnimatedItem";

const Footer = () => {
  return (
    <AnimatedItem elementType="footer" animation="fadeInOpacity">
      <div className="bg-blue-400 py-3 w-full ">
        <ul className="text-sm text-center">
          <li className="text-black">&copy;MY PORTFOLIO -マイポートフォリオエンジニア-</li>
        </ul>
      </div>
    </AnimatedItem>
  );
};

export default Footer;
