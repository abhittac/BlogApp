import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, Image } from 'react-native';
import { useQuery } from 'react-query';
import { getRequest } from '../../API/APICall';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AllPost = () => {
    const nav = useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    // Function to fetch data from the server
    const fetchData = async () => {
        try {
            const response = await getRequest('http://192.168.1.134:3000/posts');
            return response;
        } catch (error) {
            throw new Error('Error fetching data');
        }
    };

    // UseQuery hook to fetch data
    const { data, isLoading, isError, refetch } = useQuery('userData', fetchData);

    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    };

    if (isLoading) return <Text>Loading...</Text>;
    if (isError) return <Text>Error fetching data</Text>;

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer} // Apply styles here
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            {data.length > 0 &&
                data.map(post => (
                    <Card key={post.id} style={styles.postContainer}>
                        <Card.Content>
                        {post.url && <Image source={{ uri: post.url }} style={styles.image} />}
                            <View style={styles.topLine}>

                            <Text style={styles.title}>{post.title}</Text>
                            <Text style={styles.likes}>{post.likes} ❤️</Text>
                            </View>
                            <Text style={styles.description}>{post.description}</Text>
                       
                          
                            <Text style={styles.author}>Posted by {post.author}</Text>
                        </Card.Content>
                    </Card>
                ))}
            <Button icon="plus" mode="contained" onPress={() => nav.navigate('addpost')}>
                Add Post
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    topLine:{
display:"flex",
justifyContent:'space-between',
flexDirection:'row',
marginTop:20
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    postContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    author: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
        marginTop:10
    },
    likes: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#333',
    },  image: {
        width: '100%',
        height: 200, // Adjust height as needed
        marginTop: 10,
        resizeMode: 'cover',
        borderRadius: 10,
      },
});

export default AllPost;
