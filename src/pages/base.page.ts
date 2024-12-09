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
    async waitForTimeout(timeout: number): Promise<void> {
        this.logger.info(`Waiting for ${timeout} milliseconds`);
        await this.page.waitForTimeout(timeout);
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

    async getDialogText(){
        this.logger.info('Getting dialog text');
       return new Promise((resolve) => {
        this.page.once('dialog', async (dialog) => {
            const message = dialog.message(); 
            console.log(`Dialog message: ${message}`);
            await dialog.accept(); 
            resolve(message); 
        });
    });
    }
    async acceptDialog(){
        this.logger.info('Accepting dialog');
        await this.page.evaluate(() => {
            window.confirm = () => true; 
          });
    }

    async dialogAccept(){
        this.logger.info('Accepting dialog');
        this.page.on('dialog', async (dialog) => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept(); // Accept the dialog
          });
    }

} 