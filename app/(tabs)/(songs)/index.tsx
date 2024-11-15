import { View, Text } from 'react-native'
import { defaultStyles } from '@/styles'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TracksList } from 'app/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
export default function SongsScreen() {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

	return (
		<SafeAreaView style={defaultStyles.container}>
			{search}
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</SafeAreaView>
	)
}
