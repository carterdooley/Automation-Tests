const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('file:///C:/Users/modzz/Documents/gitprojects/Labs/automation/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

test('Movie List Test', async () => {
    let input = await driver.findElement(By.name('i'))
    let button = await driver.findElement(By.name('b'))
    await input.sendKeys("Dune")
    await button.click()
    await driver.sleep(2000)
})

