//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button , SafeAreaView , Image , TouchableOpacity, Text, View } from 'react-native';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import HomeScreen from './HomeSreen';
//import ChoiceScreen from './ChoiceScreen';
import  Pic from './assets/ph.png';
//import { ChatFeed, Message } from 'react-chat-ui';
//import { createStackNavigator } from 'react-navigation-stack';




function Home ({navigation}) {

  return (
    <SafeAreaView style={{flex:1, justifyContent :'center' , alignItems : 'center' , backgroundColor: '#fff'}}>
    <View >
       <Text style={{fontSize:30 , fontWeight : 'bold' , color : '#20315f'}}>Snail</Text>
    </View>
   
  
   <Image
       width={50} height={50}
        source={Pic}
      />
    <TouchableOpacity >
      
      <Button
          style={{backgroundColor : '#AD40AF' , padding : 20 , width : '90%' , borderRadius: 5 , flexDirection:'row' , justifyContent:'space-between'}}
          title='Begin your translation'
          onPress={()=> navigation.navigate('Message')}
      />
    </TouchableOpacity>
    </SafeAreaView>
    
  )

}


function Messagy () {

    return (

      <View>

      <View style={{
        backgroundColor: "#0078fe",
        padding:10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        
        
        borderRadius: 20,
      }}>

        
        <Text style={{ fontSize: 16, color: "#fff", }} >teeeeeeext</Text>
        

          <View style={styles.rightArrow}></View>
          
          <View style={styles.rightArrowOverlap}></View>
        
        
        
</View> 

<View style={{
        backgroundColor: "#0078fe",
        padding:10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        
        
        borderRadius: 20,
      }}>

        
        <Text style={{ fontSize: 16, color: "#fff", }} >teeeeeeext</Text>
        

          <View style={styles.rightArrow}></View>
          
          <View style={styles.rightArrowOverlap}></View>
        
        
        
</View> 

<View style={{
        backgroundColor: "#0078fe",
        padding:10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        
        
        borderRadius: 20,
      }}>

        
        <Text style={{ fontSize: 16, color: "#fff", }} >teeeeeeext</Text>
        

          <View style={styles.rightArrow}></View>
          
          <View style={styles.rightArrowOverlap}></View>
        
        
        
</View> 

<View style={{
        backgroundColor: "#0078fe",
        padding:10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        
        
        borderRadius: 20,
      }}>

        
        <Text style={{ fontSize: 16, color: "#fff", }} >teeeeeeext</Text>
        

          <View style={styles.rightArrow}></View>
          
          <View style={styles.rightArrowOverlap}></View>
        
        
        
</View> 


</View>
      
  

    );

}


const Stack = createNativeStackNavigator();


export default function App() {


  return (<NavigationContainer>

    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen  name="Home" component={Home}/>
      <Stack.Screen  name="Message" component={Messagy}/>
    </Stack.Navigator>
  </NavigationContainer>)
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78aafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle : {
      

  },

  rightArrow: {
    position: "absolute",
    backgroundColor: "#0078fe",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eeeeee",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20
  
  }


});

