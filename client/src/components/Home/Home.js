
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,ButtonToolbar,Button,FormControl,Navbar,Form} from 'react-bootstrap'
import './Home.css'
import Header from '../Header/Header'
import MyNotes from '../MyNotes/MyNotes';
export default function Home(){

    return(
 

<div>
<Header/>
<MyNotes/>
  </div>


    )
}