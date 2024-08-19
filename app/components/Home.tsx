import { Text, View, StyleSheet } from "react-native";
import TicTacBoard from "./ticTacToePieces/ticTacBoard";

export default function Home() {
  return (
    <View style={styles.homeWrapper}>
      <TicTacBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  homeWrapper: {
    alignItems: "center",
    flex: 1,
  },
});
