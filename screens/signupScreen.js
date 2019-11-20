import React,{Component} from 'react';
import {TextInput,Button,View,StyleSheet,StatusBar,Text} from 'react-native';
import * as Speech from 'expo-speech';
import { Accelerometer } from 'expo-sensors';

const styles=StyleSheet.create({
    parentView:{
        flex:1,
        flexWrap:"wrap"
    },
    userIDLabel:{
        flex:1,
        flexDirection:"row"
    },
    userIDInput:{
        flex:3,
        flexDirection:"row"
    }
    



});


export class SignupScreen extends Component{

    constructor(inprops){
        super(inprops)
        this.state={
            userID:"User Name",
            password:"Password",
            speakingID: null,
            accelerometerData: {},
        }
    
    }

    loginToAccount(){
        //Implement Login Logic

    }

    useSOS() {
        this.state.speakingID=setInterval(()=>{Speech.speak('Hi I am Working Fine');},5000);
        this.startAccelerometer();  
    }
    stopSOS() {
        if(!(this.state.speakingID === null)) {
            clearInterval(this.state.speakingID);
        }
    }

    startAccelerometer() {
        Accelerometer.setUpdateInterval(1000);

    }
    componentDidMount() {
        this._toggle();
        this.startAccelerometer();
      }
    
      componentWillUnmount() {
        this._unsubscribe();
      }
    
      _toggle = () => {
        if (this._subscription) {
          this._unsubscribe();
        } else {
          this._subscribe();
        }
      };

      
     
    
      _subscribe = () => {
        var ctr=0;
        var accx=0;
        var accy=0;
        var accz=0;
        this._subscription = Accelerometer.addListener(accelerometerData => {
          this.setState({ accelerometerData });
            ctr+=1;
            accx=(accx+accelerometerData.x)/ctr;
            accy=(accy+accelerometerData.y)/ctr;
            accz=(accx+accelerometerData.z)/ctr;
            console.log(accx);
            console.log(accy);
            console.log(accz);
        });
      };
    
      _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
      };

    render(){

        return(
                <View>
                    <Text>SIGN UP SCREEN</Text>
                    <TextInput placeholder={this.state.userID}></TextInput>
                    <TextInput placeholder={this.state.password} secureTextEntry={true}></TextInput>
                    <Button title="REGISTER" onPress={()=>{console.log("Register Clicked")}} ></Button>
                    <Button title="SOS" onPress={()=>{this.useSOS()}}></Button>
                    <Button title="Stop SOS" onPress={()=>{this.stopSOS()}}></Button>
                </View>
            
        )


    }



}
