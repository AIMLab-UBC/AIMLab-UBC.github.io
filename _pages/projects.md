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
  <img src="{{ site.url }}{{ site.baseurl }}/assets/project_pic/{{ project.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ project.description }}</p>
  <p><em>{{ project.authors }}</em></p>
  <p><strong><a href="{{ project.link.url }}">{{ project.link.display }}</a></strong></p>
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