import React from 'react'
import { Text } from 'react-native'
export const TitleForm = ({ title }) => (
  <Text style={{ padding: 10, fontSize: 20, width: '100%', textAlign: 'left' }}>
    {title}
  </Text>
)
