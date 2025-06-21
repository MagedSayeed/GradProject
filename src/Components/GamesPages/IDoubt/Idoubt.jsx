import { useEffect } from "react";
import BG from "./../../../assets/games/idoubt.jpg";

import img1 from "./../../../assets/games/idoubt/Idoubt.png";


import SingleGamePage from "./../SingleGamePage";

export default function Idoubt() {
  useEffect(() => {
      scrollTo({ top: 0, behavior: "smooth" });
    });
  const game = {
    BG,
    name: "I Doubt It",
    type: "Trivia",
    playerCount: "4 Players",
    time: "20 Min",
    brief:
      "I Doubt It is a multiplayer bluffing card game. Players take turns placing cards face down while declaring their rank, and others can challenge the truthfulness by saying I doubt it. The goal is to get rid of all your cards by outsmarting or deceiving opponents.",
  };
  const album = [img1, img1, img1, img1, img1];
  const paragraphs = [
    "I Doubt It, also commonly known as BS, is a popular bluffing card game played with a standard deck of cards. It is best enjoyed in a group and thrives on deception, quick thinking, and the ability to read other players. The game's simple rules and unpredictable outcomes make it a favorite at parties and casual gatherings.",
    "The objective of I Doubt It is to be the first player to discard all of your cards by placing them face down and declaring their rank — truthfully or not. Other players can challenge the move by calling out “I doubt it.” If the challenge reveals a lie, the bluffer picks up the pile; if not, the challenger does. The fun lies in the constant mind games and bold bluffs that define each round.",
  ];
  const QA = [
    { q: "Release Date", a: "2025" },
    { q: "Game Type", a: "Bluffing" },
    { q: "Player Count", a: "4 Players" },
    { q: "Duration", a: "25 Minutes" },
    { q: "Languages", a: "American English (EN-US)" },
  ];
  const Rules = [
    { rule:"Players take turns placing cards face down while announcing a rank (e.g., “two 5s”)."},
    { rule:"Other players may call I Doubt It if they suspect a bluff."},
    { rule:"If the challenge is correct, the bluffer picks up the entire pile; if incorrect, the challenger picks up the pile."},
    { rule:"First player to discard all cards wins."},
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
