import {Form} from 'react-bootstrap'
import './newnote.css'
import axios from 'axios'
import Server from '../../Server';
import { useHistory } from 'react-router';
import Header from '../Header/Header';



function NewNote(){
    let history=useHistory()
function newNote(){



let title=document.getElementById('noteTitle').value
let notes=document.getElementById('noteInput').value
let jwt=localStorage.getItem('jwt')

if(title.length==0||notes.length==0)
{
    alert('please enter sufficient data')
}

else
{
let noteObj={
    title,
    notes,
    jwt
}
alert(title+notes)


axios.post(Server+'/addNewNote',noteObj).then((response)=>{

    if(response.status==200)
    {
        alert('Successfully added this note')
        history.push('/home')

    }
    else
    {
        alert('something went wrong')
    }
})
}
}



    return(

<body>
    <Header/>
<div >
            <div className="row">
                <div className="newNoteBox col-md-10">
                    <h1 className="text-center text-black mb-3 pt-3 ">Add New Note</h1>
                    <div className="noteBox alert border-white text-center m-auto col-md-9 col-lg-7 newnote p-3">
                        <Form >
                         <label>
                             <p>title of your note</p>
                         </label>
                            <input name='noteTitle' id='noteTitle'/>
                            <textarea rows="8" cols ="60" id="noteInput" placeholder='enter your note here' style={{border:"none",outline:"none"}}  className="p-2 m-auto"></textarea><br></br>
                            <button type="button"  className="btn btn-primary w-25 mt-2" onClick={newNote} >Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

</body>

    )
}
export default NewNote;