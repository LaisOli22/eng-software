import { NextUIProvider } from '@nextui-org/react';
import Header from '../components/Header';
import InputTab from '../components/InputTabCode';
import CodeButtonContainer from '../components/CodeButtonsContainer';

function Code() {
  return (
    <NextUIProvider>
        <div className="h-screen bg-green bg-cover bg-center">
        <Header/>
<<<<<<< HEAD
        <CodeInfo/>
=======
        <InputTab/>
>>>>>>> da6171a35ed559cba282a0f74a9eb7ba844550e9
        <CodeButtonContainer/>
      </div>
    </NextUIProvider>
  )
}

export default Code