"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter  } from "next/navigation";

export default function CreatePatient() {
  const router = useRouter()

  const patientSchema = z.object({
    fullname: z.string().min(4, {
      message: "O nome da especialidade deve conter no mínimo 4 caracteres",
    })
  });

  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      fullname: "",
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof patientSchema>> = async (
    data
  ) => {
    const response = await fetch("http://localhost:3001/speciality", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status == 201) {
          alert("Especialidade Cadastrada!");
          form.reset();
          router.refresh();
        }
      })
      .catch((e) => alert(e));
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Especialidade</FormLabel>
              <FormControl>
                <Input placeholder="Informe o nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-around gap-4">
          <Link href={"/admin/"}>
            <Button type="submit" variant={"outline"}>
              Cancelar
            </Button>
          </Link>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </Form>
  );
}
