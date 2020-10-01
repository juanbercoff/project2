import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import APICall from './APICall'
import Item from './Item'
import SearchInput from './SearchInput'

export default class Home extends React.Component {
    state = {
      results: null,
      searchValue: null
    }
  
    onChangeValue = (value) => {
      this.setState({
          searchValue: value
      })
    } 
  
  
    fetchUsers = async () => {
      const results = await APICall(this.state.searchValue)
      this.setState({results: results.Search})
    }
  
    clearResults = () => {
      this.setState({results: null})
    }
  
    renderItem = ({ item }) => (
      <Item item={item} navigation={this.props.navigation}/>
    )
  
    render() {
      return (
        <View style={styles.container}>
          <SearchInput 
            onChangeValue={this.onChangeValue}
            onPressButton={this.fetchUsers}
            clearResults={this.clearResults}
          />
          {this.state.results && 
            <FlatList 
              data={this.state.results}
              renderItem={this.renderItem}
              keyExtractor={item => item.imdbID}
            />
          }
        </View>
      );
    } 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start'
    },
  });