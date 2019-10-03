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
                <h1 className="navi">PROJECTS TABLE</h1> 
                    
                    <div className="ad1">
                    <a href = "/viewBack2"> <button class="editbtn1">HOME</button></a>
                    </div>
                    <form>
                    <center>
                    <table id="customers">
                        <tr>
                            <th>ID</th>
                            <th>DESTRIPTION</th>
                           <th>NAME</th>
                           <th>EDIT</th>
                           <th>DELET</th>
         
                           
                        </tr>
                         <tr>
                         <td>100</td>
                         <td>K.KAJAN</td>
                         <td>HIGH</td>
                         
                         <td><button class="editbtn">EDIT</button></td>
                         <td><button class="editbtn">DELET</button></td>
                        </tr>
                       
                    </table><br></br>
                    </center>
                   
                    </form>
                    </div>
                    <div className="ad">
                 <a href="/viewAdd2" > <button class="editbtn1">ADD PROJECTS</button></a> 
                    </div>
                   
                    <Footer/> 
                    </div>
      )
     }
    }
                