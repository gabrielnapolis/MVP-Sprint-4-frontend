import { revalidatePath } from "next/cache";
import { PatientColumns } from "./columns";

export async function getPatients(): Promise<PatientColumns[]> {
  try {
    const res = await fetch("http://127.0.0.1:5000/patients");

    if (!res.ok) {
      throw new Error(`Error fetching patients: ${res.statusText}`);
    }

    const data = await res.json();

    const patients: PatientColumns[] = data.patients || [];

    revalidatePath("/");

    return patients;
  } catch (error) {
    console.error("Failed to fetch patients:", error);
    return [];
  }
}
