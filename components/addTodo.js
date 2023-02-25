import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState, useCallback } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

// This component is a form that allows the user to add a new task to the list.
// It has a text input and a button.

export default function AddTodo({ submitHandler }) {
  const [text, SetText] = useState("");
  // The changeHandler function is used to update the state of the component when the user types in the input.
  const changeHandler = useCallback((val) => {
    SetText(val);
  }, []);
  // The handleSubmit function is used to call the submitHandler function that is passed down from the parent component.
  const handleSubmit = useCallback(() => {
    submitHandler(text);
  }, [text, submitHandler]);

  return (
    <View accessible={true}>
      <TextInput
        accessibilityLabel="input"
        style={styles.input}
        placeholder="new task..."
        onChangeText={changeHandler}
      />
      {/* The pressable component is used instead of the button component because
      the button component is not available on all platforms.*/}
      <Pressable
        style={styles.addButton}
        onPress={handleSubmit}
        accessibilityLabel="Add task to list pink button"
      >
        <Text style={styles.buttonTitle}>Add task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  addButton: {
    backgroundColor: "salmon",
    padding: 18,
    borderRadius: 2,
    marginTop: 4,
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
});
