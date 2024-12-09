import { BasePage } from './base.page';

export class TestModePage extends BasePage {
    private readonly videoContainer = this.page.locator('video#video_anomalycam')
    private readonly endSessionButton = this.page.locator('input#btnEndSession')

    async isVideoContainerVisible(): Promise<boolean> {
        this.logger.info('Checking if video container is visible');
        return await this.videoContainer.isVisible();
    }

    async clickEndSession(): Promise<void> {
        this.logger.info('Clicking end session button');
        await this.endSessionButton.click();
    }

    async isEndSessionButtonVisible(): Promise<boolean> {
        this.logger.info('Checking if end session button is visible');
        return await this.endSessionButton.isVisible();
    }

}