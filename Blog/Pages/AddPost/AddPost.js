import React from 'react';
import { TextInput, Button, View, StyleSheet, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from 'react-query';

const AddPost = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const addPostMutation = useMutation(async (data) => {
    const response = await fetch('http://192.168.1.134:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  });

  const handleAddPost = (formData) => {
    console.log('chececcece',formData)
    addPostMutation.mutate({...formData,likes:12,author:'shubham'}, {
      onSuccess: () => {
        Alert.alert('Success', 'Post added successfully');
      },
      onError: () => {
        Alert.alert('Error', 'Failed to add post');
      },
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Post</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={[styles.input, errors.title && styles.errorInput]}
                onBlur={onBlur}
                placeholder="Title"
                onChangeText={value => onChange(value)}
                value={value}
              />
              {errors.title && <Text style={styles.error}>{errors.title.message}</Text>}
            </>
          )}
          name="title"
          rules={{ required: 'Title is required' }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.input, errors.description && styles.errorInput]}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                multiline
                placeholder="Description"
                numberOfLines={4}
              />
              {errors.description && <Text style={styles.error}>{errors.description.message}</Text>}
            </>
          )}
          name="description"
          rules={{ required: 'Description is required' }}
          defaultValue=""
        />
   

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
             <Text style={styles.label}>Image Url</Text>
             <TextInput
             
             mode="outlined"
             textColor='white'
             style={[styles.input, errors.title && styles.errorInput]}
             // label="Outlined input"
             placeholder="Paste here"
             value={value}
             onBlur={onBlur}
             activeOutlineColor='yellow'
             onChangeText={value => onChange(value)}
           />
            </>

          )}
          name="url"
          rules={{ required: 'url is required' }}
          defaultValue=""
        />
        {errors.url && <Text style={{ color: 'red' }}>{errors.url.message}</Text>}
   
        <Button onPress={handleSubmit(handleAddPost)} title="Add Post" color="#5c6bc0" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: 300, // Adjust the width as needed
    marginTop: 20, // Adjust the margin as needed
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  errorInput: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default AddPost;
