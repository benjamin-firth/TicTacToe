import { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

interface TicTacSquareProps {
  isPlayerX: boolean;
  pressHandler: () => void;
  clearGame: boolean;
}

export default function TicTacSquare({
  isPlayerX,
  pressHandler,
  clearGame,
}: TicTacSquareProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [squareText, setSquareText] = useState(" ");

  useEffect(() => {
    if (clearGame) {
      setSquareText(" ");
      setIsPressed(false);
    }
  }, [clearGame]);

  const getSquareText = () => (isPlayerX ? "X" : "O");

  const cellPressHandler = () => {
    if (isPressed) return;

    setIsPressed(true);
    setSquareText(getSquareText());
    pressHandler();
  };

  return (
    <Pressable onPressOut={cellPressHandler} style={styles.cellWrapper}>
      <Text>{squareText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cellWrapper: {
    margin: 20,
    width: 50,
    height: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
