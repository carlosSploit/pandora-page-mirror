import { Link, useLocation } from "@tanstack/react-router";
import { Heart, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";
import b1 from "@/assets/bracelet-1.jpg";
import b2 from "@/assets/bracelet-2.jpg";
import b3 from "@/assets/bracelet-3.jpg";
import b4 from "@/assets/bracelet-4.jpg";
import b5 from "@/assets/bracelet-5.jpg";
import b6 from "@/assets/bracelet-6.jpg";
import b7 from "@/assets/bracelet-7.jpg";
import b8 from "@/assets/bracelet-8.jpg";

const IMAGES = [b1, b2, b3, b4, b5, b6, b7, b8];

export const NAV_ITEMS = [
  { label: "Pulseras", to: "/pulseras" as const },
  { label: "Charms", to: "/charms" as const },
  { label: "Anillos", to: "/anillos" as const },
  { label: "Pendientes", to: "/pendientes" as const },
  { label: "Collares", to: "/collares" as const },
  // { label: "Colecciones", to: "/colecciones" as const },
];

export type CategoryProps = {
  title: string;
  description: string;
  productPrefix: string;
  highlights: string[];
};

export function CategoryPage({ title, description, productPrefix, highlights }: CategoryProps) {
  const location = useLocation();

  const products = IMAGES.map((img, i) => ({
    name: `${productPrefix} estilo ${String.fromCharCode(65 + i)}`,
    price: `${(45 + i * 22).toString().replace(".", ",")},00 €`,
    img,
    tag: ["Plata 925", "Oro 14k", "Tela / Plata", "Plata · Pavé", "Plata 925", "Plata · Circonita", "Plata 925", "Oro rosa"][i],
  }));

  const tags = ["Plata 925", "Oro 14k", "Tela / Plata", "Plata · Pavé", "Plata 925", "Plata · Circonita", "Plata 925", "Oro rosa","Oro 18k"];

  const products1 =  [
    {
      name: `Cadena con piedras Nacar`,
      price: `00 €`,
      type: "Collares",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778510524/8c9653e4-7112-4cca-adbc-628dcb06af58_ckulp9.png",
      tag: tags[2],
    },
    {
      name: `Gargantilla`,
      price: `S/.4658 - xgr 385`,
      type: "Collares",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778509791/195ae11a-f893-4154-8038-522fd917ab5a_jq52mo.png",
      tag: tags[8],
    },
    {
      name: `Pulsera con pierdras de Nacar`,
      price: `00 €`,
      type: "Pulseras",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778510504/c9fb4846-5450-483b-bf93-b5f1a6afcd3f_gelzve.png",
      tag: tags[2],
    },
    {
      name: `Sortija`,
      price: `S/.1232 - xgr 385`,
      type: "Anillos",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778784173/8c32a834-8d11-4e67-91e7-842d6a238ae9_tkbh2p.png",
      tag: tags[8],
    },
    {
      name: `Sortija`,
      price: `S/.546 - xgr 390`,
      type: "Anillos",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778785800/ChatGPT_Image_14_may_2026_14_07_32324_ywuql0.png",
      tag: tags[8],
    },
    {
      name: `Sortija`,
      price: `S/.507 - xgr 390`,
      type: "Anillos",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778785800/ChatGPT_Image_14_may_2026_14_07_32_k28qz4.png",
      tag: tags[8],
    },
    {
      name: `Aretes`,
      price: `S/.1014 - xgr 390`,
      type: "Pendientes",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778790307/f7e11c28-3343-4063-8949-a43693bd148f_ytd2ne.png",
      tag: tags[8],
    },
    {
      name: `Sortija Chavin`,
      price: `S/.4400 - xgr 400`,
      type: "Anillos",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778792449/9ca737ed-c51b-4a19-84f3-901f14180ed0_1_xpmcsx.png",
      tag: tags[8],
    },
    {
      name: `Sortija`,
      price: `S/.304 - xgr 380`,
      type: "Anillos",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778793451/aca5e6ca-c9dc-4127-b914-c40e03c96307_wpfrnk.png",
      tag: tags[8],
    },
    {
      name: `Dije Crucifijo`,
      price: `S/.1950 - xgr 390`,
      type: "Charms",
      img : "https://res.cloudinary.com/dhxefh3r2/image/upload/v1778793746/7498107b-3e3c-471d-9cd6-591b8f3a93b6_wnpqlq.png",
      tag: tags[8],
    },
  ]
  const categories = highlights.map((label, i) => ({ label, img: IMAGES[i % IMAGES.length] }));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* <div className="bg-aurea luminere-pink-soft text-foreground text-center text-sm py-3 px-4">
        <a href="#" className="underline underline-offset-4 font-medium">
          2 charms + pulsera desde 86€
        </a>
      </div> */}

      <header style={{borderColor: "#ffa6ad"}} className="border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 py-6 flex items-center justify-center text-center">
          <Link
            to="/"
            className="font-display text-2xl md:text-4xl tracking-[0.3em] font-medium leading-none bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #c9a36a 0%, #e6b89c 40%, #d98a8a 70%, #b8794f 100%)" }}
          >
            AUREA&nbsp;LUMINERE
          </Link>
        </div>
        <nav className="max-w-[1600px] mx-auto px-6 pb-3">
          <ul className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 text-[13px] tracking-wide">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    style={{borderColor: `${active? "#ffa6ad": "#fff"}`}}
                    className={`py-2 inline-block border-b-2 ${
                      active ? "border-foreground font-medium" : "border-transparent hover:border-foreground/40"
                    } transition`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 pt-6 text-xs text-muted-foreground">
        <Link to="/" className="hover:underline">Inicio</Link>
        <span className="mx-2">/</span>
        <span style={{color: "#ffa6ad"}} className="text-foreground">{title}</span>
      </div>

      <section className="max-w-[1600px] mx-auto px-6 pt-6 pb-10 grid md:grid-cols-1 gap-10 items-start ">
        <div className="max-w-[1600px] flex flex-col content-center items-center">
          <h1 className="font-display text-5xl md:text-6xl tracking-wide uppercase">{title}</h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
            {description}
          </p>
        </div>
      </section>

      <div className="border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between text-xs tracking-widest">
          <button className="flex items-center gap-2 hover:text-aurea luminere-pink transition">
            <SlidersHorizontal size={16} />
            FILTRAR Y ORDENAR
          </button>
          <button className="hidden md:flex items-center gap-1.5 hover:text-aurea luminere-pink transition">
            ORDENAR POR <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <section className="max-w-[1600px] mx-auto px-2 md:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-6">
          {products1.filter((fi) => fi.type === title).map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
        {/* <div className="mt-12 flex justify-center">
          <button className="border border-foreground px-10 py-3 text-xs tracking-[0.2em] hover:bg-foreground hover:text-background transition">
            CARGAR MÁS
          </button>
        </div> */}
      </section>

      <footer className="border-t border-border mt-10">
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aurea Luminere — Réplica de demostración
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ name, price, img, tag }: { name: string; price: string; img: string; tag: string }) {
  const [fav, setFav] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative bg-secondary/40">
      <button
        onClick={() => setFav((v) => !v)}
        aria-label="Añadir a favoritos"
        className="absolute top-3 right-3 z-10 p-1.5"
      >
        <Heart
          size={20}
          className={fav ? "fill-aurea luminere-pink text-aurea luminere-pink" : "text-foreground/60 group-hover:text-foreground"}
        />
      </button>
      <div className="block aspect-square overflow-hidden bg-white">
        <img
          src={img}
          alt={name}
          onClick={() => setOpen(true)}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-3 md:px-4 py-4">
        <p className="text-[11px] tracking-widest text-muted-foreground uppercase">{tag}</p>
        <h3 className="mt-1.5 text-sm leading-snug line-clamp-2 min-h-[2.6em]">{name}</h3>
        <p className="mt-2 text-sm font-medium">{price}</p>
      </div>
       {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        >
          <img
            src={img}
            alt={name}
            className="max-w-[90%] max-h-[90%]"
          />
        </div>
        )}
    </div>
  );
}
