// script.js

function saveNote() {
    var noteInput = document.getElementById('noteInput');
    var noteList = document.getElementById('noteList');
    var noteText = noteInput.value;

    if (noteText.trim() !== "") {
        var li = document.createElement('li');
        li.className = 'note-group';
        li.innerHTML = '<div class="note-item"><p>' + noteText + '</p><button class="update-btn" onclick="updateNote(this)">Update</button><button class="delete-btn" onclick="deleteNote(this)">Delete</button></div>';
        noteList.appendChild(li);
        noteInput.value = "";
    }
}

function deleteNote(button) {
    var listItem = button.parentElement.parentElement;
    listItem.remove();
}

function updateNote(button) {
    var noteItem = button.parentElement;
    var noteText = prompt("Edit your note:", noteItem.querySelector('p').innerText);

    if (noteText !== null) {
        noteItem.querySelector('p').innerText = noteText;
    }
}

function addNote() {
    var noteList = document.getElementById('noteList');
    var li = document.createElement('li');
    li.className = 'note-group';
    li.innerHTML = '<div class="note-item"><p>New Note</p><button class="update-btn" onclick="updateNote(this)">Update</button><button class="delete-btn" onclick="deleteNote(this)">Delete</button></div>';
    noteList.appendChild(li);
}
// Sample notes data
var notes = [
    "Remember to buy groceries on the way home.",
    "Call John about the upcoming meeting.",
    "Finish the project proposal by Friday.",
    "Take a 15-minute break every hour to stay focused.",
    "Attend the yoga class at 6 PM today.",
    "Plan a weekend getaway with family.",
    "Read the new book for the book club discussion.",
    "Schedule a dentist appointment for next month.",
    "Update the budget spreadsheet for this month.",
    "Learn a new recipe for dinner tonight."
];

// Function to display notes based on search query
function displayNotes(searchQuery) {
    // Clear previous search results
    document.getElementById('noteList').innerHTML = "";

    // Filter notes based on search query
    var filteredNotes = notes.filter(function(note) {
        return note.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Display filtered notes
    var noteList = document.getElementById('noteList');
    filteredNotes.forEach(function(note) {
        var li = document.createElement('li');
        li.textContent = note;
        noteList.appendChild(li);
    });
}

// Example usage:
// Call displayNotes with the search query you want to use
// In this example, it's searching for notes containing the word "groceries"
displayNotes("groceries");