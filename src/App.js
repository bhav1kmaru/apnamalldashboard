import './App.css'
import AllRoutes from './components/AllRoutes';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        {/* <MainDash/>
        <RightSide/> */}
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
