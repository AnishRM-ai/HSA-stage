import {Page, expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test.describe('Complete login test', () => {
    test('Login with valid credentials', async({page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.fillcredentials('ywho942@gmail.com', 'Gothicachyls3!');
        await expect(page).toHaveURL('/home',{
            timeout: 30000
        });
  });

    test('Login with valid email and invalid password.', async({page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.fillcredentials('ywho942@gmail.com', 'GOthindddds3!');
        await expect(login.invalidmsg).toBeVisible({timeout: 30000});
        
    });

    test('Login with empty email field.', async({page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.fillcredentials('', 'GothicBaddie3!');
        await expect(page.getByText('Required')).toBeVisible();
    });

    test('Password masking toogle', async({page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.password.fill('TypeOnegative-0');
        // initially masked
        await expect(login.password).toHaveAttribute('type', 'password');

        // After clicking
        await login.showpasswordbtn.click();

        await expect(login.password).toHaveAttribute('type', 'text');

    });

});
