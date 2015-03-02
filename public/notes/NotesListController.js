angular.module("ang-bbnotes").controller("NotesListController", ["notes", "$state", function (notes, $state) {
	this.$state = $state;
    this.notes = notes.getNotes();
    this.fetchNotes = notes.fetchNotes;
}]);
