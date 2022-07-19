

describe('Add Notes', ()=>{
    it('Skip tutorial', async ()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add a note, save changes and verify note', async ()=>{
        await $('//*[@text="Add note"]').click();

        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();


        //add a note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Test note");

        //add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Notetaking is fun.");


        //save the changes
        await driver.back();
        await driver.back();

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Notetaking is fun.");
    });


    it('Delete note and verify the note is deleted in the Trash Can', async ()=>{
        await driver.back(); //to go back to the main screen
        const note=await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        //click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
        await $('~More').click();

        //click on delete 
        await $('//*[@text="Delete"]').click();

        //accept alert
        await driver.acceptAlert();

        //check on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //go to trash can
        await $('//*[@text="Trash Can"]').click();

        //assertions
        const trashCanItem=await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText(); //Test note
        await expect(trashCanItem).toEqual(note); //to use "toHaveText" for this line, remove the ".getText" in the above line. 'trashCanitem' already has get text in behind the scene.

        // const trashCanItem=await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'); //Test note
        // await expect(trashCanItem).toHaveText(note);
    });
})