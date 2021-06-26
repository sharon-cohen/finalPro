import React from 'react';
import { connect } from 'react-redux';
import { NameAndPrice } from '../../../components/NameAndPrice';
import { TouchableOpacity, Dimensions, Image, View, Text, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').width;
const mapDispatchToProps = (dispatch) => ({
  chooseProduct: (product) => dispatch(selectedProduct(product)),
});

const mapStateToProps = (state) => ({
  currentUser: state.user,
});
const ProductItem = ({
  item,
  isHot,
  isItemsCategory,
  chooseProduct,
  navigation,
  addItemToUser,
}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('product', { item });
    }}
  >
    <View
      style={{
        backgroundColor: '#dedede',
        width: isHot ? '100%' : windowHeight * 0.4,
        margin: 0,
        height: isItemsCategory ? '100%' : '100%',
        padding: 0,
        marginLeft: isHot ? 0 : 10,
      }}
    >
      <View style={{ height: '50%', width: '100%', backgroundColor: 'white' }}>
        <Image
          style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
          source={{ uri: item.image }}
        />
      </View>
      <View style={{ height: '50%', width: '100%' }}>
        <NameAndPrice item={item} />
      </View>
    </View>
  </TouchableOpacity>
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  card: {
    width: windowHeight * 0.4,

    height: '100%',
    padding: 0,
    marginLeft: 10,
  },
  img: {
    height: '90%',
  },
});
