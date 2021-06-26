import React from 'react'

import { FlatList, View, Text, StyleSheet } from 'react-native'
import ProductItem from './ProductItem'

const ListSection = ({ nameSection, listItems, navigation }) => (
  <View style={styles.productSection}>
    <View style={styles.titleList}>
      <Text>{nameSection}</Text>
    </View>
    <View sstyle={styles.listCategoryStyle}>
      <FlatList
        style={styles.listCategoryStyle}
        data={listItems}
        keyExtractor={(item) => item.name}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.wrapCard}>
            <ProductItem
              item={item}
              isHot={false}
              isItemsCategory
              navigation={navigation}
            />
          </View>
        )}
      />
    </View>
  </View>
)

export default ListSection
const styles = StyleSheet.create({
  productSection: {
    height: '100%',
    backgroundColor: '#ffffff',
    paddingLeft: 5,
  },
  listCategoryStyle: {
    height: '80%',
    backgroundColor: '#ffffff',
  },
  titleList: {
    height: '15%',
    backgroundColor: '#dedede',
  },
  wrapCard: {},
})
