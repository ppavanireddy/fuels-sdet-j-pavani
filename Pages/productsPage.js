class productsPage {
    constructor (page) {
        this.page = page;
        this.firstProduct = '.inventory_item'
        this.addToCartButton = '.btn_inventory'
        this.cartIcon = '.shopping_cart_link'
        }
        async addFirstProductToCart(){
            await this.page.click(this.addToCartButton)
        }
        async goToCart(){
            await this.page.click(this.cartIcon)
        }
}
module.exports = {productsPage}