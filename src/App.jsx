import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Footer from "./components/Footer/Footer";
import { popularHotels, stayHotels, weekendHotels } from "./data/data";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="pt-20 pb-10 flex flex-col gap-10">
        <ContentWrapper title="Popular homes in Bengaluru" data={popularHotels}/>
        <ContentWrapper title="Available in Kochi this weekend" data={weekendHotels}/>
        <ContentWrapper title="Stay in Pune" data={stayHotels}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
