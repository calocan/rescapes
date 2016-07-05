import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | documents');
// The / URL should show documents from newest to oldest
let link = '/';

// We should have an index of available documents
test('should list available documents.', function (assert) {
  visit(link);
  andThen(function () {
    assert.equal(find('documents.document').length, 3, 'should see 3 documents');
  });
});

test('should link to the document.', function (assert) {
  visit(link);
  let key = 'amtrak_standard';
  let documentDOM = find(`documents.document:contains("${key}")`);
  documentDOM.click('a');
  andThen(function () {
    assert.equal(currentURL(), `/${key}`, 'should navigate to the document');
  });
});

test('should link to about page.', function (assert) {
  visit(link);
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact page.', function (assert) {
  visit(link);
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
