import { useEffect } from "react";
import BG from "./../../../assets/games/UNObg.webp";

import img1 from "./../../../assets/games/oldmaid/oldmaid.png";

import SingleGamePage from "./../SingleGamePage";

export default function UNO() {
  useEffect(() => {
      scrollTo({ top: 0, behavior: "smooth" });
    });
  const game = {
    BG,
    name: "UNO",
    type: "Shedding / Matching",
    playerCount: "2-10 Players",
    time: "15-30 Minutes",
    brief:
      "UNO is a fast-paced card game where players match colors or numbers to get rid of their cards. The game includes special cards like Skip, Reverse, and Wild that add fun twists. The first player to play all their cards wins, but don't forget to shout “UNO” when you're down to one card!",
  };
  const album = [img1, img1, img1, img1, img1];
  const paragraphs = [
    "UNO is a fun card game where players match cards by color or number. The goal is to get rid of all your cards first.",
    "Special cards like Skip, Reverse, and Wild add twists to the game. They can change the direction or make others draw cards.",
    "It's fast, easy to learn, and great for groups. Just don't forget to say “UNO” when you have one card left!",
  ];
  const QA = [
    { q: "Release Date", a: "2025" },
    { q: "Game Type", a: "Shedding / Matching" },
    { q: "Player Count", a: "2-10 Players" },
    { q: "Duration", a: "15-30 Minutes" },
    { q: "Languages", a: "American English (EN-US)" },
  ];
  const Rules = [
    { rule:"Each player is dealt 7 cards."},
    { rule:"Match the top card in the discard pile by color or number."},
    { rule:"Special cards include Skip, Reverse, Draw Two, Wild, and Wild Draw Four."},
    { rule:"Say UNO when playing your second-to-last card."},
    { rule:"First to discard all cards wins the round."},
    { rule:"Points are awarded based on opponents remaining cards."},
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
