import { useEffect } from "react";
import BG from "./../../../assets/games/chess.jpg";

import img1 from "./../../../assets/games/chess/1.jpg";
import img2 from "./../../../assets/games/chess/2.jpg";
import img3 from "./../../../assets/games/chess/3.jpg";

import SingleGamePage from "./../SingleGamePage";

export default function Chess() {
  useEffect(() => {
      scrollTo({ top: 0, behavior: "smooth" });
    });
  const game = {
    BG,
    name: "Chess",
    type: "Strategy",
    playerCount: "2 Players",
    time: "15-30 Min",
    brief:
      "Chess is a two-player strategy game played on an 8x8 board. Each player aims to checkmate the opponent’s king using 16 pieces with different movements. It's a game of skill, planning, and tactics.",
  };
  const album = [img1, img2, img3, img1, img1];
  const paragraphs = [
    "Chess is a strategic two-player board game that is played on an 8x8 grid. Each player begins with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The objective of the game is to checkmate the opponent's king, meaning the king is under threat of capture and cannot escape.",
    "The game emphasizes tactics, planning, and foresight, with each type of piece moving in distinct ways. Chess is widely regarded as a game of intellect and skill, and it has a rich history dating back over a thousand years, evolving into both a popular recreational activity and a competitive sport worldwide.",
  ];
  const QA = [
    { q: "Release Date", a: "2025" },
    { q: "Game Type", a: "Strategy" },
    { q: "Player Count", a: "2 Players" },
    { q: "Duration", a: "15-30 Minutes" },
    { q: "Languages", a: "American English (EN-US)" },
  ];
  const Rules = [
    { rule:"Each player controls 16 pieces with unique moves: King, Queen, Rooks, Bishops, Knights, and Pawns."},
    { rule:"Players alternate turns moving one piece."},
    { rule:"The goal is to place the opponent's king under attack with no legal escape (checkmate)."},
    { rule:"The game can also end in draw/stalemate under certain conditions."},
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
