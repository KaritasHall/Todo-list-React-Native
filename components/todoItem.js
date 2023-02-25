import { useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  const handlePress = useCallback(() => {
    pressHandler(item.id);
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
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
