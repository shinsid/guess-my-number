import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

import Colors from "../constants/colors";

function GameScreen() {
  return (
    <View>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower</Text>
      </View>
      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
