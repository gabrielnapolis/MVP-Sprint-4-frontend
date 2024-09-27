import { revalidatePath } from "next/cache";
import { PatientColumns } from "./columns";

export async function getPatients(): Promise<PatientColumns[]> {
  try {
    const res = await fetch("http://127.0.0.1:5000/patients", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error fetching patients: ${res.statusText}`);
    }

    const patients: PatientColumns[] = await res.json();
    revalidatePath("/");

    return patients;
  } catch (error) {
    console.error("Failed to fetch patients:", error);
    return [];
  }
}

export async function deletePatient(id: number) {
  const response = await fetch(`http://127.0.0.1:5000/patient/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 200 || res.status == 204) {
        alert("Predição Deletada!");
        revalidatePath("/");
      }
      if (res.status == 500) {
        alert("Erro ao deletar");
      }
    })
    .catch((e) => alert(`Erro ao deletar`));
}
