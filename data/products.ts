export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Cena w groszach
  image: string; // Ścieżka do obrazu
}

export const products = [
    {
      id: "p1",
      name: "24K Supreme Body Volumizing Mousse 5.5 oz",
      description: "A volumizing mousse that adds body and lift to your hair.",
      price: 3200, // $32.00
      image: "/test1.jpg",
    },
    {
      id: "p2",
      name: "24K Superiority Complex Texturizing Paste 1.7 oz",
      description: "A texturizing paste for defining and shaping your hairstyle.",
      price: 4000, // $40.00
      image: "/test1.jpg",
    },
    {
      id: "p3",
      name: "24K Vanity Hair Shaping Balm 1.7 oz",
      description: "A shaping balm that provides flexible hold and shine.",
      price: 3200, // $32.00
      image: "/test1.jpg",
    },
    {
      id: "p4",
      name: "24K Root Envy Ultimate Root Boost 4.2 oz",
      description: "A root-boosting spray for instant lift and volume.",
      price: 3200, // $32.00
      image: "/test1.jpg",
    },
    {
      id: "p5",
      name: "24K Liquid Assets Daily Conditioner Remedy 6.4 oz",
      description: "A daily conditioner that nourishes and hydrates your hair.",
      price: 3200, // $32.00
      image: "/test1.jpg",
    },
    {
      id: "p6",
      name: "24K Supreme Stylist Voluminous Dry Shampoo 10.4 oz",
      description: "A dry shampoo that refreshes hair and adds volume.",
      price: 3200, // $32.00
      image: "/test1.jpg",
    },
    {
      id: "p7",
      name: "24K Get Gorgeous Shampoo 8.5 oz",
      description: "A luxurious shampoo that cleanses and revitalizes hair.",
      price: 3200, // $32.00
      image: "/test1.jpg",
    },
    {
      id: "p8",
      name: "24K Supreme Stylist Voluminous Dry Shampoo Mini 1.5 oz",
      description: "A travel-sized dry shampoo for on-the-go freshness.",
      price: 1200, // $12.00
      image: "/test1.jpg",
    },
    {
      id: "p9",
      name: "Medium Round Brush 3.2 oz",
      description: "A medium-sized round brush for styling and volume.",
      price: 2500, // $25.00
      image: "/test1.jpg",
    },
    {
      id: "p10",
      name: "Large Round Brush 4.0 oz",
      description: "A large round brush ideal for creating big curls and waves.",
      price: 2800, // $28.00
      image: "/test1.jpg",
    },
    {
      id: "p11",
      name: "Teasing Brush 0.8 oz",
      description: "A teasing brush for adding volume and texture.",
      price: 2500, // $25.00
      image: "/test1.jpg",
    },
    {
      id: "p12",
      name: "24K Golden Touch Nourishing Dry Hair Oil 4.2 oz",
      description: "A nourishing dry oil that adds shine and smoothness.",
      price: 4000, // $40.00
      image: "/test1.jpg",
    },
    {
      id: "p13",
      name: "24K Get Gorgeous Conditioner 8.5 oz",
      description: "A conditioner that hydrates and detangles hair.",
      price: 3200, // $32.00
      image: "/test1.jpg",
    },
  ];
  