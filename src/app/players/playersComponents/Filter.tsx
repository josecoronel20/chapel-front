import React from "react";

export const Filter = ({
  setFilter,
}: {
  setFilter: (filter: string) => void;
}) => {
  return (
    <div className="container px-4 md:px-6 py-8 mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-dark font-bold">Filtrar por posición</h1>

        <select
          className="bg-primary-light p-2 rounded-md border-primary/30 text-text cursor-pointer"
          name="posicion"
          id="posicion"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="arquero">Arquero</option>
          <option value="lateral izquierdo">Lateral izquierdo</option>
          <option value="lateral derecho">Lateral derecho</option>
          <option value="central">Central</option>
          <option value="volante central">Volante central</option>
          <option value="volante ofensivo">Volante ofensivo</option>
          <option value="volante defensivo">
            Volante de contención (defensivo)
          </option>
          <option value="mediocampista">Mediocampista</option>
          <option value="enganche">Mediocampista ofensivo (enganche)</option>

          <option value="delantero centro">Delantero centro</option>
          <option value="media punta">Segundo delantero (media punta)</option>
          <option value="extremo izquierdo">Extremo izquierdo</option>
          <option value="extremo derecho">Extremo derecho</option>
        </select>
      </div>
    </div>
  );
};
