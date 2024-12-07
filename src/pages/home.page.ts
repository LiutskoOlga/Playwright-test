import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { TestData } from '../data/test.data';

export class HomePage extends BasePage {
    // Locators
    private readonly continueButtonLocator = this.page.locator('input#integrityadvocate_btnContinue');
    private readonly readMoreLink = this.page.locator('a#integrityadvocate_privacypolicyreadmore');
    private readonly privacyPolicyTextLocator = this.page.locator('div#integrityadvocate_privacypolicy');

    async goto(): Promise<void> {
        this.logger.info(`Navigating to home page: ${TestData.urls.home}`);
        await this.page.goto(TestData.urls.home);
    }

    async clickContinue(): Promise<void> {
        this.logger.info('Clicking continue button');
       await this.continueButtonLocator.click();
    }

    async clickReadMore(): Promise<void> {
        this.logger.info('Clicking read more link');
        await this.readMoreLink.click();
    }

    async getPrivacyPolicyText(){
        this.logger.info('Getting privacy policy text');
        return this.privacyPolicyTextLocator.textContent();
    }
} 