import { Tabs } from 'expo-router'
import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { StyleSheet, View } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons'

const TabNavigation = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500',
				},
				tabBarStyle: {
					position: 'absolute',
					borderColor: 'black',
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					height: 60,
				},
				headerShown: false,
				tabBarBackground: () => (
					<View
						style={{
							flex: 1,
							backgroundColor: '#1d1212',
							borderTopLeftRadius: 25,
							borderTopRightRadius: 25,
							overflow: 'hidden',
						}}
					>
						<BlurView
							intensity={95}
							style={{
								flex: 1,
								backgroundColor: 'transparent',
							}}
						/>
					</View>
				),
			}}
		>
			<Tabs.Screen
				name="favorites"
				options={{
					title: 'Fvorites',
					tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					title: 'Playlists',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="playlist-play" size={28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
					tabBarIcon: ({ color }) => (
						<Ionicons name="musical-notes-sharp" size={20} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="artists"
				options={{
					title: 'Artists',
					tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} />,
				}}
			/>
		</Tabs>
	)
}
export default TabNavigation
