import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

/***
 * A scene of a 3D Model. Scenes are specific camera view with certain 3D components visible or hidden.
 * A scene corresponds with a scene in a 3D Model in Sketchup
 */
export default Model.extend({
  // The consistent underscore separated name of the scene
  key: attr(),
  // The anchor defined in the document that corresponds to the scene.
  // When the user is closest in text position to this anchor, the scene shows
  anchorId: attr()
});
