/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ViewCollection from './src/viewCollection';

import {Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

const HeaderComponent = ({scene}) => {
  return <Text>Strapi Mobile</Text>;
};

const App = () => {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="C1">
        <Drawer.Screen
          initialParams={{ctype: 'te'}}
          name="C1"
          options={{
            header: ({scene}) => <HeaderComponent scene={scene} />,
            headerShown: true,
          }}
          component={ViewCollection}
        />
        <Drawer.Screen name="C2" component={ViewCollection} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
