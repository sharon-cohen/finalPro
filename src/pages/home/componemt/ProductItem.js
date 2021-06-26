  import React from 'react';
  import { connect } from 'react-redux';
  import { NameAndPrice } from '../../../components/NameAndPrice';
  import { Dimensions ,TouchableOpacity, Image, View } from 'react-native';
  import { selectedProduct } from '../../../redux/SelectedProduct/SelectedProductActions';
  const windowHeight = Dimensions.get('window').width;

  const mapDispatchToProps = (dispatch) => ({
    chooseProduct: (product) => dispatch(selectedProduct(product)),
  });

  const mapStateToProps = (state) => ({
    currentUser: state.user,
  });
  const ProductItem = ({
    item,isHot,isItemsCategory,chooseProduct,navigation
  }) => {
  if (!item) return null
  return (
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
      }

  export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
