import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child Constructor");
        this.state = {
            userInfo: {
                name:"",
                location:"",
            }
        }
    }

    async componentDidMount(){
       console.log("Child Mount");
       const data = await fetch("https://api.github.com/users/ruchim24");
       const res = await data.json();
       this.setState({userInfo:res});
    }
    
      componentDidUpdate(){
        console.log("Child Update");
      }

      componentWillUnmount(){
        console.log("Child Unmount"); 
      }

    render(){
        console.log("Child Render");
        return(
            <div className="user-card">
            <img src={this.state.userInfo.avatar_url} />
            <h1>Name: {this.state.userInfo.name}</h1>
            <h2>Location: {this.state.userInfo.location}</h2>
           </div>
        )
    }
}

export default UserClass;