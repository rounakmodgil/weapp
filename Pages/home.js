// import React, { useState } from "react";
// import { View, StyleSheet, Button , Picker} from "react-native";
// import {Formik} from 'formik';

// const Home = ({navigation}) => {
//   const [selectedValue, setSelectedValue] = useState("Oxygen Cylinder");
//   const [state, setState] = useState("Telangana");
//   return (
//     <View >
//     <Formik
//       initialValues={{email: '', description: ''}}
//       onSubmit={
//       //   async (values) => {
//       //   const res = await userlogin({
//       //     variables: {email: values.email, password: values.password},
//       //   });
//       //   if (res) {
//       //     setAccessToken(res.data.login.accessToken);      
//       //   }
//       //   navigation.navigate('explore');
//       // }
//       ()=>navigation.navigate('explore')
//       }>
//       {({handleChange, handleBlur, handleSubmit, values}) => (
        
//         <View >
//           <View style={{flexDirection:"row", justifyContent:"center", margin:10}}>
//             <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 150, marginLeft:30 }}
//         onValueChange={(itemValue, itemIndex) => setState(itemValue)}
//       >
//         <Picker.Item label="Hyderabad" value="Hyderabad" />
//         <Picker.Item label="Hyderabad" value="Hyderabad" />
//         <Picker.Item label="Hyderabad" value="Hyderabad" />

   
//       </Picker>
//       </View>
//           <View style={{flexDirection:"row", justifyContent:"center", margin:10}}>
//             <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 150 ,  marginLeft:30}}
//         onValueChange={(itemValue, itemIndex) => setState(itemValue)}
//       >
//         <Picker.Item label="Telangana" value="telangana" />
//         <Picker.Item label="Telangana" value="telangana" />
//         <Picker.Item label="Telangana" value="telangana" />
   
//       </Picker>
//       </View>
//             <View style={{flexDirection:"row", justifyContent:"center", margin:10}}>
//             <Picker
//         selectedValue={selectedValue}
//         style={{ height: 50, width: 150,  marginLeft:30 }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="Oxygen Cylinder" value="oxygen_cylinder" />
//         <Picker.Item label="Plasma" value="plasma" />
//         <Picker.Item label="Normal Beds" value="normal_beds" />
//         <Picker.Item label="ICU Beds" value="icu_beds" />
//         <Picker.Item label="Remdesivir" value="remdesivir" />
//         <Picker.Item label="FabiFlu" value="fabiflu" />
//         <Picker.Item label="Ventilator" value="ventilator" />
//       </Picker></View>

//           <View style={styles.loginbuttoncontainer}>
//           <Button   onPress={handleSubmit} title="Search" />   
//           </View>      
//         </View>
//       )}
//     </Formik>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     alignItems: "center"
//   }
// });

// export default Home;

import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
      
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={{uri:'https://picsum.photos/200/300'}}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;



const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});