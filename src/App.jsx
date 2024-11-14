import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Chapters from './routes/About/Chapters';
import BetaChapter from './routes/About/BetaChapter';
import Cabinet from './routes/Sisters/Cabinet';
import ActiveHouse from './routes/Sisters/ActiveHouse';
import Phil from './routes/Phil';
import Pmom from './routes/Rush/Pmom';
import RushWeek from './routes/Rush/RushWeek';
import FAQ from './routes/Rush/FAQ';
import More from './routes/More/More';
import AlumLogin from './routes/Alumni/AlumLogin';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/chapters" element={<Chapters/>}/>
        <Route path="/about/betachapter" element={<BetaChapter/>}/>
        <Route path="/sisters/cabinet" element={<Cabinet/>}/>
        <Route path="/sisters/activehouse" element={<ActiveHouse/>}/>
        <Route path="/philanthropy" element={<Phil/>}/>
        <Route path="/rush/pmom" element={<Pmom/>}/>
        <Route path="/rush/rushweek" element={<RushWeek/>}/>
        <Route path="/rush/faq" element={<FAQ/>}/>
        <Route path="/more" element={<More/>}/>
        <Route path="/alumni" element={<AlumLogin/>}/>
      </Routes>
    </div>
  );
}