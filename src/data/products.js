import img1 from "/src/assets/images/image1.png";
import img2 from "/src/assets/images/image2.png";
import img3 from "/src/assets/images/image3.png";
import img4 from "/src/assets/images/image4.png";
import img5 from "/src/assets/images/image5.png";
import img6 from "/src/assets/images/image6.png";
import img7 from "/src/assets/images/image7.png";
import img8 from "/src/assets/images/image8.png";
import img9 from "/src/assets/images/image9.png";
import img10 from "/src/assets/images/image10.png";
import img11 from "/src/assets/images/image11.png";
import img12 from "/src/assets/images/image12.png";
import img13 from "/src/assets/images/image13.png";

const products = [
  {
    id: 1,
    name: "Triple Wavelength Diode Laser",
    description: "The gold standard for hair reduction. Combines three wavelengths to target different hair depths and skin types effectively.",
    howItWorks: "This machine emits highly focused laser light that is absorbed by the melanin (pigment) in the hair follicle. The light energy converts to heat, which safely damages the follicle's growth center, preventing future hair growth without harming the surrounding skin. Triple-wavelength lasers combine different depths of penetration to treat varying hair depths and skin types effectively and quickly.",
    benefits: "A fast, efficient, and long-term solution for unwanted hair, suitable and safe for nearly all skin tones.",
    image: img1 
  },
  {
    id: 2,
    name: "Q-Switched Nd:YAG Laser",
    description: "Versatile laser for tattoo removal, pigmentation treatment, and carbon laser facials (Hollywood Peel).",
    howItWorks: "This laser produces powerful bursts of energy in billionths of a second. This rapid pulse shatters targeted pigments (melanin in skin spots or ink in tattoos) into tiny particles. Your body's immune system then naturally clears these particles away. It can also be used at a lower setting for gentle skin resurfacing and collagen stimulation.",
    benefits: "Excellent for breaking up dark spots, sun damage, and even professional tattoos, revealing clearer, more even skin.",
    image: img2
  },
  {
    id: 3,
    name: "IPL (Intense Pulsed Light) Machine",
    description: "Broad-spectrum light therapy for skin rejuvenation, acne treatment, and vascular lesion reduction.",
    howItWorks: "IPL isn't a laser; it uses a broad spectrum of light, like a flashbulb. Filters tailor the light to target specific colors in the skin—redness (blood vessels) or brown (pigmentation). This selective heating damages the target, which the body then naturally removes.",
    benefits: "A versatile \"photofacial\" that addresses multiple concerns simultaneously: reducing redness, fading sun damage, and giving an overall brighter complexion.",
    image: img3
  },
  {
    id: 4,
    name: "Fractional CO₂ Laser",
    description: "Powerful skin resurfacing technology for treating acne scars, stretch marks, and deep wrinkles.",
    howItWorks: "This advanced laser creates thousands of microscopic treatment zones in the skin, like aerating a lawn. It removes damaged outer layers and sends heat deep within the skin. This triggers a powerful natural healing response, replacing old, scarred tissue with fresh, healthy collagen and elastin.",
    benefits: "The gold standard for deep resurfacing. Significantly reduces acne scars, deep wrinkles, and rough texture for dramatic skin renewal.",
    image: img4
  },
  {
    id: 5,
    name: "RF Microneedling Machine",
    description: "Combines microneedling with radio frequency to stimulate collagen, treating scars and tightening skin.",
    howItWorks: "This device combines two powerful technologies. Tiny needles create micro-channels in the skin while simultaneously delivering Radio Frequency heat energy deep into the dermis. The heat stimulates a robust production of new collagen and elastin fibers, tightening the skin and smoothing texture from the inside out.",
    benefits: "A highly effective treatment for tightening sagging skin, minimizing scars, and improving overall firmness with minimal downtime.",
    image: img5
  },
  {
    id: 6,
    name: "HIFU Machine (4D/7D)",
    description: "High-Intensity Focused Ultrasound for non-surgical face lifting, skin tightening, and body contouring.",
    howItWorks: "HIFU bypasses the surface of the skin entirely. It uses focused ultrasound energy to reach the SMAS layer—the deep foundational layer of muscle and tissue that surgeons pull back during a facelift. The heat contracts this layer and stimulates intense collagen remodeling over several months.",
    benefits: "The ultimate non-surgical lift. Provides visible tightening and lifting of the face, neck, and brow area without any incisions or recovery time.",
    image: img6
  },
  {
    id: 7,
    name: "Cryolipolysis 360 (Fat Freezing)",
    description: "Advanced fat freezing technology for non-invasive body sculpting and permanent fat reduction.",
    howItWorks: "This technology precisely cools targeted fat cells to a temperature that triggers their natural death (apoptosis). Healthy surrounding tissues remain unharmed. The frozen fat cells are then naturally processed and eliminated by your body's lymphatic system over the following weeks.",
    benefits: "A non-surgical way to eliminate stubborn, localized fat pockets resistant to diet and exercise, such as love handles or belly fat.",
    image: img7
  },
  {
    id: 8,
    name: "Ultrasonic Cavitation & RF System",
    description: "Combines cavitation for fat breaking and RF for body skin tightening and cellulite reduction.",
    howItWorks: "This device uses low-frequency ultrasound waves to form microscopic bubbles within fat cells. These bubbles expand and collapse, creating pressure that emulsifies (liquefies) the fat cells. The liquefied fat is then naturally removed from the body via the lymphatic system.",
    benefits: "A pain-free, non-invasive way to break down fat and achieve temporary circumference reduction and smoother body contours.",
    image: img8
  },
  {
    id: 9,
    name: "Blue Light Therapy System",
    description: "Targeted LED therapy for active acne treatment and inflammation reduction.",
    howItWorks: "This machine uses a specific wavelength of blue LED light. The light penetrates the skin and activates naturally occurring chemicals within P. acnes bacteria (the main bacteria causing acne). This reaction effectively kills the bacteria and helps calm inflammation, reducing active breakouts.",
    benefits: "A gentle, non-invasive, and drug-free way to control active acne and prevent future flare-ups.",
    image: img9
  },
  {
    id: 10,
    name: "Low-Level Laser Therapy (LLLT)",
    description: "Cold laser technology for hair regrowth stimulation and scalp health improvement.",
    howItWorks: "Known as \"cold laser\" or \"photobiomodulation,\" this machine uses medical-grade red or near-infrared light (typically 630–670nm) that does not produce heat or damage the skin. The light energy is absorbed by weak hair follicle cells, boosting the production of ATP (cellular energy) and increasing blood flow to the scalp. This \"wakes up\" dormant follicles, prolongs the active growth phase (anagen), and helps wash away harmful waste products like DHT that cause thinning.",
    benefits: "A completely painless, non-invasive, and drug-free way to fight hair thinning. It strengthens existing hair, makes it thicker and fuller, and is often used as a \"maintenance\" therapy to keep the scalp healthy after other hair restoration treatments.",
    image: img10
  },
  {
    id: 11,
    name: "Vaginal HIFU / RF System",
    description: "Specialized non-invasive technology for intimate area tightening and rejuvenation.",
    howItWorks: "These specialized machines use either Radio Frequency (RF) or High-Intensity Focused Ultrasound (HIFU) adapted for delicate tissue. The machine delivers controlled thermal energy to the inner layers of the intimate area, causing immediate contraction of existing collagen fibers and triggering the production of fresh new collagen over several weeks. Modern 2025 systems feature 360-degree rotating heads for precise, even treatment.",
    benefits: "A discreet, non-surgical solution to improve comfort, natural lubrication, and tightness. It is highly popular for post-pregnancy recovery or addressing age-related changes, providing a boost in confidence with zero downtime.",
    image: img11
  },
  {
    id: 12,
    name: "Radio Frequency (RF) Skin Tightening",
    description: "Dedicated RF system for facial and body skin tightening, improving elasticity and firmness.",
    howItWorks: "This machine delivers controlled thermal energy deep into the skin's dermal layer. The heat safely damages existing collagen fibers, causing them to immediately contract (tightening effect), while also jump-starting the body's long-term collagen production process.",
    benefits: "A comfortable, warm treatment that provides immediate firmness and gradual improvement in skin texture and elasticity for both face and body areas.",
    image: img12
  },
  {
    id: 13,
    name: "Nd:YAG Laser Machine",
    description: "Highly effective laser for targeting vascular lesions and spider veins.",
    howItWorks: "Similar to the Q-Switched version but often used for different applications. This laser uses a specific wavelength (1064nm) that is highly effective at targeting hemoglobin (red pigment in blood). The heat seals off unwanted spider veins and vascular lesions, which then fade away.",
    benefits: "Safely and effectively treats visible veins, broken capillaries, and generalized facial redness.",
    image: img13
  }
];

export default products;