import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /***
     * Set the full state of the application (e.g. from a cookie)
     * @param state
    */
    setState(state) {
      state=state;
    },

    /***
     * Registers discovered Documents (from an API, etc)
     * @param key
     */
    register(key) {
      key=key;
    },

    /***
     *
     * @param model
     * @param scene
     * @returns {*}
    */
    closestModelAndSceneDidChange(model, scene) {
      model=model;
      scene=scene;
      
    }
  }
});
