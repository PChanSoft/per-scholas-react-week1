/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true

const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
*/

/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
function greeting(name, gender, isSelf) {
    // do stuff here ...
    let anPrefix='';
    if (gender==='male'){
           anPrefix='his';
    }else if (gender==='female'){
           anPrefix='her'
       }
    else if(gender==='nonbinary'){
           anPrefix='their';
       }
    if (isSelf===true){
           anPrefix='my'
       }

    return  `Hello, ${anPrefix} name is ${name}.`; // use template literal for string to return
  }

  const message = greeting ("Adam", "male", true);
  console.log(message);
  console.log(greeting('Joseph', 'nonbinary', false));
  console.log(greeting('Mary', 'female', false));