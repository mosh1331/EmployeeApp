import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextComponent } from 'react-native';

const ListItem = ({ data,onSelect }) => {


    return (
        <TouchableOpacity onPress={onSelect} activeOpacity={0.8} style={styles.container} >
            <View style={styles.profileImage}>
                {data.profile_image ? <Image source={{ uri: data.profile_image }} style={styles.image} />:<Image source={require('../../assets/dummy.png')} style={styles.image} />}
                
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}> {data.name} </Text>
                {data.company && <Text style={styles.subtext}> {data.company.name} </Text>}

            </View>
        </TouchableOpacity>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.3)'
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        overflow: 'hidden',
        marginRight:10
    },
    image: {
        width: null,
        height: null,
        resizeMode: 'cover',
        flex: 1
    },
    title:{
        fontWeight:'bold',
        fontSize:14
    },
    subtext:{
        fontSize:12
    }

})