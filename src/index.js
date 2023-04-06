import axios from "axios";
import './cardList.js'

// const peopleList = document.getElementById("peopleList");

const getData = async () => {
  try {

    // membuat api call
    const response = await axios.get('http://jsonplaceholder.typicode.com/users')

    // people adalah array berisi 10 data
    const people = response.data
    console.log(people)
    // console.log(people == array)
    // console.log(people[0])
    
    const cardListElement = document.createElement('card-list')
    // memasukkan 10 data ke dalam custom component
    cardListElement.cards = people
    

    const cardContainer = document.getElementById('card-container')
    cardContainer.appendChild(cardListElement)


  } catch (error) {
    console.log(error);
  }
};

getData();
