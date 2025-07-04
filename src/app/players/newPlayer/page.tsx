"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValuesPlayer, playerObject } from "@/lib/formsObjects";
import newPlayer from "@/lib/api/players";
import { useState } from "react";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import useRedirect from "@/hooks/useRedirect";
import FormPage from "../formComponent/FormPage";
import { useRouter } from "next/navigation";

export default function NewPlayerPage() {
  useRedirect("newPlayer");
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/players`,
    fetcher
  );

  const playersLength = data?.length;

  const form = useForm({
    resolver: zodResolver(playerObject),
    defaultValues: defaultValuesPlayer,
  });

  const handleSubmit = async (data: z.infer<typeof playerObject>) => {
    //se vuelve a formatear la fecha para que sea ISO
    const birthDateISO = new Date(data.birthDate).toISOString();

    const playerCreated = {
      ...data,
      birthDate: birthDateISO,
      id: playersLength + 1,
    };
    const response = await newPlayer(playerCreated);
    const responseData = await response.json();

    if (response.ok) {
      router.push(`/players/${responseData.id}`);
    } else if (!response.ok) {
      console.log(responseData);
    }
  };

  return (
   <FormPage
      form={form}
      handleSubmit={handleSubmit}
      setIsUploading={setIsUploading}
      isUploading={isUploading}
      typePage="newPlayer"
    />
  );
}
