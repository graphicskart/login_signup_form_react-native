import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity} from 'react-native';

export default class Login extends Component {
static navigationOptions = {
    header: null
}
  render() {
    return (
      <ImageBackground source={require('../img/image.jpeg')} style={{width: '100%', height: '100%'}} blurRadius={10}>
        <View style={[styles.container,{padding: 15}]}>
          <View style={[styles.container,{justifyContent: 'center'}]}>
            <Text style={styles.mainText}>FORGOT PASSWORD</Text>
          </View>
          <View style={styles.innerContainer}>
            <TextInput style={styles.textInput} placeholderTextColor="#fff" placeholder="Email"/>
            <TouchableOpacity style={[styles.textInput,{marginTop: 20,backgroundColor: '#4c8da5',justifyContent: 'center',alignItems: 'center',borderWidth: 0}]}>
              <Text style={{color: '#fff',fontSize: 16, fontWeight: '600'}}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}><Text style={styles.termsText}>Back to login </Text></TouchableOpacity>
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
