import { CommonActions } from './commonActions'

export default class LoginPage {
    constructor(page){
        this.actions = new CommonActions(page)
        this.userNameSelector = '#username'
        this.passwordSelector = '#password'
        this.submitBtn = 'button[type="submit"]'
    }

    async navigateToPage(){
        await this.actions.navigate("https://the-internet.herokuapp.com/login")
    }

    async login(uName,uPWord){
        await this.actions.fillElement(this.userNameSelector,uName)
        await this.actions.fillElement(this.passwordSelector,uPWord)
        await this.actions.clickElement(this.submitBtn)
    }
}
