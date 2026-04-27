import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Theory from "@/components/Theory";
import Featured from "@/components/Featured";
import Stats from "@/components/Stats";
import Experiment from "@/components/Experiment";
import Promo from "@/components/Promo";
import Conclusion from "@/components/Conclusion";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <Theory />
      <Featured />
      <Stats />
      <Experiment />
      <Promo />
      <Conclusion />
      <Footer />
    </main>
  );
};

export default Index;
