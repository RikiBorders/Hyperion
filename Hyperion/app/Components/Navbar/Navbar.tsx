import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Navbar.styles'

interface NavbarProps {
  selected: 'index' | 'projects'
  onSelect: (page: 'index' | 'projects') => void
}

const Navbar: React.FC<NavbarProps> = ({ selected, onSelect }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={[styles.button, selected === 'index' && styles.selected]}
        onPress={() => onSelect('index')}
      >
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selected === 'projects' && styles.selected]}
        onPress={() => onSelect('projects')}
      >
        <Text style={styles.text}>Projects</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar
