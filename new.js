import {list, person1} from "./light.js"
list.map(person=>{
    console.log(person.name);
})

import Greeting from "./light.js";
Greeting();
const {name,lastName,age,score}= person1;