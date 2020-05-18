import React, { Component } from "react";
import History from "./History";
import NewPay from "./New";
import Setting from "./Setting";
import Saving from "./Saving";
import Register from "./Register";
import Login from "./Login";
import { DrawerNavigator } from "react-navigation";
import { StackNavigator, } from 'react-navigation';
import { createStackNavigator } from "@react-navigation/stack";
import { Settings } from "react-native";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/FontAwesome5';



const Tab = createBottomTabNavigator();


export default function App2() {
    
  return (
   
      <Tab.Navigator initialRouteName='New'
        tabBarOptions={{
          style:{size:20},
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
          activeBackgroundColor:'#d9d9d9',
          
        }}>
        <Tab.Screen name="New" component={NewPay}  options={{
        
          tabBarIcon: () => <Icon name='plus' size={20} color={'black'} />,
        }}/>
        <Tab.Screen name="History" component={History} options={{
        
        tabBarIcon: () => <Icon name='history' size={20} color={'black'} />,
      }}/>
        <Tab.Screen name="Savings" component={Saving} options={{
        
        tabBarIcon: () => <Icon name='piggy-bank' size={20} color={'black'} />,
      }}/>
        <Tab.Screen name="Settings" component={Setting}options={{
        
        tabBarIcon: () => <Icon name='cog' size={20} color={'black'} />,
      }}/>
        
      </Tab.Navigator>
    
  );
}