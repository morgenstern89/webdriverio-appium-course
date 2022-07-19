const DeleteNoteScreen = require("../../screenobjects/android/delete-note.screen")

describe('Add Notes', ()=>{
    before(async ()=>{
        await DeleteNoteScreen.skipTutorial();
        await DeleteNoteScreen.addAndSaveNote("TV Shows", "Gilmore Girls\nHouse of Cards\nKilling Eve\nDownton Abbey");
        await driver.back(); //to go back to the main screen
    });

    it('Delete note and verify the note is deleted in the Trash Can', async ()=>{        
        const note = await DeleteNoteScreen.firstNote.getText();
    
        //click on the note
        await DeleteNoteScreen.firstNote.click();
        await DeleteNoteScreen.more.click();

        //click on delete 
        await DeleteNoteScreen.delBtn.click();

        //accept alert
        await driver.acceptAlert();

        //check on nav icon
        await DeleteNoteScreen.navIcon.click();

        //go to trash can
        await DeleteNoteScreen.trashCan.click();

        //assertions
        const trashCanItem=await DeleteNoteScreen.firstNote; //Test note
        await expect(trashCanItem).toHaveText(note); //to use "toHaveText" for this line, remove the ".getText" in the above line. 'trashCanitem' already has get text in behind the scene.

        // const trashCanItem=await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'); //Test note
        // await expect(trashCanItem).toHaveText(note);
    });
})