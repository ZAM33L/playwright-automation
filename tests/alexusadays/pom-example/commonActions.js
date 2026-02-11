export class CommonActions {
    constructor(page){
        this.page = page
    }

    async navigate(url){
        await this.page.goto(url)
    }

    async clickElement(selector){
        await this.page.click(selector)
    }

    async fillElement(selector, text){
        await this.page.fill(selector, text)
    }

    async getTextOfElement(selector){
        return await this.page.textContent(selector)
    }

    async isCheckedElement(selector){
        return await this.page.isChecked(selector)
    }
}
