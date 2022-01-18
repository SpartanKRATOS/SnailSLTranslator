//import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from 'react';
import { StyleSheet, Button , SafeAreaView , Image , TouchableOpacity, Text, View, Pressable, Platform, Dimensions} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { Camera } from 'expo-camera';
import { useFonts } from 'expo-font';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import * as Speech from 'expo-speech';
import {WebView} from 'react-native-webview';
import AppLoading from 'expo-app-loading';



//import HomeScreen from './HomeSreen';
//import ChoiceScreen from './ChoiceScreen';
import  Pic from './assets/pic.png';

//import { ChatFeed, Message } from 'react-chat-ui';
//import { createStackNavigator } from 'react-navigation-stack';

// BY Tarik / Salah
function Home ({navigation}) {
  const {height} = Dimensions.get("screen");
  let [fontsLoaded] = useFonts({
    'Prompt-Bold': require('./assets/fonts/Prompt-Bold.ttf'),
    'Prompt-Regular': require('./assets/fonts/Prompt-Regular.ttf'),
    'Prompt-Black': require('./assets/fonts/Prompt-Black.ttf'),

  });
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'black'
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30,
        justifyContent: "space-evenly",
    },
   
    title: {
        color: '#05375a',
        fontSize: 25,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (


    <View style={styles.container}>
  <View style={styles.header}>
  <Image
       width={50} height={50}
        source={Pic}
      />
  </View>
  <View 
      style={[styles.footer, {
          backgroundColor: 'white'
      }]}
      
  >
      <Text style={[styles.title, {
          color: 'black', fontFamily: 'Prompt-Bold',
      }]}>EVERYONE Communicates</Text>
      <View style={styles.button}>

      <Pressable
          style={{backgroundColor : 'black' , paddingLeft : 20 ,paddingRight : 20 ,paddingTop : 10 ,paddingBottom : 10  , borderRadius: 30 , flexDirection:'row' , justifyContent:'space-between'}}

          onPress={()=> navigation.navigate('Message')}
      >
      <Text style={{color : 'white', fontSize : 17, fontFamily: 'Prompt-Regular'}}>Let's go</Text>
      </Pressable>
      </View>
  </View>
</View>
  )
    }
}

// By Tarik / Salah
function Messagy ({navigation}) {
  const [text, setText] = useState('');
  const fetchData= () =>{
    fetch('http://2fbd-105-67-134-191.ngrok.io/action', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
    }
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setText(data);
        });
      } else {
        // Error
        response.json().then((r) => {
          console.log(r.error);
        });
      }
      // Repeat fetch at specified interval
      
    }).catch((error) => {
      // Error no response
      
      // Repeat fetch at specified interval
     
    });
  }
  
// by tarik
  const handleVoice = () =>{
    Speech.speak(text);
    
  }

  // BY Tarik / Salah 
  const handleStart = () =>{
   
    if (btnText == "Start"){
      setBtnText("Stop");
      fetch('http://2fbd-105-67-134-191.ngrok.io/action', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({ order:"run"})

  
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log(data);
          });
        } else {
          // Error
          response.json().then((r) => {
            console.log(r.error);
          });
        }
        // Repeat fetch at specified interval
        
      }).catch((error) => {
        // Error no response
        
        // Repeat fetch at specified interval
       
      });
    }
    else {
      setBtnText("Start");
      fetch('http://2fbd-105-67-134-191.ngrok.io/action/stop', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        

  
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log(data);
          });
        } else {
          // Error
          response.json().then((r) => {
            console.log(r.error);
          });
        }
        // Repeat fetch at specified interval
        
      }).catch((error) => {
        // Error no response
        
        // Repeat fetch at specified interval
       
      });
    }
  }

  const [btnText, setBtnText] = useState('Start');
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'black'
    },
    camera: {
      flex: 1,
    },
    header: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      flex: 6,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 30,
      justifyContent: 'space-evenly',
      paddingHorizontal: 30
  },
  title: {
      color: '#05375a',
      fontSize: 35,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
  });
  // By Tarik 
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 2000)
    return () => clearInterval(interval)
    
  }, []); 

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  return (
    <View style={styles.container}>
      {/* <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <Pressable
          style={{backgroundColor : 'white' , padding : 10,  alignItems: 'center', flex: 0.1, alignSelf: 'flex-end', borderRadius: 5 , flexDirection:'row' }}

          onPress={()=> navigation.navigate('Pi Camera')}
      >
      <Text style={{color : 'black', fontSize : 10}}>Pi Camera</Text>
      </Pressable>
        </View>

      </Camera> */}
      <View style={styles.header}>
      <Text style={[styles.title, {
          color: 'white', fontFamily: 'Prompt-Bold'
      }]}>{text}</Text>
  </View>
  <View 
      style={[styles.footer, {
          backgroundColor: 'black',
          flexDirection: "row"
      }]}
  >
      
      <View style={styles.button }>
      <Pressable
          style={{backgroundColor : 'white' , paddingLeft : 20 ,paddingRight : 20 ,paddingTop : 10 ,paddingBottom : 10  , borderRadius: 30 , flexDirection:'row' , justifyContent:'space-between'}}

          onPress={()=> handleVoice()}
      >
      <FontAwesomeIcon icon={ faVolumeUp } color={ 'black' } />
          <Text style={{color : 'black', fontSize : 17, fontFamily: 'Prompt-Regular' ,  paddingLeft : 10 }}>Read</Text>
      </Pressable>
      </View>

      <View style={styles.button }>
      <Pressable
          style={{backgroundColor : 'white' , paddingLeft : 20 ,paddingRight : 20 ,paddingTop : 10 ,paddingBottom : 10  , borderRadius: 30 , flexDirection:'row' , justifyContent:'space-between'}}

          onPress={()=> handleStart()}
      >
           
          <Text style={{color : 'black', fontSize : 17, fontFamily: 'Prompt-Regular' , paddingLeft : 10}}>{btnText}</Text>
      </Pressable>
      </View>

     

  </View>
    </View>
  );

}
 // by Tarik 
function PiCamera () {
  const text = " shut up";
  const handleVoice = () =>{
    Speech.speak(text);
  }
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return ((Platform.OS === 'web'?
    <View style={styles.container}>
              <iframe src='https://sofit.ltd' style={{height : '100%'}}/>
      <View>
        <Pressable
            style={{backgroundColor : 'black' , padding : 20 , width : '100%' , borderRadius: 5 , flexDirection:'row' , justifyContent:'space-between'}}

            onPress={()=> handleVoice()}
        >
          <FontAwesomeIcon icon={ faVolumeUp } color={ 'white' } />
          <Text style={{color : 'white', fontSize : 10}}>Read</Text>
        </Pressable>
      </View>
    </View>:
    <View style={styles.container}>
      <View style={{flex:1}}>:<WebView originWhitelist={['*']}  
      source={{ uri: 'https://sofit.ltd',baseUrl:'' }}
     style={{flex:1,height:2}}
     />
     {/* <WebView
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        startInLoadingState={false}
        contentInset={{ top: 0, right: 0, left: 0, bottom: 0 }}
        scrollEnabled={false}
        source={{ uri: 'http://192.168.0.145:8081/stream.mjpg' }} /> */}
      </View>
  <View>
    <Pressable
        style={{backgroundColor : 'black' , padding : 20 , width : '100%' , borderRadius: 5 , flexDirection:'row' , justifyContent:'space-between'}}

        onPress={()=> handleVoice()}
    >
      <FontAwesomeIcon icon={ faVolumeUp } color={ 'white' } />
      <Text style={{color : 'white', fontSize : 10}}>Read</Text>
    </Pressable>

    
  </View>

  <View>
    <Pressable
        style={{backgroundColor : 'black' , padding : 20 , width : '100%' , borderRadius: 5 , flexDirection:'row' , justifyContent:'space-between'}}

        onPress={()=> handleVoice()}
    >
      <FontAwesomeIcon icon={ faVolumeUp } color={ 'white' } />
      <Text style={{color : 'white', fontSize : 10}}>Read</Text>
    </Pressable>

    
  </View>

  
  </View>
)
  );

}

// by Tarik
const Stack = createNativeStackNavigator();


export default function App() {


  return (<NavigationContainer>

    <Stack.Navigator initialRouteName = "Home" >
      <Stack.Screen  name="Home" component={Home} options={{ title: '', headerStyle: {
              backgroundColor: 'black',height:30, borderBottomColor : 'black'
           } }}/>
      <Stack.Screen  name="Message" component={Messagy} options={{ title: '', headerStyle: {
              backgroundColor: 'black', height:30, borderBottomColor : 'black'
           } }}/>
      <Stack.Screen  name="Pi Camera" component={PiCamera}/>
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

