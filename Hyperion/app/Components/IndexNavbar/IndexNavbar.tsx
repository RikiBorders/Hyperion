import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './IndexNavbar.styles'

interface NavbarProps {
  selected: 'index' | 'Discovery' | 'Wardrobe' | 'Feedback' | 'Styling'
  onSelect: (page: 'index' | 'Discovery' | 'Wardrobe' | 'Feedback' | 'Styling') => void
}

const navItems = [
  { id: 'wardrobe', label: 'Wardrobe', page: 'Wardrobe' },
  { id: 'discovery', label: 'Discovery', page: 'Discovery' },
  { id: 'index', label: 'Styling', page: 'index' },
  { id: 'styling', label: 'Styling', page: 'Styling' },
  { id: 'feedback', label: 'Feedback', page: 'Feedback' }
] as const

const IndexNavbar: React.FC<NavbarProps> = ({ selected, onSelect }) => {
  return (
    <View style={styles.IndexNavbar}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.button, selected === item.page && styles.selected]}
          onPress={() => onSelect(item.page)}
        >
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}


export default IndexNavbar
