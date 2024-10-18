import { NextUIProvider } from '@nextui-org/react';
import Header from '../components/Header';
import InputTab from '../components/InputTab';
import CodeInfo from '../components/CodeInfo';

function Code() {
  return (
    <NextUIProvider>
        <div className="h-screen bg-green bg-cover bg-center">
        <Header/>
        <CodeInfo/>
        <InputTab/>
      </div>
    </NextUIProvider>
  )
}

export default Code