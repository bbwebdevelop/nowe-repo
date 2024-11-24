import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <Header />
      <div className="py-12">
        <h4 className="text-5xl text-center text-black/70 tracking-tight mb-8">
          WHERE GLAMOUR BEGINS
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto py-16 gap-8">
          <div>
            <h2 className="text-4xl tracking-tighter py-10 mb-4 text-center lg:text-start">
              &ldquo;Her scissors have touched the heads of Hollywood&rsquo;s
              elite.&rdquo;
            </h2>
            <p className="px-4 mb-6 lg:px-0 lg:mb-7 text-black/70 text-right">
              &ldquo;...From the red carpets of Los Angeles to the private
              salons of Manhattan, Sally Hershberger&rsquo;s transformative
              touch has defined the looks of the world&rsquo;s most iconic
              figures. Her ability to blend effortless sophistication with
              cutting-edge trends has made her the hairstylist of choice for
              A-listers across the globe...&rdquo;
            </p>
            <p className="text-right text-sm text-black/70">
              Vanity Fair, May 2020
            </p>
          </div>

          <div>
            <Image
              src="/vanityfair.jpg"
              width={500}
              height={600}
              alt="hero"
              className="grayscale"
            />
          </div>
        </div>
        <div>
          <h4 className="text-5xl text-center text-black/70 tracking-tight mb-8 py-12">
            ICONS TRUST SALLY
          </h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto py-12 gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src={"/about7.jpg"}
              width={800}
              height={600}
              alt="hero"
              className="grayscale"
            />
            <Image
              src={"/about10.jpg"}
              width={800}
              height={600}
              alt="hero"
              className="grayscale"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src={"/about8.jpg"}
              width={700}
              height={600}
              alt="hero"
              className="grayscale"
            />
            <Image
              src={"/about9.jpg"}
              width={700}
              height={600}
              alt="hero"
              className="grayscale"
            />
          </div>
        </div>
        <div className="">
          <div className="relative w-full h-[800px]">
            <Image
              src="/about11.jpg"
              alt="hero"
              className="grayscale"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto py-12 gap-2">
          <div>
            <h4 className="text-4xl text-left text-black/70 tracking-tighter mb-8 py-12 max-w-[80%]">
              THE LIST OF FAMOUS FACES COULD FILL ALL OF HOLLYWOOD
            </h4>
            <Image
              src="/about12.jpg"
              width={700}
              height={600}
              alt="hero"
              className="grayscale"
            />
          </div>
          <div>
            <Image
              src="/about13.jpg"
              width={900}
              height={1200}
              alt="hero"
              className="grayscale"
            />
          </div>
        </div>
        <h4 className="text-5xl text-right text-black/70 tracking-tighter mb-8 py-12">
          BEHIND THE SCENES
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto py-12 gap-2">
          <div className="flex flex-col gap-4">
            <Image
              src="/about1.jpg"
              width={700}
              height={600}
              alt="hero"
              className="grayscale"
            />
            <h4 className="text-3xl text-left text-black/70 tracking-tighter mb-4 py-12">
              MOTHER, WIFE, DOG LOVER
            </h4>
            <p className="px-2 mb-6 lg:px-0 lg:mb-7 text-black/70 text-left">
              Beyond the glitz and glamour of her career, she cherishes life’s
              simpler joys. As a dedicated mother, she finds balance between
              work and family, while as a wife, she nurtures a love that grounds
              her. Her heart also belongs to her furry companions, and she’s a
              passionate advocate for animal welfare, spending her free time
              supporting shelters and promoting adoption. It’s this blend of
              personal and professional grace that truly defines her.
            </p>
          </div>
          <div>
            <Image
              src="/about2.jpg"
              width={700}
              height={600}
              alt="hero"
              className="grayscale"
            />
          </div>
        </div>
        <div>
          <Image
            src="/about3.jpg"
            width={1200}
            height={600}
            alt="hero"
            className="grayscale"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
