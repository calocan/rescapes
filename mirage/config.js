import Statuses from './statuses';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

    this.get('/documents', function() {
      return {
        keys: ['amtrak_standard', 'the_new_rules_of_the_road'],
        baseUrl: id => (`https://docs.google.com/document/d/${id}/pub`),
        entries: {
          'amtrak_standard': {
            author: 'Andy Likuski',
            date: 'June 2016',
            location: 'Oakland, CA',
            status: Statuses.INITIALIZED,
            title: 'The AMTRAK Standard',
            id: '1GbrsFkL4hlMP9o-J1JLw4Qu08j6hEPde_ElJdanJX5U',
            modelKeys: ['AMTRAK Superliner', 'AMTRAK Café Car']
          },
          'the_new_rules_of_the_road': {
            author: 'Andy Likuski',
            date: 'September 2016',
            location: 'Oakland, CA',
            status: Statuses.INITIALIZED,
            title: 'The New Rules of the Road',
          }
        }
      };
    });
}
