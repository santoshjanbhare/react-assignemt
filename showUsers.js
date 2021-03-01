import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';

import React,{ Component } from 'react';
import axios from 'axios';
import User from '../components/users';


class ShowUsers extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          dataSource: [],
          apiResponseJson:null,
     
        };


    }



    componentDidMount() {

        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            console.log(res.data);
            this.setState({
                dataSource: res.data
            });
          })
    
      }

    render () {
        return(
            <div>
                <Header page="Users"/>
                <Menu selected="users"/>
                
                {this.state.dataSource.map( (user,i) =>{
                    return <div> <User keyProp={i}
                    id={user.id} 
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    phone={user.phone}
                    website={user.website}>
                    </User>
                    </div>
                })}
                
                <Footer/>
            </div>
        )
    }
}

export default ShowUsers;