import data from "./data.json";
const { shoes } = data;

export type Shoe = { id: string; name: string; rating: number };

export type RatingMap = Record<string, number>;

export type Answer = {
  id?: number;
  copy: string;
  nextQuestion: number | string;
  ratingIncrease: RatingMap;
};

export type RatingsList = { name: string; score: number }[];

/**
 * Takes a map of ratings and will return an array with the highest
 * scoring item first.
 */
export const sortRatings = (ratingMap: RatingMap) => {
  const ratingsList = Object.entries(ratingMap).reduce(
    (list, [name, score]) => {
      list.push({ name, score });
      return list;
    },
    [] as RatingsList
  );

  return ratingsList.sort((a, b) => b.score - a.score);
};

type IncreaseRatingsParams = {
  currentRatings: RatingMap;
  ratingIncrease: RatingMap;
};

/**
 * Takes two rating maps, the current one and a new one and will add them together
 * to produce a calculated increase in ratings.
 *
 * Ratings in the increase map do not need to be in the current map as we will just
 * add a new "category" to score any previously undefined scores.
 */
export const increaseRatings = ({
  currentRatings,
  ratingIncrease,
}: IncreaseRatingsParams) => {
  const newRatings = { ...currentRatings };

  Object.entries(ratingIncrease).forEach(([shoe, ratingIncrease]) => {
    if (newRatings[shoe]) newRatings[shoe] += ratingIncrease;
    else newRatings[shoe] = ratingIncrease;
  });

  return newRatings;
};

/**
 * Takes a ratings map and will return the names of the first 4 results.
 */

export const calculatePrioritizedResults = (ratingMap: RatingMap) =>
  sortRatings(ratingMap)
    .slice(0, 4)
    .map((rating) => rating.name);

/**
 * Typescript util to make sure that the Shoe is defined and of type Shoe.
 */
export const isShoe = (shoe: Shoe | undefined): shoe is Shoe => {
  return !!shoe;
};

/**
 * Takes a string or an array of strings and will return an array of shoes where
 * the id of the shoe matches the string. If we have no matches we will return an
 * empty array.
 */
export const findShoesFromIds = (shoeIds: string | string[]): Shoe[] => {
  if (typeof shoeIds === "string") {
    const theShoe = shoes.find((shoe) => shoe.id === shoeIds);
    if (!theShoe) return [];
    return [theShoe];
  }

  return shoeIds
    .map((id) => shoes.find((shoe) => shoe.id === id))
    .filter(isShoe);
};
