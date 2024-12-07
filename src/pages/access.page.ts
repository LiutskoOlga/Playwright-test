import { BasePage } from './base.page';

export class AccessPage extends BasePage {
 
    private readonly allowButton = this.page.locator('button:has-text("Allow")');
    private readonly blockButton = this.page.locator('button:has-text("Block")');
    private readonly helpButton = this.page.locator('input#integrityadvocate_btnHelp');
    private readonly helpVideo = this.page.locator('video#integrityadvocate_help_video');
    private readonly closeVideoButton = this.page.locator('div#integrityadvocate_help a');
    private readonly makePhotoButton = this.page.locator('input#integrityadvocate_btnSmContinue');
    private readonly tryAgainButton = this.page.locator('input#integrityadvocate_btnTryAgain');
    private readonly photoFocusContainer = this.page.locator('img#integrityadvocate_overlay_photoid');
    private readonly editPhotoButton = this.page.locator('input#integrityadvocate_btnMask');

    async clickHelp(){
        this.logger.info('Clicking help button');
        await this.helpButton.click();
    }

    async isHelpVideoVisible(){
        this.logger.info('Checking if help video is visible');
        return await this.helpVideo.isVisible();
    }

    async clickCloseVideo(){
        this.logger.info('Clicking close video button');
        await this.closeVideoButton.click();
    }

    async clickMakePhoto(){
        this.logger.info('Clicking make photo button');
        await this.photoFocusContainer.waitFor({state: 'visible', timeout: 10000});
        await this.makePhotoButton.click();
    }

    async isTryAgainButtonVisible(){
        this.logger.info('Checking if try again button is visible');
        return await this.tryAgainButton.isVisible();
    }

    async clickTryAgain(){
        this.logger.info('Clicking try again button');
        await this.tryAgainButton.click();
    }

    async isPhotoFocusContainerVisible(){
        this.logger.info('Checking if photo focus container is visible');
        return await this.photoFocusContainer.isVisible();
    }

   async clickBlock(){
    this.logger.info('Clicking block button');
    let dialogMessage = '';
    await this.page.waitForTimeout(3000);
        this.page.on('dialog', async (dialog) => {
          // Automatically accept dialogs
          await dialog.dismiss();
          
          // Or decline if needed
          // await dialog.dismiss();
        });
      
        // Override browser's permission dialog
        await this.page.evaluate(() => {
          // Mock camera access for testing
          navigator.mediaDevices.getUserMedia = () => 
            Promise.resolve(new MediaStream());
        });
   }
} 
