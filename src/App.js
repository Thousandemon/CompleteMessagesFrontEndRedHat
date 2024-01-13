import './App.css';
import StateDemo from './Component/SimpleColorApp/StateDemo';
import WillsAwesomeCounter from './Component/WillsAwesomeCounter/WillsAwesomeCounter';
import HelloWorld from './Component/HelloWorldApp/HelloWorld'
import MessageComponent from './Component/HelloWorldApp/MessageComponent'
import Third from './Component/HelloWorldApp/Third'
import ColorSwitcher from './Component/SwitchingColors/ColorSwitcher';
import GitHubFetcher from './Component/DealingWithGit/GitHubFetcher';
import GetMessageByIDComponent from './Component/Messages/GetMessageByIDComponent';
import MessageByID from './Component/Messages/MessageByID';
import GetAllMessages from './Component/Messages/GetAllMessages';

function App() {
  let initialValue = 0;
  return (
    <div className="App">
      {/*<h1> Hello World from App.js</h1>
      <HelloWorld firstName = "Bill"/>
      <MessageComponent message = "Message in a bottle"></MessageComponent>
      <Third message = "Hello" name = " Thomas" author = "Unknown"></Third>
      <Third message = "Good bye" name = " Fred" author = "Anon"></Third> 

      <StateDemo/> 
      
      <WillsAwesomeCounter initialValue = {initialValue}/> 
  */  } 

      {/* <ColorSwitcher></ColorSwitcher>

      <GitHubFetcher testName = "Thousandemon"/>
      <GitHubFetcher testName = "BackpackTrainer"/> */}
      {/* <GetMessageByIDComponent messageId = "2"/> */}
      {/* <GetMessageByIDComponent messageID="3"></GetMessageByIDComponent> */}
      {/* <MessageByID /> */}
      <GetAllMessages />
    </div>
  );   
}

export default App;
