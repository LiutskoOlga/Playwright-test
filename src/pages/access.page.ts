import { BasePage } from './base.page';

export class AccessPage extends BasePage {
 
    private readonly allowButton = this.page.locator('button:has-text("Allow")');
    private readonly blockButton = this.page.locator('button:has-text("Block")');
    private readonly helpButton = this.page.locator('input#integrityadvocate_btnHelp');
    private readonly helpVideo = this.page.locator('video#integrityadvocate_help_video');
    private readonly closeVideoButton = this.page.locator('div#integrityadvocate_help a');
    private readonly makePhotoButton = this.page.locator('input#integrityadvocate_btnSmContinue');
    private readonly continueButton = this.page.locator('input#integrityadvocate_btnContinue');
    private readonly tryAgainButton = this.page.locator('input#integrityadvocate_btnTryAgain');
    private readonly photoFocusContainer = this.page.locator('div#integrityadvocate_webcam');
    private readonly editPhotoButton = this.page.locator('input#integrityadvocate_btnMask');
    private readonly cancelEditingButton = this.page.locator('input#integrityadvocate_btnMaskCancel');


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
        await this.continueButton.click();
    }

    async clickContinue(){
        this.logger.info('Clicking continue button');
        await this.continueButton.click();
    }

    async clickOnContinueDialog(){
        this.logger.info('Clicking on continue dialog');
        await this.page.click('input#integrityadvocate_btnContinue', { force: true });
          
    }

    async isTryAgainButtonVisible(){
        this.logger.info('Checking if try again button is visible');
        return this.tryAgainButton.isVisible();
    }

    async clickTryAgain(){
        this.logger.info('Clicking try again button');
        await this.tryAgainButton.click();
    }

    async isPhotoFocusContainerVisible(){
        this.logger.info('Checking if photo focus container is visible');
        return await this.photoFocusContainer.isVisible();
    }

    async waitForTryAgainButtonVisible(){
        this.logger.info('Waiting for try again button to be visible');
        await this.tryAgainButton.waitFor({state: 'visible', timeout: 10000});
    }

    async clickEditPhoto(){
        this.logger.info('Clicking edit photo button');
        await this.editPhotoButton.click();
    }

    async isEditingPhotoButtonVisible(){
        this.logger.info('Checking if editing photo button is visible');
        return this.continueButton.isVisible()
        && this.cancelEditingButton.isVisible();
    }
} 
