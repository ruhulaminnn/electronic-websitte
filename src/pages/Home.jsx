import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import WhyChoose from "../components/WhyChoose";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <WhyChoose />
      <ContactSection />
    </>
  );
};

export default Home;