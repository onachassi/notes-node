console.log("Starting app.js")

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
}

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
}


const argv = yargs
	.command('add', 'Add a new note', {
	  	title: titleOptions,
	  	body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a notes', {title: titleOptions})
	.command('remove', 'Remove a notes', {title: titleOptions})
	.help()
	.argv;
var command = argv._[0]

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created')
		console.log(`Title: ${note.title}`)
		console.log(`Body: ${note.body}`)
	} else {
		console.log('There is already a note with that title.')
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognized')
}
