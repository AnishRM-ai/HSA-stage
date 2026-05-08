import { Page, Locator, expect} from "@playwright/test";
import { goTo } from "../utils/goto";

export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly invalidmsg: Locator;
    readonly showpasswordbtn: Locator;

    constructor(page:Page){
        this.page = page;
        
        this.email = page.locator('#emailAddress');
        this.password = page.locator('#password');
        this.loginBtn = page.getByRole('button', {name:"Log In"});
        this.invalidmsg = page.getByText('Your Email or Password is invalid!');
        this.showpasswordbtn = page.locator('._passwordIcon_velef_1');

    };

    async goto(){
        await goTo(this.page, '/login');
    };

    async fillcredentials(email:string, password:string){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
    };


}