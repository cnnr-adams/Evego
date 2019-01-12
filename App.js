import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapCmp from './MapCmp';
import FetchView from './FetchView';
import { getEvents } from './backend';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  componentDidMount() {
    return getEvents().then((jsonData) => {
      this.setState({
        isLoading: false,
        dataSource: jsonData,
      }, function () {

      });
    })
  }
  render() {
    return (
      <>
        <MapCmp/>
        <FetchView/>
      </>
    );
  }
}