const API_BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

// read credentials
export default async function login(email: string, password: string) {
  const response = await fetch(`${API_BACKEND_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  return response;
}
