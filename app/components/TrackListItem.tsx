import { TouchableHighlight, View, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { unknowTrackImageUrl } from '@/constants/images'
import { defaultStyles } from '@/styles'
import { fontSize } from '@/constants/tokens'
import { colors } from '@/constants/tokens'
import { Image } from 'react-native'

export type TrackListItemProps = {
	track: { title: string; image?: string; artist?: string }
}

export const TracksListItem = ({ track }: TrackListItemProps) => {
	const isActiveTrack = false

	return (
		<TouchableHighlight>
			<View style={styles.trackItemContainer}>
				<View>
					<Image
						source={{
							uri: track.image ?? unknowTrackImageUrl,
						}}
						style={{ ...styles.trackArtworkImage, opacity: isActiveTrack ? 0.6 : 1 }}
					/>
				</View>
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
