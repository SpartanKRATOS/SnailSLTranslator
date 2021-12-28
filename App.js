//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button , SafeAreaView , Image , TouchableOpacity, Text, View, Pressable } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import * as Speech from 'expo-speech';
//import HomeScreen from './HomeSreen';
//import ChoiceScreen from './ChoiceScreen';
import  Pic from './assets/logoSNAIL.png';

//import { ChatFeed, Message } from 'react-chat-ui';
//import { createStackNavigator } from 'react-navigation-stack';

function SvgComponent(props) {
  return (
<Svg 
	 viewBox="0 0 595.28 841.89">
<G {...props}>
<Path class="st0" d="M1103.14,437.46c0-150.2,0-300.49,0-450.75c231.02,0,462.01,0,693,0c0,150.22,0,300.41,0,450.75
	C1565.13,437.46,1334.12,437.46,1103.14,437.46z M1251.56,241.5c-10.84-7.8-23.6-5.64-30.86,1.34c-7.62,7.33-9.49,18.81-4.44,28.13
	c5.09,9.39,15.88,14.08,26.43,11.49c11.77-2.89,17.03-11.75,17.11-29.14c5.4-3.28,10.85-6.77,16.5-9.91
	c2.06-1.14,4.6-1.98,6.92-1.98c79.54-0.1,159.08-0.04,238.63-0.14c8.59-0.01,17.24-0.39,25.76-1.41c31.86-3.84,55.97-19.78,72-47.57
	c2.76-4.78,6.2-7.97,11.18-10.33c17.74-8.45,32.59-20.24,41.89-38.06c1.24-2.38,2.27-4.89,3.6-7.22c4.44-7.78,7.42-16.06,8.23-25
	c0.6-6.68,0.8-13.39,1.18-20.05c12.84-7.48,17.82-16.62,15.02-27.84c-2.62-10.48-10.83-16.88-20.63-17.85
	c-10.54-1.05-20.3,5.19-23.96,14.9c-3.56,9.45-1.69,21.97,12.05,30.11c3.09,26.79-15.01,62.98-35.37,70.3c0-25.52,0-50.94,0-76.22
	c-8.15-4.6-16.04-9.05-23.76-13.41c0-11.14,0-21.85,0-32.48c13.3-6.98,19.01-16.38,16.65-27.26c-2.38-10.99-11.05-18.53-22-19.12
	c-10.12-0.55-20.24,6.28-23.16,16.15c-3.71,12.53,1.49,23.57,14.09,29.67c0,13.87,0,27.83,0,41.54c7.17,4,14.08,7.85,20.97,11.7
	c0,5.64,0.11,11.01-0.02,16.37c-0.46,18.45-0.89,36.9-1.55,55.35c-0.28,7.67-2.9,10-10.65,10.57c-0.62,0.05-1.25,0.11-1.87,0.11
	c-22.35,0.29-44.69,0.79-67.04,0.81c-36.46,0.04-72.93,0.23-109.38-0.57c-17.34-0.38-32.05-16.22-24.59-35.87
	c5.24-13.8,18.41-18.99,31.99-16.67c13.2,2.26,20.83,10.63,22.35,23.97c0.62,5.43,0.11,10.98,0.48,16.45
	c0.09,1.39,1.5,3.76,2.47,3.85c4.39,0.42,8.85,0.18,13.26,0.18c0.55-1.5,1.13-2.4,1.17-3.33c0.44-10.35,0.89-20.7-3.19-30.6
	c-9.25-22.42-35.2-33.15-59.1-24.36c-21.76,8-34,31.65-26.89,51.99c6.52,18.65,23.71,30.99,43.75,31.06
	c30.97,0.11,61.94,0.03,92.9,0.03c25.85,0,51.7-0.01,77.54,0.02c1.3,0,2.61,0.36,4.85,0.7c-5.69,4.71-10.23,8.26-17.25,8.23
	c-52.94-0.21-105.89-0.06-158.83-0.13c-4.46-0.01-8.99-0.49-13.36-1.37c-27.49-5.53-46.76-36.73-38.87-63.1
	c6.64-22.19,29.77-43.33,60.31-38.89c27.28,3.96,44.56,22.06,46.79,49.49c0.57,7.04,0.95,14.1,1.43,21.35c14.09,0,27.89,0,41.78,0
	c0.26-0.88,0.59-1.57,0.66-2.29c1.1-10.72,1.09-21.42-0.97-32.05c-6.2-31.97-24.4-54.51-53.77-68.24
	c-20.53-9.6-41.88-14.03-64.32-8.77c-29.47,6.91-50.91,24.96-66.57,50.2c-8.36,13.47-11.89,28.42-10.88,44.32
	c1.05,16.53,6.78,31.54,14.98,45.74c0.65,1.13,1.29,2.27,2.12,3.72c-16.32,0-32.04,0-47.81,0c-3.72-3.89-7.42-7.77-10.76-11.27
	c-23.44,0-46.46,0-69.65,0c-7.31-13.35-16.58-18.46-28.48-15.51c-10.11,2.5-17.37,11.92-17.39,22.56
	c-0.02,10.85,7.19,20.32,17.55,22.79c9.51,2.26,21.42-0.63,28.19-15.12c20.96,0,42.16,0,63.96,0c3.83,4.02,8.11,8.52,12.23,12.86
	c1.73-0.16,3.2-0.42,4.67-0.43c18.23-0.05,36.46-0.01,54.69-0.13c7.66-0.05,12.94,4.07,18.65,9.78c-2.23,0-3.55,0-4.86,0
	c-28.22,0-56.44-0.05-84.66,0.09c-2.44,0.01-5.12,0.84-7.26,2.06C1266.73,232.15,1259.24,236.85,1251.56,241.5z M1311.34,361.81
	c-7.16,0-13.96,0-20.85,0c0,20.63,0,40.96,0,61.16c4.57,4.12,11.47,4,15.92-0.6c0-14.6,0-29.68,0-45.55
	c14.26,16.87,27.94,33.05,41.45,49.03c7.25,0,14.07,0,21.08,0c0-20.52,0-40.83,0-61.09c-4.14-4.14-10.87-4.23-15.93,0.19
	c0,14.65,0,29.76,0,45.91C1338.56,393.84,1324.84,377.7,1311.34,361.81z M1192.22,416.48c-2.2-5.11-4.73-6.56-11.09-5.67
	c-2.05,0.29-4.95,1.78-5.49,3.38s0.82,5.01,2.35,5.92c3.99,2.35,8.47,5.1,12.85,5.29c16.32,0.69,32.68,0.53,49.03,0.41
	c2.89-0.02,5.89-1.03,8.61-2.14c2.87-1.16,5.68-2.79,6.02-6.49c0.34-3.8-2.46-5.55-5.03-7.26c-18.47-12.29-36.98-24.51-55.48-36.76
	c-0.88-0.58-1.71-1.25-3.03-2.22c1.17-0.39,1.71-0.72,2.25-0.72c13.48-0.03,26.97-0.11,40.45,0.11c1.67,0.03,3.79,1.39,4.88,2.77
	c3.99,5.09,11.07,5.64,15.81,0.87c0.78-3.28-0.72-5.9-3.38-7.2c-4.08-1.99-8.45-4.48-12.78-4.66c-15.7-0.64-31.43-0.49-47.15-0.4
	c-2.91,0.02-5.92,0.86-8.71,1.83c-3.34,1.17-6.66,3-7.09,6.96c-0.42,3.94,2.81,5.8,5.64,7.68c18.07,12,36.15,23.99,54.22,36
	c1.06,0.7,2.07,1.49,3.89,2.81c-1.61,0.24-2.18,0.39-2.75,0.39c-13.36,0.01-26.72,0.04-40.07-0.03
	C1194.75,417.36,1193.34,416.74,1192.22,416.48z M1484.14,421.98c-0.51-1.11-1.03-2.48-1.73-3.75
	c-9.43-17.12-18.95-34.19-28.27-51.37c-1.8-3.32-3.98-5.23-7.81-5.23c-4.38,0-8.12,0.51-10.58,5.11
	c-5.95,11.08-12.34,21.91-18.53,32.86c-4.16,7.35-8.27,14.72-12.29,21.88c3.25,5.8,12.93,6.1,16.15,0.83
	c2.06-3.37,4.01-6.81,5.89-10.04c12.09,0,23.81,0,35.57,0c2.02,3.52,3.85,7.07,6.02,10.4
	C1471.64,427.4,1480.67,427.14,1484.14,421.98z M1600.03,422.33c-4.86-6.29-10.68-4.7-15.92-4.88c-5.43-0.19-10.88-0.04-16.19-0.04
	c0-16.06,0-31.58,0-47.22c7.79,0,15.28,0.1,22.77-0.04c3.47-0.07,7-0.5,8.53-4.58c-2.29-3.87-5.98-4.02-9.58-4.03
	c-20.1-0.05-40.2-0.04-60.3,0c-1.74,0-3.61-0.03-5.17,0.59c-1.76,0.7-3.25,2.11-5.66,3.77c2.37,1.66,3.61,2.98,5.12,3.46
	c1.97,0.63,4.15,0.78,6.25,0.81c7.18,0.09,14.37,0.03,21.65,0.03c0,15.96,0,31.38,0,47.22c-1.53,0-2.87,0-4.2,0
	c-6.49,0.01-12.99-0.13-19.47,0.1c-3.28,0.12-6.83,0.42-8.16,4.57c2.27,4.07,6.16,3.94,9.86,3.95c19.85,0.05,39.7,0.04,59.55,0.01
	c1.74,0,3.59,0.05,5.19-0.5C1596.12,424.91,1597.74,423.65,1600.03,422.33z M1650.88,364.95c-4.49-4.37-11.16-4.41-15.59-0.37
	c0,20.38,0,40.76,0,61.13c0.61,0.14,0.96,0.3,1.32,0.3c23.07,0.02,46.14,0.04,69.21-0.02c1.71,0,3.58-0.26,5.06-1.01
	c1.25-0.63,2.68-2.08,2.84-3.32c0.12-0.9-1.51-2.61-2.67-3c-2.31-0.77-4.84-1.19-7.29-1.21c-16.21-0.1-32.42-0.05-48.64-0.05
	c-1.33,0-2.65,0-4.25,0C1650.88,399.53,1650.88,382.1,1650.88,364.95z"/>
<Path class="st0" d="M113.7,427.93c7.68-4.65,15.17-9.35,22.85-13.72c2.13-1.22,4.82-2.05,7.26-2.06
	c28.22-0.14,56.44-0.09,84.66-0.09c1.32,0,2.64,0,4.86,0c-5.71-5.71-10.99-9.83-18.65-9.78c-18.23,0.13-36.46,0.08-54.69,0.13
	c-1.47,0-2.94,0.26-4.67,0.43c-4.13-4.34-8.41-8.84-12.23-12.86c-21.79,0-43,0-63.96,0c-6.78,14.49-18.69,17.38-28.19,15.12
	c-10.37-2.47-17.58-11.94-17.55-22.79c0.02-10.64,7.28-20.06,17.39-22.56c11.91-2.95,21.17,2.16,28.48,15.51c23.18,0,46.2,0,69.65,0
	c3.34,3.5,7.04,7.37,10.76,11.27c15.77,0,31.49,0,47.81,0c-0.83-1.45-1.47-2.59-2.12-3.72c-8.2-14.2-13.93-29.22-14.98-45.74
	c-1.01-15.9,2.52-30.84,10.88-44.32c15.66-25.24,37.1-43.29,66.57-50.2c22.43-5.26,43.79-0.83,64.32,8.77
	c29.37,13.73,47.57,36.27,53.77,68.24c2.06,10.63,2.06,21.32,0.97,32.05c-0.07,0.72-0.4,1.41-0.66,2.29c-13.88,0-27.69,0-41.78,0
	c-0.48-7.25-0.86-14.31-1.43-21.35c-2.23-27.43-19.51-45.53-46.79-49.49c-30.54-4.44-53.67,16.7-60.31,38.89
	c-7.89,26.38,11.38,57.57,38.87,63.1c4.37,0.88,8.9,1.36,13.36,1.37c52.94,0.07,105.89-0.08,158.83,0.13
	c7.02,0.03,11.56-3.52,17.25-8.23c-2.24-0.33-3.55-0.69-4.85-0.7c-25.85-0.03-51.7-0.02-77.54-0.02c-30.97,0-61.94,0.08-92.9-0.03
	c-20.04-0.07-37.23-12.41-43.75-31.06c-7.11-20.34,5.13-43.99,26.89-51.99c23.9-8.78,49.85,1.94,59.1,24.36
	c4.09,9.9,3.64,20.25,3.19,30.6c-0.04,0.93-0.63,1.83-1.17,3.33c-4.41,0-8.87,0.24-13.26-0.18c-0.98-0.09-2.38-2.46-2.47-3.85
	c-0.37-5.47,0.14-11.02-0.48-16.45c-1.52-13.34-9.15-21.71-22.35-23.97c-13.58-2.32-26.76,2.87-31.99,16.67
	c-7.46,19.65,7.25,35.49,24.59,35.87c36.45,0.8,72.92,0.61,109.38,0.57c22.35-0.02,44.69-0.52,67.04-0.81
	c0.62-0.01,1.25-0.07,1.87-0.11c7.75-0.57,10.37-2.9,10.65-10.57c0.67-18.44,1.1-36.9,1.55-55.35c0.13-5.36,0.02-10.73,0.02-16.37
	c-6.9-3.85-13.8-7.7-20.97-11.7c0-13.71,0-27.67,0-41.54c-12.6-6.1-17.8-17.14-14.09-29.67c2.92-9.88,13.04-16.7,23.16-16.15
	c10.95,0.59,19.62,8.13,22,19.12c2.35,10.88-3.35,20.28-16.65,27.26c0,10.63,0,21.34,0,32.48c7.73,4.36,15.61,8.81,23.76,13.41
	c0,25.27,0,50.7,0,76.22c20.36-7.32,38.46-43.51,35.37-70.3c-13.73-8.13-15.61-20.66-12.05-30.11c3.66-9.71,13.43-15.94,23.96-14.9
	c9.8,0.97,18.01,7.38,20.63,17.85c2.8,11.22-2.18,20.35-15.02,27.84c-0.38,6.66-0.58,13.38-1.18,20.05
	c-0.81,8.93-3.79,17.21-8.23,25c-1.33,2.33-2.35,4.84-3.6,7.22c-9.29,17.81-24.15,29.61-41.89,38.06
	c-4.97,2.37-8.42,5.55-11.18,10.33c-16.03,27.8-40.14,43.74-72,47.57c-8.52,1.03-17.17,1.4-25.76,1.41
	c-79.54,0.1-159.08,0.04-238.63,0.14c-2.32,0-4.86,0.84-6.92,1.98c-5.65,3.13-11.1,6.63-16.5,9.91
	c-0.08,17.39-5.33,26.25-17.11,29.14c-10.55,2.59-21.34-2.1-26.43-11.49c-5.06-9.32-3.19-20.8,4.44-28.13
	C90.1,422.28,102.86,420.12,113.7,427.93z M99.4,435.28c-5.83-0.08-10.45,4.44-10.5,10.26c-0.05,5.63,4.77,10.49,10.42,10.48
	c5.5-0.01,10.2-4.62,10.39-10.19C109.88,440.29,105.06,435.35,99.4,435.28z M540.57,265.26c5.68-0.04,10.2-4.55,10.24-10.21
	c0.04-5.65-4.85-10.48-10.55-10.42c-5.61,0.06-10.1,4.67-10.1,10.35C530.16,260.96,534.55,265.3,540.57,265.26z M465.22,191.83
	c-5.86-0.01-10.53,4.59-10.47,10.32c0.05,5.53,4.75,10.13,10.39,10.19c5.79,0.06,10.41-4.62,10.36-10.48
	C475.43,196.11,471.06,191.84,465.22,191.83z M67.16,381.72c-0.01-5.99-4.08-10.09-10.03-10.12c-6.02-0.03-10.5,4.36-10.46,10.23
	c0.04,5.69,4.5,10.18,10.2,10.28C62.71,392.2,67.17,387.7,67.16,381.72z"/>
<Path class="st0" d="M173.49,548.24c13.5,15.89,27.21,32.03,41.66,49.04c0-16.15,0-31.26,0-45.91c5.07-4.41,11.79-4.32,15.93-0.19
	c0,20.26,0,40.56,0,61.09c-7.01,0-13.84,0-21.08,0c-13.51-15.98-27.18-32.15-41.45-49.03c0,15.88,0,30.95,0,45.55
	c-4.46,4.6-11.35,4.71-15.92,0.6c0-20.2,0-40.52,0-61.16C159.53,548.24,166.33,548.24,173.49,548.24z"/>
<Path class="st0" d="M54.37,602.91c1.12,0.26,2.53,0.87,3.94,0.88c13.36,0.07,26.72,0.05,40.07,0.03c0.57,0,1.13-0.16,2.75-0.39
	c-1.83-1.32-2.83-2.1-3.89-2.81c-18.07-12-36.15-24-54.22-36c-2.82-1.88-6.06-3.73-5.64-7.68c0.43-3.96,3.75-5.79,7.09-6.96
	c2.79-0.97,5.79-1.81,8.71-1.83c15.72-0.09,31.45-0.24,47.15,0.4c4.33,0.18,8.7,2.66,12.78,4.66c2.66,1.3,4.16,3.92,3.38,7.2
	c-4.74,4.76-11.82,4.22-15.81-0.87c-1.09-1.39-3.21-2.75-4.88-2.77c-13.48-0.23-26.96-0.14-40.45-0.11c-0.54,0-1.08,0.33-2.25,0.72
	c1.32,0.97,2.15,1.63,3.03,2.22c18.5,12.25,37.01,24.47,55.48,36.76c2.57,1.71,5.37,3.46,5.03,7.26c-0.33,3.69-3.15,5.33-6.02,6.49
	c-2.73,1.1-5.73,2.12-8.61,2.14c-16.35,0.11-32.71,0.28-49.03-0.41c-4.39-0.19-8.87-2.94-12.85-5.29c-1.53-0.9-2.89-4.31-2.35-5.92
	c0.54-1.6,3.45-3.09,5.49-3.38C49.64,596.35,52.16,597.8,54.37,602.91z"/>
<Path class="st0" d="M346.28,608.41c-3.47,5.15-12.5,5.42-15.58,0.68c-2.17-3.33-4-6.88-6.02-10.4c-11.76,0-23.48,0-35.57,0
	c-1.89,3.23-3.83,6.67-5.89,10.04c-3.23,5.27-12.9,4.97-16.15-0.83c4.02-7.16,8.14-14.53,12.29-21.88
	c6.19-10.95,12.59-21.78,18.53-32.86c2.47-4.59,6.21-5.11,10.58-5.11c3.83,0,6.01,1.91,7.81,5.23
	c9.31,17.18,18.84,34.25,28.27,51.37C345.25,605.93,345.77,607.3,346.28,608.41z M307.14,567.31c-4.47,7.76-8.57,14.88-12.89,22.38
	c8.77,0,16.78,0,25.41,0C315.43,582.14,311.45,575.02,307.14,567.31z"/>
<Path class="st0" d="M462.18,608.76c-2.3,1.32-3.91,2.58-5.75,3.21c-1.6,0.55-3.45,0.5-5.19,0.5c-19.85,0.03-39.7,0.05-59.55-0.01
	c-3.7-0.01-7.59,0.12-9.86-3.95c1.33-4.15,4.88-4.45,8.16-4.57c6.48-0.24,12.98-0.09,19.47-0.1c1.33,0,2.67,0,4.2,0
	c0-15.84,0-31.26,0-47.22c-7.28,0-14.47,0.06-21.65-0.03c-2.09-0.03-4.28-0.18-6.25-0.81c-1.51-0.48-2.74-1.8-5.12-3.46
	c2.42-1.66,3.9-3.07,5.66-3.77c1.56-0.62,3.43-0.59,5.17-0.59c20.1-0.04,40.2-0.05,60.3,0c3.61,0.01,7.29,0.17,9.58,4.03
	c-1.54,4.09-5.06,4.52-8.53,4.58c-7.48,0.14-14.97,0.04-22.77,0.04c0,15.64,0,31.16,0,47.22c5.32,0,10.76-0.15,16.19,0.04
	C451.5,604.06,457.32,602.47,462.18,608.76z"/>
<Path class="st0" d="M513.03,551.38c0,17.15,0,34.57,0,52.46c1.59,0,2.92,0,4.25,0c16.21,0,32.43-0.05,48.64,0.05
	c2.44,0.01,4.98,0.44,7.29,1.21c1.17,0.39,2.79,2.09,2.67,3c-0.17,1.24-1.59,2.69-2.84,3.32c-1.48,0.75-3.36,1.01-5.06,1.01
	c-23.07,0.06-46.14,0.03-69.21,0.02c-0.36,0-0.71-0.16-1.32-0.3c0-20.38,0-40.75,0-61.13C501.86,546.97,508.54,547.01,513.03,551.38
	z"/>
<Path class="st0" d="M1413.4-189.42c5.66,0.66,10.48,45.07,10.3,94.88c-0.19,50.01-4.89,91.49-10.39,91.56
	c-5.64,0.07-10.47-43.6-10.42-94.21C1402.95-149.51,1407.57-190.09,1413.4-189.42z"/>
<Path class="st0" d="M1216.85-72.88c-6.01,0.04-10.41-4.3-10.41-10.28c0-5.68,4.49-10.29,10.1-10.35
	c5.7-0.06,10.59,4.77,10.55,10.42C1227.05-77.43,1222.53-72.93,1216.85-72.88z"/>
<Path class="st0" d="M1230.22-177.17c5.84,0.01,10.21,4.28,10.27,10.03c0.06,5.86-4.57,10.53-10.36,10.48
	c-5.64-0.06-10.33-4.66-10.39-10.19C1219.69-172.58,1224.36-177.18,1230.22-177.17z"/>
<Path class="st0" d="M1291.89-158.28c0.04,5.98-17.19,10.48-39.73,10.38c-21.99-0.09-39.21-4.59-39.36-10.28
	c-0.15-5.87,17.16-10.26,40.38-10.23C1276.15-168.37,1291.85-164.27,1291.89-158.28z"/>
<Path class="st0" d="M1304.85-98.69c4.31,7.71,8.29,14.83,12.52,22.38c-8.63,0-16.64,0-25.41,0
	C1296.29-83.81,1300.39-90.93,1304.85-98.69z"/>
    </G>
</Svg>
  );

  }

function Home ({navigation}) {

  return (
    <SafeAreaView style={{flex:1, justifyContent :'center' , alignItems : 'center' , backgroundColor: 'black'}}>
      {/* <SvgComponent width="30%" height="30%"  color="white"/> */}

    <Image
       width={50} height={50}
        source={Pic}
      />
    <TouchableOpacity >
    <View style={{margin:20}}>
      <Pressable
          style={{backgroundColor : 'white' , padding : 20 , width : '100%' , borderRadius: 5 , flexDirection:'row' , justifyContent:'space-between'}}

          onPress={()=> navigation.navigate('Message')}
      >
      <Text style={{color : 'black', fontSize : 20}}>Let's go</Text>
      </Pressable>
    </View>
    </TouchableOpacity>
    </SafeAreaView>
    
  )

}


function Messagy () {
  const text = " shut up";
  const handleVoice = () =>{
    Speech.speak(text);
  }
    return (

      <View>
        <Pressable
            style={{backgroundColor : 'black' , padding : 20 , width : '100%' , borderRadius: 5 , flexDirection:'row' , justifyContent:'space-between'}}

            onPress={()=> handleVoice()}
        >
          <FontAwesomeIcon icon={ faVolumeUp } color={ 'white' } />
          <Text style={{color : 'white', fontSize : 10}}>Read</Text>
        </Pressable>
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

