import { useEffect } from "react";
import BG from "./../../../assets/games/domino.jpg";

import img1 from "./../../../assets/games/domino/1.jpg";
import img2 from "./../../../assets/games/domino/2.jpg";
import img3 from "./../../../assets/games/domino/3.jpg";
import img4 from "./../../../assets/games/domino/4.jpg";
import img5 from "./../../../assets/games/domino/5.jpg";

import SingleGamePage from "./../SingleGamePage";

export default function Domino() {
  useEffect(() => {
      scrollTo({ top: 0, behavior: "smooth" });
    });
  const game = {
    BG,
    name: "Domino",
    type: "strategy",
    playerCount: "2 Players",
    time: "10 Min",
    brief:
      "Domino is a tile-based game played with rectangular pieces called dominoes, each marked with a number of spots (or blank) on both ends. Players take turns matching tiles with the same number of spots, aiming to be the first to use all their tiles. It's a game of logic, strategy, and careful planning.",
  };
  const album = [img1, img2, img3, img4, img5];
  const paragraphs = [
    "Domino is a classic tile-based game enjoyed by players of all ages around the world. It is played with rectangular pieces, each divided into two squares marked with dots, called pips, representing numbers.",
    "The main goal in most domino games is to match tiles end to end by connecting the same number of pips. Whether played casually or competitively, domino combines strategy, observation, and timing for an engaging and social experience.",
  ];
  const QA = [
    { q: "Release Date", a: "2025" },
    { q: "Game Type", a: "strategy" },
    { q: "Player Count", a: "2 Players" },
    { q: "Duration", a: "10 Minutes" },
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
