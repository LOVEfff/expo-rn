import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from './tokens'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerStyle: {
		backgroundColor: colors.background,
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerTransparent: false,
	headerBlurEffect: 'prominent',
	headerShadowVisible: false,
}
