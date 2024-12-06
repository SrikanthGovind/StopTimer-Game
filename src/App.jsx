import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title='Easy' targettime={1}/>
        <Timer title='Medium' targettime={5}/>
        <Timer title='Hard' targettime={10}/>
        <Timer title='Pro Level' targettime={15}/>
      </div>
    </>
  );
}

export default App;
