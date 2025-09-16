import Image from "next/image";

import Customer from "@/features/customers/components/customer";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <h1>Hello World</h1>
      <Image alt="Logo" height={100} src="/images/logo.png" width={100} />
      <Customer />
    </div>
  );
}
