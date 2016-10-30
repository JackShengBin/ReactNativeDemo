/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BlinkApp extends Component{
  render() {
    return (
    	//尝试把'justifyContent'改为'center'
    	//尝试把'flexDirection'改为'row'
    	<View style = {{
    		flex : 1,
    		flexDirection : 'column',
    		justifyContent : 'space-between',
    		backgroundColor : 'orange',
    	}}>
    		<View style = {{width : 50, height : 50, backgroundColor : 'powderblue'}} />
    		<View style = {{width : 50, height : 50, backgroundColor : 'skyblue'}} />
    		<View style = {{width : 50, height : 50, backgroundColor : 'steelblue'}} />
    	</View>
    );
  }
}

AppRegistry.registerComponent('BlinkApp', () => BlinkApp);