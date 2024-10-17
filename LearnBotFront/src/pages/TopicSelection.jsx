import { NextUIProvider } from '@nextui-org/react';
import ConceptExplainButton from '../components/ConceptExplainButton';
import CodeCorrectionButton from '../components/CodeCorrectionButton';
import CreateActivityButton from '../components/CreateActivityButton';
import ButtonTemplate from '../components/ButtonTemplate';

function TopicSelection() {
  return (
    <NextUIProvider>
        <div className="bg-black h-screen bg-purple bg-cover bg-center">
          <ConceptExplainButton/>
          <CodeCorrectionButton/>
          <CreateActivityButton/>
          <ButtonTemplate/>
        </div>
    </NextUIProvider>
  )
}

export default TopicSelection