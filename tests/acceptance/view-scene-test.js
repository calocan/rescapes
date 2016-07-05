import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view scene');

test('visiting /view-scene', function(assert) {
  visit('/view-scene');

  andThen(function() {
    assert.equal(currentURL(), '/view-scene');
  });
});
