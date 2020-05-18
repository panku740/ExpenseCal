import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity,StatusBar } from 'react-native';
import { Container, Header, Root, Title, Content, Card,Right, CardItem, Thumbnail, Text, Button, Footer, FooterTab, Left, Body } from 'native-base';
//import { Icon } from "react-native-elements";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { StackNavigator } from 'react-navigation';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


 class Historyy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
     

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
  
  render(){
    if (this.state.loading) {
      return (<AppLoading />);
    }
    
    return (

      <Container style={{ backgroundColor: '#f2f2f2' }}>
         
       <Header style={{ backgroundColor: 'white',borderBottomWidth:1,borderBottomColor:'#e6e6e6',marginTop:5 }} >
         
           
       <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />

          

          <Title style={{ alignSelf:'center', color: 'black', }}>History</Title>
          

        </Header>
        <ScrollView>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Food')}  >
            <Content style={{marginLeft:5}}>
              <Card style={{borderRadius:15}} >
                <CardItem style={{ minWidth: '48.5%',borderRadius:15,paddingLeft:-20 }}>
                  <Left>
                  <Image source={{
                      uri: 'https://i.pinimg.com/originals/ea/41/94/ea41941ee33de94f35ca1a14d37df120.jpg'
                    }}
                      style={{
                        marginRight:-20,
                        height: 40,
                        width: 40, flex: 1
                      }}
                      resizeMode={'contain'} />
                    <Body>
                   
                      <Text>Food </Text>
                      
                      <Text note>Last May 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>



              </Card>
            </Content >
          </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Fashion')} >
              <Content style={{marginRight:5}} >
                <Card style={{ flex: 1 ,borderRadius:15}}>
                  <CardItem  
                    style={{
minWidth:'48.5%',borderRadius:15,paddingLeft:-10
                    }}>
                    <Left>
                    <Image source={{
                      uri: 'https://lh3.googleusercontent.com/proxy/T3Ox6q26OQPi2QBIbd1kVmbSqTiYt__0B7vXfkKPaKu2OLMzDP-OEyx0MOYUo8hz2gyJGUDz30dqjfz9RyG3NMzMyBY13nI'
                    }}
                      style={{
                        marginLeft:0,
                        height: 40,
                        width: 40, flex: 1
                      }}
                      resizeMode={'contain'} />
                      <Body>
                        <Text>Fashion</Text>
                        <Text note>Last April 15, 2016</Text>
                      </Body>
                    </Left>
                  </CardItem>


                </Card>
              </Content>
            </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity  >
              <Content style={{ marginLeft:5}}>
                <Card style={{ flex: 1 ,borderRadius:15}}>
                  <CardItem
                    style={{
                      minWidth:'48.5%',borderRadius:15,paddingLeft:-10
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
            <TouchableOpacity  >
              <Content style={{marginRight:5}}>
                <Card style={{ flex: 1 ,borderRadius:15}}>
                  <CardItem
                    style={{
                      minWidth:'48.5%',borderRadius:15,paddingLeft:-10
                    }}>
                    <Left>
                    <Image source={{
                      uri: 'https://clipartstation.com/wp-content/uploads/2018/09/find-clipart-1.jpg'
                    }}
                      style={{
                        marginLeft:0,
                        height: 50,
                        width: 50, flex: 1
                      }}
                      resizeMode={'contain'} />

                     
                      <Body>
                        <Text>Others</Text>
                        <Text note>Last April 15, 2016</Text>
                      </Body>
                    </Left>
                  </CardItem>


                </Card>
              </Content>
            </TouchableOpacity>
          </View>
          
            <Content style={{ marginRight:5,marginLeft:5 }}>
              <Card style={{ flex: 1 ,borderRadius:15}}>
                <CardItem
                  style={{
                    padding: -10,borderRadius:15
                  }}>
                  <Left>
                    <Icon name="credit-card" size={30} 

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
                </CardItem><TouchableOpacity  >
                <CardItem style={{borderRadius:15,borderTopColor:'#f2f2f2',borderTopWidth:2}}>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>

                      <Icon name="coins" color='#ffcc00' />
                      <Text>total: 1100</Text>
                      
                    </Button>
                  </Left>
               
                                            <Icon name="chevron-right" color='black'  />
                                        
                </CardItem></TouchableOpacity>
              </Card>
            </Content>
          
         
            <Content style={{marginLeft:5,marginRight:5 }}>
              <Card style={{ flex: 1,borderRadius:15 }}>
                <CardItem style={{borderRadius:15}}>
                  <Left>
                    <Icon name="money-check-alt" size={30} 
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
                <TouchableOpacity>
                <CardItem style={{borderRadius:15,borderTopColor:'#f2f2f2',borderTopWidth:2}}>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>

                      <Icon name="coins" color='#ffcc00' />
                      <Text>total: 500</Text>
                    </Button>
                  </Left>
                  <Icon name="chevron-right" color='black'  />
                </CardItem>
                </TouchableOpacity>
              </Card>
            </Content>
          

          
            <Content style={{ marginLeft: 5, marginRight: 5 }}>
              <Card style={{ flex: 1 ,borderRadius:15}}>
                <CardItem style={{borderRadius:15}}>
                  <Left>
                    <Icon name="mobile-alt" size={30} 
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
                <TouchableOpacity>
                <CardItem style={{borderRadius:15,borderTopColor:'#f2f2f2',borderTopWidth:2}}>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>

                      <Icon name="coins" color='#ffcc00' />
                      <Text>total: 2500</Text>
                    </Button>
                  </Left>
                  <Icon name="chevron-right" color='black'  />
                </CardItem>
                </TouchableOpacity>
                </Card>
            </Content>
          
        </ScrollView>
       
      </Container>

    );

  }
}
function Food(){
  
    return(<Container style={{ backgroundColor: '#e6e6e6' }}>
      
    </Container>);
  
}
function Fashion(){
 
    return(<Container style={{ backgroundColor: '#e6e6e6' }}>
     </Container>);
  
   
    
  
}
function History({navigation}) {
  
 
  return (
     
          <Stack.Navigator
         
              screenOptions={{
                  
              }}>
              <Stack.Screen options={{headerShown: false}} tabBarVisible={false} name="History" component={Historyy} />
              <Stack.Screen options={{title:'Food Expenses', tabBarVisible: false}} name="Food" component={Food} />
              <Stack.Screen options={{title:'Fashion Expenses'}} name="Fashion" component={Fashion} />

          </Stack.Navigator>

      



  );
}


export default History;