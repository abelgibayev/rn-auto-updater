import React from 'react';
const RNFS = require('react-native-fs');

import {View, Text, Button, StyleSheet} from 'react-native';

export default class Main extends React.Component {
  state = {
    curActiveBundle: '',
  };

  _onBlueButtonPress = async () => {
    RNFS.downloadFile({
      fromUrl: 'http://10.10.15.245:8900/index.android.blue.bundle',
      toFile: RNFS.DocumentDirectoryPath + '/ReactNativeDevBundle.js',
      background: false,
    })
      .promise.then(res => console.log(res))
      .catch(err => console.log(err));
    console.log('loaded red file');
  };

  _onRedButtonPress = async () => {
    RNFS.downloadFile({
      fromUrl: 'http://10.10.15.245:8900/index.android.red.bundle',
      toFile: RNFS.DocumentDirectoryPath + '/ReactNativeDevBundle.js',
      background: false,
    })
      .promise.then(res => console.log(res))
      .catch(err => console.log(err));
    console.log('loaded blue file');
  };

  render() {
    return (
      <View>
        <Text style={styles.red}>Hello world</Text>
        <Text style={styles.red}>Hello world</Text>
        <Text style={styles.red}>{this.state.curActiveBundle}</Text>
        <Button onPress={this._onReloadButtonPress} title="LOAD" />
        <Button onPress={this._onRedButtonPress} title="red" />
        <Button onPress={this._onBlueButtonPress} title="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  },
});
