import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className='w-full z-10 shadow-sm'>
      <nav className='max-w-[1440px] mx-auto flex justify-center items-center sm:px-16 px-6 py-2 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={50}
            height={30}
            className='object-contain'
          />

          <span className='ml-4 font-bold'>Riki & Morty</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
