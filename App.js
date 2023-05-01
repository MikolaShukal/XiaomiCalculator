import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
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
  const [storage, setStorage] = useState([]);
  const [completed, setCompleted] = useState(false);
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
  const encrease = animationValue.interpolate({
    inputRange,
    outputRange: [30, 50],
  });
  const decrease = animationValue.interpolate({
    inputRange,
    outputRange: [50, 30],
  });
  const color = animationValue.interpolate({
    inputRange,
    outputRange: ["#8c8c8c", "white"],
  });

  const handleStorage = (eq, res, value) => {
    let val = `${eq}\n=${res}`;
    if (completed && equation !== "0") {
      setStorage([...storage, val]);
      value !== undefined ? setEquation("" + value) : null;
      animationValue.setValue(animate_state.start);
    }
    setCompleted(false);
  };

  const clearBoard = () => {
    setEquation("0");
    setResult();
    animationValue.setValue(animate_state.start);
    if (equation === "0") {
      setStorage([]);
    }
  };

  const numberButtonPress = (value) => {
    if (equation === "0") {
      setEquation(value);
    } else {
      setEquation(equation + value);
    }
    setAct(true);
    setResult("");
    handleStorage(equation, result, value);
  };

  const deleteOne = () => {
    if (!completed) {
      if (equation === "0" || equation.length <= 1) {
        setEquation("0");
        setResult(null);
      } else {
        setEquation(equation.slice(0, -1));
        setResult(equation.slice(0, -1));
      }
    }
  };

  const continueEquation = (el) => {
    if (completed) {
      setEquation(result + el);
      handleStorage(equation, result);
    }
  };

  const handlePersent = () => {
    let persent = equation / 100;
    setEquation(persent);
    setResult(persent);
  };

  const handleKeyboard = (value, id) => {
    switch (id) {
      case 1:
        clearBoard();
        break;
      case 2:
        deleteOne();
        break;
      case 3:
        handlePersent();
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
        numberButtonPress(value);
        break;
      case 15:
        act ? setEquation(equation + "+") : null;
        continueEquation("+");
        setAct(false);
        break;
      case 19:
        equation === "0" ? null : equals();
        setCompleted(true);
        break;
      case 11:
        act ? setEquation(equation + "-") : null;
        continueEquation("-");
        setAct(false);
        break;
      case 8:
        act ? setEquation(equation + "*") : null;
        continueEquation("*");
        setAct(false);
        break;
      case 4:
        act ? setEquation(equation + "/") : null;
        continueEquation("/");
        setAct(false);
        break;
      case 18:
        act ? setEquation(equation + ".") : null;
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
    try {
      setResult(eval(equation));
    } catch (error) {
      setResult(equation.slice(0, -1));
      setAct(false);
    }
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
        {storage?.map((item, index) => {
          return (
            <Text
              key={index.toString()}
              style={{
                color: "#8c8c8c",
                fontSize: 20,
                marginBottom: 20,
                flexDirection: "column-reverse",
                alignItems: "flex-end",
              }}
            >
              {item}
            </Text>
          );
        })}

        <Animated.Text
          style={{ color: "white", fontSize: decrease, marginBottom: 20 }}
        >
          {equation}
        </Animated.Text>
        {result ? (
          <Animated.Text
            style={{ color, fontSize: encrease, marginBottom: 20 }}
          >
            ={result}
          </Animated.Text>
        ) : null}
      </View>
      <View style={styles.btn}>
        {buttons.map((item) => (
          <NumberButton
            key={item.id}
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
