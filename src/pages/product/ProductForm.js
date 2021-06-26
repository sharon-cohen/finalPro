import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  StatusBar,
  Button,
  View,
  Dimensions,
} from 'react-native'
import { TitleForm } from './TitleForm'
import RNPickerSelect from 'react-native-picker-select'
import Header from '../../components/Header'
import { GenericMessage } from '../../components/GenericMessage'
import { getNameAlreadyExsist } from '../../firebase/CommonQueries'
const windowHeight = Dimensions.get('window').height
export const ProductForm = ({ navigation }) => {
  const [productName, setProductName] = React.useState(null)
  const [description, setDescription] = React.useState(null)
  const [priceBeforeDiscount, setPriceBeforeDiscount] = React.useState(null)
  const [priceAfterDiscount, setPriceAfterDiscount] = React.useState(null)
  const [amountOfPeople, setamountOfPeople] = React.useState(null)
  const [category, setCategory] = React.useState('קניות')
  const submit = async () => {
    if (
      productName !== null &&
      description !== null &&
      priceBeforeDiscount !== null &&
      priceAfterDiscount !== null &&
      amountOfPeople !== null &&
      category !== null
    ) {
      const exsist = await getNameAlreadyExsist(productName)
      if (exsist) {
        GenericMessage('שגיאה', 'שם מוצר זה כבר קיים במערכת אנא בחר שם אחר')
      } else {
        const formDetails = {
          productName,
          description,
          priceBeforeDiscount,
          priceAfterDiscount,
          amountOfPeople,
          category,
        }

        navigation.navigate('uplodImage', formDetails)
      }
    } else GenericMessage('שגיאה', 'חובה למלא את כל השדות')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Header navigation={navigation} withGoBack />
      </View>
      <ScrollView style={styles.scrollView}>
        <TitleForm title={'שם המוצר'} />
        <TextInput
          style={styles.input}
          onChangeText={setProductName}
          value={productName}
        />
        <TitleForm title={'תיאור המוצר'} />
        <TextInput
          style={styles.input}
          onChangeText={setDescription}
          value={description}
        />
        <TitleForm title={'מחיר לפני הנחה'} />
        <TextInput
          style={styles.input}
          onChangeText={setPriceBeforeDiscount}
          value={priceBeforeDiscount}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <TitleForm title={'מחיר אחרי הנחה'} />
        <TextInput
          style={styles.input}
          onChangeText={setPriceAfterDiscount}
          value={priceAfterDiscount}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <TitleForm title={'מינימום נרשמים'} />
        <TextInput
          style={styles.input}
          onChangeText={setamountOfPeople}
          value={amountOfPeople}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <TitleForm title={'בחירת קטגוריה'} />
        <View style={styles.picker}>
          <RNPickerSelect
            onValueChange={(value) => setCategory(value)}
            style={{ inputAndroid: { color: 'black' } }}
            useNativeAndroidPickerStyle={false}
            items={[
              { label: 'לבית ולגן', value: 'לבית ולגן' },
              { label: 'קניות', value: 'קניות' },
              { label: 'אלקטרוניקה', value: 'אלקטרוניקה' },
              { label: 'חופשות ', value: 'חופשות' },
            ]}
          />
        </View>
        <Button title="הוספת תמונה" color="#c1071e" onPress={submit} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    textAlign: 'right',
    width: '100%',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  headerSection: {
    height: windowHeight * 0.07,
  },
  picker: {
    height: 40,
    margin: 12,
  },
})
