import { useState } from "preact/hooks";
import type { GameStats } from "../../types.ts";
// import { GameCard } from "../components/GameCard.astro"

interface GameListProps {
  gameStats: GameStats[];
}

export default function GameListInt(props: GameListProps) {
  const [sortOrder, setSortOrder] = useState("offensive");
  const [year, setYear] = useState(2025);

  const gameStats = props.gameStats.sort((a, b) => {
    return sortOrder === "offensive"
      ? b.offensiveRating - a.offensiveRating
      : sortOrder === "defensive"
      ? b.defensiveBigPlays - a.defensiveBigPlays
      : sortOrder === "scenario"
      ? b.scenarioRating - a.scenarioRating
      : b.totalRating - a.totalRating;
  });

  console.log(gameStats.length);

  return (
    <div>
      <div class="flex gap-2 w-full">
        <p class="flex-grow-1 font-bold text-xl">
          Year {year}
        </p>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setYear(2021)}
        >
          2021
        </button>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setYear(2022)}
        >
          2022
        </button>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setYear(2023)}
        >
          2023
        </button>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setYear(2024)}
        >
          2024
        </button>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setYear(2025)}
        >
          2025
        </button>
      </div>
      <br />
      <div class="flex gap-2 w-full">
        <p class="flex-grow-1 font-bold text-xl">
          Sorted by {sortOrder} rating ⬇
        </p>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setSortOrder("offensive")}
        >
          Offensive rating ⬇
        </button>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setSortOrder("scenario")}
        >
          Scenario rating ⬇
        </button>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setSortOrder("defensive")}
        >
          Defensive rating ⬇
        </button>
        <button
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
          onClick={() => setSortOrder("total")}
        >
          Total rating ⬇
        </button>
      </div>
      <br />
      {
        /* <div class="grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10">
        {gameStats.map((gameStats: GameStats) => (
          <GameCard gameStats={gameStats} />
        ))}
      </div> */
      }
    </div>
  );
}
