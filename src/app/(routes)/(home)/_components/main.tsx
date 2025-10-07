import Image from "next/image";
export default function HomeMain() {
  return (
    <>
      <main className="flex justify-center items-center bg-[url(/images/dashboard/squareBackground.webp)] bg-bottom bg-cover">
        <div className="-translate-y-9">
          <Image
            src="/images/dashboard/spaceman.webp"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div>
          <h1 className=" text-7xl font-medium text-center">
            Welcome To Apollo
          </h1>
          <p className="text-2xl font-normal text-center">
            Every product tested. Every brand vetted. Every decision earned.
          </p>
        </div>
        <div className="translate-y-16">
          <Image
            src="/images/dashboard/spaceman2.webp"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </main>
    </>
  );
}
