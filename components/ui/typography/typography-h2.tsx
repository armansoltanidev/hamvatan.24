export default function TypographyH2({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
