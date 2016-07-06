import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('models/models-of-document', 'Integration | Component | models/models of document', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{models/models-of-document}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#models/models-of-document}}
      template block text
    {{/models/models-of-document}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
