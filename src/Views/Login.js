import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity} from 'react-native';
export default class Login extends Component {
static navigationOptions = {
    header: null
}
onPress = () => {
    this.props.navigation.navigate('Register')
}
  render() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.container,{justifyContent: 'center',alignItems: 'center',backgroundColor: '#64a3e3',flex: 4}]}>
                <View style={styles.logoImg}>
                    <Image source={require('../img/logo.png')} style={{width: '100%',height: '100%'}}/>
                </View>
                <Text style={styles.mainText}>LOGIN</Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={{marginTop: -60,backgroundColor: '#fff',borderRadius: 8,shadowColor: "#000000",shadowOpacity: 2,shadowRadius: 3,shadowOffset: {height: 0,width: 0},elevation: 5}}>
                    <View style={{marginTop: 20,marginBottom: 30}}>
                        <TextInput style={styles.textInput} placeholderTextColor="#000" placeholder="Username"/>
                        <TextInput style={styles.textInput} placeholderTextColor="#000" placeholder="Password" secureTextEntry={true}/>
                        <TouchableOpacity onPress={this.onPress.bind(this)}><Text style={styles.termsText}>Don't have account? Click here </Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{height: 40,backgroundColor: '#64a3e3',alignItems: 'center',justifyContent: 'center',position: 'absolute',bottom: -20,width: '90%',left: '5%',borderRadius: 20}}>
                        <Text style={{color: '#fff',fontSize: 16,fontWeight: '600'}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={{alignItems: 'center',marginTop: 35}}><Text style={{color: '#7d7e80'}}>Don't have an account ? Click here</Text></TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 3,
    padding: 10,
  },
  mainText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30
  },
  textInput: {
    height: 50, 
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 3,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#dcdee1',
    color: '#000',
    marginLeft: 20,
    marginRight: 20
  },
  termsText: {
    textAlign: 'center',
    color: '#fff'
  },
  logoImg: {
      height: 130,
      width: 130,
      justifyContent: 'center'
  }
});
