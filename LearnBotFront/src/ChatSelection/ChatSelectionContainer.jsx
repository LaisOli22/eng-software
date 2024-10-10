import ChatSelectionButton from "./ChatSelectionButton";

function ChatSelectionContainer(){
    return(
        <div className="chat-selection-container">
            <ChatSelectionButton/>
            <ChatSelectionButton/>
            <ChatSelectionButton/>
        </div>
    );
}

export default ChatSelectionContainer;