import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function IconButton({icon, size, color, onPressed}) {
  return (
    <Pressable 
        onPress={onPressed}
        style={({pressed}) => pressed && styles.pressed}
        >
    <View style={styles.buttonContainer}>
      <Ionicons name={icon} size={size} color={color}/>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        margin:2
    },
    pressed:{
        opacity:0.75
    }
})