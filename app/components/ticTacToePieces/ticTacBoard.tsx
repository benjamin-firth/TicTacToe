import { View, StyleSheet, Text, Button } from "react-native";
import TicTacSquare from "./ticTacSquare";
import { useState } from "react";

export default function TicTacBoard() {
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [playerXResults, setPlayerXResults] = useState<number[]>([]);
  const [playerOResults, setPlayerOResults] = useState<number[]>([]);
  const [isWon, setIsWon] = useState(false);
  const [clearGame, setClearGame] = useState(false);

  const winningResults = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9],
  ];

  const checkForWin = (playerResults: number[]) => {
    if (playerResults.length < 3) return false;

    return winningResults.some((winningCombo) =>
      winningCombo.every((el) => playerResults.includes(el))
    );
  };

  const pressHandler = (squareId: number) => {
    const newPlayerResults = isPlayerX
      ? [...playerXResults, squareId]
      : [...playerOResults, squareId];

    if (isPlayerX) {
      setPlayerXResults(newPlayerResults);
    } else {
      setPlayerOResults(newPlayerResults);
    }

    const isWinner = checkForWin(newPlayerResults);
    if (isWinner) {
      setIsWon(true);
      return;
    }

    setIsPlayerX(!isPlayerX);
  };

  const resetGame = () => {
    setPlayerXResults([]);
    setPlayerOResults([]);
    setIsPlayerX(true);
    setIsWon(false);
    setClearGame(true);
    setTimeout(() => setClearGame(false), 100); // Reset the board squares
  };

  return (
    <View style={styles.homeWrapper}>
      <Text style={styles.titleText}>
        Current Player: {isPlayerX ? "Player X" : "Player O"}
      </Text>
      <View style={styles.rowWrapper}>
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(1)}
          clearGame={clearGame}
        />
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(2)}
          clearGame={clearGame}
        />
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(3)}
          clearGame={clearGame}
        />
      </View>
      <View style={styles.rowWrapper}>
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(4)}
          clearGame={clearGame}
        />
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(5)}
          clearGame={clearGame}
        />
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(6)}
          clearGame={clearGame}
        />
      </View>
      <View style={styles.rowWrapper}>
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(7)}
          clearGame={clearGame}
        />
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(8)}
          clearGame={clearGame}
        />
        <TicTacSquare
          isPlayerX={isPlayerX}
          pressHandler={() => pressHandler(9)}
          clearGame={clearGame}
        />
      </View>
      {isWon && (
        <View>
          <Text style={styles.titleText}>
            {isPlayerX ? "Player X" : "Player O"} Wins!
          </Text>
          <Button onPress={resetGame} title={"Clear Board"} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  homeWrapper: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    paddingTop: "20%",
  },
  rowWrapper: {
    flexDirection: "row",
  },
  titleText: {
    fontSize: 18,
    marginBottom: "25%",
  },
});
