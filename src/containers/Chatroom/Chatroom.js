import React, {Component} from 'react';

import Form from './../../components/Form/Form';
import Message from './../../components/Message/Message';
import MatchedItems from './../../components/MatchedItems/MatchedItems';
import classes from './Chatroom.css';

class Chatroom extends Component {
  state = {
    inputValue: "",
    currentStep: 0,
    categories: ["\n- Phones & Tablets","\n- Drones","\n- Gaming & VR","\n- Computing","\n- Wearables","\n- Smart Home"],
    messages: [
      {
        sender: "Fred",
        msg: "Hello my name is Fred, I am your personal chatbot!\nI am here to help you choosing the best product's plan.\nWhat is your name?"
      }
    ],
    products: [
      {
        id: 1,
        productName: "iPhone 7 128GB",
        brand: "Apple",
        category: "phones & tablets",
        plan: 44.99
      }, {
        id: 2,
        productName: "iPhone 7 32GB",
        brand: "Apple",
        category: "phones & tablets",
        plan: 39.99
      }, {
        id: 3,
        productName: "iPhone 7 Plus 128GB",
        brand: "Apple",
        category: "phones & tablets",
        plan: 49.99
      }, {
        id: 4,
        productName: "Galaxy S8 64GB",
        brand: "Samsung",
        category: "phones & tablets",
        plan: 44.99
      }, {
        id: 5,
        productName: "Galaxy S8+ 64GB",
        brand: "Samsung",
        category: "phones & tablets",
        plan: 49.99
      }, {
        id: 6,
        productName: "Drone BEBOP",
        brand: "Parrot",
        category: "drones",
        plan: 49.99
      }, {
        id: 7,
        productName: "Drone BEBOP 2",
        brand: "Parrot",
        category: "drones",
        plan: 59.99
      }, {
        id: 8,
        productName: "Vive",
        brand: "HTC",
        category: "gaming & vr",
        plan: 59.99
      }, {
        id: 9,
        productName: "Virtual Reality Glasses Rift VR",
        brand: "Oculus",
        category: "gaming & vr",
        plan: 59.99
      }, {
        id: 10,
        productName: "MacBook 12' M-5Y31, 8GB RAM, 516GB",
        brand: "Apple",
        category: "computing",
        plan: 59.99
      }, {
        id: 11,
        productName: "MacBook Air 11' i7 2.2, 8GB RAM, 512GB",
        brand: "Apple",
        category: "computing",
        plan: 64.99
      }, {
        id: 12,
        productName: "MacBook Air 13' i5-5250U, 4GB RAM, 128GB",
        brand: "Apple",
        category: "computing",
        plan: 69.99
      }, {
        id: 13,
        productName: "MacBook Pro 13' i5-3210M, 4GB RAM, 500GB",
        brand: "Apple",
        category: "computing",
        plan: 74.99
      }, {
        id: 14,
        productName: "Convertible Laptop Surface Book 512GB SSD Intel Core i7 16GB RAM dGPU",
        brand: "Microsoft",
        category: "computing",
        plan: 59.99
      }, {
        id: 15,
        productName: "Convertible Laptop YOGA 300-11IBR 80M1004KGE",
        brand: "Lenovo",
        category: "computing",
        plan: 59.99
      }, {
        id: 16,
        productName: "Watch 38mm",
        brand: "Apple",
        category: "wearables",
        plan: 39.99
      }, {
        id: 17,
        productName: "Watch 42mm",
        brand: "Apple",
        category: "wearables",
        plan: 44.99
      }, {
        id: 18,
        productName: "Watch Ambit 3",
        brand: "Suunto",
        category: "wearables",
        plan: 39.99
      }, {
        id: 19,
        productName: "Watch V800",
        brand: "Polar",
        category: "wearables",
        plan: 39.99
      }, {
        id: 20,
        productName: "Watch WI503Q-1LDBR0001",
        brand: "Asus",
        category: "wearables",
        plan: 44.99
      }, {
        id: 21,
        productName: "Alexa Dot",
        brand: "Amazon",
        category: "smart home",
        plan: 44.99
      }, {
        id: 22,
        productName: "Alexa Echo",
        brand: "Amazon",
        category: "smart home",
        plan: 49.99
      }, {
        id: 23,
        productName: "Qbo Milk Master",
        brand: "Tchibo",
        category: "smart home",
        plan: 29.99
      }, {
        id: 24,
        productName: "Robotic Vacuum Cleaner POWERbot VR20J9020UR/EG",
        brand: "Samsung",
        category: "smart home",
        plan: 39.99
      }, {
        id: 25,
        productName: "Robotic Vacuum Cleaner POWERbot VR20J9259U/EG",
        brand: "Samsung",
        category: "smart home",
        plan: 39.99
      }
    ]
  }

  inputChangedHandler = (event) => {
    this.setState({inputValue: event.target.value})
  }

  submitMessageHandler = (event) => {
    event.preventDefault();
    this.setState({inputValue: ""});

    if (this.state.currentStep === 0) {
      this.step1();
    } else if (this.state.currentStep === 1) {
      this.step2();
    } else if (this.state.currentStep === 2) {
      this.step3();
    }
  }

  step1 = () => {
    let updatedMessages = this.state.messages;
    //Validation of the input for empty spaces:
    //console.log(this.state.inputValue.replace(/^\s+/g, ""));
    if (this.state.inputValue.replace(/^\s+/g, "") !== "") {
      const name = this.state.inputValue;
      updatedMessages.push({"sender": "User", "msg": name});
      const availableCategories = this.state.categories.join(", ");
      console.log(availableCategories);
      updatedMessages.push({
        "sender": "Fred",
        "msg": "Hello "+ name +"!\nPlease type the name of the category that your desired product belongs to, you can choose between: "+ availableCategories +"."
      });
      this.setState({messages: updatedMessages, currentStep: 1})
      //console.log(this.state.messages);
    } else {
      updatedMessages.push({"sender": "User", "msg": this.state.inputValue});
      updatedMessages.push({"sender": "Fred", "msg": "I don't understand, please enter a valid name"});
      this.setState({messages: updatedMessages})
      //console.log(this.state.messages);
    }
  }

  step2 = () => {
    const selectedCategory = this.state.inputValue.toLowerCase();
    let updatedMessages = this.state.messages;
    updatedMessages.push({"sender": "User", "msg": this.state.inputValue});
    //Check if the selectedCategory has any matching products
    let matchedItems = this.state.products.filter(function(item) {
      if (item.category.includes(selectedCategory) && selectedCategory !== "&") {
        return (item);
      } else {
        return (null);
      }
    });
    console.log("matchedItems",matchedItems);
    if (matchedItems.length === 0) {
      updatedMessages.push({"sender": "Fred", "msg": "Sorry we don't have what you are looking for. \nPlease try again."})
      this.setState({messages: updatedMessages})
      console.log(this.state.messages);
    } else {
      let matches = <MatchedItems data={matchedItems}/>
      updatedMessages.push({"sender": "Fred", "msg": matches});
      updatedMessages.push({"sender": "Fred", "msg": "Please enter the number of the product you want to choose."})
      this.setState({messages: updatedMessages, currentStep: 2})
    }
  }

  step3 = () => {
    const selectedProduct = this.state.inputValue;
    let updatedMessages = this.state.messages;
    console.log(updatedMessages);
    updatedMessages.push({"sender": "User", "msg": selectedProduct});
    let matchedPlan = this.state.products.filter(function(item) {
      return (item.id.toString() === selectedProduct);
    });
    console.log("matchedPlan",matchedPlan);
    if (matchedPlan.length === 0) {
      updatedMessages.push({"sender": "Fred", "msg": "Nothing found.\nPlease enter a valid number N° of the product."});
      this.setState({messages: updatedMessages})
    } else {
      updatedMessages.push({"sender": "Fred", "msg": "Fantastic!\nYou chose "
      +matchedPlan[0].productName +" for "+matchedPlan[0].plan+" € per month."});
      this.setState({messages: updatedMessages})
    }
  }

  keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      this.submitMessageHandler(event);
    }
  }

  render() {
    const messages = this.state.messages.map((message, i) => {
      return (
        <Message key={i} message={message.msg} sender={message.sender}/>
      );
    });

    return (
      <div>
        <div className={classes.Title}>
          <p>Chatroom</p>
        </div>
        <div className={classes.Chatroom}>
          {messages}
        </div>
        <Form submitted={this.submitMessageHandler} value={this.state.inputValue}
          changed={this.inputChangedHandler} keyboard={this.keyPressHandler}/>
      </div>
    );
  }
}

export default Chatroom;
