
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
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Favorite animal list");

        //add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Cat\nCapivara\nSloth");


        //save the changes
        await driver.back();
        await driver.back();

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Cat\nCapivara\nSloth");
    });

    // it('Delete note and verify the note is deleted in the Trash Can', async ()=>{
    //     //delete note
    //     await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();

    //     await $('//*[@text="Delete"]').click();
    //     await $('//*[@text="OK"]').click();

    //     await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
    //     await $('//*[@text="Trash Can"]').click();

    //     //assertion
    //     await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toBeDisplayed();


    // });
})