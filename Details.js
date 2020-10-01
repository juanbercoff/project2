import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

export default function Details({ route }) {
    const { title } = route.params
    return (
      <View>
        <Text>{ title }</Text>
        <Image
          source={{uri: route.params.poster}}
          style={{width: 200, height: 200}}
        />
      </View>
    )
  }