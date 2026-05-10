import { createFileRoute } from "@tanstack/react-router";
import { Heart, Search, MapPin, User, ShoppingBag, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";
import b1 from "@/assets/bracelet-1.jpg";
import b2 from "@/assets/bracelet-2.jpg";
import b3 from "@/assets/bracelet-3.jpg";
import b4 from "@/assets/bracelet-4.jpg";
import b5 from "@/assets/bracelet-5.jpg";
import b6 from "@/assets/bracelet-6.jpg";
import b7 from "@/assets/bracelet-7.jpg";
import b8 from "@/assets/bracelet-8.jpg";

export const Route = createFileRoute("/")({
  component: PulserasPage,
});

const navItems = [
  "Novedades & Destacados",
  "Comprar por",
  "Charms",
  "Pulseras",
  "Anillos",
  "Pendientes",
  "Collares",
  "Joyas Personalizadas",
  "Ideas de Regalo",
  "Colecciones",
];

const categories = [
  { label: "CREA TU PULSERA CON UN -20%", img: b1 },
  { label: "PULSERAS PARA CHARMS", img: b2 },
  { label: "PULSERAS RÍGIDAS", img: b5 },
  { label: "PULSERAS TENNIS", img: b6 },
];

const products = [
  { name: "Pulsera Pandora Moments con cierre de corazón", price: "75,00 €", img: b1, tag: "Plata 925" },
  { name: "Pulsera Pandora Moments oro 14k cierre corazón", price: "295,00 €", img: b2, tag: "Oro 14k" },
  { name: "Pulsera trenzada de tela rosa", price: "39,00 €", img: b3, tag: "Tela / Plata" },
  { name: "Pulsera tejida con cierre de corazón pavé", price: "129,00 €", img: b4, tag: "Plata · Pavé" },
  { name: "Pulsera rígida con cadena colgante", price: "65,00 €", img: b5, tag: "Plata 925" },
  { name: "Pulsera tennis con corazón rojo", price: "149,00 €", img: b6, tag: "Plata · Circonita" },
  { name: "Pulsera con charms estrellas y corazón", price: "189,00 €", img: b7, tag: "Plata 925" },
  { name: "Bangle oro rosa pavé", price: "159,00 €", img: b8, tag: "Oro rosa" },
];

function PulserasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Promo banner */}
      <div className="bg-pandora-pink-soft text-foreground text-center text-sm py-3 px-4">
        <a href="#" className="underline underline-offset-4 font-medium">
          2 charms + pulsera desde 86€
        </a>
      </div>

      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 py-5 flex items-center justify-between gap-8">
          <a href="/" className="font-display text-3xl tracking-[0.25em] font-medium">
            PANDORA
          </a>
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-3 border border-border rounded-sm px-4 py-2.5 hover:border-foreground/40 transition">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar"
                aria-label="Buscar"
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 text-foreground">
            <button aria-label="Favoritos" className="hover:text-pandora-pink transition"><Heart size={20} /></button>
            <button aria-label="Tienda" className="hover:text-pandora-pink transition"><MapPin size={20} /></button>
            <button aria-label="Cuenta" className="hover:text-pandora-pink transition"><User size={20} /></button>
            <button aria-label="Bolsa" className="hover:text-pandora-pink transition"><ShoppingBag size={20} /></button>
          </div>
        </div>
        <nav className="max-w-[1600px] mx-auto px-6 pb-3">
          <ul className="flex items-center justify-between flex-wrap gap-x-6 gap-y-2 text-[13px] tracking-wide">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`py-2 inline-block border-b-2 ${
                    item === "Pulseras" ? "border-foreground font-medium" : "border-transparent hover:border-foreground/40"
                  } transition`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-[1600px] mx-auto px-6 pt-6 text-xs text-muted-foreground">
        <a href="/" className="hover:underline">Inicio</a>
        <span className="mx-2">/</span>
        <span className="text-foreground">Pulseras</span>
      </div>

      {/* Title + Categories */}
      <section className="max-w-[1600px] mx-auto px-6 pt-6 pb-10 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="font-display text-5xl md:text-6xl tracking-wide">PULSERAS</h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
            Potencia tu look con las pulseras de Pandora. Pulseras artesanales que se pueden llevar de innumerables maneras, y...
            <a href="#" className="block mt-2 text-foreground underline underline-offset-4">Más</a>
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 md:gap-6">
          {categories.map((c) => (
            <a key={c.label} href="#" className="group flex flex-col items-center text-center">
              <div className="w-full aspect-square rounded-full bg-secondary overflow-hidden flex items-center justify-center transition group-hover:bg-pandora-pink-soft/40">
                <img src={c.img} alt={c.label} loading="lazy" width={400} height={400} className="w-[78%] h-[78%] object-contain" />
              </div>
              <span className="mt-3 text-[11px] font-medium tracking-widest leading-tight">{c.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <Tabs />

      {/* Filter bar */}
      <div className="border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between text-xs tracking-widest">
          <button className="flex items-center gap-2 hover:text-pandora-pink transition">
            <SlidersHorizontal size={16} />
            FILTRAR Y ORDENAR
          </button>
          <button className="hidden md:flex items-center gap-1.5 hover:text-pandora-pink transition">
            ORDENAR POR <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <section className="max-w-[1600px] mx-auto px-2 md:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="border border-foreground px-10 py-3 text-xs tracking-[0.2em] hover:bg-foreground hover:text-background transition">
            CARGAR MÁS
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-10">
        <div className="max-w-[1600px] mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
          {[
            { t: "AYUDA", l: ["Contacto", "Envíos", "Devoluciones", "Cuidado de las joyas"] },
            { t: "PANDORA", l: ["Sobre Pandora", "Sostenibilidad", "Carreras", "Inversores"] },
            { t: "MI CUENTA", l: ["Iniciar sesión", "Crear cuenta", "Pedidos", "Lista de deseos"] },
            { t: "TIENDAS", l: ["Encuentra una tienda", "Reserva en tienda"] },
          ].map((col) => (
            <div key={col.t}>
              <h3 className="font-medium tracking-widest text-xs mb-4">{col.t}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {col.l.map((x) => (
                  <li key={x}><a href="#" className="hover:text-foreground transition">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pandora Jewelry — Réplica de demostración
        </div>
      </footer>
    </div>
  );
}

function Tabs() {
  const [tab, setTab] = useState<"insp" | "shop">("shop");
  return (
    <div className="border-b border-border">
      <div className="max-w-[1600px] mx-auto px-6 flex gap-8 text-xs tracking-widest">
        <button
          onClick={() => setTab("insp")}
          className={`py-4 border-b-2 transition ${tab === "insp" ? "border-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
        >
          INSPIRACIÓN
        </button>
        <button
          onClick={() => setTab("shop")}
          className={`py-4 border-b-2 transition ${tab === "shop" ? "border-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
        >
          COMPRAR <span className="ml-1 text-muted-foreground">145</span>
        </button>
      </div>
    </div>
  );
}

function ProductCard({ name, price, img, tag }: { name: string; price: string; img: string; tag: string }) {
  const [fav, setFav] = useState(false);
  return (
    <article className="group relative bg-secondary/40">
      <button
        onClick={() => setFav((v) => !v)}
        aria-label="Añadir a favoritos"
        className="absolute top-3 right-3 z-10 p-1.5"
      >
        <Heart
          size={20}
          className={fav ? "fill-pandora-pink text-pandora-pink" : "text-foreground/60 group-hover:text-foreground"}
        />
      </button>
      <a href="#" className="block aspect-square overflow-hidden bg-white">
        <img
          src={img}
          alt={name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
        />
      </a>
      <div className="px-3 md:px-4 py-4">
        <p className="text-[11px] tracking-widest text-muted-foreground uppercase">{tag}</p>
        <h3 className="mt-1.5 text-sm leading-snug line-clamp-2 min-h-[2.6em]">{name}</h3>
        <p className="mt-2 text-sm font-medium">{price}</p>
      </div>
    </article>
  );
}
