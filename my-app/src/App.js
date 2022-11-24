import { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Project from'./components/Project'
// import Contact from '../components/Contact';
// import Resume from '../components/Resume'
// import Portfolio from '../components/Portfolio';


// state is being used to render the new pages when clicked!
function App() {
// the 0 in the useState function is representing the current page the app is rendering, can use a string
// intial page is named current page, can change page using setcurrentpage
function display() {
  if(currentPage===0) {
    return <About></About>
  }
  // else if (currentPage===1){
  //   return <Portfolio></Portfolio>
  // }
  // else if (currentPage===2){
  //   return <Contact></Contact>
  // }
  // else if(currentPage===3) {
  //   return <Resume></Resume>
  // }
}
  const [currentPage , setcurrentPage] = useState(0);
  return (
    <div className="App">
      {/* jsx element */}
    <Nav setcurrentPage={setcurrentPage}></Nav>
    {currentPage}
    {display()};
    
    
    
    </div>
  );
}

export default App;
