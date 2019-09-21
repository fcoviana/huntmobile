import React, { Component } from "react";
import api from '../services/api';

import { View, Text } from "react-native";


export default class Main extends Component {
    static navigationOptions = {
        title: "Teste React Native"
    };

    state = {
        quantidade: 0
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        this.setState({ quantidade: docs.length });
    };

    render() {
        return (
            <View>
                <Text>Página Main: {this.state.quantidade}</Text>
            </View>
        );
    }
}