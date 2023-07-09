import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Word from '../../components/Word/Word';
import AddButton from '../../components/AddButton/AddButton';

const DefinitionList = ({data, setData}) => {

    const sliceByLetter = (letter) => {
        // return data.filter(word => word.title[0] === letter);
        return data.sort((a, b) => a.title.localeCompare(b.title)).filter(word => word.title[0].normalize("NFD").replace(/\p{Diacritic}/gu, "").toUpperCase() === letter);
    }

    let wordList = [];
    for (let index = 0; index < 26; index++) {
        sliceByLetter(String.fromCharCode(65 + index)).length > 0 &&
        wordList.push (
            <>
                <Text style={styles.letter}>{String.fromCharCode(65 + index)}</Text>
                {sliceByLetter(String.fromCharCode(65 + index)).map(word => <Word title={word.title} definition={word.definition} id={word.id} data={data} setData={setData}/>)}
            </>
        );
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {wordList}
            </ScrollView>
            <AddButton data={data} setData={setData}/>
        </View>
    );
}

const styles = StyleSheet.create({
    letter: {
        color: '#0059C9',
        fontSize: 32,
        fontWeight: '700',
        marginLeft: 8,
    }
});

export default DefinitionList;