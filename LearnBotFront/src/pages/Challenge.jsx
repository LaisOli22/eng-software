import { NextUIProvider } from '@nextui-org/react';
import WelcomeButton from '../components/WelcomeButton';

function Challenge() {
  return (
    <NextUIProvider>
        <div>
            <WelcomeButton/>
        </div>
    </NextUIProvider>
  )
}

export default Challenge