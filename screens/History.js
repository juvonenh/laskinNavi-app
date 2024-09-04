import { StyleSheet, Text, View, FlatList } from "react-native";

export default function History({ route }) {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.historyList}>
        <Text style={styles.textStyle}>History</Text>
        <FlatList
          data={[...history].reverse()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.textStyle}>{item.key}</Text>
          )}
          ListEmptyComponent={<Text>No data</Text>}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
  },
  historyList: {
    marginTop: 30,
    alignItems: "center",
  },
});
