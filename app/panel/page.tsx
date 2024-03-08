import { ChargeForm } from "./_components/hybrid/charge-form";

export default function Hybrid() {
  return (
    <div className="flex gap-x-4">
      <div className="flex-1">
        <ChargeForm />
      </div>
      <div className="flex-1">Other</div>
    </div>
  );
}
