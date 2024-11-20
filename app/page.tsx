
import { Header } from "./components/Header";
import {Hero} from "./components/Home/Hero";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
        <Header />
        <Hero />
       
    </div>
  );
}
