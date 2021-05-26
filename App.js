//Student: Talapova Shyryn
//ID: 20MD0255

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, Button, View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabsScreen({navigation}){
  return(
    <Tab.Navigator>
         <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="Details" component={DetailsStackScreen} />
         <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen </Text>
      <Button
        title="Go the Details screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsStackScreen({navigation}){
  return (
      <Stack.Navigator>
        <Stack.Screen name="Details Stack Screen" component={Details} />
        <Stack.Screen name="Further Details" component={FurtherDetails} />
      </Stack.Navigator>
  );
}

function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Details page</Text>
      <Text>Now you can go to a further details page </Text>
      <Text>in this Stack of screens</Text>
      
      <Button
        title="Further Details"
        onPress={() => navigation.navigate('Further Details')}
      />

      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function FurtherDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the FURTHER Details page</Text>
      <Button
        title="Back to the previous Screen"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Back to the HOME Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Search page</Text>
      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Settings page</Text>
      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeTabsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
