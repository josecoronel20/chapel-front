import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { supabase } from "./supabaseClient";

//utils
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetcher(url: string) {
  const res = await fetch(url, {
    credentials: "include", 
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const error: any = new Error("Error al obtener los datos");
    error.status = res.status;
    error.info = errorData;
    throw error;
  }

  return res.json();
}


//format birth date
export function formatBirthDate(birthDateString: string) {
  const date = new Date(birthDateString);
  const today = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  let age = today.getFullYear() - year;
  if (
    today.getMonth() < date.getMonth() ||
    (today.getMonth() === date.getMonth() && today.getDate() < date.getDate())
  ) {
    age--;
  }

  return {
    date: `${year}-${month}-${day}`,
    age,
  };
}

