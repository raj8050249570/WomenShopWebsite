import React from 'react';
import Hero from '../components/home/Hero';
import BenefitsBar from '../components/home/BenefitsBar';
import FeaturedIn from '../components/home/FeaturedIn';
import CategorySection from '../components/home/CategorySection';
import NewArrivals from '../components/home/NewArrivals';
import BrandStory from '../components/home/BrandStory';
import BrandValues from '../components/home/BrandValues';
import ReviewsAndStats from '../components/home/ReviewsAndStats';
import OfferBanner from '../components/home/OfferBanner';
import Newsletter from '../components/home/Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BenefitsBar />
      <FeaturedIn />
      <CategorySection />
      <NewArrivals />
      <BrandStory />
      <BrandValues />
      <ReviewsAndStats />
      <OfferBanner />
      <Newsletter />
    </main>
  );
}
