import Ecosystem from "./components/ecosystem";
import GreenMarquee from "./components/green-marquee";
import Hero from "./components/hero";
import Latest from "./components/latest";
import Numerous from "./components/numerous";
import PlayerMarquees from "./components/player-marquees";
import Start from "./components/start";
import Win from "./components/win";
import WordsOnStreet from "./components/words-on-street";

export default function Home() {
  return (
   <div className="flex flex-col">
      <Hero />
      <Win />
      <GreenMarquee />
      <Numerous />
      <PlayerMarquees />
      <WordsOnStreet />
      <Ecosystem />
      <Start />
      <Latest />
   </div>
  );
}
