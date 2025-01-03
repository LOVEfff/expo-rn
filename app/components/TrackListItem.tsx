import { TouchableHighlight, View, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { unknowTrackImageUrl } from '@/constants/images'
import { defaultStyles } from '@/styles'
import { fontSize } from '@/constants/tokens'
import { colors } from '@/constants/tokens'
import { Track, useActiveTrack } from 'react-native-track-player'
import { Image } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'

export type TrackListItemProps = {
	track: Track
	onTrackSelected: (track: Track) => void
}

export const TracksListItem = ({
	track,
	onTrackSelected: handleTrackSelect,
}: TrackListItemProps) => {
	const isActiveTrack = useActiveTrack()?.url === track.url

	return (
		<TouchableHighlight onPress={() => handleTrackSelect(track)}>
			<View style={styles.trackItemContainer}>
				<View>
					{/* <FastImage
						source={{
							uri: track.artwork ?? unknowTrackImageUrl,
							priority: FastImage.priority.normal,
						}}
					/> */}
					<Image
						source={{
							uri: track.artwork ?? unknowTrackImageUrl,
						}}
						style={{ ...styles.trackArtworkImage, opacity: isActiveTrack ? 0.6 : 1 }}
					/>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					{/* title artist */}
					<View>
						<Text
							numberOfLines={1}
							style={{ ...styles.trackTitle, color: isActiveTrack ? colors.primary : colors.text }}
						>
							{track.title}
						</Text>

						{track.artist && (
							<Text numberOfLines={1} style={styles.trackAtistText}>
								{track.artist}
							</Text>
						)}
					</View>

					<Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitle: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		width: '100%',
	},
	trackAtistText: {
		...defaultStyles.text,
		fontSize: 14,
		marginTop: 4,
		color: colors.textMuted,
	},
})
