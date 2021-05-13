import axios from "axios";
import { useEffect, useState } from "react";
import Server from "../../Server";


function MyNotes()
{

    useEffect(()=>{
        console.log("ok");
let jwt=localStorage.getItem('jwt')
let body={
    jwt
}
axios.post(Server+'/getMyNotes',body).then((response)=>{
SetNotes(response.data)

})

    },[])

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
                        <span className="mr-1"><i className="fa fa-star favourite-note"></i></span>
                        <span className="mr-1"><i className="fa fa-trash remove-note"></i></span>
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
            </div>





            
        )
    })
):(
    <div> </div>
)}




           
            
            
            
            
        </div>
    </div>


    
</div>
















    



)

}


export default MyNotes;