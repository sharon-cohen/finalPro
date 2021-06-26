import React, { useState, useEffect } from 'react'
import {
  Dimensions,
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import PropTypes from 'prop-types'
import ListItemsCategory from './componemt/ListItemsCategory'
import { connect } from 'react-redux'
import { selectedCategory } from '../../redux/category/categoryActions'
import Header from '../../components/Header'
import CategoryItem from './componemt/CategoryItem'
import ProductItem from './componemt/ProductItem'
import { listItemSection, listItemCategory } from './static/ListSectionItem'
import ListSection from './componemt/ListSection'
import { initdata } from '../../redux/product/productActions'
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  headerSection: {
    height: windowHeight * 0.07,
  },
  categorySection: {
    height: windowHeight * 0.12,
    backgroundColor: '#ffffff',
  },
  itemsCategory: {},
  hotSection: {
    height: windowHeight * 0.4,

    margin: 10,
  },
  titleList: {
    height: '15%',
  },
  productSection: {
    height: windowHeight * 0.4,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  listCategoryStyle: {
    flex: 1,
  },
})

const mapStateToProps = (state) => {
  return {
    personData: state.listPro.list,
    theCategory: state.currentCategory.category,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initdataStart: () => dispatch(initdata()),
    setCategory: (setCategoryName) =>
      dispatch(selectedCategory(setCategoryName)),
  }
}

const HomePage = ({
  personData,
  initdataStart,
  setCategory,
  theCategory,
  navigation,
}) => {
  const [hotItem, setHotItem] = useState(null)
  const [filterCategory, setFilterCategory] = useState([])
  useEffect(() => {
    getListItemByCtegory()
  }, [theCategory])
  useEffect(() => {
    initdataStart()
  }, [])

  const getItemSection = (nameSection) => {
    if (nameSection === 'מומלצים') {
      if (personData.length < 5) {
        return personData
      } else {
        const sort = personData.sort(function (a, b) {
          return parseFloat(b.reg) - parseFloat(a.reg)
        })
        const rec = sort.slice(0, 4)
        return rec
      }
    }

    if (nameSection === 'דילים מלאים') {
      let full = []
      for (let i = 0; i < personData.length; i++) {
        if (Number(personData[i].reg) >= Number(personData[i].goal)) {
          full.push(personData[i])
        }
      }
      return full
    }

    if (nameSection === 'הבטיחו את מקומכם') {
      let miss = []
      for (let i = 0; i < personData.length; i++) {
        if (Number(personData[i].reg) < Number(personData[i].goal)) {
          miss.push(personData[i])
        }
      }
      return miss
    } else {
      return personData
    }
  }
  const getListItemByCtegory = () => {
    let itemsCategory = []

    for (let i = 0, l = personData.length; i < l; i++) {
      if (theCategory === personData[i].category) {
        itemsCategory.push(personData[i])
      }
    }

    setFilterCategory(itemsCategory)
    let mostRecomment = itemsCategory[0]
    for (let i = 0, l = itemsCategory.length; i < l; i++) {
      if (itemsCategory[i].reg >= mostRecomment.reg) {
        mostRecomment = itemsCategory[i]
      }
    }
    setHotItem(mostRecomment)
  }
  console.log('sharon', personData)
  return (
    <ScrollView style={styles.MainContainer}>
      <SafeAreaView style={styles.MainContainer}>
        <View style={styles.headerSection}>
          <Header navigation={navigation} withGoBack={false} />
        </View>
        <View style={styles.categorySection}>
          <FlatList
            style={styles.listCategoryStyle}
            data={listItemCategory}
            keyExtractor={(item) => item.category}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setCategory(item.category)
                }}>
                <CategoryItem item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
        {hotItem == null ? (
          <></>
        ) : (
          <View style={styles.hotSection}>
            <ProductItem item={hotItem} isHot={true} isItemsCategory={false} />
          </View>
        )}

        {theCategory == 'מומלצים' ? (
          listItemSection.map((sec) => (
            <View style={styles.productSection} key={sec.sectionName}>
              <ListSection
                nameSection={sec.sectionName}
                listItems={getItemSection(sec.sectionName)}
                navigation={navigation}
              />
            </View>
          ))
        ) : (
          <View style={styles.itemsCategory}>
            <ListItemsCategory
              listItems={filterCategory}
              navigation={navigation}
            />
          </View>
        )}

        {/* <Text>{JSON.stringify(personData)}</Text> */}
      </SafeAreaView>
    </ScrollView>
  )
}

HomePage.propTypes = {
  personData: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
