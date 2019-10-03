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
                <h1 className="navi">ADD DEFECTS </h1> 
                    <form className="for">

                      

                        <label for="name">DESTRIPTION</label><br></br>
                        <input type="text" name="DESTRIPTION" placeholder="ENTER YOUR DESTRIPTION"></input>

                        <label for="name">NAME</label><br></br>
                        <input type="text" name="Name" placeholder="ENTER YOUR NAME"></input>

                        <label for="ID">EMPLOYEE ID</label><br></br>
                        <input type="text" id="id" name="EMPLOYEE ID" placeholder="ENTER EMPLOYEE ID"></input>

                        <label for="ID">PROJECT ID</label><br></br>
                        <input type="text" id="id" name="PROJECT ID" placeholder="ENTER PROJECT ID"></input>
                     
                          <label for="PRIORITY">PRIORITY</label>
                            <select PRIORITY="PRIORITY" name="PRIORITY">
                                    <option value="SCHOOL">HIGH</option>
                                    <option value="BANK">LOW</option>
                            </select>

                            <label for="SEVERITY">SEVERITY</label>
                            <select SEVERITY="SEVERITY" name="SEVERITY">
                                    <option value="SCHOOL">HIGH</option>
                                    <option value="BANK">LOW</option>
                            </select>

                                               
                        <label for="SATUS">SATUS</label>
                        <textarea type="text"  id="comments"SATUS="ENTER DETAIL">
                          say something!
                        </textarea>

                        <label for="EID">EID</label>
                        <input type="text"  ASSIGNED="ENTER EID "></input>

                        <label for="EID">PID</label>
                        <input type="text"  ASSIGNED="ENTER PID "></input>
             
                    </form>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;<a href="/viewAddback1"><button class="button button4">back</button></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="submit" value="SAVE"></input> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
                         <input type="submit" value="RESET"></input>&nbsp;&nbsp;&nbsp; 
                    <Footer/> 
                    <br></br>  <br></br>  <br></br>  <br></br>  
                    </div> 
                    </div>
                    
      )
     }
    }
