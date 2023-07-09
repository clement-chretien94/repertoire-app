import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Word = ({...props}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('WordDetails', {definition: props.definition, title: props.title, id: props.id, data: props.data, setData: props.setData})}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.defText} numberOfLines={2}>{props.definition}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFF',
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    title: {
        fontSize: 16,
    },
    defText: {
        fontSize: 14,
        color: '#49454F'
    }
});

export default Word;