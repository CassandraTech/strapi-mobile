import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ViewCollection from './src/viewCollection';
import {Appbar, Drawer as PaperDrawer} from 'react-native-paper';
import {Platform} from 'react-native';
import {compose} from 'redux';
import {connect} from 'react-redux';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

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

const DrawerComponent = ({descriptors}) => {
  console.log(Object.keys(descriptors));
  const [active, setActive] = React.useState('');
  return (
    <PaperDrawer.Section title="Some title">
      <PaperDrawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <PaperDrawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </PaperDrawer.Section>
  );
};

const Main = ({collections}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="C1">
        <Drawer.Screen
          initialParams={{ctype: 'te'}}
          name="Home"
          options={{
            header: ({scene}) => <HeaderComponent scene={scene} />,
            headerShown: true,
          }}
          component={ViewCollection}
        />

        {Object.values(collections).map((e, i) => (
          <Drawer.Screen
            name={e.name}
            key={i}
            options={{
              header: ({scene}) => (
                <HeaderComponent scene={scene} subTitle={e.collectionName} />
              ),
              headerShown: true,
            }}
            component={ViewCollection}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    collections: state.collectionMetadata,
  };
};

export default connect(mapStateToProps)(Main);
