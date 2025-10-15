import React from 'react'
import {
	Modal as RNModal,
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Dimensions,
	Platform,
} from 'react-native'

interface ModalProps {
    // control modal visibility
	visible: boolean
    // close modal callback
	onRequestClose?: () => void
	/** width: number (pixels) or string percentage like '80%' */
	horizontal?: number | string
	/** height: number (pixels) or string percentage like '50%' */
	vertical?: number | string
	children?: React.ReactNode
	transparent?: boolean
	animationType?: 'none' | 'slide' | 'fade'
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

/**
 * Very generic modal component.
 * - `horizontal` and `vertical` accept either number (pixels) or percentage strings like '80%'.
 * - Clicking the backdrop will call `onRequestClose` if provided.
 */
const GenericModal: React.FC<ModalProps> = ({
	visible,
	onRequestClose,
	horizontal = '80%',
	vertical = '50%',
	children,
	transparent = true,
	animationType = 'fade',
}) => {
	const resolveSize = (value: number | string, axis: 'width' | 'height') => {
		if (typeof value === 'number') {
			// clamp numeric sizes to viewport with some padding
			if (axis === 'width') return Math.min(value, SCREEN_WIDTH - 40) // TODO: break screenwidth-40 in to a constant
			return Math.min(value, SCREEN_HEIGHT - (Platform.OS === 'ios' ? 120 : 100))
		}

		// assume string like '80%' or other valid RN dimension string
		return value
	}

	const containerStyle = {
		width: resolveSize(horizontal, 'width') as any,
		height: resolveSize(vertical, 'height') as any,
	}

	return (
		<RNModal
			visible={visible}
			transparent={transparent}
			animationType={animationType}
			onRequestClose={onRequestClose}
		>
			<View style={styles.backdrop}>
				{/* Backdrop touch area to close modal */}
				<TouchableWithoutFeedback onPress={onRequestClose}>
					<View style={styles.flexFill} />
				</TouchableWithoutFeedback>

				<View style={[styles.modal, containerStyle]} accessibilityViewIsModal accessibilityLabel="Modal Dialog">
					{children}
				</View>

				{/* Extra flex to allow backdrop to fill remaining area */}
				<View style={styles.flexFill} />
			</View>
		</RNModal>
	)
}

export default GenericModal

const styles = StyleSheet.create({
	backdrop: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	flexFill: {
		flex: 1,
		width: '100%',
	},
	modal: {
		backgroundColor: '#fff',
		borderRadius: 8,
		overflow: 'hidden',
		// Keep modal from exceeding the viewport when percentage sizes or large numbers are used
		maxWidth: '95%',
		maxHeight: '95%',
		// Elevation/shadow
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
	},
})
