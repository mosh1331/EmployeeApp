import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import axios from 'react-native-axios'
import ListItem from '../components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { height, width } = Dimensions.get('screen')


class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            loading: true,
            data: [],
            FilteredDataSource:[]
        };
    }
    componentDidMount = () => {
        this.initApp()
    };

    initApp = async () => {
        // initialise app check if data is stored 
        try {
            const value = await AsyncStorage.getItem('@employees')
            const data = JSON.parse(value);
            console.log(value)
            if (value === null) {
                this.fetchDataFromServer()

                // value previously stored
            } else {
                this.setState({ data: data,FilteredDataSource:data, loading: false }, () => console.log(this.state.data, 'value exist'))
            }
        } catch (e) {
            // error reading value
        }
    }

    fetchDataFromServer = async () => {
        console.log('fetching from server')
        try {
            axios.get('http://www.mocky.io/v2/5d565297300000680030a986')
                .then((response) => {
                    this.storedata(response.data)
                    console.log(this.state.data, "<===== data");
                })
                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.log(error)
        }
    }

    storedata = async (data) => {
        try {
            await AsyncStorage.setItem('@employees', JSON.stringify(data)).then(() => this.setState({ data: data,FilteredDataSource:data, loading: false }))
        } catch (e) {
            console.log(e)
        }

    }

    handleSearch = (query) => {
        this.setState({ query: query }, () => console.log(this.state.query))

    }
    handlePress = (item) => {
        console.log(item, 'pressed')
        this.props.navigation.navigate('EmployeeDetails', {
            item: item
        })
    }

    RenderItem = ({ item }) => (
        <ListItem data={item} onSelect={() => this.handlePress(item)} />
    );

    searchFilterFunction = text => {
        const masterDataSource = this.state.data;
        if (text) {
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const emailData = item.email ? item.email.toUpperCase() : ''.toUpperCase()
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1 || emailData.indexOf(textData) > -1;
          });
          this.setState({FilteredDataSource: newData, query: text});
        } else {
          this.setState({FilteredDataSource: masterDataSource, query: text});
        }
      };
    

    render() {
        const { loading, data,FilteredDataSource, query } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput placeholder={'Search by  name /email'} style={styles.input} value={query} onChangeText={(query) => this.searchFilterFunction(query)} />
                </View>
                {!loading && <FlatList
                    //add refresh
                    data={FilteredDataSource}
                    renderItem={this.RenderItem}
                    keyExtractor={item => item.id}
                />}
            </SafeAreaView>
        );
    }
}

export default EmployeeList;

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: '#fff'
    },
    searchContainer: {
        // borderWidth: 1,
        // borderColor: 'grey',
        backgroundColor:'#ccc',
        padding:10,
        paddingVertical:20

    },
    input:{
        backgroundColor:'#fff',
        borderRadius:5
    }
})