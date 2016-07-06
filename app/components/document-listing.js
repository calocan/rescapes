import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    /***
     * When the scroll position of the document updates, we change the model and scene if
     * a new anchor is closest to the "top" of the screen.
     */
    didUpdateScrollPosition() {
      // TODO
    }
  }
});
