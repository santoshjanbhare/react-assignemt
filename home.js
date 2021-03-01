import Footer from '../components/footer';
import Header from '../components/header';
import Menu from '../components/menu';

import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <Header page="Home"/>
                <Menu selected="home"/>
                <h2>Lorem ipsum</h2>
                <p>
                <b>Lorem ipsum</b>, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
                <Footer/>
            </div>
        )
    }
}

export default Home;