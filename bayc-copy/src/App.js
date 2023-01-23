import Header from "./components/Header/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Mintbanner from "./components/Mintbanner";
import Specs from "./components/Specs";
import Benefits from "./components/Benefits";
import Bathroom from "./components/Bathroom";
import Roadmap from "./components/Roadmap";
import Tools from "./components/Tools";
import Team from "./components/Team";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      {/* header */}
      <Header />
      {/* intro-picture/video */}
      <Intro />
      {/* about */}
      <About />
      {/* mint banner w/ button */}
      <Mintbanner />
      {/* specs */}
      <Specs />
      {/* benefits */}
      <Benefits />
      {/* bathroom */}
      <Bathroom />
      {/* roadmap */}
      <Roadmap />
      {/* community tools */}
      <Tools />
      {/* team */}
      <Team />
      {/* footer */}
      <Footer />
    </>
  );
}
