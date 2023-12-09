/*
COMMENTS COPIED FROM APP.JS--------------------------------------------

Now, we need to access these properties inside our Player component. Our player component is a child of App, and thus has access to props.  Don't worry if this doesn't make sense yet. We'll be returning to this concept over and over again and it'll start to come together.
*/

/*
NTS:
I think I remember from previous learning on history of react that that classes used to be used and it helps understand some of the lingo.  Maybe...  I'm glad they're saying don't worry if it doesn't completely make sense yet

----------------------------------------------------------------------------
*/

// Props are passed as object argument to our component, so we must define a parameter to receive it

// conventionally the parameter is called props

function Player(props) {
  return (
    <div className={props.whichPlayer}>
      <h2>Player {props.whichPlayer} </h2>
      <h3>Wins: </h3>
    </div>
  )
}

export default Player;