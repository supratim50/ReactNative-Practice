import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})