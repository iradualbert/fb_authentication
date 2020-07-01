import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


class Facebook extends Component {

    state = {

        loading: true,
        isLoggedIn: false,
        userID: '',
        name: '',
        email:'',
        phoneNumber:'',
        picture:''
    
    }

    componetnClicked = () =>{

    }
    responseFacebook = ( response ) =>{

        this.setState({

            loading: false,
            isLoggedIn : true,
            userID :response.userID,
            name : response.name,
            email : response.email,
            picture : response.picture.data.url

        })
        
    }


    render() {

        if(this.state.isLoggedIn && !this.state.loading){
            return (
                <div style={style}>

                <img src={this.state.picture} alt={this.state.name} />
                <h2> {this.state.name}</h2>
                Email: {this.state.email}
                </div>
            )

        } 
       
        
        else {
            return (
              <FacebookLogin
                style={style}
                appId="746154352593855"
                autoLoad={true}
                fields="name, email, picture"
                onclick={this.componentClicked}
                callback={this.responseFacebook}
              />
            );
        }
    }
}
const style = {
  width: "400px",
  marginTop: "60px",
  marginRight: "auto",
  marginLeft: "auto",
  background: "#f4f4f4",
  padding: "20px",
};

export default Facebook;
