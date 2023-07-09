import {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity, View, Text, TextInput, Button, Modal, StyleSheet} from 'react-native';
import AddLogo from '../../assets/AddLogo.svg'
import { set } from 'react-native-reanimated';

const AddButton = ({data, setData}) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const [effect, setEffect] = useState(false);

    useEffect(() => {
        if(effect) {
            console.log("Titre Element créer (useEffect) : " + data.find(word => word.id === data.length-1).title);
            onChangeText('');
            navigation.navigate('WordDetails', {definition: '', title: value, id: data.length-1, initIsEdit: true, data: data, setData: setData});
            setEffect(false);
        }
    }, [data]);

    const handleAdd = () => {
        setModalVisible(!modalVisible);
        setEffect(true);
        setData([...data, {title: value, definition: '', id: data.length}]);
    }

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <AddLogo width={16} height={16}/>
            </TouchableOpacity>
            <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{backgroundColor: 'white', borderRadius: 16, padding: 24, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4, elevation: 5}}>
                        <Text>Which definition do you want to create?</Text>
                        <TextInput style={{borderBottomWidth: 1, borderBottomColor: '#0059C9', width: 200, marginVertical: 16}} placeholder="Word" value={value} onChangeText={text => onChangeText(text)}/>
                        <Button title="Create" onPress={handleAdd} />
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0059C9',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderRadius: 16,
        bottom: 16,
        right: 16
    },
});

export default AddButton;