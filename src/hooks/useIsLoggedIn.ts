import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

export function useIsLoggedIn() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/isAuthenticated`,
    fetcher,
    { shouldRetryOnError: false }
  );

  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");

  useEffect(() => {
    if (isLoading) return;

    if (error || !data || data.message !== "Autenticación exitosa") {
      setStatus("unauthenticated");
    } else {
      setStatus("authenticated");
    }
  }, [data, error, isLoading]);

  return status;
}
