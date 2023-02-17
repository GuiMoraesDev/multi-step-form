import StepsNav from "components/organisms/StepsNav";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <form className="flex p-6 bg-white h-full w-full rounded-lg shadow-sm">
      <StepsNav />

      {children}
    </form>
  );
}
