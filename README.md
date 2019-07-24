# pk-accordion

This bundle contains two widgets for a complete ApostropheCMS accordion widget.

- `pk-accordion-widgets`
- `pk-accordion-section-widgets`

`pk-accordion-widgets` is a widget with an area of `pk-accordion-section-widgets`.

The schema for `pk-accordion-section-widgets` contains a title `string` field as well as an area of widgets that you can configure yourself.

## How To Use
Declare the bundle in app.js
```js

bundles: [ 'pk-accordion' ],
modules: {
  'pk-accordion': {},
  'pk-accordion-widgets': {},
  'pk-accordion-section-widgets': {}
}
```

Pass in whatever widgets you want to use for each accordion section into the `options` of your `pk-accordion-widgets` singleton.
You can also pass in an optional `namespace` value that will scaffold out custom classes for each element in the widget markup for easy styles overrides.

```markup
{{ apos.singleton(context, 'name', 'pk-accordion', {
  widgets: {
    'apostrophe-rich-text': {},
    'my-custom-widget': {},
  },
  namespace: 'my-widget-class',
}) }}
```

For example, passing `my-widget-class` into `namespace` will create the following markup in the widget:

```markup
<div class="pk-accordion  my-widget-class" data-component="pk-accordion">
  <div class="pk-accordion__section  my-widget-class__section">
    <div class="pk-accordion__section-header  my-widget-class__section-header" data-role="pk-accordion-section-header">
      ...
```

There are several nunjucks blocks you can hook into to override the content of parts of the widget. Just extend `widgetBase.html` in your project level `widget.html` and add your content into those blocks. See `widgetBase.html` for more context on placement of these blocks within each widget.

```markup

{% extends 'widgetBase.html' %}

{% block sectionsArea %}
{% endblock %}

{% block sectionTitle %}
{% endblock %}

{% block sectionTrigger %}
{% endblock %}

{% block beforeSectionContent %}
{% endblock %}

{% block sectionContent %}
{% endblock %}

{% block afterSectionContent %}
{% endblock %}
```
