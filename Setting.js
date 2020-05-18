import React, { Component } from 'react';
import { Image, StyleSheet, Alert, View, TouchableOpacity, Text,StatusBar } from 'react-native';
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
import History from './History';
//import { text } from 'body-parser';
//import unknown from 'react-native-web/dist/cjs/exports/Text';
import LoginIn from './Login';



//const Stack = createStackNavigator();


export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            selected: 'key0',
            reason: 'key0',
            c: 1,
            amount: 0,
            total: 0,
            amountsave: 0,
            source: 'key0',
            totalsave: 0,
            comments: ''


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
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    onValueChange1(value) {
        this.setState({
            reason: value
        });
    }

    onValueChange3(value) {
        this.setState({
            source: value
        });
    }
    formsubmitpay() {
        if (this.state.amount == 0) {
            Alert.alert(
                //title
                'Wait Wait',
                //body
                'Amount is required!! ',
                [

                    { text: 'ok', style: 'default' },
                ],
                { cancelable: false }
                //clicking out side of alert will not cancel
            );

        }
        else {
            console.log(this.state);
        }
    }
    formsubmitsave() {
        if (this.state.amountsave == 0) {
            Alert.alert(
                //title
                'Wait Wait',
                //body
                'Saving Amount is required!! ',
                [

                    { text: 'ok', style: 'default' },
                ],
                { cancelable: false }
                //clicking out side of alert will not cancel
            );

        }
        else {
            console.log(JSON.stringify(this.state.amountsave, this.state.source, this.state.totalsave, this.state.comments));
        }
    }


    render() {


        //total:this.state.c*this.state.amount

        //const { navigate } = this.props.navigation;
        if (this.state.loading) {
            return (<AppLoading />);
        }
        //const { navigate } = this.props.navigation;
        return (

            <Container style={{ backgroundColor: '#e6e6e6' }}>
                <Header style={{ backgroundColor: 'white',borderBottomWidth:1,borderBottomColor:'#e6e6e6' }} >
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />


                    <Title style={{ alignSelf: 'center', color: 'black', position: 'absolute' }}>Settings</Title>


                </Header>
                <ScrollView>
                    <Content style={{ marginLeft: 3, marginRight: 3 }}>
                        <Card style={{ flex: 1 }}>
                            <CardItem alignSelf='center'
                            >

                                <Avatar
                                    size="xlarge"
                                    rounded
                                    title="PK"
                                    source={{
                                        uri:
                                            'https://www.w3schools.com/howto/img_avatar.png',
                                    }}
                                    onPress={() => console.log("Works!")}
                                    activeOpacity={0.7}

                                />


                            </CardItem>
                            <CardItem
                            >

                                <Body style={{ paddingLeft: 25 }}>
                                    <Text style={{ fontSize: 18 }}>Pankaj Kundu</Text>
                                    <Text note>Student</Text>


                                </Body>

                            </CardItem>
                        </Card>
                    </Content>
                    <View style={{ flexDirection: 'row', flex: 1 }}>

                        <TouchableOpacity >
                            <Content >
                                <Card style={{ borderTopLeftRadius: 50,borderBottomLeftRadius:50 }}>
                                    <CardItem style={{ minWidth: '49.2%', minHeight: 80, borderRadius: 50 }}>
                                        <Icon active name="user-edit" size={20} />
                                        <Text>{"    Edit Profile"}</Text>
                                        <Right marginRight={'-10%'}>
                                            <Icon name="chevron-right" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Content>
                        </TouchableOpacity>
                        <TouchableOpacity  >
                            <Content >
                                <Card style={{ borderBottomRightRadius: 50,borderTopRightRadius:50 }}>
                                    <CardItem style={{ minWidth: '49.2%', minHeight: 80,  borderBottomRightRadius: 50,borderTopRightRadius:50}}>
                                        <Icon active name="file-export" size={20} color={'#b30000'}/>
                                        <Text>{"    Export Data"}</Text>
                                        <Right marginRight={'-10%'}>
                                            <Icon name="chevron-right" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Content>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1 }}>

                        <TouchableOpacity >
                            <Content >
                                <Card style={{ borderTopLeftRadius: 50,borderBottomLeftRadius:50 }}>
                                    <CardItem style={{ minWidth: '49.2%', minHeight: 80, borderTopLeftRadius: 50,borderBottomLeftRadius:50 }}>
                                        <Icon active name="bell" size={20} color={'#ffcc66'} />
                                        <Text>{"    Notification"}</Text>
                                        <Right marginRight={'-10%'}>
                                            <Icon name="chevron-right" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Content>
                        </TouchableOpacity>
                        <TouchableOpacity  >
                            <Content >
                                <Card style={{ borderBottomRightRadius: 50,borderTopRightRadius:50 }}>
                                    <CardItem style={{ minWidth: '49.2%', minHeight: 80, borderBottomRightRadius: 50,borderTopRightRadius:50 }}>
                                        <Icon active name="cubes" size={20} />
                                        <Text>{"    Themes (Beta)"}</Text>
                                        <Right marginRight={'-10%'}>
                                            <Icon name="chevron-right" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Content>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>

                        <TouchableOpacity >
                            <Content >
                                <Card style={{ borderTopLeftRadius: 50,borderBottomLeftRadius:50 }}>
                                    <CardItem style={{ minWidth: '49.2%', minHeight: 80, borderTopLeftRadius: 50,borderBottomLeftRadius:50  }}>
                                        <Icon active name="phone" size={20} color={'green'} />
                                        <Text>{"    Support/Contact"}</Text>
                                        <Right marginRight={'-10%'}>
                                            <Icon name="chevron-right" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Content>
                        </TouchableOpacity>
                        <TouchableOpacity  >
                            <Content >
                                <Card style={{ borderBottomRightRadius: 50,borderTopRightRadius:50 }}>
                                    <CardItem style={{ minWidth: '49.2%', minHeight: 80,borderBottomRightRadius: 50,borderTopRightRadius:50}}>
                                        <Icon active name="question-circle" size={20} color={'blue'}/>
                                        <Text>{"    App info"}</Text>
                                        <Right marginRight={'-10%'}>
                                            <Icon name="chevron-right" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </Content>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('LoginIn')}>
                            <Content  >
                                <Card style={{ borderRadius: 50, width:'60%',alignSelf:'center'}}>
                                    <CardItem style={{ minHeight: 60,borderRadius:50,alignSelf:'center'}}>
                                        <Icon active name="reply" size={20} color={'grey'}/>
                                        <Text style={{fontSize:15,fontWeight:'bold'}}>{"    Logout"}</Text>
                                        
                                    </CardItem>
                                </Card>
                            </Content>
                        </TouchableOpacity>
                </ScrollView>

            </Container>

        );
    }
}


