import { browser, element, by } from 'protractor';

describe('NannyLog E2E Tests', function () {

  let expectedMsg = 'A note from Kristin and Dan...';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.id('parent_note')).getText()).toEqual(expectedMsg);
  });

});
