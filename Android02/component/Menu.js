// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { AppRegistry } from 'react-native';

// import HomeScreen from '../pages/homescreen/homescreen';
// import Login from '../pages/Login/Login';
// export default function App() {
//   const [activeMenuItem, setActiveMenuItem] = useState('Home');

//   const handleMenuItemPress = (menuItem) => {
//     setActiveMenuItem(menuItem);
 
//   };
//   return (
// <View style={styles.container}>
      
//       {activeMenuItem === 'HomeScreen' && <HomeScreen />}
//       {activeMenuItem === 'Login' && <Login />}
     


//       <Menu
//         activeMenuItem={activeMenuItem}
//         onMenuItemPress={handleMenuItemPress}
//       />
//     </View>
 

    
   
  
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Menu({ activeMenuItem, onMenuItemPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'HomeScreen' && styles.activeMenuItem,
        ]}
        onPress={() => onMenuItemPress('HomeScreen')}
      >
        <Text style={styles.menuItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Login' && styles.activeMenuItem,
        ]}
        onPress={() => onMenuItemPress('Login')}
      >
        <Text style={styles.menuItemText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Products' && styles.activeMenuItem,
        ]}
        onPress={() => onMenuItemPress('Products')}
      >
        <Text style={styles.menuItemText}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Products' && styles.activeMenuItem,
        ]}
        onPress={() => onMenuItemPress('Products')}
      >
        <Text style={styles.menuItemText}>User</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
  },
  menuItem: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  activeMenuItem: {
    backgroundColor: '#e0e0e0',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Menu;