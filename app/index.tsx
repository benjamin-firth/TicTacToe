import { View, StyleSheet } from "react-native";
import Home from "./components/Home";

export default function Index() {
  return (
    <View style={styles.mainWrapper}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
});
