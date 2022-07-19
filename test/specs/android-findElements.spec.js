describe('Android Elements Tests', ()=>{
    it('Find element by accessibility ID', async ()=> {
        //find element by accessibility id
        const appOption= await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });


    it('Find element by class name', async ()=>{
        const className= await $('android.widget.TextView');

        console.log(await className.getText());

        //assertion
        await expect(className).toHaveText("API Demos");
    })

    xit('Find element by XPath', async ()=>{
        //xpath -(//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    
        //find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        //find by class - assertion
        const textAssertion=await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find element by UIAutomator', async ()=>{
        //find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find multiple elements', async () =>{
        const expectedList=[
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList=[]

        const textList =await $$('android.widget.TextView');
        for (const element of textList){
            actualList.push(await element.getText());
        }

        await expect(actualList).toEqual(expectedList);
    });

    it.only('Working with text field', async ()=>{
        //access the auto complete screen
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();

        //enter the country name
        const textField=await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');

        //verify the country name
        await expect(textField).toHaveText('Canada');
    })
});