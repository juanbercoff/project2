import React from 'react';
import { Text } from 'react-native';

export default Item = ({ item, navigation }) => {
    const { Title } = item
  
    return (<Text
      onPress={() => navigation.navigate('Details',{title: item.Title, poster: item.Poster})}
    >{Title}</Text>
    )
  }