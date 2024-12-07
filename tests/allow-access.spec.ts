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

    test('Verify abiliy to try again', async ({ accessPage, context }) => {
        await context.grantPermissions(['camera', 'microphone']);
        //expect(await accessPage.isPhotoFocusContainerVisible()).toBeTruthy();
        await accessPage.clickMakePhoto();
        expect(await accessPage.isPhotoFocusContainerVisible()).toBeFalsy();
        expect(await accessPage.isTryAgainButtonVisible()).toBeTruthy();
        await accessPage.clickTryAgain();
        expect(await accessPage.isPhotoFocusContainerVisible()).toBeTruthy();
    });
});