import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoriesScreen from './Screens/CategoriesScreen';
import DetailScreen from './Screens/DetailScreen';
import FoodInfo from './Screens/FoodInfo';
import FavouriteScreen from './Screens/FavouriteScreen';
import FavContextProvider from './Store/favcontext';
import {Provider} from 'react-redux';
import {store} from './Store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerPage = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#334F70'},
        headerTintColor: 'white',
      }}>
      <Drawer.Screen
        options={{title: 'Tüm Kategoriler'}}
        name="Categories"
        component={CategoriesScreen}
      />
      <Drawer.Screen
        screenOptions={{
          headerStyle: {backgroundColor: '#334F70'},
        }}
        options={{title: 'Favoriler'}}
        name="Favourites"
        component={FavouriteScreen}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <FavContextProvider> */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#334F70'},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Tüm"
            component={DrawerPage}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{title: 'Detaylar'}}
          />
          <Stack.Screen name="Information" component={FoodInfo} />
        </Stack.Navigator>
        {/* </FavContextProvider> */}
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
