import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MenuButton({
  icon,
  title,
  link,
}: {
  icon: React.JSX.Element;
  title?: string;
  link: string;
}) {
  return (
    <TouchableOpacity
      onPress={() => router.push(link as any)}
      style={style.card}>
      {icon}
      {title && <Text style={style.cardTitle}>{title}</Text>}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "48%",
    minHeight: 125,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 16,
    justifyContent: "center",
    gap: 6,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
  },
});
