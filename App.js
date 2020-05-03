import React, { Component } from "react";
import History from "./History";
import NewPay from "./New";
import Setting from "./Setting";
import Saving from "./Saving";
import { DrawerNavigator } from "react-navigation";
import { StackNavigator, } from 'react-navigation';
import { createStackNavigator } from "@react-navigation/stack";
import { Settings } from "react-native";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          Icon: ({ focused, color, size }) => {
           

            if (route.name === 'New') {
            color='red'
                
              
            } else if (route.name === 'Settings') {
              return (
                <Icon
                  name={focused ? 'plus' : 'plus'}
                  size={20}
                  color='tomato'
                />
              );
            }else if (route.name === 'History') {
              return (
                <Icon
                  name={focused ? 'plus' : 'plus'}
                  size={20}
                  color='tomato'
                />
              );
            }else if (route.name === 'Savings') {
              return (
                <Icon
                  name={focused ? 'plus' : 'plus'}
                  size={20}
                  color='tomato'
                />
              );
            }

            // You can return any component that you like here!
           // return <Icon name='plus' size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="New" component={NewPay}  options={{
        
          tabBarIcon: () => <Icon name='plus' size={20} color={'gray'} />,
        }}/>
        <Tab.Screen name="History" component={History} options={{
        
        tabBarIcon: () => <Icon name='history' size={20} color={'grey'} />,
      }}/>
        <Tab.Screen name="Savings" component={Saving} options={{
        
        tabBarIcon: () => <Icon name='piggy-bank' size={20} color={'grey'} />,
      }}/>
        <Tab.Screen name="Settings" component={Setting}options={{
        
        tabBarIcon: () => <Icon name='cog' size={20} color={'grey'} />,
      }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}