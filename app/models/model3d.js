import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // The id of the 3D used to fetch from the Sketch 3D Warehouse or similar
  id: attr(),
  // The consistent underscore-separated name of the 3D Model
  key: attr(),
  // The anchor defined in the document that corresponds to the model.
  // When the user is closest in text position to this anchor, the model shows
  // as well as the first or closest scene based on the scenes' anchors in the document
  anchorId: attr(),
  // The load status of the 3D Model
  status: attr(),
  // The scenes of the 3D Model
  scenes: hasMany('scenes')
});
