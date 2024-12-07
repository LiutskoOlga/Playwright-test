import { BrowserContext, Page } from '@playwright/test';
import { logger } from '../utils/logger';

export abstract class BasePage {
    protected constructor(protected readonly page: Page, protected readonly context: BrowserContext) {}
    protected readonly logger = logger
    protected readonly getInstrustionTextLocator = this.page.locator('div#integrityadvocate_instruction');

    async waitForPageLoad(): Promise<void> {
        logger.info('Waiting for page to load');
        await this.page.waitForLoadState('networkidle');
    }
    async clearCache(): Promise<void> {
        this.logger.info('Clearing browser cache');
        const client = await this.page.context().newCDPSession(this.page);
        await client.send('Network.clearBrowserCache');
        await client.send('Network.clearBrowserCookies');
    }

    async getInstrustionText(){
        this.logger.info('Getting instruction text');
       return this.getInstrustionTextLocator.textContent();
    }

} 