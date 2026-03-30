"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Treasures",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="The Last Chapter"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "gradient-bars"}}
      logoText="Discover One-of-a-Kind Treasures"
      description="Explore our curated massive collection of hard-to-find antiques, unique furniture, and tons of neat items."
      buttons={[
        {
          text: "Shop Treasures",          href: "#products"},
      ]}
      layoutOrder="default"
      imageSrc="http://img.b2bpic.net/free-photo/side-view-woman-antique-store_23-2149640685.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Welcome to The Last Chapter"
      description="We are a family-owned boutique dedicated to the art of curating history. Our owners are always on-site, eager to help you find that perfect piece to complete your home."
      bulletPoints={[
        {
          title: "Diverse Collection",          description: "Massive range of hard-to-find antiques."},
        {
          title: "Curated Pieces",          description: "Unique furniture and high-end finds."},
        {
          title: "Family Owned",          description: "Personal service from our family to yours."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-senior-couple-book-store_23-2148399478.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Rare Antiques",          price: "Contact for pricing",          imageSrc: "http://img.b2bpic.net/free-photo/antique-compass-close-up_93675-130025.jpg"},
        {
          id: "p2",          name: "Unique Furniture",          price: "Contact for pricing",          imageSrc: "http://img.b2bpic.net/free-photo/interior-design-with-vintage-bathtub_23-2148291618.jpg"},
        {
          id: "p3",          name: "Fun Finds",          price: "From $25",          imageSrc: "http://img.b2bpic.net/free-photo/scene-with-miscellaneous-items-being-sold-yard-sale-bargains_23-2151216804.jpg"},
      ]}
      title="Our Curated Showroom"
      description="Discover treasures across our diverse categories."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      animationType="slide-up"
      testimonials={[
        {
          id: "t1",          name: "Lilah M.",          role: "Collector",          company: "Antique Enthusiast",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-male-owner-standing-his-shop_23-2148175671.jpg?_wi=1"},
        {
          id: "t2",          name: "Kaylin C.",          role: "Homeowner",          company: "Interior Design Fan",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-antique-store_23-2149640741.jpg"},
        {
          id: "t3",          name: "Dana C.",          role: "Collector",          company: "Treasure Hunter",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-couple-toasting-with-wine-before-family-lunch-kitchen-focus-is-man_637285-5862.jpg"},
        {
          id: "t4",          name: "Malachi B.",          role: "Visitor",          company: "Antique Seeker",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-female-window-shopping_23-2147968448.jpg"},
        {
          id: "t5",          name: "Elena R.",          role: "Designer",          company: "Vintage Stylist",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-male-owner-standing-his-shop_23-2148175671.jpg?_wi=2"},
      ]}
      title="Hear From Our Collectors"
      description="Discover why our community keeps coming back for more."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Visit Us Today"
      title="Looking for Something Specific?"
      description="Our owners are on-site daily to help you navigate our collection and find exactly what you need."
      buttons={[
        {
          text: "Get Directions",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="The Last Chapter"
      copyrightText="© 2025 The Last Chapter Business Solutions"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
