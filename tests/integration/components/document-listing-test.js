import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import Statuses from "../../../app/statuses";

moduleForComponent('document-listing', 'Integration | Component | document listing', {
  integration: true
});

const DOCUMENT_CONTENT = `<body class="c7">
  <a id="id.5ktmpvprnx88"></a>
  <p class="c6">
    <span class="c2 c8">Here&rsquo;s something you don&rsquo;t hear everyday: Let&rsquo;s start designing our public transit to the AMTRAK standard.</span>
  </p>
  <p class="c1">
    <span class="c2 c8"></span>
  </p>
  <p class="c6">
    <span class="c2">Before you retort with a quip about AMTRAK, I&rsquo;d ask that you contemplate the feeling of sitting </span>
    <spanl class="c2">in</span>
    <sup><a href="#cmnt1" id="cmnt_ref1">[a]</a></sup>
    <sup><a href="#cmnt2" id="cmnt_ref2">[b]</a></sup>
    <span class="c2">&nbsp;</span>
    <span class="c2">AMTRAK&rsquo;s</span>
    <span class="c2">&nbsp;plush seats, perhaps beside your traveling partner, maybe even across a table from your scenery-entranced children, or better still those pleasant journeys when you shelled out for a sleeping car or, failing that, you realize you&rsquo;re going to keep two seats to yourself for the whole trip. Now consider that as your </span>
    <span class="c0">ride</span>
    <span class="c2">&nbsp;is gliding smoothly and nearly silently down a railroad free of cross-traffic and ugly billboards and strip malls, you have the option of getting up at anytime and walking to the relief of a large bathroom or to a staffed caf&eacute; car for a coffee, beer, or snack. Such possibilities don&rsquo;t exist in a car, bus, or plane, and they aren&rsquo;t offered on other forms of urban railroads, namely metro (subway) or lightrail, or streetcar.</span>
  </p>
</body>
`

test('Should load document and render', function(assert) {
  // Return a promise to load the document content
  this.on('loadDocument', (val) => {
      return Ember.RSVP.resolve(DOCUMENT_CONTENT);
    }
  });

  let stubDocument = Ember.Object.create({
    id: '1GbrsFkL4hlMP9o-J1JLw4Qu08j6hEPde_ElJdanJX5U',
    key: 'amtrak_standard',
    // This should be filled in by the load
    content: null,
    author: 'Andy Likuski',
    date: 'June 2016',
    location: 'Oakland, CA',
    status: Statuses.INITIALIZED,
    title: 'The AMTRAK Standard',
    modelKeys: ['AMTRAK Superliner', 'AMTRAK Café Car']
  });
  this.set('documentObj', stubDocument);
  this.render(hbs`{{document-listing document=documentObj}}`);

  // TODO I want to test here that the document loads by checking the status
  // TODO I want to test that the text shows
  // TODO I want to test that scrolling triggers and action

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`{{document-listing document=documentObj}}`);

  return wait().then(() => {
    assert.equal(this.$().text().trim(), DOCUMENT_CONTENT);
  });
});
