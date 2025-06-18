import { useEffect } from "react";
import BG from "./../../../assets/games/Skrew.png";

import img1 from "./../../../assets/games/skrew/1.jpg";
import img2 from "./../../../assets/games/skrew/2.jpg";
import img3 from "./../../../assets/games/skrew/3.jpg";

import SingleGamePage from "./../SingleGamePage";

export default function Skrew() {
  const game = {
    BG,
    name: "Skrew",
    type: "Trivia",
    playerCount: "4 Players",
    time: "15-20 Min",
    brief:
      "Skrew is a fast, fun, and unpredictable card game full of twists, bluffs, and laughs. Easy to learn, hard to master — get ready to play, trick, and get Skrewed!",
  };
  const album = [img1, img2, img3, img1, img1];
  const paragraphs = [
    "Skrew is a fast-paced card game packed with excitement, strategy, and unexpected twists. Designed for quick play and big laughs, it’s the perfect choice for game nights, gatherings, or even quick breaks with friends. The rules are simple to pick up, making it accessible to both casual players and competitive gamers alike.",
    "What sets Skrew apart is its clever mix of bluffing, planning, and unpredictable turns. Every card you play can change the direction of the game, and just when you think you're winning — you might get Skrewed! Whether you're playing defensively or going all-in with bold moves, every round keeps you on edge.",
    "With its unique gameplay and endless replay value, Skrew is more than just a card game — it’s a social experience. Get ready to outsmart your opponents, laugh out loud, and create unforgettable memories. Once you start playing, you won't want to stop.",
  ];
  const QA = [
    { q: "Release Date", a: "2025" },
    { q: "Game Type", a: "Trivia" },
    { q: "Player Count", a: "4 Players" },
    { q: "Duration", a: "15-20 Minutes" },
    { q: "Languages", a: "American English (EN-US)" },
  ];
  const Rules = [
    { rule: "Each player is dealt a hand of cards from a special deck." },
    {
      rule: "On your turn, you must either play valid cards according to the current round's rules or pass.",
    },
    {
      rule: "Valid plays include discarding specific sets, loading cards onto other players, or triggering special effects.",
    },
    {
      rule: "Players try to reduce their hand or shift high-point cards to opponents.",
    },
    {
      rule: "A round ends when all players pass consecutively or a player empties their hand.",
    },
    {
      rule: "At the end of the round, all players count the points in their hand.",
    },
    { rule: "The player with the lowest total points wins the round." },
    {
      rule: "The game continues for multiple rounds until a player reaches a winning condition, such as the lowest total score after a set number of rounds.",
    },
  ];
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <SingleGamePage
        game={game}
        album={album}
        paragraphs={paragraphs}
        QA={QA}
        Rules={Rules}
      />
    </>
  );
}
