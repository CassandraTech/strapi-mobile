import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import ViewTables from './src/viewTables';
import {Appbar, Divider, Drawer as PaperDrawer} from 'react-native-paper';
import {Platform, Text} from 'react-native';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Home from './src/home';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import _ from 'lodash';

const Drawer = createDrawerNavigator();
// const store = createStore();
const HeaderComponent = ({scene, subTitle}) => {
  const _goBack = () => scene.descriptor.navigation.toggleDrawer();
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={_goBack} />
      <Appbar.Content title={scene.route.name} subtitle={subTitle} />
    </Appbar.Header>
  );
};

const DrawerComponent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Text>Built by Nirmal Khedkar</Text>
      <DrawerItem
        label="Home"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <DrawerItem
        label="Settings"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <Divider />
      <Text>Collection Type</Text>
      {props.drawer_items &&
        props.drawer_items.collectionType.map((e, i) => (
          <DrawerItem
            label={e.name}
            key={i}
            onPress={() => {
              props.navigation.navigate(e.name);
            }}
          />
        ))}
            <Divider />
      <Text>Single Type</Text>
      {props.drawer_items &&
        props.drawer_items.singleType.map((e, i) => (
          <DrawerItem
          key={i}
            label={e.name}
            onPress={() => {
              props.navigation.navigate(e.name);
            }}
          />
        ))}
    </DrawerContentScrollView>
  );
};

const Main = ({collections}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => (
          <DrawerComponent
            {...props}
            drawer_items={
              collections && _.groupBy(Object.values(collections), e => e.kind)
            }
          />
        )}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          cbx="dc"
          options={{
            header: ({scene}) => <HeaderComponent scene={scene} />,
            headerShown: true,
          }}
          component={Home}
        />

        {collections &&
          Object.values(collections).map((e, i) => (
            <Drawer.Screen
              name={e.name}
              key={i}
              options={{
                header: ({scene}) => (
                  <HeaderComponent scene={scene} subTitle={e.collectionName} />
                ),
                headerShown: true,
                details: e,
              }}>
              {props => <ViewTables {...props} details={e} />}
            </Drawer.Screen>
          ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    collections: state.collections.metadata,
  };
};

export default connect(mapStateToProps)(Main);
