import './App.css';
import Nav from './component/nav'
import Main from './component/main';
import KnowMe from './component/knowMe';
import MySkills from './component/mySkills';
import  MyProjects  from './component/myProjects';
import Art from './component/art'
function App() {
  return (
    <div className="App">

      <Nav/>
      <Main/>
      <KnowMe/>
      <MySkills/>
      <MyProjects/>
      <Art/>
    
    </div>
  );
}

export default App;
