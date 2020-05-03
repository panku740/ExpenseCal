import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Container, Header, Root, Title, Item, Input, Picker, Label, Form, Content, Card, CardItem, Thumbnail, Button, Footer, FooterTab, Left, Body } from 'native-base';
//import { Icon } from "react-native-elements";
import * as Font from 'expo-font';
import { AppLoading, ActivityIndicator } from 'expo';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import History from './History';
//import unknown from 'react-native-web/dist/cjs/exports/Text';




//const Stack = createStackNavigator();


export default class NewPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selected: undefined

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
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return (<AppLoading />);
    }
    return (

      <Container style={{ backgroundColor: '#e6e6e6' }}>
        <Header style={{ backgroundColor: 'white' }} >
          <Left style={{ marginLeft: '-50%' }}>
            <Image source={{
              uri: 'https://lh3.googleusercontent.com/11JlG_Nj0Nv8g4CdLio_fDxdJj6yFR1rTycAT5OgWwKzqPb5rbNtSpOu4zf-Z1R2W0s'
            }}
              style={{
                alignSelf: 'center',
                height: '100%',
                width: '100%', flex: 1, margin: 10
              }}
              resizeMode={'contain'} />


          </Left>

          <Title style={{ alignSelf: 'center', color: 'black', position: 'absolute' }}>ExpensesCal</Title>


        </Header>
        <ScrollView>

          <TouchableOpacity  >
            <Content style={{ marginLeft: 3, marginRight: 3 }}>
              <Card style={{ flex: 1 }}>
                <CardItem
                >
                  <Left>
                    <Avatar
                      size="large"
                      rounded
                      title="MT"
                      source={{
                        uri:
                          'https://www.w3schools.com/howto/img_avatar.png',
                      }}
                      onPress={() => console.log("Works!")}
                      activeOpacity={0.7}

                    />
                    <Body style={{ paddingLeft: 25 }}>
                      <Text style={{ fontSize: 18 }}>Pankaj Kundu</Text>
                      <Text note>Student</Text>


                    </Body>
                  </Left>
                </CardItem>

              </Card>
            </Content>
          </TouchableOpacity>

          <Content style={{ marginLeft: 3, marginRight: 3 }}>
            <Card style={{ flex: 1 }}>
              <CardItem>
                <Left>
                  <Icon name="plus" size={30} color=""

                  />
                  <Body>
                    <Text style={{ color: 'red' }}>New Expenditure Details</Text>

                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ width: '100%', alignSelf: 'center' }}>

                <Body style={{ width: '100%', alignSelf: 'center', margin: -12 }}>
                  <Form style={{ width: '100%', alignSelf: 'center' }}>


                    <CardItem >

                      <Label style={{ marginRight: '10%' }}>Amount:</Label>

                      <Item rounded style={{ margin: 0, height: 40, width: '50%' }}>

                        <Input require keyboardType='numeric' placeholder='Rs.' />
                      </Item >





                    </CardItem>
                    <CardItem>

                      <Label style={{ marginRight: '10%' }}>Quantity:</Label>
                      <TouchableOpacity  >
                        <Icon name="minus" size={20} color="#336699"

                        />

                      </TouchableOpacity>
                      <Item rounded disabled style={{ margin: 5, height: 40, width: '15%' }}>

                        <Input require keyboardType='numeric' defaultValue="1" />
                      </Item >
                      <TouchableOpacity  >
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
                      <Left>
                        <Label style={{ marginRight: '10%' }}>Expense Reason :</Label>
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
                            <Picker.Item label="Food" value="key0" />
                            <Picker.Item label="Fashion" value="key1" />
                            <Picker.Item label="Rental" value="key2" />
                            <Picker.Item label="Others" value="key3" />
                          </Picker>
                        </Item>
                      </Left>

                    </CardItem>
                    <CardItem>
                      <Left>
                        <Label style={{ marginRight: '10%' }}>Total:</Label>


                        <Icon name="coins" color='#ffcc00' />
                        <Text> 1100</Text>

                      </Left>

                    </CardItem>


                    <CardItem style={{ alignSelf: 'center' }}>
                      <Button rounded danger >
                        <Text style={{ padding: 20 }}>Add Payment</Text>
                      </Button>


                    </CardItem>

                  </Form>
                </Body>


              </CardItem>

            </Card>
          </Content>

          <Content style={{ marginLeft: 3, marginRight: 3 }}>
            <Card style={{ flex: 1 }}>
              <CardItem>
                <Left>
                  <Icon name="plus" size={30} color=""

                  />
                  <Body>
                    <Text style={{ color: 'green' }}>New Saving Details</Text>

                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{ width: '100%', alignSelf: 'center' }}>

                <Body >
                  <Form style={{ width: '100%', alignSelf: 'center' }}>


                    <CardItem>
                      <Left>

                        <Label style={{ marginRight: '10%' }}>Amount:</Label>

                        <Item rounded style={{ margin: 0, height: 40, width: '50%' }}>

                          <Input require keyboardType='numeric' placeholder='Rs.' />
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
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
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
                        <Text> 1100</Text>

                      </Left>

                    </CardItem>
                    <CardItem style={{ alignSelf: 'center' }}>
                      <Item rounded style={{ height: 40, width: '100%' }}>
                        <Input placeholder='Comments..' />
                      </Item>


                    </CardItem >

                    <CardItem style={{ alignSelf: 'center' }}>
                      <Button rounded success >
                        <Text style={{ padding: 20 }}>Add Saving</Text>
                      </Button>
                    </CardItem>
                  </Form>
                </Body>






              </CardItem>
            </Card>
          </Content>

        </ScrollView>
        <Footer style={{ backgroundColor: '#e6e6e6' }}>
          <FooterTab style={{ backgroundColor: 'white', marginTop: 1 }}>
            <Button active style={{ backgroundColor: '#e6e6e6' }}>

              <Icon name='plus' size={20} color={'grey'} />
              <Text style={{ color: 'grey' }}>New</Text>
            </Button>
            <Button
             onPress={() => this.props.navigation.navigate("History")}
            >

              <Icon name='history' size={20} color={'grey'}
              />
              <Text style={{ color: 'grey' }}>History</Text>
            </Button>
            <Button >

              <Icon name='piggy-bank' size={20} color={'grey'} />
              <Text style={{ color: 'grey' }}>savings</Text>
            </Button>
            <Button
              >

              <Icon name='cog' size={20} color={'grey'} />
              <Text style={{ color: 'grey' }}>Settings</Text>

            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}


