import React from "react";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import CustomerReviews from "./sections/CustomerReviews";
import SpecialOffer from "./sections/SpecialOffer";
import Services from "./sections/Services";
import SuperQuality from "./sections/SuperQuality";
import PopularProducts from "./sections/PopularProducts";
import Hero from "./sections/Hero";
import Nav from "./sections/components/Nav";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
};

export default App;
