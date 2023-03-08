type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col xl:flex-row p-3 bg-white h-full w-full max-w-4xl rounded-lg shadow-sm">
      {children}
    </div>
  );
}
