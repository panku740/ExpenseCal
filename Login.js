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
import Register from './Register';
import App from './App';
//import { text } from 'body-parser';
//import unknown from 'react-native-web/dist/cjs/exports/Text';
//import NewPay from "./New";
import History from "./History";
import NewPay from "./New";
import Setting from "./Setting";
import Saving from "./Saving";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createStackNavigator();


class LoginIn extends React.Component {
    constructor(props) {
        var req='';
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
//if(this.state.username=='pankaj' && this.state.password=='pankaj')
this.props.navigation.navigate('Loginn');
//this.req='Credential Required!!';
       // else
        //Alert.alert('Check username or password');
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
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#cccccc" translucent={true} />

                <Content style={{ backgroundColor: '#cccccc', borderBottomLeftRadius: 100 }}>
                    <View style={{ alignSelf: 'center', marginTop: '35%' }}>
                        <Text style={{ fontWeight: 'bold', fontFamily: 'Roboto', fontSize: 40 }}>BuZZuT</Text>
                    </View>
                </Content>
                <Content style={{ backgroundColor: '#ffcc66', minHeight: '20%' }}>
                    <View style={{ alignSelf: 'center', width: '70%', marginTop: '10%' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>User Login</Text>
                        </View>
                        <Item rounded style={{ paddingLeft: 20, backgroundColor: '#e6e6e6', marginTop: 20 }}>
                            <Icon active name='user-alt' size={18} />
                            <Input placeholder='    Username' onChangeText={(text) => this.setState({
                                username: text,
                               
                            })} />
                        </Item>

                        <Item rounded style={{ paddingLeft: 20, marginTop: 20, backgroundColor: '#e6e6e6' }}>
                            <Icon active name='key' size={18} />
                            <Input secureTextEntry={true} placeholder='   Password' onChangeText={(text1) => this.setState({
                                password: text1,
                               
                            })}/>

                        </Item>
                        <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginTop: 15 }}>{this.req} </Text>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginTop: 15 }}>Forgot password? <Text style={{ color: 'grey' }}
                            >Click here</Text></Text>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 15, marginTop: 10 }}>New User? <Text style={{ color: 'grey' }}
                                onPress={() => this.props.navigation.navigate('Register')} >Register</Text></Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => this.onLogin()} >

                        <Card style={{ borderRadius: 50, width: '60%', alignSelf: 'center', marginTop: 30, width: 140, backgroundColor: '#e6e6e6' }}>
                            <CardItem style={{ minHeight: 50, borderRadius: 50, alignSelf: 'center', backgroundColor: '#e6e6e6' }}>
                                <Icon active name="sign-in-alt" size={20} color={'grey'} />
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}
                                >{"  Login"}</Text>

                            </CardItem>
                        </Card>

                    </TouchableOpacity>
                </Content>




            </Container>

        );
    }
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Loginn() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: { size: 20 },
                activeTintColor: 'tomato',
                inactiveTintColor: 'black',
                activeBackgroundColor: '#d9d9d9',
                
            }}>
            <Tab.Screen name="New" component={NewPay} options={{

                tabBarIcon: () => <Icon name='plus' size={20} color={'black'} />,
            }} />




            <Tab.Screen name="History" component={History} options={{

                tabBarIcon: () => <Icon name='history' size={20} color={'black'} />,
            }} />
            <Tab.Screen name="Savings" component={Saving} options={{

                tabBarIcon: () => <Icon name='piggy-bank' size={20} color={'black'} />,
            }} />
            <Tab.Screen name="Settings" component={Setting} options={{

                tabBarIcon: () => <Icon name='cog' size={20} color={'black'} />,
            }} />

        </Tab.Navigator>
    );
}
function Login() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="LoginIn" component={LoginIn} />
                <Stack.Screen name="Loginn" component={Loginn} />
                <Stack.Screen name="Register" component={Register} />

            </Stack.Navigator>

        </NavigationContainer>



    );
}

export default Login;