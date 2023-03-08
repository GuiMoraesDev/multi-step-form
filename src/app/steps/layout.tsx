type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col xl:flex-row p-6 bg-white h-full w-full rounded-lg shadow-sm">
      {children}
    </div>
  );
}
