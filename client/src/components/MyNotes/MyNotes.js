import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Server from "../../Server";
import { Dropdown, Form, ModalDialog } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function MyNotes()
{

const [open,setOpen]=useState(false)

const onCloseModal=()=>setOpen(false)

function onOpenModal(id,title,note)
{
    setEditNote(note)
    setEditTitle(title)
    setEditId(id)
    setOpen(true);
   
}








    let history=useHistory()
    let jwt=localStorage.getItem('jwt')
    useEffect(()=>{
        console.log("ok");

let body={
    jwt
}
axios.post(Server+'/getMyNotes',body).then((response)=>{
SetNotes(response.data)

})

    },[])



  function  deleteNote(id){

    let x=window.confirm('are you sure to delete this note');
    
    if(x)
    {
    let data={
        jwt,
        id
    }
       axios.post(Server+'/deleteNote',data).then((response)=>{

alert('note deleted successfully')

window.location.reload()

       })
    }
}



function editNote(id,title,note){


setEditNote(note)
console.log(note);
setEditTitle(title)
setEditId(id)


}

function editthisNote()
{
let data={
    jwt,
    editId,
    editTitle,
    editnotes
}

axios.post(Server+'/EditNote',data).then(()=>{

    alert('Updated successfully')
    window.location.reload()
})
}

const[editId,setEditId]=useState('')
const[editTitle,setEditTitle]=useState('')
     const[editnotes,setEditNote]=useState('')
    const[notes,SetNotes]=useState('')
return (



    

<div className="page-content container note-has-grid">
    <ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
        <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active" id="all-category">
                <i className="icon-layers mr-1"></i><span className="d-none d-md-block">All Notes</span>
            </a>
        </li>
        <li className="nav-item">

        </li>
    </ul>
    <div className="tab-content bg-transparent">
        <div id="note-full-container" className="note-has-grid row">

























{notes.length>0?(
    notes.map((data,inex)=>{

        return(



            <div className="col-md-4 single-note-item all-category" >
                <div className="card card-body">
                    <span className="side-stick"></span>
                    <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Book a Ticket for Movie">{data.title}<i className="point fa fa-circle ml-1 font-10"></i></h5>
                    <p className="note-date font-12 text-muted">{data.date}- {data.time}</p>
                    <div className="note-content">
                        <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">{data.notes}</p>
                    </div>
                    <div className="d-flex align-items-center">
               <button className="fa fa-trash remove-note btn" onClick={(e) => deleteNote(data._id)}>Delete</button>
               <button onClick={(e)=>onOpenModal(data._id,data.title,data.notes)}>
                    <i class="material-icons">library_books</i> Classic
                    <div class="ripple-container"></div>
                </button>
                        <div className="ml-auto">
                            <div className="category-selector btn-group">
                                <a className="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                                    <div className="category">
                                        <div className="category-business"></div>
                                        <div className="category-social"></div>
                                        <div className="category-important"></div>
                                        <span className="more-options text-dark"><i className="icon-options-vertical"></i></span>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={open} onClose={onCloseModal} center>
       
      <label>
          Edit the title</label> <input type='text' value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} />

          Edit the note
          <textarea rows='10' cols="58"value={editnotes} onChange={(event)=>setEditNote(event.target.value)} >       </textarea>
          <button className="btn" onClick={editthisNote}> Update</button>

      </Modal>

           
            </div>






            
        )
    })
):(
    <div>
        
        
        
        
        
        
        
        
        
         </div>
)}




           
            
            
            
            
        </div>
    </div>


    
</div>
















    



)

}


export default MyNotes;