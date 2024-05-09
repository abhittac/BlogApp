import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, useController } from 'react-hook-form';

const Page9 = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const emailController = useController({
    control,
    defaultValue: '',
    name: 'email',
    rules: { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter a valid email address' } }
  });
  const passwordController = useController({
    control,
    defaultValue: '',
    name: 'password',
    rules: { required: 'Password is required' }
  });

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={emailController.field.value}
        onChangeText={emailController.field.onChange}
        onBlur={emailController.field.onBlur}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={passwordController.field.value}
        onChangeText={passwordController.field.onChange}
        onBlur={passwordController.field.onBlur}
        secureTextEntry={true}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Page9;
