const {test, expect} = require('@playwright/test')
test('Dog API should return a random dog image' , async ({request}) => {
    const response = await request.get('https://dog.ceo/api/breeds/image/random')
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty('message')
    expect(responseBody.message).toMatch(/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/)
})