const AddNoteScreen = require("./add-note.screen");

class DeleteNoteScreen {
    get firstNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    };

    get more(){
        return $('~More');
    };

    get delBtn(){
        return $('//*[@text="Delete"]');
    };

    get navIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    };

    get trashCan(){
        return $('//*[@text="Trash Can"]');
    };


    async skipTutorial(){
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    };

    async addAndSaveNote(noteTitle, addNoteBody) {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textBtn.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        await AddNoteScreen.noteTitle.addValue(noteTitle);
        await AddNoteScreen.addNoteBody.addValue(addNoteBody);

        await AddNoteScreen.saveNote();
    };
    
}

module.exports = new DeleteNoteScreen();