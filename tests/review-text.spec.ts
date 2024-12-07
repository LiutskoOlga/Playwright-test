import { TestData } from "../src/data/test.data";
import { test, expect } from '../src/fixtures/test.fixture';

test.describe('Review main screen text', () => {
  test('Read Instruction Text', async ({ homePage }) => {
    await homePage.goto();
    await homePage.waitForPageLoad();
    const instructionText = await homePage.getInstrustionText();
    expect(instructionText).toBe(TestData.texts.instructionText);
  });

  test('Read Privacy Policy', async ({ homePage }) => {
    await homePage.goto();
    await homePage.waitForPageLoad();
    await homePage.clickContinue();
    await homePage.clickReadMore();
    const privacyPolicyText = await homePage.getPrivacyPolicyText();
    expect(privacyPolicyText).toBe(TestData.texts.privacyPolicyText);
  });
});
