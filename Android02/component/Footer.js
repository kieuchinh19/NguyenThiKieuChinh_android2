import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
    <Text style={styles.footerText}>© 2023 - App Bán Hàng</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    footerContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
      },
      footerText: {
        fontSize: 14,
        textAlign: 'center',
      },
});
// import React from 'react';
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const HomeBar = () => {
//     return (
//         <View style={styles.container}>
//             <TouchableOpacity style={styles.button}>
//                 <Icon name="home" size={20} color="#333333" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button}>
//                 <Icon name="search" size={20} color="#333333" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button}>
//                 <Icon name="user" size={20} color="#333333" />
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: '#f2f2f2',
//         height: 50,
//     },
//     button: {
//         padding: 10,
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#333333',
//     },
// });

// export default HomeBar;