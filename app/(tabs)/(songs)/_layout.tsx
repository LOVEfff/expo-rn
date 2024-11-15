import { StackScreenWithSearchBar } from '@/constants/layout'
import { fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const SongsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Songs',
						headerTitleStyle: { fontWeight: 100 },
					}}
				/>
			</Stack>
		</View>
	)
}

export default SongsScreenLayout
