// Login.js
import React, { useRef } from 'react';
import { View, Text,  Button, ImageBackground ,StyleSheet, Pressable,} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Divider} from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { getRequest } from '../../API/APICall';
import * as Animatable from 'react-native-animatable';
const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const nav=  useNavigation();
  const successAlertRef = useRef(null);
  const { data, isLoading, isError } = useQuery('userData', () => getRequest('http://192.168.1.134:3000/user'));

  const onSubmit = submitdata => {
    console.log('data',data)
    data.map((i)=>{
if(submitdata.username===i.username && submitdata.password===i.password){
      nav.navigate('allpost')
    
    }else{
      if (successAlertRef.current) {
        successAlertRef.current.fadeInUp(); // Trigger fadeInUp animation
      }
      setTimeout(() => {
        if (successAlertRef.current) {
          successAlertRef.current.fadeOut(); // Trigger fadeOut animation
        }
      }, 3000);
    }
    })
    // else{

// }
  }

  return (
    <ImageBackground
    source={require('../../Assests/loginbg.png')}
    style={styles.background}
    >
          <View >

<Animatable.View ref={successAlertRef} style={styles.successAlert} animation="fadeOut" duration={4000} easing="ease-in-out">
  <Text style={styles.successText}>Fail to login!</Text>
</Animatable.View>
</View>
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={styles.login}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (


            <TextInput
            mode="outlined"
            // label="Outlined input"
            activeOutlineColor='yellow'
            placeholder="Type Username"
            textColor='white'
            value={value}
            onBlur={onBlur}
            style={{backgroundColor:'transparent'}}
            onChangeText={value => onChange(value)}
          />


           
          )}
          name="username"
          rules={{ required: 'Username is required' }}
          defaultValue=""
        />
        {errors.username && <Text style={{ color: 'red' }}>{errors.username.message}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
            secureTextEntry
            mode="outlined"
            textColor='white'
            style={{backgroundColor:'transparent'}}
            // label="Outlined input"
            placeholder="Type Password"
            value={value}
            onBlur={onBlur}
            activeOutlineColor='yellow'
            onChangeText={value => onChange(value)}
          />

          )}
          name="password"
          rules={{ required: 'Password is required' }}
          defaultValue=""
        />
        {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
      </View>
      <Pressable onPress={handleSubmit(onSubmit)}>


          <View style={styles.btn} >
          <Text style={styles.btn_text}>Login</Text>
     
          </View>
      </Pressable>
    
          <Divider/>

<View style={styles.signup} >
<Text style={styles.btn_sign_text}> Don't have an account?</Text>




<Text style={styles.sign_up} onPress={()=>{
  nav.navigate('signup')
}} >SignUp</Text>



</View>

    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  sign_up:{
    color:'#3f7ef7',
 
  },
  signup:{
    marginTop:20,
    display:'flex',
    alignItems:'center'
  },
    login: {
      fontSize: 40,
      color: 'white',
      marginBottom: 40, // Adjust the margin as needed
      textAlign: 'center', // Center the login text
    },
    label: {
      color: 'white',
      marginTop: 20, // Adjust the margin as needed
      fontSize: 18,
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center', // Center content horizontally and vertically
      width: '100%',
    },
    inputContainer: {
      width: 300, // Adjust the width as needed
      marginTop: 20, // Adjust the margin as needed
    },
    input: {
      width: '100%', // Take up the full width of the input container
      height: 40,
      borderWidth: 2,
      borderColor: '#7b85f7c7',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 10, // Adjust the margin as needed
      color: 'white', // Set input text color to white
    },
    btn_sign_text:{
      color:'white'
    },
    btn: {

      height: 50,
      marginTop: 20, // Adjust the margin as needed
      marginBottom: 20, // Adjust the margin as needed
      borderRadius: 20,
      backgroundColor: '#3f7ef7',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', // Center the button horizontally
    },
    btn_text: {
      color: 'white',
      fontSize: 20,
    },successAlert: {
      position: 'absolute',
      bottom: -130,
      alignSelf: 'center',
      backgroundColor: 'red',
      padding: 20,
      borderRadius: 5,
    },
    successText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
  
  
export default Login;
