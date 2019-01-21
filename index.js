module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Accordion',
  beforeConstruct: (self, options) => {
    let richText;
    if (options.richText) {
      richText = options.richText;
    } else {
      richText = {
        toolbar: [
          'Link', 
          'Anchor', 
          'Unlink', 
          'Styles', 
          'Bold'],
        styles: [
          { 
            name: 'Paragraph (p)', 
            element: 'p' 
          }
        ]
      };
    }

    options.addFields = [
      {
        name: 'items',
        label: 'Items',
        type: 'array',
        titleField: 'title',
        required: true,
        schema: [
          {
            name: 'title',
            label: 'Title',
            type: 'string',
            required: true
          },
          {
            name: 'body',
            label: 'Body',
            type: 'singleton',
            widgetType: 'apostrophe-rich-text',
            options: richText
          }
        ]
      }
    ].concat(options.addFields || []);
  }
};
