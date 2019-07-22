module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Accordion Section',
  contextualOnly: true,
  beforeConstruct: function (self, options) {
    options.addFields = [
      {
        name: 'title',
        type: 'singleton',
        widgetType: 'apostrophe-rich-text',
        contextual: true
      },
      {
        name: 'content',
        type: 'area',
        contextual: true
      }
    ].concat(options.addFields || []);
  }
};
