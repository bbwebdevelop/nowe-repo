export interface Product {
  id: string;
  name: string;
  shortDescription: string; 
  fullDescription: string; 
  price: number; 
  images: string[];
  size: string;
}

export const products: Product[] = [
    {
      id: "p1",
      name: "24K Supreme Body Volumizing Mousse",
      size: "5.5 oz",
      shortDescription: "A mousse that adds body and lift to your hair.",
      fullDescription:"Sally Hershberger 24K Supreme Body Volumizing Mousse is Sally’s “must-have” foundation for sexy, full body style. Luxurious hydrating foam melts into hair providing the optimal level of grip and volume without stickiness. Silk amino acids penetrate the hair to help strengthen, nourish and prevent damage without added weight or residue. Hi-tech co-polymer and natural plant-source proteins promote flexible hold with lasting shape memory.",
      price: 6500, 
      images: ["/p11.jpg", "/p12.jpg", "/p13.jpg"],
    },
    {
      id: "p2",
      name: "24K Superiority Texturizing Paste",
      size: "1.7 oz",
      shortDescription: "An light paste for defining and shaping your hairstyle.",
      fullDescription: "Sally Hershberger 24K Superiority Complex Texturizing Paste is Sally’s secret weapon for finishing styles to perfection. It’s velvety, plush texture is infused with golden pearl and mica. This cushiony paste delicately envelops hair to boost body and brilliance. A unique combination of hi-tech copolymers and hydrating natural extracts smooth, shape and define lasting style. Unlike any paste you’ve ever seen, it leaves hair soft, polished and totally touchable.",
      price: 8000,
      images: ["/p21.jpg", "/p22.jpg", "/p23.jpg"],
    },
    {
      id: "p3",
      name: "24K Vanity Hair Shaping Balm",
      size: "1.7 oz",
      shortDescription: "A shaping balm that provides flexible hold and shine.",
      fullDescription:"Sally Hershberger 24K Vanity Hair Shaping Balm is the premiere product for sleek styling control. This soft, supple balm delivers the shaping and shine benefits of a traditional wax with the flexibility and ease of a pomade. For the first time, shape and smooth without waxy residue or build-up. Fortified with soy protein and natural plant extracts, it’s ideal for defining and finishing style with smooth texture, dimension and shine.",
      price: 4800,
      images: ["/p31.jpg", "/p32.jpg", "/p33.jpg"],
    },
    {
      id: "p4",
      name: "24K Root Envy Ultimate Root Boost ",
      size: "4.2 oz",
      shortDescription: "A root-boosting spray for instant lift and volume.",
      fullDescription:"Weightless spray builds lasting, targeted lift at the root. Infused with exclusive 24K Pure Gold Elixir and sweet almond protein, penetrates instantly to promote flexibility, strength and movement. Doubles as a body builder for all-over volume and fullness. Flexible co-polymers are heat-activated for lasting style memory with touchable, satin finish.",
      price: 5100,
      images: ["/p41.jpg", "/p42.jpg", "/p43.jpg"],
    },
    {
      id: "p5",
      name: "24K Liquid  Daily Conditioner Remedy",
      size: " 6.4 oz",
      shortDescription: "A  conditioner that nourishes and hydrates your hair.",
      fullDescription: "Sally Hershberger 24K Liquid Assets Daily Conditioning Remedy instantly softens, smoothes, revitalizes and refreshes dull, dry, damaged or color-treated hair. Weightless leave-in conditioning spray is fortified with Keratin Protein to help strengthen hair, seal split ends and repair cuticle damage. Infused with precious silk and cashmere extracts, it tames frizz and enhances shine while protecting hair from heat, UV and daily stresses.",
      price: 4100,
      images: ["/p41.jpg", "/p42.jpg", "/p43.jpg"],
    },
    {
      id: "p6",
      name: "24K Supreme Stylist  Dry Shampoo",
      size: " 10.4 oz",
      shortDescription: "A dry shampoo that refreshes hair and adds volume.",
      fullDescription: "Sally Hershberger 24K Supreme Stylist Voluminous Dry Shampoo is the gold standard of dry styling. Invisible spray builds instant body and invigorates lifeless locks without powdery residue. Flexible co-polymers provide lasting, brushable hold that is soft and touchable. Hydrolyzed wheat protein and caffeine energize, refresh and prolong style. Keratin and glycerin smooth and hydrate. Hair is soft, sexy and dramatically voluminous",
      price: 7500,
      images: ["/p51.jpg", "/p52.jpg", "/p53.jpg"],
    },
    {
      id: "p7",
      name: "24K Get Gorgeous Shampoo",
      size: " 8.5 oz",
      shortDescription: "A  shampoo that cleanses and revitalizes hair.",
      fullDescription: "Sally Hershberger 24K Get Gorgeous ProStyle Shampoo gently cleanses, nourishes and fortifies hair with the highest level of protective care for hair and its color. Infused with 24K Pure Gold Elixir, natural plant extracts and amino acids, this rich lather shampoo helps restore, revive and rejuvenate hair with the optimal level of hydration without added weight or residue. Proprietary UV protection complex helps protect hair from color fade, leaving tresses soft, supple and famously gorgeous.",
      price: 6800,
      images: ["/p61.jpg", "/p62.jpg", "/p63.jpg"],
    },
    {
      id: "p8",
      name: "24K Supreme Dry Shampoo Mini",
      size: " 1.5 oz",
      shortDescription: "A travel-sized dry shampoo for on-the-go freshness.",
      fullDescription:"Sally Hershberger 24K Supreme Stylist Voluminous Dry Shampoo is the gold standard of dry styling. Invisible spray builds instant body and invigorates lifeless locks without powdery residue. Flexible co-polymers provide lasting, brushable hold that is soft and touchable. Hydrolyzed wheat protein and caffeine energize, refresh and prolong style. Keratin and glycerin smooth and hydrate. Hair is soft, sexy and dramatically voluminous.",
      price: 1600,
      images: ["/p71.jpg", "/p72.jpg", "/p73.jpg"],
    },
    {
      id: "p9",
      name: "Medium Round Brush",
      size: "3.2 oz",
      shortDescription: "A medium-sized round brush for styling and volume.",
      fullDescription:"This brush will help your hair by gently fluffing it up and help you to maneuver it into which ever position you would like it to stay. It is the perfect tool for self grooming and after trying it, you will not go back to using just any old brush. Dry Styling Volume Body great hair grip for a smooth, voluminous finish elevate shine and brilliance bristles create volume and texture good for all hair types",
      price: 2500, 
      images: ["/p81.jpg"],
    },
    
  ];
  