import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, clear, count } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Tu carrito ({count})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto -mx-6 px-6 mt-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center mt-10">
              Tu carrito está vacío
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3 border-b pb-4">
                  <img src={it.img} alt={it.name} className="w-20 h-20 object-contain bg-secondary/40" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm line-clamp-2">{it.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{it.price}</p>
                    <div className="mt-2 flex items-center gap-2">
                      {/* <button
                        aria-label="Restar"
                        onClick={() => updateQty(it.id, it.qty - 1)}
                        className="p-1 border rounded hover:bg-accent"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{it.qty}</span>
                      <button
                        aria-label="Sumar"
                        onClick={() => updateQty(it.id, it.qty + 1)}
                        className="p-1 border rounded hover:bg-accent"
                      >
                        <Plus size={12} />
                      </button> */}
                      <button
                        aria-label="Eliminar"
                        onClick={() => removeItem(it.id)}
                        className="ml-auto p-1 text-muted-foreground hover:text-foreground"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="mt-4 flex-col gap-2 sm:flex-col">
            <button
              onClick={clear}
              className="w-full text-xs tracking-widest border border-foreground py-3 hover:bg-foreground hover:text-background transition"
            >
              VACIAR CARRITO
            </button>
            <button className="w-full text-xs tracking-widest bg-foreground text-background py-3 hover:opacity-90 transition">
              FINALIZAR CONSULTA
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
