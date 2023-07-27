export interface ICharacter {
  id: 1;
  name: string;
  status: string;
  species: string;
  image: string;
}

export type CharactersProps = {};

export type CharacterProps = {
  character: ICharacter;
};
