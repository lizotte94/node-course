const fs = require('fs')
const chalk = require('chalk');

const listNotes = () => {
  const notes = loadNotes()

  if(notes.length === 0) {
    console.log(chalk.red('You don\'t have any note listed !'))
    return
  }

  console.log(chalk.blue.inverse('YOUR NOTES\n'))
  notes.forEach(note => console.log(note.title + '\n' + note.body + '\n'))
}

const readNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find(note => note.title === title)

  if (noteFound) {
    console.log(chalk.blue.inverse(noteFound.title) + '\n' + noteFound.body)
  } else {
    console.log(chalk.red("The note does not exist."))
  }
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)
  
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    console.log('New note added !')
  } else {
    console.log('Note title already exists')
  }
  saveNotes(notes)
}

const removeNote = (title) => {
  const notes = loadNotes()
  const existingNoteIndex = notes.findIndex(note => note.title === title)

  if (existingNoteIndex === -1) {
    console.log(chalk.red.inverse(`"${title}" cannot be found !`))
    return;
  }
    notes.splice(existingNoteIndex, 1)
    console.log(chalk.green.inverse(`"${title}" removed !`));
    saveNotes(notes);
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}