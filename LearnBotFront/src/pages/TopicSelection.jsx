import { NextUIProvider } from '@nextui-org/react';
import WelcomeButton from '../components/WelcomeButton';

function TopicSelection() {
  return (
    <NextUIProvider>
        <div>
            <WelcomeButton/>
        </div>
    </NextUIProvider>
  )
}

export default TopicSelection