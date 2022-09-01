import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
//import {style} from './style';

const App = () => {
    return (
        <View>
            <Text>Ini adalah Card Product</Text>
           <Cardproduct/>
        </View>
    );
};

const CardProduct = () =>{
    return (
    <View>
        //<Text style={style.judul}>Card Product</Text>
        <View style={style.box}>
        <Image source={{uri: 'https://placeimg.com/188/107/tech'}} style={style.gambar} />
        <Text style={style.heading2}>Macbook Pro 2019</Text>
        <Text style={style.heading3}>Rp. 25.000.000</Text>
        <Text style={style.lable}>Jakarta Barat</Text>
        <View style={style.buttonview}>
          <Text style={style.textbutton}>BELI</Text>
        </View>
        </View>
    </View>
    )
};

const style = StyleSheet.create({
    judul: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        
     },
     box: {
       marginLeft: 20,
       padding: 12,
       backgroundColor: '#f2f2f2',
       width: 212,
       borderRadius: 8,
     },
     gambar:{
       width: 188,
       height: 107,
       borderRadius: 8,
     },
     heading2:{
       fontSize: 14, fontWeight: 'bold', marginTop: 16,
     },
     heading3:{
       fontSize:12, fontWeight:'bold', color: 'orange', marginTop: 12,
     },
     lable:{
       fontSize: 11,
       fontWeight: 'normal',
       marginTop: 8,
     },
     textbutton:{
       fontSize: 14,
       fontWeight: '600',
       color: 'white',
       textAlign: 'center',
     },
     buttonview:{
       backgroundColor: 'green',
       paddingTop: 6, paddingBottom: 6,
       borderRadius: 20,
       marginTop: 16,
     },

});

export default App;