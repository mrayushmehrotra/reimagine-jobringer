import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JobCard from "./components/JobCard";
import FeaturedEmployee from "./components/FeaturedEmployers";
import MobileDownload from "./components/MobileDownload";
import { CountryCard } from "./components/AdditionalComponents";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <JobCard />
      <FeaturedEmployee />
      
      <MobileDownload />
      <CountryCard />
    </>
  );
}

export default App;
