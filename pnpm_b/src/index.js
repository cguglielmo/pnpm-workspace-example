import {HelloJs} from "./Hello";

new HelloJs().say();

new HelloJs().asyncTask().then(() => console.log('async task finished'))
