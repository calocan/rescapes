import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

/***
 * Represents a Document stored on Google Drive or similar that has references to 3D models
 * stored in the Sketchup 3d Warehouse or similar.
 */
export default Model.extend({
  // The id to fetch the document from Google Drive or similar
  documentId: attr(),
  // The consistent underscore separated name of the document used for the article url
  key: attr(),
  // The content of the document. This will be raw HTML once loaded
  content: attr(),
  // The load status of the document
  status: attr(),
  // The author of the document
  author: attr(),
  // The date of the document's publication
  date: attr(),
  // The geographical location of the author when publishing
  location: attr(),
  // The title of the document
  title: attr(),
  // The 3d Models of the document
  model3ds: hasMany('model3ds'),

  /***
   * Method to generate the URL of the document. Currently hardcoded to Google Docs
   * @param id
  */
  baseUrl: id => (`https://docs.google.com/document/d/${id}/pub`)
});
