import WelcomeButton from "./WelcomeButton";

function WelcomeScreen(){
    return(
        <div className="welcome-screen-container">
            <p>bem vindos a LearnBot</p>
            <WelcomeButton/>
            <WelcomeButton/>
        </div>
    );
}

export default WelcomeScreen;