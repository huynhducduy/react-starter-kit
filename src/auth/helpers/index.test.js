import * as helpers from '.';

it('set and get access token', () => {
  const some_string = 'some_string';
  helpers.setAccessToken(some_string);
  expect(helpers.getAccessToken()).toEqual(some_string);
});

it('set and get refresh token', () => {
  const some_string = 'some_string';
  helpers.setRefreshToken(some_string);
  expect(helpers.getRefreshToken()).toEqual(some_string);
});

it('set and get access token expires at', () => {
  const some_number = 123;
  helpers.setAccessTokenExpiresAt(some_number);
  expect(helpers.getAccessTokenExpiresAt()).toEqual(some_number);
});

it('clear authentication data', () => {
  const some_string = 'some_string';

  helpers.setAccessToken(some_string);
  helpers.setRefreshToken(some_string);
  helpers.setAccessTokenExpiresAt(some_string);

  helpers.clearAuth();

  expect(helpers.getAccessToken()).toEqual(null);
  expect(helpers.getRefreshToken()).toEqual(null);
  expect(helpers.getAccessTokenExpiresAt()).toEqual(0);
});

it('verify if token is expired or not', () => {
  helpers.setAccessTokenExpiresAt(Math.floor(new Date().getTime() / 1000));
  expect(helpers.tokenIsExpired()).toEqual(true);

  helpers.setAccessTokenExpiresAt(Math.floor(new Date().getTime() / 1000) + 1);
  expect(helpers.tokenIsExpired()).toEqual(false);
});

it('calculate time left until token expired', () => {
  helpers.setAccessTokenExpiresAt(Math.floor(new Date().getTime() / 1000));
  expect(helpers.tokenExpiresIn()).toBeLessThanOrEqual(0);

  helpers.setAccessTokenExpiresAt(
    Math.floor(new Date().getTime() / 1000) + 3601
  );
  expect(helpers.tokenExpiresIn()).toEqual(1);
});

it('verify if token is almost expired or not', () => {
  helpers.setAccessTokenExpiresAt(Math.floor(new Date().getTime() / 1000));
  expect(helpers.tokenIsAlmostExpired()).toEqual(true);

  helpers.setAccessTokenExpiresAt(
    Math.floor(new Date().getTime() / 1000) + 3600 + 1
  );
  expect(helpers.tokenIsAlmostExpired()).toEqual(true);

  helpers.setAccessTokenExpiresAt(
    Math.floor(new Date().getTime() / 1000) + 3600 * 2 + 1
  );
  expect(helpers.tokenIsAlmostExpired()).toEqual(false);
});

it('verify if authenicated or not', () => {
  const some_string = 'some_string';

  helpers.clearAuth();
  expect(helpers.isAuthenticated()).toEqual(false);

  helpers.setAccessToken(some_string);
  expect(helpers.isAuthenticated()).toEqual(false);

  helpers.setAccessTokenExpiresAt(Math.floor(new Date().getTime() / 1000) + 1);
  expect(helpers.isAuthenticated()).toEqual(true);
});
