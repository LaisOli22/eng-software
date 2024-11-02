import { NextUIProvider } from '@nextui-org/react';
import Header from '../components/Header';
import CodeButtonContainer from '../components/CodeButtonsContainer';

function Code() {
  return (
    <NextUIProvider>
        <div className="h-screen bg-green bg-cover bg-center">
        <Header/>
        <CodeButtonContainer/>
      </div>
    </NextUIProvider>
  )
}

export default Code