import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view document');

// Document uses /{document_key} for its URL
let key = 'amtrak_standard';
let link = `/${key}`;
test('visiting /view-document', function(assert) {
  visit(link);

  andThen(function() {
    assert.equal(currentURL(), key);
  });
});
