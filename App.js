import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';

const App = () => {
    return (
        <View>
           <KomponenUtama/>
        </View>
    );
};

const GayaKomponen = () =>{
    return (
    <View>
        <Text style={style.text}>Ini adalah Gaya Komponen</Text>
        <View 
            style={{
                width:100,
                height:100,
                backgroundColor: '#0abde3',
                borderColor: '#5f27cd',
                marginTop: 20,
                marginLeft: 20,
            }}
        />
    </View>
    )
};

const style = StyleSheet.create({
    text: {
        fontSize: 18,
    },
});

const KomponenUtama = () =>{
    return(
        <View>
             <Text> Halo Dunia, Saya Yakin Habib</Text>
            <Ket/>
            <Photo/>
            <Text> </Text>
            <Text> Tulis sesuatu dibawah ini</Text>
            <TextInput style={{borderWidth: 1}} />
            <BoxGreen/>
            <Profile/>
        </View>
    )
}

const Ket = () => {
    return <Text> Dibawah ini merupakan gambar dari arsitektur bangunan</Text>
};

const Photo = () => {
    return (
        <Image 
            source={{uri: 'https://placeimg.com/100/100/arch'}}
            style= {{width: 100, height: 100}}
        />
    );
};

class BoxGreen extends Component{
    render(){
        return <Text> Ini adalah component dari class component</Text>
    }
}

class Profile extends Component{
    render() {
        return(
            <View>
                <Image source={{uri: 'https://placeimg.com/100/100/animals'}} 
                style={{width: 100, height: 100}} />
                <Text>Kucing Orange</Text>            
            </View>
        )
    }
}

export default App;