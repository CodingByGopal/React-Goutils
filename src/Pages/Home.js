import { useEffect, useRef } from "react";
import Hero from "../Components/HomeComponents/Hero";
import ToolsDetails from "../Components/HomeComponents/ToolsDetails";
import Card from "../Components/LayoutComponents/Card";

const Home = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 200);
  }, [setProgress]);

  const sectionRef = useRef(null);

  return (
    <div className="md:pt-32 pt-20 pb-8">
      <Card>
        <Hero sectionRef={sectionRef} />
        <ToolsDetails sectionRef={sectionRef} />
      </Card>
    </div>
  );
};

export default Home;
