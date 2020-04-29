import * as React from 'react';
import { View, Text,Alert,setState, Button,StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,

} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Footer, Title } from 'native-base';
import { State } from 'react-native-gesture-handler';


function Gameplay({ navigation }) {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
      <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10 }}>
        <TouchableOpacity  >
          <Icon name="align-justify" size={28} color="#336699"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
             />

        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', marginLeft: 120, fontWeight: 'bold' }} >Tic Tac Toe</Text>
      </View>
      <View style={{ flex: 1, marginTop: 10, backgroundColor: '#e6e6e6' }}>


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


          <View style={{ flexDirection: "row" }}>

            <TouchableOpacity style={ page.box }
            onPress={() =>  setState({backgroundColor:'black'})} 
            >


            </TouchableOpacity>
            <TouchableOpacity style={ page.box }>

            </TouchableOpacity>
            <TouchableOpacity style={ page.box }>

            </TouchableOpacity>


          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={ page.box }>

            </TouchableOpacity>
            <TouchableOpacity style={ page.box }>

            </TouchableOpacity>
            <TouchableOpacity style={ page.box }>

            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={ page.box }>

            </TouchableOpacity>
            <TouchableOpacity style={ page.box }>

            </TouchableOpacity>
            <TouchableOpacity style={ page.box }>

            </TouchableOpacity>
          </View>
        </View></View>


      <Footer
        style={{ backgroundColor: "#336699", alignContent: 'center', height: 45 }}>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>

          <Icon name="repeat" size={30} color="#ffffff"
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.navigate('Notifications')} />
          <Text style={{ fontSize: 23, color: 'white' }}>Reset Game</Text>
        </View>
      </Footer>

    </View>
  );
}



const page = StyleSheet.create({
  box:{
    height: 100, width: 100, margin: 5, backgroundColor: '#336699' , borderRadius: 10
  }
})

export default Gameplay;