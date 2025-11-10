
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import IndexNavbar from './Components/IndexNavbar/IndexNavbar'
import styles from './index.styles'
import Discovery from './Pages/Discovery/Discovery'
import Feedback from './Pages/Feedback/Feedback'
import Projects from './Pages/Projects/projects'
import Wardrobe from './Pages/Wardrobe/Wardrobe'

export default function Index() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState<'index' | 'projects' | 'Discovery' | 'Wardrobe' | 'Feedback' | 'Styling'>('index')

  return (
    <View style={{ flex: 1 }}>
      {/* <Navbar selected={page} onSelect={setPage} /> */}
      
      {page === 'index' ? (
        <View style={styles.CenterContainer}>
          <Text style={styles.title}>Stylist</Text>
          <IndexNavbar selected={page} onSelect={setPage} />
        </View>
      ) : page === 'Discovery' ? (
        <Discovery />
      ) : page === 'Wardrobe' ? (
        <Wardrobe />
      ) : page === 'Feedback' ? (
        <Feedback />
      ) : page === 'Styling' ? (
        <Projects />
      ) : (
        <Projects />
      )}
    </View>
  )
}
