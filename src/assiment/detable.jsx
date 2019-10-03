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
                <h1 className="navi">DEFECT TRACKER TABLE</h1> 
                    
                    <div className="ad1">
                        <a href = "/viewBack1"><button class="editbtn1">HOME</button></a>
                        </div>
                        <form>
                        <center>
                        <table id="customers">
                            <tr>
                                <th>ID</th>
                                <th>DESTRIPTION</th>
                                <th>NAME</th>
                                <th>EMPLOYEE ID</th>
                                <th>PROJECT ID</th>
                                <th>PRIORITY</th>
                                <th>SEVERITY</th>
                                <th>SATUS</th>
                                <th>EID</th>
                                <th>PID</th>
                                <th>EDIT</th>
                                <th>DELET</th>
                            </tr>
                            <tr>
                                <td>100</td>
                                <td>K.KAJAN</td>
                                <td>HIGH</td>
                                <td>HIGH</td>
                                <td>SGIC</td>
                                <td>SGIC</td>
                                <td>SGIC</td>
                                <td>SGIC</td>
                                <td>SGIC</td>
                                <td>SGIC</td>
                                <td><button class="editbtn">EDIT</button></td>
                                <td><button class="editbtn">DELET</button></td>
                            </tr>
                        </table>
                        </center>
                                          
                     </form>                    
                     <div className="ad">
                        <a href = "/viewAdd1"><button class="editbtn1">ADD DEFECTS</button></a>
                     </div>                
                    <Footer/> 
            </div>
      )
     }
    }
                