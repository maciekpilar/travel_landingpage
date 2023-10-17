import {
  CampSection,
  Features,
  GetAppSection,
  Guide,
  Herosection,
} from "./components";

export default function Home() {
  return (
    <>
      <Herosection />
      <CampSection />
      <Guide />
      <Features />
      <GetAppSection />
    </>
  );
}
