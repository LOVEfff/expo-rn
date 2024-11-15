import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

const RootNacigate = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}

export default function App() {
	return (
		<SafeAreaProvider>
			<RootNacigate />
			<StatusBar />
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		maxWidth: 960,
		marginHorizontal: 'auto',
	},
	title: {
		fontSize: 64,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 36,
		color: '#38434D',
	},
})
