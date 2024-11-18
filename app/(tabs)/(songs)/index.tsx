import React, { useMemo } from 'react'
import { defaultStyles } from '@/styles'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TracksList } from 'app/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { trackTitleFilter } from '@/helps/filter'
import library from '@/assets/data/library.json'

export default function SongsScreen() {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songssss',
		},
	})

	const filteredTracks = useMemo(() => {
		if (!search) return library

		return library.filter(trackTitleFilter(search))
	}, [search, library])
	return (
		<SafeAreaView style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList tracks={filteredTracks} scrollEnabled={false} />
			</ScrollView>
		</SafeAreaView>
	)
}
