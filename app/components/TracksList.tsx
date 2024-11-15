import { FlatList, FlatListProps, View } from 'react-native'
import library from '@/assets/data/library.json'
import { TracksListItem } from './TrackListItem'
import { utilsStyles } from '@/styles'
export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}></View>
}

export const TracksList = ({ ...flatlistProps }: TracksListProps) => {
	return (
		<FlatList
			data={library}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }: any) => (
				<TracksListItem track={{ ...track, image: track.artwork }} />
			)}
			{...flatlistProps}
		/>
	)
}
