import Ember from 'ember';

export default Ember.Route.extend({
    /***
     * Resolves the models of the parent route's Document
     * @returns {*}
     */
    model() {
        return this.modelFor('documents/show').get('model3ds');
    }
});
