import { Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const resolveImageSize = (dimension: 'width' | 'height') => {
    const baseWidth = Math.min(SCREEN_WIDTH - 32, 800) // max width of 800, accounting for padding
    if (dimension === 'width') return baseWidth
    // For height, maintain 16:9 aspect ratio but cap at 60% of screen height
    const calculatedHeight = (baseWidth * 9) / 16
    return Math.min(calculatedHeight, SCREEN_HEIGHT * 0.6)
}

const cardStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    card: {
        backgroundColor: '#F7F9FB',
        borderRadius: 12,
        padding: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    image: {
        width: resolveImageSize('width'),
        height: resolveImageSize('height'),
        marginBottom: 12,
        resizeMode: 'cover',
        borderRadius: 8,
        alignSelf: 'center',
    },
    title: {
        fontSize: 20, fontWeight: 'bold', color: '#0F172A', marginHorizontal: 12,
        marginTop: 12
    },
    desc: {
        fontSize: 14, lineHeight: 20, color: '#64748B', marginHorizontal: 12,
        marginTop: 12
    },
});

export default cardStyles;