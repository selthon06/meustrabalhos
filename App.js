import react from "react";
import (createDrawerNavigator) from "@react-navigation/drawer";
import (NavigationContainer) from "@react-navigation/native";
import tela1 from './componentes/Tela1';
import tela2 from './componentes/Tela2';
 
const Drawer = CreateDrawerNavigator();

export default function App() {
return (
  <NavigationContainer>
    <Drawer.Navigator>
      <drawer.screen name="Tela 1" component={Tela1} />
      <drawer.Screen name="Tela 2" component={Tela2} />

    <NavigationContainer/>
    <Drawer.Navigator/>     
      );
}