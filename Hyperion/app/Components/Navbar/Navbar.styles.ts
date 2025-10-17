import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  selected: {
    backgroundColor: '#d0e6ff',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
})

export default styles
