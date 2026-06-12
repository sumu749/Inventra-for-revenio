"use client";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import PopularProducts from "@/components/home/PopularProducts";
import Categories from "@/components/home/Categories";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function HomePage() {
    return (
        <main className="bg-slate-950 text-white">
            <Hero />
            <Features />
            <PopularProducts />
            <Categories />
            <Testimonials />
            <CTA />

            {/* final spacing so footer boundary is clear */}
            <div className="py-12" />
        </main>
    );
}
