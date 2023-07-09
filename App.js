import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RepertoireScreen from './screens/RepertoireScreen/RepertoireScreen';
import RemoveAdsScreen from './screens/RemoveAdsScreen/RemoveAdsScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';

const DataListDefinition = [
  {
    title: 'Abeille',
    definition: "Insecte hyménoptère de la famille des apidés, à corps velu, à quatre ailes membraneuses, à dard venimeux, qui vit en société dans des ruches et produit le miel.",
    id: '0'
  },
  {
    title: 'Tortue',
    definition: "Reptile de forme ovale, entouré d'une double carapace osseuse et écailleuse, dont sortent une tête munie d'un bec corné, deux paires de courtes pattes et de nageoires, une très courte queue.",
    id: '1'
  },
  {
    title: 'Doigt',
    definition: "Chacune des parties libres et mobiles qui terminent la main de l'homme.",
    id: '2'
  },
  {
    title: 'Pomme',
    definition: "Fruit du pommier, charnu, de forme plus ou moins arrondie, de couleur verte, jaune ou rouge selon la variété, que l'on consomme frais, en compote, en beignets et dont on fait le cidre ou des jus.",
    id: '3'
  },
  {
    title: 'Journalisme',
    definition: "Ensemble des activités se rapportant à la rédaction d'un journal ou à tout autre organe de presse écrite ou audiovisuelle (collecte, sélection, mise en forme de l'information).",
    id: '4'
  },
  {
    title: 'Enseignant',
    definition: "Personne qui enseigne, qui fait profession d'enseigner dans un établissement scolaire, universitaire ou dans un organisme de formation professionnelle.",
    id: '5'
  },
  {
    title: 'Tortue',
    definition: "Reptile de forme ovale, entouré d'une double carapace osseuse et écailleuse, dont sortent une tête munie d'un bec corné, deux paires de courtes pattes et de nageoires, une très courte queue.",
    id: '6'
  },
  {
    title: 'Doigt',
    definition: "Chacune des parties libres et mobiles qui terminent la main de l'homme.",
    id: '7'
  },
  {
    title: 'Pomme',
    definition: "Fruit du pommier, charnu, de forme plus ou moins arrondie, de couleur verte, jaune ou rouge selon la variété, que l'on consomme frais, en compote, en beignets et dont on fait le cidre ou des jus.",
    id: '8'
  },
  {
    title: 'Journalisme',
    definition: "Ensemble des activités se rapportant à la rédaction d'un journal ou à tout autre organe de presse écrite ou audiovisuelle (collecte, sélection, mise en forme de l'information).",
    id: '9'
  },
  {
    title: 'Enseignant',
    definition: "Personne qui enseigne, qui fait profession d'enseigner dans un établissement scolaire, universitaire ou dans un organisme de formation professionnelle.",
    id: '10'
  },
  {
    title: 'Tortue',
    definition: "Reptile de forme ovale, entouré d'une double carapace osseuse et écailleuse, dont sortent une tête munie d'un bec corné, deux paires de courtes pattes et de nageoires, une très courte queue.",
    id: '11'
  },
  {
    title: 'Doigt',
    definition: "Chacune des parties libres et mobiles qui terminent la main de l'homme.",
    id: '12'
  },
  {
    title: 'Pomme',
    definition: "Fruit du pommier, charnu, de forme plus ou moins arrondie, de couleur verte, jaune ou rouge selon la variété, que l'on consomme frais, en compote, en beignets et dont on fait le cidre ou des jus.",
    id: '13'
  },
  {
    title: 'Journalisme',
    definition: "Ensemble des activités se rapportant à la rédaction d'un journal ou à tout autre organe de presse écrite ou audiovisuelle (collecte, sélection, mise en forme de l'information).",
    id: '14'
  },
  {
    title: 'Enseignant',
    definition: "Personne qui enseigne, qui fait profession d'enseigner dans un établissement scolaire, universitaire ou dans un organisme de formation professionnelle.",
    id: '15'
  },
];

const Drawer = createDrawerNavigator();

const App = () => {
  const [data, setData] = useState(DataListDefinition);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Repertoire" children={() => <RepertoireScreen data={data} setData={setData}/>}/>
        <Drawer.Screen name="Remove Ads" component={RemoveAdsScreen}/>
        <Drawer.Screen name='Settings' component={SettingsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;