import { NextUIProvider } from '@nextui-org/react';
import ConceptExplainButton from '../components/ConceptExplainButton';
import CodeCorrectionButton from '../components/CodeCorrectionButton';
import CreateActivityButton from '../components/CreateActivityButton';
import ButtonTemplate from '../components/ButtonTemplate';
import Header from '../components/Header';

function TopicSelection() {
  return (
    <NextUIProvider>
        <div className="bg-black h-screen bg-purple bg-cover bg-center">
          <Header/>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-center text-3xl font-semibold'>Olá, eu sou o Edu.<br/>Como posso te ajudar?</p>
            <img className='size-72' src='src/assets/IMG_5669.PNG' alt='Edu' />
          </div>
          <div>
            <div className='flex justify-center p-8 space-x-6'>
                <ConceptExplainButton/>
                <CodeCorrectionButton/>
            </div>
            <div className='flex justify-center space-x-6'>
                <CreateActivityButton/>
                <ButtonTemplate/>
            </div>
          </div>
        </div>
    </NextUIProvider>
  )
}

export default TopicSelection