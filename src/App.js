// import logo from './logo.svg';
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
// import Square from "./components/Square";
// import './App.css';
import "./styles.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Header />

      {/* This is a comment in React */}

      {/*
      A Sneak Peak of a Lesson in the Near Future

      We know we have a player X and a player O, and we want to be able to customize our components. We can pass custom properties to our Player components, using props (short for properties). props is a special term in React. Let's see it in action.

      Let's make a custom prop called which Player and pass the appropriate player name
      */}

      <Player whichPlayer='X'/>   {/* so is this a prop? */}
      <Player whichPlayer='O'/>

      {/*
      Now, we need to access these properties inside our Player component. Our player component is a child of App, and thus has access to props.  Don't worry if this doesn't make sense yet. We'll be returning to this concept over and over again and it'll start to come together.
      */}

      {/*
      NTS:
      I think I remember from previous learning on history of react that that classes used to be used and it helps understand some of the lingo.  Maybe...  I'm glad they're saying don't worry if it doesn't completely make sense yet
      */}

      <Board/>
      {/* <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/> */}

    </div>
  );
}

export default App;
