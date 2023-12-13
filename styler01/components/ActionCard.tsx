import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}></Text>
        </View>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.pexels.com/photo/black-fork-and-knife-clip-art-940302/')}
            >
                <Text>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {
        height: 100
    },
    bodyContainer: {},
    footerContainer: {}
})