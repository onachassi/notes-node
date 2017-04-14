const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json')
		return JSON.parse(notesString)
	} catch (e){
		return []
	}
}

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes)) 
}

var addNote = (title, body) => {
	var notes = fetchNotes()
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes)
		return note
	}

};

var getAll = () => {
	var notes = fetchNotes()
	console.log('Notes')
	console.log('-----')
	notes.forEach((note) => console.log(`Title: ${note.title}`))
}

var getNote = (title) => {
	var notes = fetchNotes()
	note = notes.filter((note) => note.title === title)
	if (note.length > 0){
		console.log(`Title: ${note[0].title}`)
		console.log(`Body: ${note[0].body}`)
	} else {
		console.log(`Could not find note: ${title}`)
	}
}

var removeNote = (title) => {
	var notes = fetchNotes()
	var newNotes = notes.filter((note) => note.title !== title)
	if (newNotes.length < notes.length) {
		console.log(`Successfully deleted ${title}`)
		saveNotes(newNotes)
	} else {
		console.log(`Could not find ${title}`)
	}
}


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}