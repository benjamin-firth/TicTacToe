import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Welcome to React-Native</Text>
      <Text style={styles.para}>
        This is your first React Native Program Geek!!!
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "white",
  },
  paragraph: {
    marginTop: "40%",
    marginLeft: 20,
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  para: {
    marginLeft: 20,
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
  },
});
