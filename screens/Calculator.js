import { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Calculator({ navigation }) {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const initialFocus = useRef(null);

  const addNum = () => {
    const currentResult = parseInt(firstNum) + parseInt(secondNum);
    setResult(currentResult);
    addHistory("+", currentResult);
    setFirstNum("");
    setSecondNum("");
    initialFocus.current.focus();
  };

  const subtractNum = () => {
    const currentResult = parseInt(firstNum) - parseInt(secondNum);
    setResult(currentResult);
    addHistory("-", currentResult);
    setFirstNum("");
    setSecondNum("");
    initialFocus.current.focus();
  };

  const addHistory = (operator, currentResult) => {
    const operation = `${firstNum} ${operator} ${secondNum} = ${currentResult}`;
    setHistory([...history, { key: operation }]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Result: {result}</Text>
      </View>
      <TextInput
        style={styles.input}
        ref={initialFocus}
        onChangeText={(firstNum) => setFirstNum(firstNum)}
        value={firstNum}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={(secondNum) => setSecondNum(secondNum)}
        value={secondNum}
        keyboardType="numeric"
      ></TextInput>
      <View style={styles.operators}>
        <Button onPress={addNum} title="+" />
        <Button onPress={subtractNum} title="-" />
        <Button
          title="History"
          onPress={() => navigation.navigate("History", { history })}
        />
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
  input: {
    borderColor: "grey",
    borderWidth: 1,
    width: "50%",
    margin: 5,
    padding: 5,
  },
  textStyle: {
    fontSize: 20,
  },
  operators: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
