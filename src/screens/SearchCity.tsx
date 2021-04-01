import React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

import {RootNavigationParamsList} from 'src/navigation';

const SearchCity = () => {
  const navigation = useNavigation<
    NativeStackNavigationProp<RootNavigationParamsList>
  >();

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="GoBack" />
    </View>
  );
};

export default SearchCity;
