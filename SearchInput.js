import React  from 'react';
import { View, TextInput, Button } from 'react-native';

export default SearchInput = ({onChangeValue, onPressButton, clearResults}) => {
      


    return (
        <View>
            <TextInput
            style={
                {
                borderColor: 'gray', 
                borderWidth: 2
            }}
            onChangeText={onChangeValue}
            
            
            />
            <Button 
            title='Search'
            onPress={onPressButton}
            />
        </View>

    )
}