import { Player } from "@/lib/types";

const API_BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

// Create a player
export default async function newPlayer(player: Player) {
  // Quitamos el id del payload para que no genere error en Prisma
  const { id: _, ...playerData } = player;
  const response = await fetch(`${API_BACKEND_URL}/players`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playerData),
  });
  return response;
}

// Update a player
export async function editPlayer(idPath: number, player: Player) {
  // Quitamos el id del payload para que no genere error en Prisma
  const { id: _, ...playerData } = player;

  const response = await fetch(`${API_BACKEND_URL}/players/${idPath}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playerData),
  });
  return response;
}

// Get all players
export async function getPlayers() {
  const response = await fetch(`${API_BACKEND_URL}/players`);
  return response.json();
}

// Get a player by id
export async function getPlayer(id: number) {
  const response = await fetch(`${API_BACKEND_URL}/players/${id}`);
  return response.json();
}

// Delete a player
export async function deletePlayer(id: number) {
  const response = await fetch(`${API_BACKEND_URL}/players/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  return response;
}
