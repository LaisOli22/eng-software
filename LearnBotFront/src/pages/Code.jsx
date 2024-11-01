import { NextUIProvider } from '@nextui-org/react';
import Header from '../components/Header';
import InputTab from '../components/InputTabCode';
import CodeButtonContainer from '../components/CodeButtonsContainer';

function Code() {
  return (
    <NextUIProvider>
        <div className="h-screen bg-green bg-cover bg-center">
        <Header/>
        <InputTab/>
        <CodeButtonContainer/>
      </div>
    </NextUIProvider>
  )
}

export default Code