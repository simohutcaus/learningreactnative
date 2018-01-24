import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    componentWillMount() {
        console.log('mounting')
    }

render () {
//const {header } = props; 

  
    return (
        <View>
        <Text>
        {this.props.testin}
        {this.props.testing2}
        </Text>
        </View>
    )
}

}


export default Header;