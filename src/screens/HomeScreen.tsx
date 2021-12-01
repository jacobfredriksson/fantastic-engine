import React, { FC } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'


export const HomeScreen: FC = () => {
    return <StyledView><StyledText>HomeScreen</StyledText></StyledView>
}

const StyledView = styled.View`
    background: red;
    flex: 1;
    justify-content: center;
    align-items: center ;
`

const StyledText = styled.Text`
    color: #fff;
`