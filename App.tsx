import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';

import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
    <StatusBarContainer >
      <StatusBar />
    </StatusBarContainer>
    <HomeScreen />
    </>
  );
}

const StatusBarContainer = styled.View`
    width: 100%;
    height: 20px;
    background-color: #000;
`
