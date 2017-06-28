
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//const os = require('os');

const notes = require('./notes.js');
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv =  yargs
.command('add', 'creates a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'Lists all notes')
.command('read','Reads a note',{
  title: titleOptions,
})
.command('remove','Removes a note',{
  title: titleOptions,
})
.help()
.argv;
var command = argv._[0];

//console.log('Command: ', command);
//console.log('Yargs', argv);

//---------------------------------
if(command === 'add'){
  //console.log('Adding New Note');
    var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note created');
    notes.logNote(note);
  }
  else {
    console.log('Note title taken');
  }
}
else if (command === 'list') {
  //console.log('Listing All Notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read') {

var note =  notes.readNote(argv.title);

  if(note){
    console.log('Reading Note');
    notes.logNote(note);
  }
  else {
    console.log('Note Not Found');
  }
}
else if (command === 'remove') {
  //console.log('Removing Note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}
else {
  console.log('Command Not Recpgnized');
}




















/*var filteredArray = _.uniq(['Edgar','Kaelin','Joel',1,2,3,4,1]);//This gets rid of all duplicates in a Array
console.log(filteredArray);//Using the third party module called lodash;

console.log(_.isString(true));//This will output false because it looking for a string
console.log(_.isString('Joel'));//Using the third party module called lodash;

var res = notes.addNotes();//using a funtion from another file (notes.js)
console.log(res)//will output addNote and will return New note

var ans = notes.Add(9,-2);//using a funtion from another file (notes.js)
console.log(ans);//will return 7

var user = os.userInfo();

//fs.appendFileSync('greetings.txt', 'Hello ' + user.username + ' !');
fs.appendFileSync('greetings.txt', `Hello ${user.username} ! You are ${notes.age}.`);*/
