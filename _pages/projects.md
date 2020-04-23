---
title: "AIM Lab | Projects"
layout: projectlay
excerpt: "AIM Lab | Projects"
sitemap: false
permalink: /projects/
---

## Projects

{% assign number_printed = 0 %}
{% for project in site.data.project_list %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if project.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-12 clearfix">
 <div class="well">
  <pubtit>{{ project.title }}</pubtit>
  <p></p>
  <img src="{{ site.url }}{{ site.baseurl }}/assets/project_pic/{{ project.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ project.description }}</p>
  <p><em>{{ project.authors }}</em></p>
  <span style="display: inline;">
  {% if project.link_pdf.show == 1 %}
  <a type="button" class="btn btn-aim" href="{{ project.link_pdf.url }}">{{ project.link_pdf.display }}</a>
  {% endif %}
  {% if project.link_github.show == 1 %}
  <a type="button" class="btn btn-aim" href="{{ project.link_github.url }}">{{ project.link_github.display }}</a>
  {% endif %}
  {% if project.link_demo.show == 1 %}
  <a type="button" class="btn btn-aim" href="{{ project.link_demo.url }}">{{ project.link_demo.display }}</a>
  {% endif %}
  </span>
  <p class="text-danger"><strong> {{ project.news1 }}</strong></p>
  <p> {{ project.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}