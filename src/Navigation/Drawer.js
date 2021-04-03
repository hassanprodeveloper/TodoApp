import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContent from '../components/DrawerContent';
import * as Screens from './Screens';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      {/* <Drawer.Screen name="SplashScreen" component={Screens.SplashScreen} /> */}
      <Drawer.Screen name="DrawerWelcome" component={Screens.Welcome} />
      <Drawer.Screen name="DrawerHome" component={Screens.Home} />
      <Drawer.Screen name="DrawerAbout" component={Screens.About} />
    </Drawer.Navigator>
  );
}
