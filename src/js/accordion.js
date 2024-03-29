import pkutils from 'pk-utilities';
const component = '[data-component=pk-accordion-section]';
const header = '[data-role=pk-accordion-section-header]';
const trigger = '[data-role=pk-accordion-section-trigger]';

export default {
  init
};

function init () {
  apos.define('pk-accordion-section-widgets', {
    extend: 'apostrophe-widgets',
    construct: function (self, options) {
      self.play = function ($widget, data, options) {
        const section = $widget[0].querySelector(component);
        const currentTrigger = section.querySelector(trigger);
        const currentViewport = pkutils.helpers.closest(currentTrigger, header).nextElementSibling;
        currentTrigger.addEventListener('click', (event) => {
          toggleSection({
            trigger: currentTrigger,
            viewport: currentViewport
          });
        });

        function toggleSection (ui) {
          const isActive = ui.trigger.classList.contains(pkutils.classes.active);
          if (isActive) {
            return pkutils.state.close(ui);
          } else {
            return pkutils.state.open(ui);
          }
        }
      };
    }
  });
};
