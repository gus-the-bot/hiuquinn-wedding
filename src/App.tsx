import AudioToggle from "./components/AudioToggle";
import Cover from "./components/sections/Cover";
import Calendar from "./components/sections/Calendar";
import Person from "./components/sections/Person";
import LoveStory from "./components/sections/LoveStory";
import InviteHero from "./components/sections/InviteHero";
import InviteDetails from "./components/sections/InviteDetails";
import Timeline from "./components/sections/Timeline";
import Rsvp from "./components/sections/Rsvp";
import LoveBox from "./components/sections/LoveBox";
import Countdown from "./components/sections/Countdown";
import siteConfig from "./config/site.config";

export default function App() {
  const { couple, footer } = siteConfig;
  return (
    <div className="app-shell">
      <main className="phone-frame" aria-label={siteConfig.title}>
        <AudioToggle src={siteConfig.audio.src} title={siteConfig.audio.title} />
        <Cover />
        <Calendar />
        <Person
          label="Cô dâu"
          name={couple.bride.fullName}
          birthday={couple.bride.birthday}
          photo={couple.bride.photo}
          align="left"
        />
        <Person
          label="Chú rể"
          name={couple.groom.fullName}
          birthday={couple.groom.birthday}
          photo={couple.groom.photo}
          align="right"
        />
        <LoveStory />
        <InviteHero />
        <InviteDetails />
        <Timeline />
        <Rsvp />
        <LoveBox />
        <Countdown />
        <footer className="footer">{footer.signature}</footer>
      </main>
      <div className="made-with">Made with love</div>
    </div>
  );
}
