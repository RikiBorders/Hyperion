import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  CenterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flexDirection: 'row',
    gap: 300, // Customizable gap between elements
  },
  title: {
    fontSize: 20,
  },
  modalContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 12,
  },
})

export default styles
