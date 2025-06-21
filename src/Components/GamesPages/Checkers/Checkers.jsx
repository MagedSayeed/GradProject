import { useEffect } from "react";
import BG from "./../../../assets/games/checkers.jpg";

import img1 from "./../../../assets/games/checkers/checkers2.jpg";
import img2 from "./../../../assets/games/checkers/checkers3.jpg";

import SingleGamePage from "./../SingleGamePage";

export default function Checkers() {
  useEffect(() => {
      scrollTo({ top: 0, behavior: "smooth" });
    });
  const game = {
    BG,
    name: "Checkers",
    type: "strategy",
    playerCount: "2 Players",
    time: "10-20 Min",
    brief:
      "Checkers is a two-player board game where each player moves their pieces diagonally across a square board, aiming to capture or block all of the opponent's pieces. Players can jump over and capture enemy pieces, and pieces that reach the opposite side of the board are kinged, gaining more movement. The game ends when one player has no legal moves left.",
  };
  const album = [img1, img2, img1, img2, img1];
  const paragraphs = [
    "Checkers, also known as draughts, is a classic two-player board game played on an 8x8 square board. Each player starts with 12 pieces placed on the dark squares of the three rows closest to them. The goal is to move diagonally across the board, capturing the opponent's pieces by jumping over them.",
    "The game is easy to learn but requires careful thinking and strategy. When a piece reaches the far side of the board, it becomes a king and gains the ability to move both forward and backward.",
  ];
  const QA = [
    { q: "Release Date", a: "2025" },
    { q: "Game Type", a: "strategy" },
    { q: "Player Count", a: "2 Players" },
    { q: "Duration", a: "10-20 Minutes" },
    { q: "Languages", a: "American English (EN-US)" },
  ];
  const Rules = [
    { rule:"Players move pieces diagonally on dark squares."},
    { rule:"Regular pieces move forward one space; capturing is done by jumping over opponent pieces."},
    { rule:"Reaching the far end promotes a piece to “King,” allowing it to move backward."},
    { rule:"The game ends when one player has no remaining legal moves."},
  ];

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
