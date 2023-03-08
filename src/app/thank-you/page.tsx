import Image from "next/image";

export const metadata = {
  title: "Subscribed",
};

export default function StepsPage() {
  return (
    <div className="flex p-4 bg-white h-full w-full rounded-lg shadow-sm">
      <section className="flex flex-col justify-center items-center lg:py-6 gap-4 mx-auto w-[80%] lg:w-[50%]">
        <Image
          src="/assets/images/icon-thank-you.svg"
          alt=""
          width={100}
          height={100}
          className="h-20 xl:h-24"
        />

        <h1 className="text-marine-blue text-xl lg:text-3xl font-bold">
          Thank you!
        </h1>

        <p className="text-cool-gray text-sm lg:text-base text-center">
          Thanks for confirming yours subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </section>
    </div>
  );
}
