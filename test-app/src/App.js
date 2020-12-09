
import Object from "./Object.js";
const test =[
  {
    start:1,
    end:4,
    notebutton:40
},
{
  start:1,
  end:4,
  notebutton:42
},
{
  start:1,
  end:4,
  notebutton:45
},



]
function App() {

  return (
    <div className="App">
      <Object music={test} width={600} height = {300}/>
    </div>
  );
}

export default App;
