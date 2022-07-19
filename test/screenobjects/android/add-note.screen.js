

class AddNoteScreen{
    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteTxt() {
        return $('//*[@text="Add note"]');
    }

    get textBtn() {
        return $('//*[@text="Text"]');
    }

    get textEditing() {
        return $('//*[@text="Editing"]');
    }

    get noteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get addNoteBody() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    async saveNote() {
        await driver.back();
        await driver.back();
    }
}

module.exports = new AddNoteScreen();

//export default new AddNoteScreen();

