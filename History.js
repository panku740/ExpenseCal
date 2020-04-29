import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Root, Title, Content, Card, CardItem, Thumbnail, Text, Button, Footer, FooterTab, Left, Body } from 'native-base';
//import { Icon } from "react-native-elements";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Setting from './History';
import { StackNavigator } from 'react-navigation';
import New from './New';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default class NewPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
     

    };

  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      //Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  render(){
    if (this.state.loading) {
      return (<AppLoading />);
    }
    return (

      <Container style={{ backgroundColor: '#e6e6e6' }}>
        <Header style={{ backgroundColor: 'white' }} >
          <Left style={{ marginLeft: -170 }}>
            <Button transparent>
            <Icon name="angle-left" size={25} color="black"

                      />
                     
            </Button>
          </Left>

          <Title style={{ alignSelf: 'center', color: 'black', position: 'absolute' }}>History</Title>


        </Header>
        <ScrollView>
          <ScrollView horizontal={true}><TouchableOpacity  >
            <Content style={{ marginLeft: 3 }}>
              <Card style={{ flex: 1 }}>
                <CardItem style={{ width: 250 }}>
                  <Left>
                  <Image source={{
                      uri: 'https://i.pinimg.com/originals/ea/41/94/ea41941ee33de94f35ca1a14d37df120.jpg'
                    }}
                      style={{
                        marginLeft:-40,
                        marginRight:-40,
                        height: 50,
                        width: 50, flex: 1
                      }}
                      resizeMode={'contain'} />
                    <Body>
                   
                      <Text>Food Purchase</Text>
                      
                      <Text note>Last April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>



              </Card>
            </Content>
          </TouchableOpacity>
            <TouchableOpacity  >
              <Content style={{ marginLeft: 3}}>
                <Card style={{ flex: 1 }}>
                  <CardItem
                    style={{
                      padding: -10
                    }}>
                    <Left>
                    <Image source={{
                      uri: 'https://lh3.googleusercontent.com/proxy/T3Ox6q26OQPi2QBIbd1kVmbSqTiYt__0B7vXfkKPaKu2OLMzDP-OEyx0MOYUo8hz2gyJGUDz30dqjfz9RyG3NMzMyBY13nI'
                    }}
                      style={{
                        marginLeft:0,
                        height: 50,
                        width: 50, flex: 1
                      }}
                      resizeMode={'contain'} />
                      <Body>
                        <Text>Fastion</Text>
                        <Text note>Last April 15, 2016</Text>
                      </Body>
                    </Left>
                  </CardItem>


                </Card>
              </Content>
            </TouchableOpacity>
            <TouchableOpacity  >
              <Content style={{ marginLeft: 3, marginRight: 3 }}>
                <Card style={{ flex: 1 }}>
                  <CardItem
                    style={{
                      padding: -10
                    }}>
                    <Left>
                    <Image source={{
                      uri: 'https://clipartart.com/images/a-cute-house-clipart-8.jpg'
                    }}
                      style={{
                        marginLeft:0,
                        height: 50,
                        width: 50, flex: 1
                      }}
                      resizeMode={'contain'} />

                     
                      <Body>
                        <Text>Rental</Text>
                        <Text note>Last April 15, 2016</Text>
                      </Body>
                    </Left>
                  </CardItem>


                </Card>
              </Content>
            </TouchableOpacity>
          </ScrollView>
          <TouchableOpacity  >
            <Content style={{ marginLeft: 3, marginRight: 3 }}>
              <Card style={{ flex: 1 }}>
                <CardItem
                  style={{
                    padding: -10
                  }}>
                  <Left>
                    <Icon name="credit-card" size={30} color=""

                    />
                    <Body>
                      <Text>CARD Payments</Text>
                      <Text note>Last April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem style={{ width: 350, height: 200, alignSelf: 'center' }}>
                  <Body >
                    <Image source={{
                      uri: 'https://www.pinclipart.com/picdir/big/138-1383939_comment-choisir-sa-banque-en-ligne-logo-kartu.png'
                    }}
                      style={{
                        alignSelf: 'center',
                        height: '100%',
                        width: '100%', flex: 1
                      }}
                      resizeMode={'contain'} />

                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>

                      <Icon name="coins" color='#ffcc00' />
                      <Text>total: 1100</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </Content>
          </TouchableOpacity>
          <TouchableOpacity  >
            <Content style={{ marginLeft: 3, marginRight: 3 }}>
              <Card style={{ flex: 1 }}>
                <CardItem>
                  <Left>
                    <Icon name="money-check-alt" size={30} color=""
                    />
                    <Body>
                      <Text>CASH Payments</Text>
                      <Text note>Last April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem style={{ width: 350, height: 200, alignSelf: 'center' }}>
                  <Body >
                    <Image source={{
                      uri: 'https://webstockreview.net/images/money-clip-art-4.jpg'
                    }}
                      style={{
                        alignSelf: 'center',
                        height: '100%',
                        width: '100%', flex: 1
                      }}
                      resizeMode={'contain'} />

                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>

                      <Icon name="coins" color='#ffcc00' />
                      <Text>total: 500</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </Content>
          </TouchableOpacity>

          <TouchableOpacity>
            <Content style={{ marginLeft: 3, marginRight: 3 }}>
              <Card style={{ flex: 1 }}>
                <CardItem>
                  <Left>
                    <Icon name="mobile-alt" size={30} color=""
                    />
                    <Body>
                      <Text>ONLINE Payments</Text>
                      <Text note>Last April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem style={{ width: 350, height: 200, alignSelf: 'center' }}>
                  <Body >
                    <Image source={{
                      uri: 'https://sumhr.com/wp-content/uploads/2016/11/online-wallets-in-india-1200x675.jpg'
                    }}
                      style={{
                        alignSelf: 'center',
                        height: '100%',
                        width: '100%', flex: 1
                      }}
                      resizeMode={'contain'} />

                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>

                      <Icon name="coins" color='#ffcc00' />
                      <Text>total: 2500</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </Content>
          </TouchableOpacity>
        </ScrollView>
        <Footer style={{ backgroundColor: '#e6e6e6' }}>
          <FooterTab style={{ backgroundColor: 'white', marginTop: 1 }}>
            <Button
             onPress={() =>  navigation.navigate('New')}
            >

              <Icon name='plus' size={20} color={'grey'}/>
              <Text style={{color:'grey'}}>New</Text>
            </Button>
            <Button active style={{ backgroundColor: '#e6e6e6' }}>

              <Icon name='history' size={20} color={'grey'}/>
              <Text style={{color:'grey'}}>History</Text>
            </Button>
            <Button >

              <Icon name='piggy-bank'  size={20} color={'grey'} />
              <Text style={{color:'grey'}}>savings</Text>
            </Button>
            <Button
            >

              <Icon name='cog' size={20} color={'grey'}/>
              <Text style={{color:'grey'}}>Settings</Text>
              <New/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );

  }
}