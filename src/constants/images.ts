import unknowArtistImage from '@/assets/unknown_artist.png'
import unknowTrackImage from '@/assets/unknown_track.png'

import { Image } from 'react-native'

export const unknowArtistImageUrl = Image.resolveAssetSource(unknowArtistImage).uri
export const unknowTrackImageUrl = Image.resolveAssetSource(unknowTrackImage).uri
