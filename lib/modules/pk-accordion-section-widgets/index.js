module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Accordion Section',
  beforeConstruct: function (self, options) {
    options.addFields = [
      {
        name: 'title',
        type: 'string',
        required: true
      },
      {
        name: 'content',
        type: 'area',
        contextual: true
      }
    ].concat(options.addFields || []);
  }
};
