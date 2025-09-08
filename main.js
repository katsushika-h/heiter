const name = "tuna";
import { moo } from './moo.js';
import {say} from 'cowsay';



console.log("Hello, World!");
console.log(say({
    text: moo(name), 
    e: "o o", 
    }
));