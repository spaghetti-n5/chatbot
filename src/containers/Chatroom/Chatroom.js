import React, { Component } from 'react';

import Form from './../../components/Form/Form';
import Message from './../../components/Message/Message';

class Chatroom extends Component {
 state = {
  inputValue: "",
  currentStep: 0,
  messages: [
    {sender: "Fred",
     msg: "Hello my name is Fred, I am your personal chatbot. I am here to help you choosing the best product's plan. What is your name?"
    }],
  products: [
    {
    id: 1,
    productName: "iPhone 7 128GB",
    brand: "Apple",
    category: "Phones & Tablets",
    plan: 44.99
   },
   {
   id: 2,
   productName: "iPhone 7 32GB",
   brand: "Apple",
   category: "Phones & Tablets",
   plan: 39.99
  },
  {
  id: 3,
  productName: "iPhone 7 Plus 128GB",
  brand: "Apple",
  category: "Phones & Tablets",
  plan: 49.99
  }
 ]
}

 inputChangedHandler = (event) => {
   this.setState({inputValue:event.target.value})
 }

 submitMessageHandler = (event) => {
   event.preventDefault();
   this.setState({inputValue:""});

   if (this.state.currentStep === 0) {
     this.step1();
   } else if (this.state.currentStep === 1) {
     this.step2();
   }
 }

  step1 = () => {
    let updatedMessages = this.state.messages;
    if (this.state.inputValue !== "") {
      const name = this.state.inputValue;
      updatedMessages.push({"sender": "User","msg":name});
      updatedMessages.push({"sender": "Fred","msg": "Hello "+ name + "! In which categories of tecnologies are you interested in?"})
      updatedMessages.push({"sender": "Fred","msg": "Phones & Tablets, Drones, Gaming & VR, Computing, Wearables?"})
      //map through categories to make the list of possibilities
      console.log("name", name);
      this.setState({messages:updatedMessages, currentStep:1})
      console.log(this.state.messages);
    } else {
      updatedMessages.push({"sender": "User","msg":this.state.inputValue});
      updatedMessages.push({"sender": "Fred","msg":"I don't understand, please enter a valid name"});
      this.setState({messages:updatedMessages})
      console.log(this.state.messages);
      console.log("Step Error");
    }
  }

  step2 = () => {
    console.log("Working step2");
    const category = this.state.inputValue;
    this.setState({inputValue:category});
    console.log("category",category);
    let updatedMessages = this.state.messages;
    updatedMessages.push({"sender": "user","msg":this.state.inputValue});
 }

 keyPressHandler = (event) => {
   if (event.key === 'Enter') {
   this.submitMessageHandler(event);
   }
 }

 render() {
 const messages = this.state.messages.map((message, i) => {
    return (
      <Message
        key={i}
        message={message.msg}
        sender={message.sender} />
    );
  });

   return (
     <div>
       <p>Chatroom</p>
       <div style={{width:'600px',height:'700px',border:'1px solid'}}>
          {messages}
       </div>
       <Form submitted={this.submitMessageHandler}
             value={this.state.inputValue}
             changed={this.inputChangedHandler}
             keyboard={this.keyPressHandler}/>
     </div>
   );
 }
}

export default Chatroom;
