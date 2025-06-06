import { Image, StyleSheet, Text, View } from "react-native"

export default function TicketReceived() {

	return (
		<View style={style.mainCard}>
			<Image source={require("@/assets/icons/tickets-received.png")} style={style.cardImage} />
			<Text style={style.mainCardTitle}>10 Passagens Recebidas</Text>
			<Text style={style.date}>
				{new Date().toLocaleDateString("pt-BR", {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</Text>
		</View>
	)
}

const style = StyleSheet.create({
	cardImage: {
		width: 100,
		height: 80,
		objectFit: "contain"
	},
	mainCard: {
		width: "100%",
		height: "46%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 18,
		backgroundColor: "#fff",
		paddingVertical: 12,
		paddingHorizontal: 24,
		shadowColor: "#000",
		gap: 8,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.05,
		shadowRadius: 4,
		elevation: 5,
		padding: 8,
	},
	mainCardTitle: {
		fontSize: 20,
		fontWeight: 600,
	},
	date: {
		fontSize: 16
	}
})
