import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useCallback } from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "water plants", id: "1" },
    { text: "vacuum living room", id: "2" },
    { text: "buy birthday present for dad", id: "3" },
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "Must be over 3 characters", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const renderItem = useCallback(({ item }) => {
    return <TodoItem item={item} pressHandler={pressHandler} />;
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList data={todos} renderItem={renderItem} />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
