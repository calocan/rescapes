import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /***
     * Set the full state of the application (e.g. from a cookie)
     * @param state
    */
    setState(state) {
      
    },

    /***
     * Registers discovered Documents (from an API, etc)
     * @param key
     */
    register(key) {
      
    },
    
    /***
     * 
     * @param model
     * @param scene
     * @returns {*}
    */
    closestModelAndSceneDidChange(model, scene) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});
