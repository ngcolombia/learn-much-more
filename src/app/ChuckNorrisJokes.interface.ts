export interface ChuckNorrisJokes {
  type: string;
  value: {
    id: number;
    joke: string;
    categories: any[];
  }
}