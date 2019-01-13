import React from 'react';
import { StyleSheet, Text, View, Button, Alert, StatusBar } from 'react-native';
import MapCmp from './MapCmp';
import { getEvents } from './backend';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import InfoCard from "./InfoCard";

export class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, infoId: -1 }
  }
  
  showInfoCard = (id) => {
    this.setState({infoId: id})
  }

  render() {
    return (
      <View style={{display: "flex", flexFlow: "column", height: "100%"}}>
        <StatusBar hidden />
        <View style={{position: "relative", flexGrow: 1, flexShrink: 1, flexBasis: "auto", zIndex: -1}}>
          <MapCmp showInfoCard={this.showInfoCard}></MapCmp>
          <InfoCard id={this.state.infoId}/>
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('List View')}
        />
      </View>
    );
  }
}

class ListScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="I'm at List"
          onPress={() => this.props.navigation.navigate('Preferences')}
        />
      </View>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  'List View': ListScreen,
  Home: HomeScreen,
  Preferences: DetailsScreen,
}, {
    initialRouteName: 'Home'
  });

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

