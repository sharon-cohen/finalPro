import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Header from '../../components/Header';
const windowHeight = Dimensions.get('window').height;

const mapStateToProps = (state) => ({
  personData: state.listPro.list,
});
const SearchPage = ({ personData, navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setMasterDataSource(personData);
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => (
    <Text style={styles.itemStyle} onPress={() => getItem(item)}>
      {item.name}
      {'.'}
    </Text>
  );

  const ItemSeparatorView = () => (
    <View
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8',
      }}
    />
  );

  const getItem = (item) => {
    navigation.navigate('product', { item });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerSection}>
        <Header navigation={navigation} withGoBack={false} />
      </View>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  headerSection: {
    height: windowHeight * 0.07,
  },
});

export default connect(mapStateToProps, null)(SearchPage);
