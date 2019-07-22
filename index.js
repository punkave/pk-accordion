module.exports = {
  name: 'pk-accordion',
  label: 'Accordion',
  moogBundle: {
    modules: ['pk-accordion-section-widgets', 'pk-accordion-widgets'],
    directory: 'lib/modules'
  },
  afterConstruct: function (self) {
    self.pushAsset('script', 'always', {
      when: 'always'
    });
    self.pushAsset('stylesheet', 'always', {
      when: 'always'
    });
  }
};
