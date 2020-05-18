import React, { Component } from 'react';
import { Image, StyleSheet, Alert, View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Container, Header, Root, Right, Title, Item, TextInput, Input, Picker, Label, Form, Content, Card, CardItem, Thumbnail, Button, Footer, FooterTab, Left, Body } from 'native-base';
//import { Icon } from "react-native-elements";
import * as Font from 'expo-font';
import { AppLoading, ActivityIndicator } from 'expo';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
//import { text } from 'body-parser';
//import unknown from 'react-native-web/dist/cjs/exports/Text';




//const Stack = createStackNavigator();


export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      username: '',
      password: '',


    };

  }
  async UNSAFE_componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      //Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  render() {


    //total:this.state.c*this.state.amount

    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return (<AppLoading />);
    }
    //const { navigate } = this.props.navigation;
    return (

      <Container style={{ backgroundColor: '#ffcc66' }}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#e6e6e6" translucent={true} />

        <Content style={{ backgroundColor: '#cccccc',borderBottomLeftRadius:100 }}>
          <View style={{ alignSelf: 'center', marginTop: '30%' }}>
            <Text style={{ fontWeight: 'bold', fontFamily: 'Roboto', fontSize: 40 }}>BuZZuT</Text>
          </View >
        </Content>
        <Content style={{ backgroundColor: '#ffcc66',minHeight: '30%' }}>
          <View style={{ alignSelf: 'center', width: '70%', marginTop: '5%' }}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20}}>New User</Text>
            </View>
            <Item rounded style={{ paddingLeft: 20, backgroundColor: '#e6e6e6', marginTop: 20 }}>
               size={18} />
              <Input placeholder='    Name' />
            </Item>
            <Item rounded style={{ paddingLeft: 20, backgroundColor: '#e6e6e6', marginTop: 20 }}>
              <Icon active name='user-alt' size={18} />
              <Input placeholder='    Email' />
            </Item>
            <Item rounded style={{ paddingLeft: 20, marginTop: 20, backgroundColor: '#e6e6e6' }}>
              <Icon active name='phone' size={18} />
              <Input keyboardType='numeric' placeholder='   Phone No' />

            </Item>
            <Item rounded style={{ paddingLeft: 20, marginTop: 20, backgroundColor: '#e6e6e6' }}>
              <Icon active name='key' size={18} />
              <Input secureTextEntry={true} placeholder='   Password' />

            </Item>
            <Item rounded style={{ paddingLeft: 20, marginTop: 20, backgroundColor: '#e6e6e6' }}>
              <Icon active name='key' size={18} />
              <Input secureTextEntry={true} placeholder='   Confirm Password' />

            </Item>
            <View style={{ alignSelf: 'center' }}>
              <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginTop: 15 }}>Already have account? <Text style={{ color: 'grey' }} 
              onPress={() => this.props.navigation.navigate('LoginIn')}>Click here</Text></Text>
              
            </View>
            <TouchableOpacity  >

<Card style={{ borderRadius: 50, width: '60%', alignSelf: 'center',marginTop:20,width:140,backgroundColor:'#e6e6e6' }}>
  <CardItem style={{ minHeight: 50, borderRadius: 50, alignSelf: 'center',backgroundColor:'#e6e6e6' }}>
    <Icon active name="arrow-right" size={20} color={'grey'} />
    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{"  Register"}</Text>

  </CardItem>
</Card>

       
</TouchableOpacity>
          </View>
         
        </Content>
       

      </Container>

    );
  }
}


