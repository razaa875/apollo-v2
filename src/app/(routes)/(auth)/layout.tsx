import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="flex justify-between items-center h-screen p-[3%]">
      <div className="w-[50%] h-full hidden lg:flex items-center">
        <Image src="/images/auth/auth_banner.webp" alt="Apollo" title="Apollo" width={696} height={646} priority className="size-full object-cover rounded-l-[20px]" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col items-center justify-center px-[5%] rounded-r-[20px] h-full bg-background border-2 border-white backdrop-blur-3xl">
        <Link href='/' className='w-[70%] lg:w-[60%] xl:w-[55%] mx-auto h-14'>
          <Image src="/logo/logo.svg" alt="Apollo" title="Apollo" width={341} height={235} priority className="size-full object-contain" />
        </Link>
        {children}
      </div>
    </div>
  );
}
