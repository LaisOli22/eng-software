import ChatSelectionContainer from "./components/SideBar/ChatSelectionContainer";
import UserInput from "./components/SideBar/UserInput";
import WelcomeScreen from "./components/SideBar/WelcomeScreen";

function AppBox() {
  return (
    <div className="app-box">
      <ChatSelectionContainer />
      <WelcomeScreen />
      <UserInput />
    </div>
  );
}

export default AppBox;
