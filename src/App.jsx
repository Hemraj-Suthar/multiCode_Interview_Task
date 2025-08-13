import React from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArrvial from "./components/NewArrival";
import TopSelling from "./components/TopSelling";
import ReviewSection from "./components/ReviewSection";

function App() {
    return (
        <>
            <Header />
            <HeroBanner />
            <NewArrvial/>
            <TopSelling/>
            <ReviewSection/>
            <Footer />
        </>
    );
}

export default App;
