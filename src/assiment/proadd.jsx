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
                <h1 className="navi">ADD PROJECTS </h1> 
                    <form className="for">
                        

                        <label for="name">DESTRIPTION</label><br></br>
                        <input type="text" name="DESTRIPTION" placeholder="ENTER YOUR DESTRIPTION"></input>

                        <label for="name">NAME</label><br></br>
                        <input type="text" name="Name" placeholder="ENTER YOUR NAME"></input>
                     
                        
                                          
                    </form>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;<a href="/viewAddback2"><button class="button button4">back</button></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="submit" value="SAVE"></input> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
                         <input type="submit" value="RESET"></input>&nbsp;&nbsp;&nbsp; 
                         </div>
                    <Footer/>  
                    </div>
                    
      )
     }
    }
