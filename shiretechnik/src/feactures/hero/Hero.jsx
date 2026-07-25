import Container from "../../shared/Container";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      <HeroBackground />
      <Container className="relative z-10">
        <div className="grid items-center gap-12 py-12 lg:grid-cols-2 lg:gap-8">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
};

export default Hero;