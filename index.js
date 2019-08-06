module.exports = {
  name: 'pk-accordion',
  label: 'Accordion',
  moogBundle: {
    modules: ['pk-accordion-section-widgets', 'pk-accordion-widgets'],
    directory: 'lib/modules'
  },
  afterConstruct: (self) => {
    if (self.options.styles) {
      self.pushAsset('stylesheet', 'always', {
        when: 'always'
      });
    }
    self.pushAsset('script', 'always', {
      when: 'always'
    });
  }
};
