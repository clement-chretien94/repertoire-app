import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const WordDetails = ({route}) => {
    const navigation = useNavigation();
    const { title, definition, id, initIsEdit, data, setData } = route.params;
    navigation.setOptions({ title: title })

    const [isEdit, setEdit] = React.useState(initIsEdit);
    const [value, onChangeText] = React.useState(definition);

    console.log(data.find(word => word.id === id));
    console.log("Element créer (WordDetails) : " + data.find(word => word.id === id).title);

    useFocusEffect(
        useCallback(() => {
        // Do something when the screen is focused
        navigation.getParent().setOptions({ headerShown: false})
        return () => {
            // Do something when the screen is unfocused
            navigation.getParent().setOptions({ headerShown: true})
        };
        }, [])
    )

    const handleSave = () => {
        setEdit(false);
        setData(data.map(word => {   
            if (word.id === id) {
                word.definition = value;
            }
            return word;
        }));
    }

    const handleDelete = () => {
        setData(data.filter(word => word.id !== id));
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {isEdit ? <TextInput placeholder='Enter the definition' style={styles.definition} value={value} onChangeText={text => onChangeText(text)} multiline /> : <Text style={styles.definition}>{value}</Text>}

            {isEdit ? <Button color="#a4c936" title="Save" onPress={handleSave} /> : <Button title="Edit" onPress={() => setEdit(true)} />}
            <Button color="#C90000" title="Delete" onPress={handleDelete} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        color: 'red',
    },
    definition: {
        padding: 16,
    }
});

export default WordDetails;