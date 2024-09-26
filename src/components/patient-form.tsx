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
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

export default function CreatePatient() {
  const router = useRouter();

  const patientSchema = z.object({
    name: z.string().min(4, {
      message: "O nome da especialidade deve conter no mínimo 4 caracteres",
    }),
    age: z.number().min(4, {
      message: "A idade deve ser informada",
    }),
    sex: z.number({
      message: "O sexo deve ser informado.",
    }),
    cp: z.number(),
    trestbps: z.number(),
    chol: z.number(),
    fbs: z.number(),
    restecg: z.number(),
    thalach: z.number(),
    exang: z.number(),
    oldpeak: z.number(),
    slope: z.number(),
    ca: z.number(),
    thal: z.number(),
  });

  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
  });

  const handleSubmit: SubmitHandler<z.infer<typeof patientSchema>> = async (
    data
  ) => {
    console.log(data);
    const response = await fetch("http://127.0.0.1:5000/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          alert("Predição Realizada");
          form.reset();
          router.refresh();
        }
      })
      .catch((e) => alert(e));
  };

  return (
    <Form {...form}>
      <form
        className="space-y-8 w-[670px]"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do paciente</FormLabel>
                <FormControl>
                  <Input placeholder="Informe o nome." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Idade do paciente</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Informe a idade."
                    {...field}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexo</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value, 10))}
                  value={field.value?.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o sexo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">Masculino</SelectItem>
                      <SelectItem value="0">Feminino</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chest Pain Type (cp)</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value, 10))}
                  value={field.value?.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Indica o tipo de dor no peito experimentada pelo paciente" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="0">Angina Típica</SelectItem>
                      <SelectItem value="1">Angina Atípica</SelectItem>
                      <SelectItem value="2">Dor não Anginosa</SelectItem>
                      <SelectItem value="3">Assintomático</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="trestbps"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resting Blood Pressure (trestbps)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Pressão arterial em repouso do paciente medida em mm Hg na admissão"
                    {...field}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="chol"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serum Cholesterol (chol)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nível de colesterol sérico do paciente em mg/dl"
                    {...field}
                    type="number"
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fbs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fasting Blood Sugar (fbs)</FormLabel>
                <br />
                <label className="text-sm text-gray-600">
                  Nível de açúcar no sangue em jejum maior que 120 mg/dl.
                </label>
                <FormControl>
                  <RadioGroup
                    className="ml-5"
                    defaultValue="comfortable"
                    value={field.value?.toString()}
                    onValueChange={(value) =>
                      field.onChange(parseInt(value, 10))
                    }
                  >
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="r2" />
                      <Label htmlFor="r2">Não</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="restecg"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Resting Electrocardiographic Results (restecg)
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) =>
                      field.onChange(parseInt(value, 10))
                    }
                    value={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Resultados do eletrocardiograma em repouso" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">Normal</SelectItem>
                        <SelectItem value="1">
                          Anormalidade da onda ST-T
                        </SelectItem>
                        <SelectItem value="2">
                          Possível ou definitiva hipertrofia ventricular
                          esquerda
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="thalach"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum Heart Rate Achieved (thalach)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Frequência cardíaca mais alta alcançada durante o teste de exercício."
                    {...field}
                    type="number"
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exang"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exercise-Induced Angina (exang)</FormLabel>
                <br />
                <label className="text-sm text-gray-600">
                  Se o paciente apresentou angina induzida por exercício.
                </label>
                <FormControl>
                  <RadioGroup
                    className="ml-5"
                    value={field.value?.toString()}
                    onValueChange={(value) =>
                      field.onChange(parseInt(value, 10))
                    }
                  >
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="1" id="r1" />
                      <Label htmlFor="r1">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="r2" />
                      <Label htmlFor="r2">Não</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="oldpeak"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ST Depression (oldpeak):</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Depressão do segmento ST observada no eletrocardiograma durante o exercício em relação ao repouso."
                    {...field}
                    type="number"
                    step="0.01"
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slope"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slope of Peak Exercise ST Segment (slope)</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) =>
                      field.onChange(parseInt(value, 10))
                    }
                    value={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Descreve a inclinação do segmento ST do pico do exercício." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">Ascendente</SelectItem>
                        <SelectItem value="1">Plano</SelectItem>
                        <SelectItem value="2">Descendente</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Major Vessels (ca)</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) =>
                      field.onChange(parseInt(value, 10))
                    }
                    value={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Número de vasos principais (variando de 0 a 3) visíveis por fluoroscopia." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="thal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thalassemia (thal)</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) =>
                      field.onChange(parseInt(value, 10))
                    }
                    value={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Distúrbio sanguíneo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1">Normal</SelectItem>
                        <SelectItem value="2">Defeito Fixo</SelectItem>
                        <SelectItem value="3">Defeito Reversível</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-around">
          <Button type="reset" onClick={() => form.reset()} variant={"outline"}>
            Cancelar
          </Button>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </Form>
  );
}
