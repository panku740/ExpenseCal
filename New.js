import React, { Component } from 'react';
import { Image, StyleSheet,Alert, View, TouchableOpacity, Text,StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Container, Header, Root, Title, Item, TextInput, Input, Picker, Label, Form, Content, Card, CardItem, Thumbnail, Button, Footer, FooterTab, Left, Body } from 'native-base';
//import { Icon } from "react-native-elements";
import * as Font from 'expo-font';
import { AppLoading, ActivityIndicator } from 'expo';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import LoginIn from './Login';

//import { text } from 'body-parser';
//import unknown from 'react-native-web/dist/cjs/exports/Text';




const Stack = createStackNavigator();


export default class NewPay extends React.Component {
  constructor(props) {
    
    super(props);
    this.myTextInput = React.createRef();
    this.state = {
      loading: true,
      selected: 'key0',
      reason: 'key0',
      c: 1,
      amount: 0,
      total: 0,
      amountsave:0,
      source:'key0',
      totalsave:0,
      comments:''


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
    if(this.state.amount==0 ){
      Alert.alert(
        //title
        'Oops',
        //body
        'Amount is required!! ',
        [
        
          {text: 'ok', style: 'default'},
        ],
        { cancelable: false }
        //clicking out side of alert will not cancel
      );
      
    }
    else{
      Alert.alert(
        //title
        'Great',
        //body
        'Your Expense is added ',
        [
        
          {text: 'ok', style: 'default'},
        ],
        { cancelable: false }
        //clicking out side of alert will not cancel
      );
    console.log(JSON.stringify(this.state));
    
    }

  }

  formsubmitsave() {
    if(this.state.amountsave==0 ){
      Alert.alert(
        //title
        'Oops ',
        //body
        'Saving Amount is required!! ',
        [
        
          {text: 'ok', style: 'default'},
        ],
        { cancelable: false }
        //clicking out side of alert will not cancel
      );
      
    }
    else{
      Alert.alert(
        //title
        'Great',
        //body
        'Your Savings are added ',
        [
        
          {text: 'ok', style: 'default'},
        ],
        { cancelable: false }
        //clicking out side of alert will not cancel
      );
    console.log(JSON.stringify(this.state));
    this.myTextInput.current.value='';
    }
    
  }

  QuantityInc() {
    //console.log(c);
    this.setState({
      c: this.state.c + 1,
      total:(this.state.c+1) * this.state.amount
    });
    //console.log(c);
  }
  QuantityDec() {
    if (this.state.c > 1) {
      this.setState({
        c: this.state.c - 1,
        total:(this.state.c-1) * this.state.amount
      });
    }
  }
  render() {
    const { navigate } = this.props.navigation;

    //total:this.state.c*this.state.amount

    //const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return (<AppLoading />);
    }
    //const { navigate } = this.props.navigation;
    return (

      <Container style={{ backgroundColor: '#f2f2f2' }}>
        <Header style={{ backgroundColor: 'white' ,borderBottomWidth:1,borderBottomColor:'#e6e6e6',marginTop:15}} >
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />

          <Left style={{ marginLeft: '-50%' }}>
            <Image source={require('./assets/icon.png')}
              style={{
                alignSelf: 'center',
                height: '100%',
                width: '100%', flex: 1, margin: 10,borderRadius:50
              }}
              resizeMode={'contain'} />


          </Left>

          <Title style={{ alignSelf: 'center', color: 'black', position: 'absolute' }}>BuZZuT</Title>


        </Header>
        <ScrollView>

          <TouchableOpacity  >
            <Content style={{ marginLeft: 3, marginRight: 3,borderRadius:15 }}>
              <Card style={{ flex: 1,borderRadius:15 }}>
                <CardItem style={{borderRadius:15}}
                >
                  <Left>
                    <Avatar
                      size="large"
                      rounded
                      title="PK"
                      source={{
                        uri:
                          'https://www.w3schools.com/howto/img_avatar.png',
                      }}
                      onPress={() => console.log("Works!")}
                      activeOpacity={0.7}

                    />
                    <Body style={{ paddingLeft: 25 }}>
                      <Text style={{ fontSize: 18 }}>Pankaj Kundu</Text>
                      <Text note>pankajkundu9@gmail.com</Text>


                    </Body>
                  </Left>
                </CardItem>

              </Card>
            </Content>
          </TouchableOpacity>

          <Content style={{ marginLeft: 5, marginRight: 5 ,borderRadius:15}}>
            <Card style={{ flex: 1,borderRadius:15 }}>
              <CardItem style={{borderRadius:15,borderBottomColor:'#f2f2f2',borderBottomWidth:2}}>
                <Left>
                  <Icon name="plus" size={30}

                  />
                  <Body>
                    <Text style={{ color: '#cc3300' }}>New Expenditure Details</Text>

                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ width: '100%', alignSelf: 'center',borderRadius:15 }}>

                <Body style={{ width: '100%', alignSelf: 'center', margin: -12 }}>
                  <Form style={{ width: '100%', alignSelf: 'center' }}>


                    <CardItem >

                      <Label style={{ marginRight: '10%' }}>Amount:</Label>

                      <Item rounded style={{ margin: 0, height: 40, width: '50%' }}>

                        <Input keyboardType='numeric' placeholder='Rs.' ref={this.myTextInput}   onChangeText={(text) => this.setState({
                          amount: text,
                          total:this.state.c * text

                        })} />
                      </Item >





                    </CardItem>
                    <CardItem >

                      <Label style={{ marginRight: '10%' }}>Quantity:</Label>
                      <TouchableOpacity
                        onPress={() => this.QuantityDec()}>
                        <Icon name="minus" size={20} color="#336699"

                        />

                      </TouchableOpacity>
                      <Item rounded disabled style={{ margin: 5, height: 40, width: '15%' }}>

                        <Input require keyboardType='numeric' >{this.state.c}</Input>
                      </Item >
                      <TouchableOpacity onPress={() => this.QuantityInc()}>
                        <Icon name="plus" size={20} color="#336699"

                        />

                      </TouchableOpacity>


                    </CardItem>
                    <CardItem>

                      <Label style={{ marginRight: '10%' }}>Payment Method:</Label>
                      <Item picker style={{ margin: 5, height: 40, width: '50%' }}>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          placeholder="Select your SIM"
                          placeholderStyle={{ color: "#bfc6ea" }}
                          placeholderIconColor="#007aff"
                          style={{ width: undefined }}
                          selectedValue={this.state.selected}
                          onValueChange={this.onValueChange.bind(this)}
                        >
                          <Picker.Item label="Cash" value="key0" />
                          <Picker.Item label="Card" value="key1" />
                          <Picker.Item label="Online" value="key2" />

                        </Picker>
                      </Item>

                    </CardItem>
                    <CardItem>

                      <Label style={{ marginRight: '10%' }}>Expense Reason :</Label>
                      <Item picker style={{ margin: 5, height: 40, width: '50%' }}>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          placeholder="Select your SIM"
                          placeholderStyle={{ color: "#bfc6ea" }}
                          placeholderIconColor="#007aff"
                          style={{ width: undefined }}
                          selectedValue={this.state.reason}
                          onValueChange={this.onValueChange1.bind(this)}
                        >
                          <Picker.Item label="Food" value="key0" />
                          <Picker.Item label="Fashion" value="key1" />
                          <Picker.Item label="Rental" value="key2" />
                          <Picker.Item label="Others" value="key3" />
                        </Picker>
                      </Item>


                    </CardItem>
                    <CardItem >

                      <Label style={{ marginRight: '10%' }}>Total:</Label>


                      <Icon name="coins" color='#ffcc00' />
                      

                      <Label style={{ marginLeft: 10 }}>{this.state.c * this.state.amount}</Label>

                      
                    


                    </CardItem>


                    <CardItem style={{ alignSelf: 'center' ,borderRadius:15}}>
                      <Button rounded danger  onPress={() => this.formsubmitpay()}>
                        <Text style={{ padding: 20 }}>Add Payment</Text>
                      </Button>


                    </CardItem>

                  </Form>
                </Body>


              </CardItem>

            </Card>
          </Content>

          <Content style={{ marginLeft: 5, marginRight: 5,borderRadius:15 }}>
            <Card style={{ flex: 1 ,borderRadius:15}}>
              <CardItem style={{borderRadius:15,borderBottomColor:'#f2f2f2',borderBottomWidth:2}}>
                <Left>
                  <Icon name="plus" size={30} color=""

                  />
                  <Body>
                    <Text style={{ color: 'green' }}>New Saving Details</Text>

                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ width: '100%', alignSelf: 'center',borderRadius:15 }}>

                <Body >
                  <Form style={{ width: '100%', alignSelf: 'center' }}>


                    <CardItem>
                      <Left>

                        <Label style={{ marginRight: '10%' }}>Amount:</Label>

                        <Item rounded style={{ margin: 0, height: 40, width: '50%' }}>

                          <Input require keyboardType='numeric' placeholder='Rs.' onChangeText={(text1) => this.setState({
                          amountsave: text1,
                          totalsave:text1

                        })} />
                        </Item >



                      </Left>

                    </CardItem>

                    <CardItem>
                      <Left>
                        <Label style={{ marginRight: '10%' }}>Saving Source:</Label>
                        <Item picker style={{ margin: 5, height: 40, width: '50%' }}>
                          <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ width: undefined }}
                            selectedValue={this.state.source}
                            onValueChange={this.onValueChange3.bind(this)}
                          >
                            <Picker.Item label="Banking" value="key0" />
                            <Picker.Item label="Cash" value="key1" />
                            <Picker.Item label="Loan" value="key2" />

                          </Picker>
                        </Item>
                      </Left>

                    </CardItem>
                    <CardItem>
                      <Left>
                        <Label style={{ marginRight: '10%' }}>Total:</Label>


                        <Icon name="coins" color='#ffcc00' />
                        <Label style={{ marginLeft: 10 }}> {this.state.amountsave}</Label>

                      </Left>

                    </CardItem>
                    <CardItem style={{ alignSelf: 'center' }}>
                      <Item rounded style={{ height: 40, width: '100%' }}>
                        <Input placeholder='Comments..' onChangeText={(text) => this.setState({
                          comments: text,
                         

                        })} />
                      </Item>


                    </CardItem >

                    <CardItem style={{ alignSelf: 'center' }}>
                      <Button rounded success onPress={() => this.formsubmitsave()}>
                        <Text style={{ padding: 20 }} >Add Saving</Text>
                      </Button>
                    </CardItem>
                  </Form>
                </Body>






              </CardItem>
            </Card>
          </Content>

        </ScrollView>
        
      </Container>

    );
  }
}
