import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';

// const products = [
//     { id: 1, name: 'Product 1', price: '100.000đ', image: require('../assets/ip15.jpeg') },
//     { id: 2, name: 'Product 2', price: '200.000đ', image: require('../assets/ip15.jpeg') },
//     { id: 3, name: 'Product 3', price: '300.000đ', image: require('../assets/ip15.jpeg') },
// ];



function HomeScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProduct();
    }, []);

    const getAllProduct = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(function (response) {
                // handle success
                setProducts(response.data);
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                alert('Finally called');
            });
    };
    const renderProduct = (product) => (
        <View style={styles.productItem} key={product.id}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.title}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My Shop</Text>
            <Image source={require('../../assets/logo1.jpg')} style={styles.logo} />
            <Text style={styles.title}>All product</Text>
            <ScrollView vertical>
                {products.map((product) => renderProduct(product))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    logo: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    productItem: {
        alignItems: 'center',
        marginRight: 16,
      },
      productImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 8,
        borderRadius: 4,
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      productPrice: {
        fontSize: 14,
        color: 'green',
      },
});

export default HomeScreen;