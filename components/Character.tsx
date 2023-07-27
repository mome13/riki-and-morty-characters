'use client';
import { FC, useState } from 'react';
import { CharacterProps } from '@/types/index';
import Image from 'next/image';
import Link from 'next/link';
import CharacterDetails from './CharacterDetails';

const Character: FC<CharacterProps> = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className='rounded-md shadow-lg  w-full hover:shadow-2xl transition-shadow duration-200 ease-out cursor-pointer'
      onClick={() => setIsOpen(true)}
    >
      <div>
        <Image
          alt={character.name}
          src={character.image}
          width={500}
          height={400}
          className='w-full max-h-[16rem] object-cover object-center rounded-t-md'
        />

        <div className='flex flex-col py-4 px-6'>
          <h4>Name: {character.name}</h4>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      </div>

      <CharacterDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        character={character}
      />
    </div>
  );
};

export default Character;
