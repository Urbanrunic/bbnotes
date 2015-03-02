angular.module("ang-bbnotes").controller("AddNoteController", ["notes", "$state",
function (notes, $state) {
	this.$state = $state;
    this.note = {};

    this.save = function (note) {
        notes.saveNote(note);
        return $state.go("notes");
    };
}]);
