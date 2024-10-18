import { NextUIProvider } from '@nextui-org/react';
import Header from '../components/Header';
import InputTab from '../components/InputTab';

function Code() {
  return (
    <NextUIProvider>
        <div className="h-screen bg-green bg-cover bg-center">
        <Header/>
        <InputTab/>
      </div>
    </NextUIProvider>
  )
}

export default Code