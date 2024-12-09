import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/home.page';
import { AccessPage } from '../pages/access.page';
import { AdminCodeChunk } from '../pages/admin-code.chunk';
import { TestModePage } from '../pages/test-mode.page';

type Pages = {
    homePage: HomePage;
    accessPage: AccessPage;
    adminCodeChunk: AdminCodeChunk;
    testModePage: TestModePage;
};

export { expect };
export const test = base.extend<Pages>({
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context));
    },
    accessPage: async ({ page, context }, use) => {
        await use(new AccessPage(page, context));
    },
    adminCodeChunk: async ({ page, context }, use) => {
        await use(new AdminCodeChunk(page, context));
    },
    testModePage: async ({ page, context }, use) => {
        await use(new TestModePage(page, context));
    }
}); 
