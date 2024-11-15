import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
import { StackScreenWithSearchBar } from '@/constants/layout'

const PlayListsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'PlayLists' }}
				/>
			</Stack>
		</View>
	)
}

export default PlayListsScreenLayout
