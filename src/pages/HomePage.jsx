// src/pages/HomePage.jsx
import useContentful from '../useContentful';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import AboutUsSection from '../components/AboutUsSection';
import AttorneysSection from '../components/AttorneysSection';
import WhyUsSection from '../components/WhyUsSection';
import AwardSection from '../components/Awards';


function HomePage() {
  const { data, loading, error } = useContentful([
    { content_type: 'heroSection' }
  ]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const heroData = data.heroSection?.[0]?.fields || {};

  return (
    <div>
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        backgroundImage={heroData.backgroundImage?.fields.file.url}
        buttonText={heroData.buttonText}
        buttonLink={heroData.buttonLink}
      />
      <AboutUsSection />
      <AttorneysSection />
      <WhyUsSection />
      <AwardSection />
      <CTASection />
    </div>
  );
}

export default HomePage;
