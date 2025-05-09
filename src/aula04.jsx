import React, {Component} from "react";
import { View, Text, StylesSheet } from "react-native";
import { Image } from "react-native-web";

class Aula04 extends Component {
    render() {
        return(
            <View>
                <Text>Aula04 - trabalhando com imagens!</Text>
            <View/>
                <Image
                    style={styles.img}
                    source={{uri:'https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png'}}
                />
            </View>
            
              
        )
    }
}

export default Aula04;

const styles = StylesSheet.create({
    img:{
        width: 100,
        height: 100,
    }
})