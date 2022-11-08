import inquirer from 'inquirer';

inquirer
  .prompt([
    {type:'input', name:'name', message:'what is your name?'},
    {type:'number', name:'age', message:'how old are u?'},
    {type:'confirm', name:'confirm', message:'u sure?'},
    {type:'password', name:'password', message:'what is ur password?'},
    {type:'checkbox', name:'gender', message:'what is your gender?', choices: ['male', 'female'],},
    {type:'list', name:'food', message:'what is your fav food on this list?',choices: ['vodka', 'beer', 'feet', 'cow',],},
    {type:'rawlist', name:'animal', message:'what is your fav animal?', choices: ['fridge', 'm249', 'toes', 'columbia',],},
    {type:'editor', name:'edit', message:'U wana open fking notepad???'},
    {type:'expand', name:'expand', message:'are u a retard?',
    choices:[{
        key: 'y',
        name:'yes',
        value:'true',
    },
    {
        key: 'n',
        name:'no',
        value:'false',
    }
]
    },
  ])
  .then((answers) => {
    console.log(`my name is ${answers.name}`);
    console.log(`i am ${answers.age} years old`);
    console.log(`password: ${answers.password}`);
    console.log(`i am a ${answers.gender}`);
    console.log(`my fav is ${answers.food}`);
    console.log(`expand me ${answers.expand}`);
    console.log(`my fav is ${answers.animal}`);
    console.log(`edit ${answers.edit}`);
    console.log(`umm yeah ${answers.confirm}`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });