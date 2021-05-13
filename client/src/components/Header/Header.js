
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,ButtonToolbar,Button,FormControl,Navbar,Form} from 'react-bootstrap'

function Header(){

    return(

        <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Notes</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/newNote">New Note</Nav.Link>
      <Nav.Link href="/newNote" className='MyNotesHead'>My Notes</Nav.Link>
      <Nav.Link href="#pricing" className='Logout'>Logout</Nav.Link>
    </Nav>
    <Form inline>
    </Form>
  </Navbar>
  </div>
    )
}
export default Header;