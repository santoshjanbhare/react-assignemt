import React,{ Component } from 'react';
import {  Link} from "react-router-dom";
class Menu extends Component{

    render () {
        if(this.props.selected==="users"){

        }
        else if(this.props.selected==="home"){

        }
        else{}
        return(
            <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
            </div>
        )
    }
}

export default Menu;