export interface Service {
  id: string;
  name: string;
  description: string;
  calendlyLink: string;
  image: string;
  price: string;
}

export const services: Service[] = [
  {
    id: "s1",
    name: "Precision Haircut",
    description: "A meticulously tailored haircut that complements your features and personal style. Perfection in every detail.",
    calendlyLink: "https://calendly.com/bbwebdevelop/hair-treatment",
    image: "/s1.png",
    price: "$500",

  },
  {
    id: "s2",
    name: "Signature Hair Coloring",
    description: "Exclusive hair coloring using the latest techniques and trends. Perfect transitions and unique shades guaranteed.",
    calendlyLink: "https://calendly.com/bbwebdevelop/hair-coloring",
    image: "/s2.png",
    price: "$800",
   
  },
  {
    id: "s3",
    name: "Luxury Hair Treatment",
    description: "A premium nourishing treatment using the finest products in the industry. Unparalleled shine and restoration.",
    calendlyLink: "https://calendly.com/bbwebdevelop/haircut",
    image: "/s3.jpg",
    price: "$600",
  },
  {
    id: "s4",
    name: "Bespoke Hair Styling",
    description: "Custom hair styling designed to elevate your look for everyday elegance or special occasions.",
    calendlyLink: "https://calendly.com/bbwebdevelop/bespoke-hair-styling",
    image: "/s4.png",
    price: "$700",
  },
  {
    id: "s5",
    name: "Creative Highlights",
    description: "Beautifully placed highlights for dimension and depth, customized to enhance your natural beauty.",
    calendlyLink: "https://calendly.com/bbwebdevelop/creative-highlights",
    image: "/s5.png",
    price: "$750",
  },
  {
    id: "s6",
    name: "Scalp Rejuvenation Therapy",
    description: "A revitalizing scalp treatment to promote healthy hair growth and overall scalp health.",
    calendlyLink: "https://calendly.com/bbwebdevelop/scalp-rejuvenation-therapy",
    image: "/s6.png",
    price: "$650",
  },
  {
    id: "s7",
    name: "Hair Extensions",
    description: "Premium hair extensions for added volume and length, seamlessly blended for a natural look.",
    calendlyLink: "https://calendly.com/bbwebdevelop/hair-extensions",
    image: "/s7.png",
    price: "$1,200",
  },
  {
    id: "s8",
    name: "Hair Gloss Treatment",
    description: "A luxurious gloss treatment that enhances shine and vibrancy, leaving your hair silky smooth.",
    calendlyLink: "https://calendly.com/bbwebdevelop/hair-gloss-treatment",
    image: "/s8.jpg",
    price: "$550",
  },
  {
    id: "s9",
    name: "Bridal Hair Styling",
    description: "Exquisite bridal hair styling to make your special day truly unforgettable. Designed for perfection.",
    calendlyLink: "https://calendly.com/bbwebdevelop/bridal-hair-styling",
    image: "/s9.jpg",
    price: "$1,500",
  },
];
