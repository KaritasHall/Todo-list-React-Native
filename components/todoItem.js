import { useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// This component is used to display a single task in the list.
export default function TodoItem({ item, pressHandler }) {
  // The handlePress function is used to call the pressHandler function that is passed down from the parent component.
  // The useCallback hook is used to prevent the function from being recreated on every render.
  const handlePress = useCallback(() => {
    pressHandler(item.id);
  }, []);

  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Tap to delete"
      onPress={handlePress}
    >
      <View style={styles.item}>
        <Ionicons name="md-trash" size={18} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
