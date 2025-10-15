
import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import styles from './index.styles'
import GenericModal from './Components/Modal/Modal'
import Navbar from './Components/Navbar/Navbar'
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

          <GenericModal
            visible={open}
            onRequestClose={() => setOpen(false)}
            horizontal={'85%'}
            vertical={300}
            animationType="slide"
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>This is a demo modal.</Text>
              <Button title="Close" onPress={() => setOpen(false)} />
            </View>
          </GenericModal>
        </View>
      ) : (
        <Projects />
      )}
    </View>
  )
}
