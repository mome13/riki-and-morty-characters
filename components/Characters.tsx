'use client';
import { ICharacter } from '@/types/index';
import Character from './Character';
import ShowMoreButton from './ShowMoreButton';
import { Fragment, useEffect, useState } from 'react';

const CHARACTERS: ICharacter[] = [
  {
    id: 361,
    name: 'Toxic Rick',
    status: 'Dead',
    species: 'Humanoid',
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
  },
  {
    id: 21,
    name: 'Aqua Morty',
    status: 'unknown',
    species: 'Humanoid',
    image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
  },
  {
    id: 22,
    name: 'Aqua Rick',
    status: 'unknown',
    species: 'Humanoid',
    image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
  },
  {
    id: 23,
    name: 'Arcade Alien',
    status: 'unknown',
    species: 'Alien',
    image: 'https://rickandmortyapi.com/api/character/avatar/23.jpeg',
  },
  {
    id: 24,
    name: 'Armagheadon',
    status: 'Alive',
    species: 'Alien',
    image: 'https://rickandmortyapi.com/api/character/avatar/24.jpeg',
  },
  {
    id: 25,
    name: 'Armothy',
    status: 'Dead',
    species: 'unknown',
    image: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg',
  },
  {
    id: 26,
    name: 'Arthricia',
    status: 'Alive',
    species: 'Alien',
    image: 'https://rickandmortyapi.com/api/character/avatar/26.jpeg',
  },
];

const getData = (page: number = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

const Characters = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [pageNumber, setPageNumbers] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log('loading ...');
    setIsLoading(true);
    getData(pageNumber)
      .then((response) => {
        const newCharacters: ICharacter[] = [];
        response?.results?.map(({ id, name, status, species, image }) => {
          newCharacters.push({
            id,
            name,
            status,
            species,
            image,
          });
        });
        console.log(characters.at(-1)?.id, newCharacters?.at(-1)!.id);
        if (
          newCharacters.length > 0 &&
          characters.at(-1)?.id !== newCharacters?.at(-1)!.id
        )
          setCharacters((chars) => chars.concat(newCharacters));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [pageNumber]);

  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-items-center max-w-[80%] mx-auto gap-8'>
      {characters.length > 0 ? (
        <Fragment>
          {characters.map((character: ICharacter) => {
            return <Character key={character.id} character={character} />;
          })}

          <ShowMoreButton
            loading={isLoading}
            setIsLoading={setIsLoading}
            onClick={() => setPageNumbers((page) => page + 1)}
          />
        </Fragment>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default Characters;
