import React from 'react'

export default function usePostData(url) {
    const addPostMutation = useMutation(async (data) => {
        const response = await fetch('http://localhost:3000/posts', {
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
        addPostMutation.mutate(formData, {
          onSuccess: () => {
            Alert.alert('Success', 'Post added successfully');
          },
          onError: () => {
            Alert.alert('Error', 'Failed to add post');
          },
        });
      };
}
