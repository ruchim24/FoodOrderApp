import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Mount");
  }

  componentDidUpdate(){
    console.log("Parent Update");
  }

  render(){
    console.log("Parent Render");
  return(
    <div>
        <h1>About Us</h1>
        <UserClass name="Ruchi(class)" />
    </div>
  )
}
}

export default About;