import React from "react";

export const Filter = ({
  setFilter,
}: {
  setFilter: (filter: string) => void;
}) => {
  return (
    <div className="container p-6 mx-auto max-w-2xl">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-dark font-bold">Filtrar por posición</h1>

        <select
          className="bg-primary-light p-2 rounded-md border-primary/30 text-text cursor-pointer w-full overflow-hidden"
          name="posicion"
          id="posicion"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="arquero">Arquero</option>
          <option value="lateral izquierdo">Lateral izquierdo</option>
          <option value="lateral derecho">Lateral derecho</option>
          <option value="central">Central (defensa central)</option>
          <option value="mediocampista defensivo">
            Mediocampista defensivo (volante de contención)
          </option>
          <option value="mediocampista izquierdo">
            Mediocampista por izquierda (volante por izquierda)
          </option>
          <option value="mediocampista central">
            Mediocampista central (volante central)
          </option>
          <option value="mediocampista derecho">
            Mediocampista por derecha (volante por derecha)
          </option>
          <option value="mediocampista ofensivo">
            Mediocampista ofensivo (enganche)
          </option>
          <option value="segundo delantero">
            Segundo delantero (media punta)
          </option>
          <option value="delantero centro">Delantero centro (número 9)</option>
          <option value="extremo izquierdo">
            Extremo por izquierda (punta izquierda)
          </option>
          <option value="extremo derecho">
            Extremo por derecha (punta derecha)
          </option>
        </select>
      </div>
    </div>
  );
};
