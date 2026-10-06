import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Prototype from "./components/Prototype";
import BuiltWithRiders from "./components/BuiltWithRiders";
import FoundingRiders from "./components/FoundingRiders";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Prototype />
      <BuiltWithRiders />
      <FoundingRiders />
      <Footer />
    </main>
  );
}