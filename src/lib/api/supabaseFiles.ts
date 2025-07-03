const API_BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export const deleteFile = async (path: string) => {
  const response = await fetch(`${API_BACKEND_URL}/supabaseFiles/delete-file`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ path }),
  });
  return response;
};

export const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
  
    const response = await fetch(`${API_BACKEND_URL}/supabaseFiles/upload-file`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
  
    return response.json(); 
  };
  