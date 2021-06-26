import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native'
import { NameAndPrice } from '../../components/NameAndPrice'
import { firebase } from '../../firebase/config'
import { getItemIdDocByName } from '../../firebase/CommonQueries'
import { setUser } from '../../redux/User/userActions'
import { addProduct } from '../../redux/RealTimeBuyProduct/RealTimeBuyProductAction'
import { addPurchase } from '../../redux/product/productActions'
import Header from '../../components/Header'
import { GenericMessage } from '../../components/GenericMessage'
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const mapStateToProps = (state) => ({
  currentUser: state.user,
  realTimePersonalList: state.realTimeList.list,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setUser(user)),
  addItemToUser: (product) => dispatch(addProduct(product)),
  addOnePurchase: (nameProduct) => dispatch(addPurchase(nameProduct)),
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  imageSection: {
    height: windowWidth * (3 / 4),
  },

  theImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  headerSection: {
    height: windowHeight * 0.3 * 0.6,
    backgroundColor: '#dedede',
  },
  title: {
    height: windowHeight * 0.07,
  },

  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
})
const ProductPage = ({
  route,
  navigation,
  currentUser,
  addItemToUser,
  addOnePurchase,
  realTimePersonalList,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const upateRegItem = async () => {
    addItemToUser(route.params.item)
    setIsLoading(true)
    const id = await getItemIdDocByName(route.params.item.name)

    await firebase
      .firestore()
      .collection('data')
      .doc(id)
      .update({
        reg: route.params.item.reg + 1,
      })
    const ref = await firebase
      .firestore()
      .collection('users')
      .doc(currentUser.user.uid)

    await ref.update({
      myItems: firebase.firestore.FieldValue.arrayUnion(id),
    })
    addOnePurchase(route.params.item.name)
    setIsLoading(false)

    GenericMessage('הפעולה בוצעה בהצלחה', ' ')
  }
  const checkIsAlreadyBeenPurchased = () => {
    if (realTimePersonalList.length === 0) {
      return true
    }
    for (let i = 0; i < realTimePersonalList.length; i++) {
      if (realTimePersonalList[i].name === route.params.item.name) return false
    }
    return true
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.title}>
          <Header navigation={navigation} withGoBack />
        </View>
        <View style={styles.imageSection}>
          <Image
            style={styles.theImage}
            source={{
              uri: route.params.item.image,
            }}
          />
        </View>
        <View style={styles.headerSection}>
          <NameAndPrice item={route.params.item} />
        </View>
        {checkIsAlreadyBeenPurchased() ? (
          <View>
            <Button
              style={{ backgroundColor: 'black' }}
              title="רכשו עכשיו!"
              onPress={() => upateRegItem()}
            />
          </View>
        ) : null}
        <Text style={{ fontSize: 20 }}>{route.params.item.dis}</Text>
        {isLoading ? (
          <View style={styles.bottomView}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
