import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useIsLoggedIn } from "./useIsLoggedIn";

export default function useRedirect(ActualPath: string) {
  const router = useRouter();
  const status = useIsLoggedIn();

  useEffect(() => {
    if (status === "unauthenticated" && ActualPath !== "login") {
      router.push("/login-chapel");
    }
    if (status === "authenticated" && ActualPath === "login") {
      router.push("/players");
    }
  }, [status, ActualPath]);
}
