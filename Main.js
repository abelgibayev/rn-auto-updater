import React from 'react';
const RNFS = require('react-native-fs');

import {View, Text} from 'react-native';

export default class Main extends React.Component {
  componentDidMount(): void {
    RNFS.downloadFile({
      fromUrl: 'http://10.10.15.245:8900/applicationBundle.js',
      toFile: RNFS.DocumentDirectoryPath + '/applicationBundle.js',
      background: false,
    })
      .promise.then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    );
  }
}
