import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header.js';

export default class App extends React.Component {

      state = {
        value: "test",
        value2: "test2"
      }
    

  render() {
    const listname = 'test';
    return (
      <View style={styles.container}>
        <Header testin={this.state.value2} testing2={this.state.value} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
