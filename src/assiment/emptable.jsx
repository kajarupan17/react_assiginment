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
                <Home/> 
                <h1 className="navi">EMPLOYEE TABLE</h1> 
                    
                    <div className="ad1">
                    <a href = "/viewBack3"><button class="editbtn1">HOME</button></a>
                    </div>
                    <form>
                    <center>
                    <table id="customers">
                        <tr>
                            <th>ID</th>
                            
                           <th>NAME</th>
                           <th>TYPE</th>
                           <th>PROJECT ID</th>
                           <th>PID</th>
                           <th>EDIT</th>
                           <th>DELET</th>
         
                           
                        </tr>
                         <tr>
                         <td>100</td>
                         <td>K.KAJAN</td>
                         <td>HIGH</td>
                         <td>HIGH</td>
                         <td>HIGH</td>
                         <td><button class="editbtn">EDIT</button></td>
                         <td><button class="editbtn">DELET</button></td>
                        </tr>
                       
                    </table><br></br>
                    </center>
                   
                   </form>
                   
                    <div className="ad">
                  <a href="viewAdd3"><button class="editbtn1">ADD EMPLOYEE</button></a>
                    </div>
                   
                    <Footer/> 
                    </div>
      )
     }
    }
                