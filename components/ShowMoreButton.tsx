'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  loading?: boolean;
  onClick: Function;
  setIsLoading: Function;
};

const ShowMoreButton = ({ loading, onClick, setIsLoading }: Props) => {
  // const [isLoading, setIsLoading] = useState(!!loading);

  const loadingStyle = loading ? 'visible' : 'invisible';
  const btnLoadingStyle = !loading ? 'pr-4' : 'pr-12';

  return (
    <button
      className={clsx(
        'relative rounded-full bg-blue-500 text-white h-fit py-2 pl-4 self-center hover:bg-blue-400 transition-all duration-300',
        btnLoadingStyle
      )}
      onClick={() => {
        onClick();
        setIsLoading(true);
      }}
    >
      Show More
      <Image
        width={30}
        height={40}
        src={'/loading.svg'}
        alt={'loading'}
        className={clsx(
          'absolute top-1/2 right-1 -translate-y-1/2 transition-all duration-200',
          loadingStyle
        )}
      />
    </button>
  );
};

export default ShowMoreButton;
