import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';

export default function Card (props) {
   
    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
            {props.children}

        </View>
       
      </View>
    )
  }

  const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#ccc',
        shadowOffset: {width: 3, height: 3},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,


    },
    cardContent:  {
        textAlign: 'center',
        

    },
  
  });
  



