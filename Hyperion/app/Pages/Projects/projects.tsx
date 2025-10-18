import projectData from '@/app/Components/Cards/CardData'
import ProjectCard from '@/app/Components/Cards/Cards'
import cardStyles from '@/app/Components/Cards/CardStyle'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './projects.styles'

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Our Work</Text>

      <FlatList //FlatList component to render the list of project cards
        style={cardStyles.container}
        data={projectData} 
        renderItem={({item}) => <ProjectCard project={item} />} // renderItem prop to specify how to render each item
        keyExtractor={(item) => item.id.toString()} // keyExtractor prop to provide unique keys for each item
        numColumns={1}
        contentContainerStyle={{ // styling for the content container
          padding: 16,
          gap: 16,
          alignItems: 'stretch',
          minHeight: '100%'
        }}
      />
    </View>
  );
}
