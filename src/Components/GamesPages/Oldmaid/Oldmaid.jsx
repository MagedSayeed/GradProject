import { useEffect } from "react";
import BG from "./../../../assets/games/oldmaid.jpg";

import img1 from "./../../../assets/games/oldmaid/1.jpg";
import img2 from "./../../../assets/games/oldmaid/2.jpg";
import img3 from "./../../../assets/games/oldmaid/3.jpg";

import SingleGamePage from "./../SingleGamePage";

export default function Oldmaid() {
  useEffect(() => {
      scrollTo({ top: 0, behavior: "smooth" });
    });
  const game = {
    BG,
    name: "Old Maid",
    type: "matching and elimination",
    playerCount: "4 Players",
    time: "15-20 Min",
    brief:
      "Old Maid is a fun and easy card game for all ages. Players take turns picking cards from each other’s hands, trying to make matching pairs. One card has no match—this is the “Old Maid.” The game ends when all pairs are made, and the player left with the Old Maid loses.",
  };
  const album = [img1, img2, img3, img1, img1];
  const paragraphs = [
    "Old Maid is a classic card game that's simple, fun, and often played by children. The game is usually played with a standard deck of cards with one card removed to create an odd number—often a queen, which becomes the “Old Maid.” Each player is dealt cards and removes any matching pairs. Then, players take turns drawing a random card from the person next to them.",
  ];
  const QA = [
    { q: "Release Date", a: "2025" },
    { q: "Game Type", a: "matching and elimination" },
    { q: "Player Count", a: "4 Players" },
    { q: "Duration", a: "15-20 Minutes" },
    { q: "Languages", a: "American English (EN-US)" },
  ];

  return (
    <>
      <SingleGamePage
        game={game}
        album={album}
        paragraphs={paragraphs}
        QA={QA}
      />
    </>
  );
}
