const {test, expect} = require('@playwright/test')
const testData = require('../data/testData');
const {loginPage} = require('../Pages/loginPage');
const {productsPage} = require('../Pages/productsPage');
const {checkoutPage} = require('../Pages/checkoutPage');

test('Verify checkout validation in SauceDemo', async ({page}) => {
    const LoginPage = new loginPage(page)
    const ProductsPage = new productsPage(page)
    const CheckoutPage = new checkoutPage(page)

    //use the baseurl from the test data
    await page.goto(testData.baseUrl)

    //login
    await LoginPage.login(testData.username, testData.password)
    

    //add product to cart
    await ProductsPage.addFirstProductToCart()
    await ProductsPage.goToCart()

    //checkout
    await CheckoutPage.checkout()
    await CheckoutPage.checkoutwithoutDetails()

    //validate error message
    const ErrorMessage = await CheckoutPage.getErrorMessage()
    expect(ErrorMessage).toContain('Error: First Name is required')

});