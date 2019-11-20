import React,{Component} from 'react';
import {TextInput,Button,View,StyleSheet,StatusBar} from 'react-native';


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


export class LoginScreen extends Component{

    constructor(inprops){
        super(inprops)
        this.state={
            userID:"User Name",
            password:"Password"
        }
    
    }

    loginToAccount(){
        //Implement Login Logic

    }


    render(){

        return(
                <View>
                    <TextInput placeholder={this.state.userID}></TextInput>
                    <TextInput placeholder={this.state.password} secureTextEntry={true}></TextInput>
                    <Button title="LOGIN"></Button>
                    <Button title="SIGN UP" onPress={()=>{ console.log("PUSHED"); this.props.navigation.push('Signup')}}></Button>
                </View>
            
        )


    }



}
