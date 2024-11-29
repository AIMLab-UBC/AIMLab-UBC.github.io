---
title: "AIM Lab | Projects"
layout: full-width
excerpt: "AIM Lab | Projects"
sitemap: false
permalink: /projects/
---


<div class="container-projects">
<h2>Research Highlights</h2>

{% assign number_printed = 0 %}
{% for project in site.data.project_list %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if project.highlight == 1 %}

{% if even_odd == 0 %}
<div class="project-row">
{% endif %}

<div class="project-item">
    <div>
        <pubtit class="project-title">{{ project.title }}</pubtit>
        <div class="project-subtitle">{{ project.subtitle }}</div>
    </div>
    <div>
        <img src="{{ site.url }}{{ site.baseurl }}/assets/project_pic/{{ project.image }}" class="project-image"/>
        <p class="project-text">{{ project.description }}</p>
    </div>
    <span class="project-btns">
        {% if project.link_pdf.show == 1 %}
        <a type="button" class="btn" href="{{ project.link_pdf.url }}">{{ project.link_pdf.display }}</a>
        {% endif %}
        {% if project.link_github.show == 1 %}
        <a type="button" class="btn" href="{{ project.link_github.url }}">{{ project.link_github.display }}</a>
        {% endif %}
        {% if project.link_demo.show == 1 %}
        <a type="button" class="btn" href="{{ project.link_demo.url }}">{{ project.link_demo.display }}</a>
        {% endif %}
    </span>
</div>


{% if even_odd == 1 %}
</div>
{% endif %}

{% assign number_printed = number_printed | plus: 1 %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
{% endif %}

<div class="project-item last-project-item">
    <span class="project-btns">
        <a type="button" class="btn" href="../team/alib" style="font-weight: normal; font-size: 32px;">📜...</a>
    </span>
</div>

</div>