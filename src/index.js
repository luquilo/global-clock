import axios from "axios";
import './cardList.js'
import './style/style.css'

// const peopleList = document.getElementById("peopleList");

const getData = async () => {
  try {

    // api call
    const response = await axios.get('http://jsonplaceholder.typicode.com/users')

    // people = array with 10 data from api
    const people = response.data
    // console.log(people)
    
    const cardListElement = document.createElement('card-list')
    // adding 10 data to custom component
    cardListElement.cards = people
    

    const cardContainer = document.getElementById('card-container')
    cardContainer.appendChild(cardListElement)


  } catch (error) {
    console.log(error);
  }
};

// name, email

getData();
