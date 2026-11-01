import type { Metadata } from "next";
import { Catalogue } from "@/components/catalogue";
export const metadata: Metadata = { title: "All Books" };
export default function BooksPage() { return <div className="container"><header className="page-heading"><p className="eyebrow">The collection</p><h1>Explore the collection.</h1><p className="muted">Thousands of worlds. One place to find them.</p></header><Catalogue /></div>; }
