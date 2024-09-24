import {
	Roboto_400Regular,
	Roboto_700Bold,
	useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";
import { Loading } from "@components/Loading";

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	return (
		<GluestackUIProvider config={config}>
			<StatusBar barStyle="light-content" />
			{!fontsLoaded ? (
				<Center flex={1} bg="$gray700">
					<Text>Home</Text>
				</Center>
			) : (
				<Loading />
			)}
		</GluestackUIProvider>
	);
}
