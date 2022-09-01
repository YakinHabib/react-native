import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
    return (
        <View>
            <Text> Halo Dunia, Saya Yakin Habib</Text>
            <Ket/>
            <Photo/>
            <Text> </Text>
            <Text> Tulis sesuatu dibawah ini</Text>
            <TextInput style={{borderWidth: 1}} />
        </View>
    );
};

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

export default App;