import { Hero } from "@/components/hero";
import { Catalogue } from "@/components/catalogue";
export default function Home() {
  return <div className="container"><Hero /><section className="section"><Catalogue latest /></section></div>;
}
