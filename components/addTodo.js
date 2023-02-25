import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState, useCallback } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function AddTodo({ submitHandler }) {
  const [text, SetText] = useState("");

  const changeHandler = useCallback((val) => {
    SetText(val);
  }, []);

  const handleSubmit = useCallback(() => {
    submitHandler(text);
  }, [text, submitHandler]);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new task..."
        onChangeText={changeHandler}
      />
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
