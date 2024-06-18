import React ,{ useState } from 'react';
import './App.css';
import About from './component/About';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

import{ BrowserRouter as Router,  Switch,  Route} from "react-router-dom";



function App() {
  const[mode,setMode]=useState('light')

  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500
    )

  }

  const toggleMode=()=>{
      if(mode ==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743'
        showAlert(" Dark Mode Has Been Enabled" ,"success")
      }else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert(" Light Mode Has Been Enabled" ,"success")

      }
  }


return (
<>
{/*<NavBar title="collge" aboutText="About App"/>*/}
{/*<NavBar/>*/}
<Router>
<NavBar title="college" mode={mode}  toggleMode={toggleMode}/>
<Alert alertmessage={alert}/>
<div className='container my-3'>
  <Switch>
    <Route path='/about'>
      <About mode={mode}/>
    </Route>
    <Route path='/textform'>
    <TextForm showAlert={showAlert} heading=" Try TextUtils- Word Couter,Character Couter And Remove Extra Sapaces" mode={mode}/>
    </Route>
  </Switch>
</div>
</Router>
</>
  );
}

export default App;
