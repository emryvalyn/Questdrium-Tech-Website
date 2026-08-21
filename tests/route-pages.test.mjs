import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { configuredAdminEmail, verifyPassword } from '../src/lib/auth-core.ts';

const requiredRouteFiles = [
  'src/app/page.tsx',
  'src/app/projects/page.tsx',
  'src/app/technologies/page.tsx',
  'src/app/about/page.tsx',
  'src/app/careers/page.tsx',
  'src/app/contact/page.tsx',
];

for (const route of requiredRouteFiles) {
  test(`${route} exists`, () => {
    assert.equal(existsSync(route), true, `${route} is missing`);
  });
}

test('default admin credentials are available when env values are missing', () => {
  delete process.env.ADMIN_EMAIL;
  delete process.env.ADMIN_PASSWORD_HASH;
  delete process.env.SESSION_SECRET;

  assert.equal(configuredAdminEmail(), 'admin@questdrium.tech');
  assert.equal(verifyPassword('Questdrium2026!'), true);
});
