import { StyleSheet, View } from "react-native";
import TicketReceived from "../ui/TicketsReceivedCard";

export default function HomeScreen() {
  /*   const cardItems = [
    {
      title: "Pagar Táxi",
      icon: <Image source={require("@/assets/icons/taxi.png")} />,
      link: "/payment-methods",
    },
    {
      title: "Passagens",
      icon: <Image source={require("@/assets/icons/tickets.png")} />,
      link: "/tickets",
    },
    {
      title: "Carteira",
      icon: <Image source={require("@/assets/icons/wallet.png")} />,
      link: "/wallet",
    },
    {
      title: "Histórico",
      icon: <Image source={require("@/assets/icons/history.png")} />,
      link: "/history",
    },
  ];
 */
  return (
    <View style={style.container}>
      <TicketReceived />

      {/* 
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
      */}
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
    color: "#0D99FF",
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
    color: "#0D99FF",
  },
});
