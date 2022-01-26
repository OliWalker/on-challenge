import {
  calculatePrioritizedResults,
  findShoesFromIds,
  increaseRatings,
  isShoe,
  sortRatings,
} from "../utils";
import {
  increasedRatings1,
  increasedRatings2,
  increasedRatings3,
  prioritizedResults1,
  prioritizedResults2,
  prioritizedResults3,
  ratingIncrease1,
  ratingIncrease2,
  ratingIncrease3,
  sortedRatingsIncrease1,
  sortedRatingsIncrease2,
  sortedRatingsIncrease3,
} from "../_mocks/ratingsIncrease";

test("sortRatings", () => {
  expect(sortRatings(ratingIncrease1)).toStrictEqual(sortedRatingsIncrease1);
  expect(sortRatings(ratingIncrease2)).toStrictEqual(sortedRatingsIncrease2);
  expect(sortRatings(ratingIncrease3)).toStrictEqual(sortedRatingsIncrease3);
});

test("increaseRatings", () => {
  expect(
    increaseRatings({
      currentRatings: ratingIncrease1,
      ratingIncrease: ratingIncrease2,
    })
  ).toStrictEqual(increasedRatings1);
  expect(
    increaseRatings({
      currentRatings: ratingIncrease2,
      ratingIncrease: ratingIncrease3,
    })
  ).toStrictEqual(increasedRatings2);
  expect(
    increaseRatings({
      currentRatings: ratingIncrease3,
      ratingIncrease: ratingIncrease1,
    })
  ).toStrictEqual(increasedRatings3);
});

test("calculatePrioritizedResults", () => {
  expect(calculatePrioritizedResults(increasedRatings1)).toStrictEqual(
    prioritizedResults1
  );
  expect(calculatePrioritizedResults(increasedRatings2)).toStrictEqual(
    prioritizedResults2
  );
  expect(calculatePrioritizedResults(increasedRatings3)).toStrictEqual(
    prioritizedResults3
  );
});

test("isShoe", () => {
  expect(isShoe({ name: "cloud", id: "cloud", rating: 0 })).toBe(true);
  expect(isShoe(undefined)).toBe(false);
});

test("findShoesFromIds", () => {
  expect(findShoesFromIds("")).toStrictEqual([]);
  expect(findShoesFromIds(["", ""])).toStrictEqual([]);
  expect(findShoesFromIds(["cloud"])).toStrictEqual([
    {
      id: "cloud",
      name: "Cloud",
      rating: 0,
    },
  ]);
  expect(
    findShoesFromIds(["cloudflow", "cloudx", "cloudventure_waterproof"])
  ).toStrictEqual([
    {
      id: "cloudflow",
      name: "Cloudflow",
      rating: 0,
    },
    {
      id: "cloudx",
      name: "Cloud X",
      rating: 0,
    },
    {
      id: "cloudventure_waterproof",
      name: "Cloudventure Waterproof",
      rating: 0,
    },
  ]);
});
