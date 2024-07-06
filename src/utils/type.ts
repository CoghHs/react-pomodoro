export interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

export interface ICharacterDetail {
  id: number;
  name: string;
  imageUrl: string;
  films: string[];
}

export interface IRouteState {
  state: {
    name: string;
  };
}
