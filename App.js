//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Login from './Blog/Pages/Login/Login';
import { QueryClient, QueryClientProvider } from 'react-query';
import Signup from './Blog/Pages/SignUp/Signup';
import AllPost from './Blog/Pages/AllPost/AllPost';
import AddPost from './Blog/Pages/AddPost/AddPost';
import { StatusBar } from 'expo-status-bar';
import TopBarAllPost from './Blog/Pages/Layout/TopBarAllPost';
// create a component
const queryClient = new QueryClient();

const App = () => {
  
const Stack = createNativeStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
   <StatusBar 

        barStyle="light-content" 
      />
    <NavigationContainer > 
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}   options={{ headerShown: false }} />
        <Stack.Screen name="allpost" component={AllPost}          options={{
          header: () => <TopBarAllPost />,
        }}
 />
        <Stack.Screen name="signup" component={Signup}   options={{ headerShown: false }} />
        <Stack.Screen name="addpost" component={AddPost}   options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

    </QueryClientProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
