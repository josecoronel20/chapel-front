import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const ButonsAdmin = ({ id }: { id: string }) => {
  return (
    <div className="p-2 w-full max-w-lg mx-auto grid md:grid-cols-2 gap-2">
      {/* Botón para editar jugador */}
      <Button
        asChild
        className="w-full bg-secondary-light text-white hover:bg-secondary-lighter"
      >
        <Link href={`/players/editPlayer/${id}`}>
          <Pencil className="w-4 h-4" />
          Editar jugador
        </Link>
      </Button>

      {/* Dialog para eliminar jugador */}

      <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="w-full"> <Trash className="w-4 h-4" /> Eliminar jugador</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-red-500 font-bold">Estas seguro que deseas eliminar este jugador?</DialogTitle>
              <DialogDescription>
                Esta acción no puede ser deshecha.
              </DialogDescription>
            </DialogHeader>
            
            <DialogFooter className="flex flex-row justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline" className="text-primary-darker">Cancelar</Button>
              </DialogClose>
              <Button variant="destructive" type="submit">Eliminar</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
    </div>
  );
};

export default ButonsAdmin;
