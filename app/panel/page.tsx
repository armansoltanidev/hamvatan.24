
import ChargeRecent from "./_components/hybrid/charge-recent";

import { ChargeForm } from "./_components/hybrid/charge-form";

export default function Hybrid() {
  return (
    <main className="flex flex-col gap-y-4">
      <ChargeForm />
      <ChargeRecent />
    </main>
  );
}
