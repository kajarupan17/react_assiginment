import React, { Component } from 'react'
import "./pag.css"
import Home from "./header.jsx"
import Footer from "./footer.jsx"
export default class home extends Component 
{
    render()
     {
      return(
          <div>
             
                <div>
                <Home/> 
                <h1 className="navi">ADD EMPLOYEE </h1> 

                 <form className="for">
                                        
                        

                        <label for="name">NAME</label><br></br>
                        <input type="text" name="Name" placeholder="ENTER YOUR NAME"></input>

                        <label for="name">TYPE</label><br></br>
                        <input type="text" name="TYPE" name="TYPE " placeholder="......"></input>

                        <label for="ID">PROJECT ID</label><br></br>
                        <input type="text" id="id" name="PROJECT ID" placeholder="ENTER PROJECT ID"></input>
                     
                                                                        
                        <label for="SATUS">SATUS</label>
                        <textarea type="text" SATUS="comments" id="comments"SATUS="ENTER DETAIL">
                          say something!
                        </textarea>

                        <label for="EID">PID</label>
                        <input type="text" ASSIGNED="PID" ASSIGNED="ENTER PID "></input>

                     
                        
                                          
                    </form>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;<a href="/viewAddback3"><button class="button button4">back</button></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="submit" value="SAVE"></input> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
                         <input type="submit" value="RESET"></input>&nbsp;&nbsp;&nbsp; 
                </div>
                <br></br> <br></br> <br></br> <br></br> <br></br>
                    <Footer/>  

                    </div>
                    
      )
     }
    }
