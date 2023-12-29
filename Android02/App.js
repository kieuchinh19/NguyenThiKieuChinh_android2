// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet,ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import { SearchBar } from '@rneui/themed';
// import Login from './pages/searchbar/Login/Login';
// // import { Icon } from '@rneui/base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import HomeBar from './pages/homebar/homebar';
// import HomeScreen from './pages/homescreen/homescreen';
// export default function App() {
//   return (
// <ScrollView >
//     <View style={styles.aaa}>
//       {/* <Header /> */}
//       {/* <View> */}
//       <Icon name="bars"
//       size={25}
//       color="black" 
//       style={styles.icon1}/>
     

//       <SearchBar style={styles.search} />
//       {/* <Login/> */}
// <HomeScreen/>
//       {/* <Footer /> */}
//       <HomeBar/>
//     </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   cart:{
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     borderWidth: 2,
//     width:100,
//   marginLeft:300,
//     backgroundColor:'red',
//   },
//   icon1:{
//     paddingLeft:5,
//   },
//   search: {
//     borderWidth: 2,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   aaa: {
//     flex: 1,
//     paddingTop: 30,

//   },

// });
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import HomeScreen from './pages/homescreen/homescreen';
import Login from './pages/Login/Login';
import Menu from './component/Menu';
import HomeBar from './pages/homebar/homebar';

// import Menu from './'
export default function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('Home');

  const handleMenuItemPress = (menuItem) => {
    setActiveMenuItem(menuItem);
 
  };
  return (
<View style={styles.container}>
      
      {activeMenuItem === 'HomeScreen' && <HomeScreen />}
      {activeMenuItem === 'Login' && <Login />}
     

      <Menu
        activeMenuItem={activeMenuItem}
        onMenuItemPress={handleMenuItemPress}
      />
        {/* <HomeBar/> */}

    </View>
 

    
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});