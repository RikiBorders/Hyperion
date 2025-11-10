
import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import Navbar from './Components/Navbar/Navbar'
import styles from './index.styles'
import Projects from './Pages/Projects/projects'

export default function Index() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState<'index' | 'projects'>('index')

  return (
    <View style={{ flex: 1 }}>
      <Navbar selected={page} onSelect={setPage} />
      {page === 'index' ? (
        <View style={styles.container}>
          <Text style={styles.title}>Modal demo</Text>
          <Button title="Open Modal" onPress={() => setOpen(true)} />
        </View>
      ) : (
        <Projects />
      )}
    </View>
  )
}
