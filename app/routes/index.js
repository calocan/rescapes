import Ember from 'ember';

/***
 * The exposed models are the available Document instances
 */
export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('document');
  }
});
