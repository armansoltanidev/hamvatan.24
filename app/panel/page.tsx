import getOperatorsByNumber from "@/lib/utils";
import { ChargeForm } from "./_components/hybrid/charge-form";
import ChargeRecent from "./_components/hybrid/charge-recent";

export default function Hybrid() {
  return (
    <main className="flex flex-col gap-y-4">
      <ChargeForm />
      <ChargeRecent />
    </main>
  );
}
