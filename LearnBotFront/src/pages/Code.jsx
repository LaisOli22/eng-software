import { NextUIProvider } from '@nextui-org/react';
import WelcomeButton from '../components/WelcomeButton';

function Code() {
  return (
    <NextUIProvider>
        <div>
            <WelcomeButton/>
        </div>
    </NextUIProvider>
  )
}

export default Code