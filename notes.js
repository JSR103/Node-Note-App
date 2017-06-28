const fs = require('fs');

var fetchNotes = () => {
  try {

    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title,body) =>{
  //console.log(`Adding Note ${title}, ${body}`);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicatesNotes = notes.filter((notes) => notes.title === title);

  if(duplicatesNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () =>{
  return fetchNotes();
};

var removeNote = (title) =>{
  var notes = fetchNotes();//fetching notes
  var filterNotes = notes.filter((note) => note.title !== title);//filter Notes
  saveNotes(filterNotes);//save new notes array

  return notes.length != filterNotes.length;

};

var readNote = (title) =>{
  var notes = fetchNotes();
  var readingNote = notes.filter((note) => note.title === title);//filter Notes
   return readingNote[0];

};

var logNote = (note) =>{
  //debugger;
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote, //addNote: addNote --other way
  getAll,
  removeNote,
  readNote,
  logNote
};

























/*module.exports.age = 20;

module.exports.addNotes = function(){
  console.log('addNote');

  return 'New note';
};

module.exports.Add = (A,B) => {
  return A + B;
};*/
