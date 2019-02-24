/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity} from 'react-native';

export default class Register extends Component {
    static navigationOptions = {
        header: null
        }
  render() {
    return (
      <ImageBackground source={require('../img/image.jpeg')} style={{width: '100%', height: '100%'}} blurRadius={10}>
        <View style={[styles.container,{padding: 15}]}>
          <View style={[styles.container,{justifyContent: 'center'}]}>
            <Text style={styles.mainText}>CREATE ACCOUNT</Text>
          </View>
          <View style={styles.innerContainer}>
            <TextInput style={styles.textInput} placeholderTextColor="#fff" placeholder="Username"/>
            <TextInput style={styles.textInput} placeholderTextColor="#fff" placeholder="Email"/>
            <TextInput style={styles.textInput} placeholderTextColor="#fff" placeholder="Password" secureTextEntry={true}/>
            <TouchableOpacity style={[styles.textInput,{marginTop: 30,backgroundColor: '#4c8da5',justifyContent: 'center',alignItems: 'center',borderWidth: 0}]}>
              <Text style={{color: '#fff',fontSize: 16, fontWeight: '600'}}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>Terms & Conditions</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 2
  },
  mainText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center'
  },
  textInput: {
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 3,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    borderColor: '#fff'
  },
  termsText: {
    textAlign: 'center',
    color: '#fff'
  }
});
