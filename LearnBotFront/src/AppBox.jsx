import ChatSelectionContainer from "./ChatSelection/ChatSelectionContainer";
import UserInput from "./UserInput/UserInput";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";

function AppBox(){
    return(
        <div className="app-box">
            <ChatSelectionContainer/>
            <WelcomeScreen/>
            <UserInput/>
        </div>
    );
}

export default AppBox;