import { TestData } from "../src/data/test.data";
import { test, expect } from '../src/fixtures/test.fixture';

test('Verify positive workflow', async ({ accessPage, context, testModePage, homePage }) => {
    await homePage.goto();
    await homePage.clearCache();
    await homePage.waitForPageLoad();
    await homePage.clickContinue();
    await homePage.clickContinue();
    await context.grantPermissions(['camera', 'microphone']);
    await accessPage.clickMakePhoto();
    await accessPage.clickContinue();
    await accessPage.clickMakePhoto();
    await accessPage.waitForTryAgainButtonVisible();
    await accessPage.clickContinue();
    await accessPage.acceptDialog();
    await accessPage.clickContinue();
    const instructionText = await accessPage.getInstrustionText();
    expect(instructionText).toBe(TestData.texts.rulesText);
    await accessPage.clickContinue();
    const text = await accessPage.getInstrustionText();
    expect(text).toBe(TestData.texts.rulesMustText);
    await accessPage.clickContinue();
    expect(await testModePage.isVideoContainerVisible()).toBeTruthy();
    expect(await testModePage.isEndSessionButtonVisible()).toBeTruthy();
    await testModePage.clickEndSession();
    expect(await testModePage.isEndSessionButtonVisible()).toBeFalsy();
    expect(await testModePage.isVideoContainerVisible()).toBeFalsy();

});