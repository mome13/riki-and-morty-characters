import Image from 'next/image';
import { Fragment } from 'react';
type Props = {};

const Hero = (props: Props) => {
  return (
    <Fragment>
      <h1 className='text-center text-3xl py-8 font-semibold'>
        Riki and Morty Characters
      </h1>
      {/* <Image
        className='w-full object-contain h-[50vh] mb-12'
        alt='Rick and Morty Cover'
        src={'/Rick-and-Morty.webp'}
        width={1200}
        height={600}
      /> */}
    </Fragment>
  );
};

export default Hero;
