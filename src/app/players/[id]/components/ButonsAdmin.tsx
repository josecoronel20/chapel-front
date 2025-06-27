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
import { deletePlayer } from "@/lib/api/players";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ButonsAdmin = ({ id }: { id: number }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = async () => {
    const response = await deletePlayer(id);
    if (response.status === 200) {
      setIsOpen(true);
    }
  };
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
          <Button variant="destructive" className="w-full">
            {" "}
            <Trash className="w-4 h-4" /> Eliminar jugador
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-red-500 font-bold">
              Estas seguro que deseas eliminar este jugador?
            </DialogTitle>
            <DialogDescription>
              Esta acción no puede ser deshecha.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex flex-row justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="text-primary-darker">
                Cancelar
              </Button>
            </DialogClose>
            <Button variant="destructive" type="submit" onClick={handleDelete}>
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog para despues de eliminar jugador */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¡Jugador eliminado exitosamente!</DialogTitle>
              <DialogDescription>
                <span className="text-lg">
                  El jugador se eliminó correctamente.
                </span>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end mt-4">
              <Button
                onClick={() => {
                  setIsOpen(false);
                  router.push("/players");
                }}
              >
                Aceptar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default ButonsAdmin;
