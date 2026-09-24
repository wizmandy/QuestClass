import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View>
      <View>
        <Text>Minha Jornada</Text>
      </View>
      <View style={styles.row}>
        <Text>Lyra</Text>
        <Text>Lvl 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    gap: 12,
  },
});