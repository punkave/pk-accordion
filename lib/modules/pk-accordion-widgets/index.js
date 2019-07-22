module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Accordion',
  contextualOnly: true,
  beforeConstruct: function (self, options) {
    options.addFields = [
      {
        name: 'sections',
        type: 'area',
        contextual: true
      }
    ].concat(options.addFields || []);
  }
};
