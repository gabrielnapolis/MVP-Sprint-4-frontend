import { getPatients } from "@/components/actions";
import { columns } from "@/components/columns";
import CreatePatient from "@/components/patient-form";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

export default async function Home() {
  const data = await getPatients();
  
  return (
    <>
      <div className="flex justify-center pt-10">
        <div>
          <Card className="mt-10 p-10">
            <div className="flex justify-around">
              <Image src="/images/logo1.jpg" width={220} height={220} alt="" />
            </div>
            <CardContent>
              <div className="space-y-6 p-10">
                <div className="space-y-0.5">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Predição de Doenças Cardíacas
                  </h2>
                  <p className="text-muted-foreground">
                    Insira os dados do paciente, seus exames e realize a
                    predição.
                  </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                  <div className="flex-1 lg:max-w-2xl">
                    <CreatePatient />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <h1 className="flex items-cernter justify-center mt-10 mb-2 font-bold text-2xl">Resultado</h1>
          <span ><strong>Target:</strong> Indicates the presence or absence of heart disease (1 = presence, 0 = absence).</span><br/>
          <span ><strong>Alvo:</strong>Indica a presença ou ausência de doença cardíaca (1 = presença, 0 = ausência).</span>
          <div className="flex items-center justify-center mt-10 bg-white">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
