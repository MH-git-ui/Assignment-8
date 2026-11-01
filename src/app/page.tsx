import { Hero } from "@/components/hero";
import { Catalogue } from "@/components/catalogue";
import { HomeSections } from "@/components/home-sections";
import "./home.css";
export default function Home() {
  return <div className="container"><Hero /><section className="section"><Catalogue latest /></section><HomeSections /></div>;
}
