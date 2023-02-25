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
  // The todos state is used to store the list of tasks
  // These could be stored in a database instead
  const [todos, setTodos] = useState([
    { text: "water plants", id: "1" },
    { text: "vacuum living room", id: "2" },
    { text: "buy birthday present for dad", id: "3" },
  ]);

  // The pressHandler function is used to delete a task from the list.
  // The useCallback hook is used to prevent the function from being recreated on every render.
  const pressHandler = useCallback((id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }, []);

  // The submitHandler function is used to add a new task to the list.
  // The Alert.alert function is used to display an alert to the user if the task is less than 3 characters.
  const submitHandler = useCallback((text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "Must be over 3 characters", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  }, []);

  // The renderItem function is used to render a single task in the list.
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
