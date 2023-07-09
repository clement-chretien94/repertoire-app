import { createStackNavigator } from '@react-navigation/stack';
import WordDetails from '../../components/WordDetails/WordDetails';
import DefinitionList from '../../components/DefinitionList/DefinitionList';

const Stack = createStackNavigator();

const RepertoireScreen = ({data, setData}) => {

    return (
        <>
            <Stack.Navigator initialRouteName='DefinitionList'>
                <Stack.Screen name="DefinitionList" children={() => <DefinitionList data={data} setData={setData}/>} options={{headerShown: false}}/>
                <Stack.Screen name="WordDetails" component={WordDetails}/>
            </Stack.Navigator>
        </>
    );
}

export default RepertoireScreen;