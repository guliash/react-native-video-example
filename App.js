/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={ { uri: 'https://raw.githubusercontent.com/react-native-community/react-native-video/master/examples/basic/broadchurch.mp4' } }
          style={ styles.video }
          muted={ true }
          ref={ player => this.player = player }
        />

        <TouchableOpacity
          style={ styles.fullscreenButton }
          onPress={ () => {
            if (this.player) {
              this.player.presentFullscreenPlayer();
            }
          } }>
          <Text>Fullscreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  video: {
    height: 300
  },
  fullscreenButton: {
    alignSelf: 'center'
  }
});
