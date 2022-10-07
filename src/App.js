import './App.css';
import Factor from './components/factor/Factor';
import OurServices from './components/ourServices/ourServices';
import Portfolio from './components/Portfolio/portfolio';
import Skills from './components/skills/skills';
import StartAbout from './components/startAbout/startAbout';
import StartBanner from './components/startBanner/startBanner';
import TeamArea from './components/teamArea/teamArea';
import Footer from './navigation/Footer';
import Navbar from './navigation/Navbar';
import ProgressBar from "bootstrap-progress-bar";

function App() {
  let now = 60;

  return (
    <div className="App">
      <Navbar/>
       
        <StartBanner/>
        <OurServices/>
        
        <div className='progressBar'>
           <ProgressBar  width={500} now={now}  message="70%" />
        </div>
        <StartAbout/>
        <OurServices/>

        <Portfolio/>
        <TeamArea/>
        <Factor/>
        <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
