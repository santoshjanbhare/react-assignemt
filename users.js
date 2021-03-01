//import { any } from 'prop-types';
import React, { Component } from 'react';
import Modal from '../pages/Modal';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            username: props.username,
            imageUrl: "https://avatars.dicebear.com/v2/avataaars/" + props.username + ".svg?options[mood][]=happy",
            show: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    removeUser = () =>
    {
        
    }
    render() {

        return (
            <div key={this.props.keyProp} style={{ display: "inline", backgroundColor: "#f5f5f5" }}>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Basic Modal</p>
                    <p><label>Name</label>
                        <input value={this.props.name} readOnly></input>
                    </p>
                    <p>
                        <label>Email</label>
                        <input value={this.props.email} readOnly></input>
                    </p>
                    <p>
                        <label>Phone</label>
                        <input value={this.props.phone} readOnly></input>
                    </p>
                    <p>
                        <label>Website</label>
                        <input value={this.props.website} readOnly></input>
                    </p>
                </Modal>

                <img src={this.state.imageUrl} style={{ width: "200px", height: "200px", border: "1px solid black" }} alt="Avatar" />
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.website}</p>
                <button type="button" onClick={this.showModal}>
                    Edit
                </button>
                <button type="button" onClick={this.removeUser}>
                    Delete
                </button>
            </div>
        )
    }
}

export default User;