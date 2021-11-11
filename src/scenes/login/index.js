import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="ios-mic-outline" size={60} color="black" style={styles.iconMic}/>
            <Text style={styles.signIn}>SIGN IN</Text>
            <Text style={styles.toContinue}>TO CONTINUE</Text>
            <TextInput keyboardType='email-address' placeholder="Type your e-mail" style={styles.input1}></TextInput>
            <TextInput secureTextEntry={true} placeholder="Type your password" style={styles.input2}></TextInput>
            <TouchableOpacity style={styles.button1}>
              <View>
               <Text style={styles.textButton}>Log in</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity>
                  <Text style={{color:'#212121', fontSize: 13, marginBottom: 50}}>Lost password?</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}> 
            
            <TouchableOpacity style={styles.button2}>
               <Text style={styles.redes}><Ionicons name="ios-logo-google" size={20} color="black"/> Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button2}>
               <Text style={styles.redes}><Ionicons name="ios-logo-facebook" size={20} color="black"/> Facebook</Text>
            </TouchableOpacity>
            </View>
            <Text style={{color:'#212121', fontSize: 14, marginBottom: -110, marginTop: 90}}>Dont have an account? <Text style={{fontWeight:'bold'}}>Register</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconMic:{
        marginTop: -140,
        marginBottom: 20
    },
    signIn:{
        fontSize: 13,
        color: '#212121',
        fontWeight: '500',
    },
    toContinue:{
        fontSize: 13,
        color: '#212121',
        fontWeight: '500',
        marginBottom: 30,
    },
    input1:{
        width: 200,
        height: 40,
        margin: 7,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        color: '#212121',
        textAlign: 'center'
    },
    input2:{
        width: 200,
        height: 40,
        margin: 7,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        color: '#212121',
        textAlign: 'center'
    },
    button1:{
        width: 125,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 10,
        borderRadius: 30,
        backgroundColor: '#f2f2f2',
    },
    button2:{
        width: 125,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 10,
        borderRadius: 30,
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
    },
    multicolor:{
        width: '100%',
        height: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        fontSize: 15,
        color: '#212121',
    },
    redes:{
        fontSize: 15,
        color: '#212121',
    },
})

export default Login