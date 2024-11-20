export interface Service {
    id: string;
    name: string;
    calendlyLink: string;
  }
  
  export const services: Service[] = [
    {
      id: "s1",
      name: "Haircut",
      calendlyLink: "https://calendly.com/bbwebdevelop/haircut",
    },
    {
      id: "s2",
      name: "Hair Coloring",
      calendlyLink: "https://calendly.com/bbwebdevelop/hair-coloring",
    },
    {
      id: "s3",
      name: "Hair Treatment",
      calendlyLink: "https://calendly.com/bbwebdevelop/hair-treatment",
    },
  ];
  