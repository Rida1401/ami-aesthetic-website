import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import {
  Zap,
  Target,
  Sparkles,
  Snowflake,
  ArrowUpCircle,
  ShieldCheck,
  Droplet,
  Layers,
  UserCheck
} from "lucide-react";

const Treatments = () => {
  useEffect(() => {
    document.title = "Treatments | Ami Aesthetic";

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Discover advanced aesthetic treatments at Ami Aesthetic including laser hair reduction, skin rejuvenation, body contouring, acne care, and hair restoration.";

    let metaKeywords = document.querySelector("meta[name='keywords']");
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content =
      "aesthetic treatments, laser hair reduction, skin rejuvenation, acne treatment, body contouring, hair PRP";
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen relative overflow-hidden">
      {/* Organic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* INTRO */}
        <RevealOnScroll>
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Treatments We Offer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At AMI Aesthetic, we provide advanced, non-invasive and minimally invasive
            aesthetic treatments designed to enhance your natural beauty using
            doctor-recommended and FDA-approved technologies.
          </p>
        </header>
        </RevealOnScroll>

        {/* SKIN & FACE */}
        <section className="mb-20">
          <RevealOnScroll delay={200}>
            <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
              Skin & Face Treatments
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RevealOnScroll className="md:col-span-2 lg:col-span-2" delay={300}>
              <TreatmentCard
              icon={Droplet}
              title="HydraFacial"
              benefits={[
                "Deep cleansing & exfoliation",
                "Intense hydration",
                "Reduces dullness & uneven tone",
                "Instant glow with no downtime"
              ]}
              bestFor="All skin types, dull skin, dehydration, mild acne, pigmentation"
              gradient="from-blue-50 to-white"
            />
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 lg:col-span-1" delay={400}>
              <TreatmentCard
              icon={Layers}
              title="Chemical Peels"
              benefits={[
                "Improves pigmentation",
                "Reduces acne & acne marks",
                "Smoothens skin texture",
                "Enhances overall complexion"
              ]}
              bestFor="Acne, pigmentation, fine lines"
              gradient="from-purple-50 to-white"
            />
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-1 lg:col-span-1" delay={500}>
              <TreatmentCard
              icon={ShieldCheck}
              title="Acne & Acne Scar Treatment"
              benefits={[
                "Reduces active breakouts",
                "Minimizes acne scars",
                "Controls oil production",
                "Improves skin clarity"
              ]}
              bestFor="Active acne, scars, oily skin"
              gradient="from-green-50 to-white"
            />
            </RevealOnScroll>

            <RevealOnScroll className="md:col-span-2 lg:col-span-2" delay={600}>
              <TreatmentCard
              icon={Sparkles}
              title="Anti-Aging Treatments"
              benefits={[
                "Reduces fine lines & wrinkles",
                "Improves skin elasticity",
                "Boosts collagen production",
                "Firms & tightens skin"
              ]}
              bestFor="Aging skin, fine lines, loss of firmness"
              gradient="from-pink-50 to-white"
            />
            </RevealOnScroll>
          </div>
        </section>

        {/* LASER */}
        <section className="mb-20">
          <RevealOnScroll delay={200}>
            <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
              Laser Treatments
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            <RevealOnScroll delay={300}>
              <TreatmentCard
              icon={Zap}
              title="Laser Hair Reduction"
              benefits={[
                "Permanent hair reduction",
                "Safe & effective",
                "Minimal discomfort",
                "Suitable for multiple skin types"
              ]}
              bestFor="Face, underarms, arms, legs, bikini, back, full body"
              gradient="from-yellow-50 to-white"
            />
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <TreatmentCard
              icon={Target}
              title="Laser Skin Rejuvenation"
              benefits={[
                "Reduces pigmentation",
                "Improves skin texture",
                "Boosts collagen",
                "Gives youthful glow"
              ]}
              gradient="from-orange-50 to-white"
            />
            </RevealOnScroll>
          </div>
        </section>

        {/* BODY */}
        <section className="mb-20">
          <RevealOnScroll delay={200}>
            <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
              Body Contouring & Skin Tightening
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            <RevealOnScroll delay={300}>
              <TreatmentCard
              icon={Snowflake}
              title="Body Contouring"
              benefits={[
                "Reduces stubborn fat",
                "Enhances body shape",
                "Improves skin firmness",
                "No surgery or downtime"
              ]}
              bestFor="Abdomen, thighs, arms, waist"
              gradient="from-cyan-50 to-white"
            />
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <TreatmentCard
              icon={ArrowUpCircle}
              title="Skin Tightening"
              benefits={[
                "Firms skin",
                "Improves elasticity",
                "Non-surgical lifting effect"
              ]}
              gradient="from-teal-50 to-white"
            />
            </RevealOnScroll>
          </div>
        </section>

        {/* HAIR */}
        <section className="mb-20">
          <RevealOnScroll delay={200}>
            <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
              Hair Treatments
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            <RevealOnScroll delay={300}>
              <TreatmentCard
              icon={Sparkles}
              title="Hair Fall Control Treatment"
              benefits={[
                "Reduces hair fall",
                "Improves hair thickness",
                "Strengthens follicles"
              ]}
              gradient="from-indigo-50 to-white"
            />
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <TreatmentCard
              icon={Droplet}
              title="PRP for Hair"
              benefits={[
                "Promotes natural hair growth",
                "Improves hair density",
                "Safe & effective"
              ]}
              gradient="from-violet-50 to-white"
            />
            </RevealOnScroll>
          </div>
        </section>

        {/* CONSULTATION */}
        <RevealOnScroll delay={200}>
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Doctor Consultation & Personalized Plans
          </h2>

          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-10 shadow-lg">
            <div className="flex items-start gap-4">
              <UserCheck className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Consultation</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Skin & hair analysis</li>
                  <li>Customized treatment plans</li>
                  <li>Honest guidance</li>
                  <li>Safe protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll delay={300}>
        <div className="text-center bg-gray-900 text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Book Your Consultation Today
          </h2>
          <p className="text-gray-300 mb-8">
            Take the first step toward confident, radiant skin.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

const TreatmentCard = ({ icon: Icon, title, benefits, bestFor, className = "", gradient = "from-white to-gray-50" }) => (
  <div className={`h-full border border-white/60 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${gradient} backdrop-blur-sm flex flex-col ${className}`}>
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <ul className="space-y-3 mb-6 flex-grow">
      {benefits.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-700">
          <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
          <span className="text-lg leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    {bestFor && (
      <div className="mt-auto pt-4 border-t border-black/5">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Best For</p>
        <p className="text-gray-700 font-medium">{bestFor}</p>
      </div>
    )}
  </div>
);

export default Treatments;