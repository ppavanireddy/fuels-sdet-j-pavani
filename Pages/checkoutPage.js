class checkoutPage{
    constructor(page){
        this.page = page;
        this.checkoutButton = page.locator('#checkout')
        this.FirstName = page.locator('#first-name')
        this.LastName = page.locator('#last-name')
        this.PostalCode = page.locator('#postal-code')
        this.ContinueButton = page.locator('#continue')
        this.ErrorMessage = page.locator("h3[data-test='error']")
    }
    async checkout(){
        await this.checkoutButton.click()
    }
    async checkoutwithoutDetails() {
        await this.ContinueButton.click()
    }
    async getErrorMessage() {
        return await this.ErrorMessage.textContent()
    }
}
module.exports = {checkoutPage}