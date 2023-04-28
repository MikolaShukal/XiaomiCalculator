import { Animated, StyleSheet, Text, View } from "react-native";
import NumberButton from "./components/NumberButton";
import { useEffect, useRef, useState } from "react";
import btn from "./components/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",

    justifyContent: "flex-end",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    width: "100%",
    flexWrap: "wrap",
    marginBottom: 35,
  },
});

export default function App() {
  const [equation, setEquation] = useState("0");
  const [result, setResult] = useState("");
  const [act, setAct] = useState(true);
  const buttons = btn;

  const animate_state = {
    start: 0,
    end: 100,
  };

  const animationValue = useRef(
    new Animated.Value(animate_state.start)
  ).current;

  const equals = () => {
    Animated.timing(animationValue, {
      toValue: animate_state.end,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  const inputRange = Object.values(animate_state);
  const fontSize = animationValue.interpolate({
    inputRange,
    outputRange: [30, 50],
  });
  const color = animationValue.interpolate({
    inputRange,
    outputRange: ["#8c8c8c", "white"],
  });

  const handleKeyboard = (value, id) => {
    switch (id) {
      case 1:
        setEquation("0");
        setResult();
        animationValue.setValue(animate_state.start);
        break;
      case 2:
        setEquation(equation.slice(0, -1));
        break;
      case 5:
      case 6:
      case 7:
      case 9:
      case 0:
      case 10:
      case 12:
      case 13:
      case 14:
      case 17:
        equation === "0"
          ? setEquation("" + value)
          : setEquation(equation + value);
        setAct(true);
        setResult("");
        break;
      case 15:
        act ? setEquation(equation + "+") : null;
        setAct(false);
        break;
      case 19:
        equals();
        break;
      case 11:
        act ? setEquation(equation + "-") : null;
        setAct(false);
        break;
      case 8:
        act ? setEquation(equation + "*") : null;
        setAct(false);
        break;
      case 4:
        act ? setEquation(equation + "/") : null;
        setAct(false);
        break;
    }
  };

  useEffect(() => {
    if (equation.length > "0" && equation !== "0") {
      buttons[0].value = "C";
    } else {
      buttons[0].value = "AC";
    }
  }, [equation]);

  useEffect(() => {
    setResult(eval(equation));
  }, [result]);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "flex-end",
          marginHorizontal: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: "#8c8c8c",
        }}
      >
        <Animated.Text
          style={{ color: "white", fontSize: 50, marginBottom: 20 }}
        >
          {equation}
        </Animated.Text>
        {result ? (
          <Animated.Text style={{ color, fontSize, marginBottom: 20 }}>
            ={result}
          </Animated.Text>
        ) : null}
      </View>
      <View style={styles.btn}>
        {buttons.map((item) => (
          <NumberButton
            value={item.value}
            stl={item.stl}
            handleKeyboard={handleKeyboard}
            id={item.id}
          />
        ))}
      </View>
    </View>
  );
}
