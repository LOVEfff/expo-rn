import { FlatList, FlatListProps, View } from 'react-native'
import { TracksListItem } from './TrackListItem'
import { utilsStyles } from '@/styles'
export type TracksListProps = Partial<FlatListProps<unknown>> & {
	tracks: any[]
}

const ItemDivider = () => {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}></View>
}

export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
	const handleOnTrackSelected = () => {}
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			renderItem={({ item: track }: any) => (
				<TracksListItem
					track={{ ...track, image: track.artwork }}
					onTrackSelected={handleOnTrackSelected}
				/>
			)}
			{...flatlistProps}
		/>
	)
}
