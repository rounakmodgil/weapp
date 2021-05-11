import React from 'react';
import Home from './Pages/home';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Add from './Pages/Add';
import Profile from './Pages/Profile';
import Explore from './Pages/explore';
import DestinationSearchScreen from './Pages/destination';

export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
 
  const Homestack = () => (
    <Stack.Navigator>
      <Stack.Screen screenOptions={{
        headerShown: false,
      }} name="home" component={Home} />
      <Stack.Screen screenOptions={{
        headerShown: true,
      }} name="explore" component={Explore} />
      <Stack.Screen screenOptions={{
        headerShown: true,
      }} name="Destination Search" component={DestinationSearchScreen} />
      
    </Stack.Navigator>
  );
  return (
<NavigationContainer>
<Tab.Navigator>
  <Tab.Screen
    name="Home"
    component={Homestack}
    options={{
      title: 'Home',
    }}
  />
  <Tab.Screen
    name="Add"
    component={Add}
    options={{
      title: 'Add',
    }}
  />
  <Tab.Screen
    name="Profile"
    component={Profile}
    options={{
      title: 'Profile',
    }}
  />

</Tab.Navigator>

</NavigationContainer> 
  );
}
