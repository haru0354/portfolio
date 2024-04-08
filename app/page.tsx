import Image from "next/image";
import SideMenu from "./components/SideMenu";
import Main2ColumnImage from "./components/portfolio/Work";

export default function Home() {
  return (
    <main className="bg-blue-50 text-blue-800">
      <SideMenu />
      <Main2ColumnImage />
    </main>
  );
}
