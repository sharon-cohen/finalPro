import React, { Component } from 'react'

import { Text, Alert, TouchableOpacity } from 'react-native'

export function GenericMessage(title, mess) {
  return Alert.alert(title, mess)
}
