import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TicketReceived from "../ui/TicketsReceivedCard";

export default function HomeScreen() {
  const cardItems = [
    {
      title: "Receber Pagamento",
      icon: <Image source={require("../../assets/icons/qr-to-receive.png")} />,
      link: "/qr-generator",
    },
    {
      title: "Carteira",
      icon: <Image source={require("../../assets/icons/wallet-linear.png")} />,
      link: "/wallet",
    },
    {
      title: "Ler QR e Receber",
      icon: <Image source={require("../../assets/icons/qr-scan.png")} />,
      link: "/qr-receipt",
    },
    {
      title: "Histórico",
      icon: <Image source={require("../../assets/icons/history.png")} />,
      link: "/history",
    },
  ];

  return (
    <View style={style.container}>
      <TicketReceived />

      <View style={style.cardsContainer}>
        {cardItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={style.card}
            onPress={() => router.push(item.link as any)}>
            {item.icon}
            <Text style={style.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  cardsContainer: {
    height: "48%",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "48%",
    height: "50%",
    backgroundColor: "#fff",
    gap: 6,
    padding: 8,
    color: "#0022FF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#0022FF",
  },
});
