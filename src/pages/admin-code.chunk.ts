import { BasePage } from './base.page';

export class AdminCodeChunk extends BasePage {
    private readonly adminCodeInput = this.page.locator('input#integrityadvocate_txtAdminBypassCode');
    private readonly submitButton = this.page.locator('input#integrityadvocate_btnSubmitAdminBypassCode');
    private readonly cancelButton = this.page.locator('input#integrityadvocate_btnCancelAdminBypassCode');

    async verifyAdminChunkElements(){
        this.logger.info('Verifying admin chunk elements');
        return await this.adminCodeInput.isVisible() 
            && await this.submitButton.isVisible() 
            && await this.cancelButton.isVisible();
    }

    async enterAdminCode(adminCode: string){
        this.logger.info(`Entering admin code ${adminCode}`);
        await this.adminCodeInput.fill(adminCode);
        await this.submitButton.click();
    }
}
