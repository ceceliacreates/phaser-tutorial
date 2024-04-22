export interface GameScoresProvider {
    gameScores: number[];
    addGameScore: (score: number) => void;
  }