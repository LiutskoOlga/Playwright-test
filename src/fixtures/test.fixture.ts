import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/home.page';
import { AccessPage } from '../pages/access.page';

type Pages = {
    homePage: HomePage;
    accessPage: AccessPage;
};

export { expect };
export const test = base.extend<Pages>({
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context));
    },
    accessPage: async ({ page, context }, use) => {
        await use(new AccessPage(page, context));
    },
}); 