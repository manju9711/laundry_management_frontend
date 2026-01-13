import React from "react";
import Banner from "../Home/Banner/Banner";
import About from "../Home/About/About";
import Card from "../Home/About/Card";
import Services from "../Home/Services/Services";
import HowItWork from "../Home/HowItWorks/HowItWorks";
import Prices from "../Home/Prices/Prices";
import Delivery from "../Home/Delivery/Delivery";

import ContactForm from "../Home/Contact/Contact";
const Main = () =>{
    return(
        <>
        <div className="pt-[84px]">
        <Banner/>
        <section id="about"><About/></section>
        <Card/>
        <section id="services"><Services/></section>
        <section id="prices"><Prices/></section>
        <HowItWork/>
        <Delivery/>
        <section id="contact"><ContactForm/></section>
        </div>
        </>
    )
}
export default Main;