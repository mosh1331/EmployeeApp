import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.item
    };
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.wall}>
          {/* <Icon name={} /> */}
        </View>
        <View style={styles.body}>
          <View style={styles.rowContainer}>
            <View style={styles.profileImage}>
            {data.profile_image ? <Image source={{ uri: data.profile_image }} style={styles.image} />:<Image source={require('../../assets/dummy.png')} style={styles.image} />}
            </View>
            <View >
              <Text style={styles.title}>{data.name}</Text>
              <Text style={styles.username}>{data.username}</Text>
            </View>
          </View>
          <Text style={styles.fieldtext}><Text style={styles.label}>Email : </Text >{data.email}</Text>
          <Text  style={styles.fieldtext}><Text style={styles.label}>Website : </Text> {data.website}</Text>
          <Text  style={styles.fieldtext}><Text style={styles.label}>Phone : </Text>{data.phone}</Text>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Address: </Text>
            <View>
              <Text style={styles.value}>{data.address.suite}</Text>
              <Text style={styles.value}>{data.address.street},{data.address.city}</Text>
              <Text style={styles.value}>zip : {data.address.zipcode}</Text>
            </View>
          </View>
         {data.company &&  <View style={styles.fieldContainer}>
            <Text style={styles.label}>Company: </Text>
            <View>
              <Text style={styles.value}>{data.company.name}</Text>
              <Text style={styles.value}>{data.company.catchPhrase}</Text>
            </View>
          </View>}
        </View>
      </View>
    );
  }
}

export default EmployeeDetails;
const styles = StyleSheet.create({
  container: {

  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom:20

  },
  title: {
    fontWeight: 'bold',

  },
  wall: {
    height: 150,
    backgroundColor: '#ccc'
  },
  body: {
    // justifyContent:'center',
    // alignItems:'center',
    paddingHorizontal: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 10,
    marginTop: -75
  },
  image: {
    width: null,
    height: null,
    resizeMode: 'cover',
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  subtext: {
    fontSize: 12
  },
  fieldContainer: {
    flexDirection: 'row',
    marginBottom:10

  },
  fieldtext:{
    marginBottom:20
  },
  username:{
    fontSize:12
  },
  label:{
    fontWeight:'bold',
  }

})