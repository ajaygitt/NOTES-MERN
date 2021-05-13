import {Form} from 'react-bootstrap'
import './newnote.css'

function NewNote(){


    return(

<body>
    
<div >
            <div className="row">
                <div className="newNoteBox col-md-10">
                    <h1 className="text-center text-black mb-3 pt-3 ">Add New Note</h1>
                    <div className="noteBox alert border-white text-center m-auto col-md-9 col-lg-7 newnote p-3">
                        <Form>
                            <textarea rows="8" cols ="60" id="noteInput" placeholder='enter your note here' style={{border:"none",outline:"none"}}  className="p-2 m-auto"></textarea><br></br>
                            <button type="button"  className="btn btn-primary w-25 mt-2" >Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

</body>

    )
}
export default NewNote;