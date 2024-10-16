import { NextUIProvider } from '@nextui-org/react';
import WelcomeButton from '../components/WelcomeButton';

function Explain() {
  return (
    <NextUIProvider>
        <div>
            <WelcomeButton/>
        </div>
    </NextUIProvider>
  )
}

export default Explain