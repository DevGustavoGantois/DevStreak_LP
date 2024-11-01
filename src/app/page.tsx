'use client'
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Featured";
import { Topics } from "@/components/Topics";
import { Services } from "@/components/Services";
import { CTA_App } from "@/components/CTA_App";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  },[]);

  return (
    <main className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Featured />
      <Topics />
      <Services />
      <CTA_App />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}