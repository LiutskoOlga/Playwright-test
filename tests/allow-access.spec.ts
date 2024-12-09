import { TestData } from "../src/data/test.data";
import { test, expect } from '../src/fixtures/test.fixture';

test.describe('Allow access to camera', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
        await homePage.clearCache();
        await homePage.waitForPageLoad();
        await homePage.clickContinue();
        await homePage.clickContinue();
    });

    test('Verify help video is visible', async ({ accessPage, context }) => {
        await context.grantPermissions(['camera', 'microphone']);
        await accessPage.clickHelp();
        expect(await accessPage.isHelpVideoVisible()).toBeTruthy();
        await accessPage.clickCloseVideo();
        expect(await accessPage.isHelpVideoVisible()).toBeFalsy();
    });

    test('Verify abiliy to try again', async ({ accessPage, context, adminCodeChunk }) => {
        await context.grantPermissions(['camera', 'microphone']);
        await accessPage.clickMakePhoto();
        await accessPage.clickContinue();
        await accessPage.clickMakePhoto();
        await accessPage.waitForTryAgainButtonVisible();
        expect(await accessPage.isTryAgainButtonVisible()).toBeTruthy();
        await accessPage.clickTryAgain();
        await accessPage.clickContinue();
        await accessPage.waitForTryAgainButtonVisible();
        await accessPage.clickEditPhoto();
        expect(await accessPage.isEditingPhotoButtonVisible()).toBeTruthy();
});

    
});