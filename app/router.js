import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('documents', function() {
    this.route('show', {
      path: ':document_id'
    });
  });
  this.route('models', function() {
    this.route('show', {
      path: ':model_id'
    });
  });
});

export default Router;
