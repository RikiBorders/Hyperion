import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './CardStyle';
// Defining TypeScript type (blueprint) that describes what a single project object
// must look like.
type Project = {
    id: number;
    title: string;
    description: string;
    image: any;
};

// Descibing the props that ProjectCard component will receive
// what data you hand into the component
type Props = {
    project: Project;
};

// creating default module for project card to display it
export default function ProjectCard({project}: Props) {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={project.image} style={styles.image} />
            <Text style={styles.title}>{project.title}</Text>
            <Text style={styles.desc}>{project.description}</Text>
        </TouchableOpacity>
    );
}