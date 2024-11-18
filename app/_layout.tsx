import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Stack, SplashScreen } from 'expo-router'
import { useCallback } from 'react'
import { useTrackPlayerEvents } from 'react-native-track-player'
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState'

SplashScreen.preventAutoHideAsync()

const RootNacigate = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}

export default function App() {
	useLogTrackPlayerState()
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})

	return (
		<SafeAreaProvider>
			<RootNacigate />
			<StatusBar />
		</SafeAreaProvider>
	)
}
