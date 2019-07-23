import accordion from './accordion';

const PKACCORDION = {};
PKACCORDION.accordion = accordion;

if (!window.namespace) {
  window.PKACCORDION = PKACCORDION;
}

Object.keys(PKACCORDION).forEach((key) => {
  if (PKACCORDION[key].hasOwnProperty('init')) {
    PKACCORDION[key].init();
  }
});
