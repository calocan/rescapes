import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view model');

test('visiting /view-model', function(assert) {
  visit('/view-model');

  andThen(function() {
    assert.equal(currentURL(), '/view-model');
  });
});
