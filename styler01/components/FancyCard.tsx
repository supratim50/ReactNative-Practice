 import { StyleSheet, Text, View, Image } from 'react-native'
 import React from 'react'
 
 export default function FancyCard() {
   return (
     <View>
       <Text style={styles.headingText}>Trending places</Text>
       <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a place in the city of Jaipur, India. The Hawa Mahal is a place in the city of Jaipur, India.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
       </View>
     </View>
   )
 }
 
 const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: 'grey',
        elevation: 3,
        shadowOffset: {
            width:1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: 12
    },
    cardDescription: {
        color: '#ffffff',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1
    },
    cardFooter: {
        color: '#ffffff'
    }
 })