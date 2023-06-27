import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RepertoireScreen from './screens/RepertoireScreen/RepertoireScreen';
import RemoveAdsScreen from './screens/RemoveAdsScreen/RemoveAdsScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Repertoire" component={RepertoireScreen}/>
        <Drawer.Screen name="Remove Ads" component={RemoveAdsScreen}/>
        <Drawer.Screen name='Settings' component={SettingsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;