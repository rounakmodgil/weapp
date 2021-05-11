import React from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from 'react-native';


const SuggestionRow = ({item}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
 
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
)

export default SuggestionRow;


const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white'
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {

  }
});

