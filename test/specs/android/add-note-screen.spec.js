const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', ()=>{
    it('Skip tutorial', async ()=>{
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it('Add a note, save changes and verify note', async ()=>{
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textBtn.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();


        //add a note title
        await AddNoteScreen.noteTitle.addValue("Favorite animal list");

        //add note body
        await AddNoteScreen.addNoteBody.addValue("Cat\nCapivara\nSloth");


        //save the changes
        await AddNoteScreen.saveNote();
    

        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Cat\nCapivara\nSloth");
    });

    
})