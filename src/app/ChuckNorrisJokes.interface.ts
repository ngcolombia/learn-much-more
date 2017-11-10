export interface ChuckNorrisJokes {
  type: string;
  value: JokeValue;
}

interface JokeValue {
  id: number;
  joke: string;
  categories: any[];
}