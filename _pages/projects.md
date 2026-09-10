---
title: "AIM Lab | Research Highlights"
layout: default
excerpt: "Research in artificial intelligence, computational pathology and genomics from the AIM Lab at UBC."
sitemap: true
permalink: /projects/
---
<header class="page-heading"><p class="eyebrow">Our research</p><h1>Research Highlights</h1></header>
<div class="project-list">
  {% for project in site.data.project_list %}
    {% if project.highlight == 1 %}
      <article class="project-item">
        <div class="project-figure"><img src="{{ '/assets/project_pic/' | append: project.image | relative_url }}" alt="Research figure for {{ project.title | escape }}" loading="lazy"></div>
        <div class="project-content">
          <p class="project-subtitle">{{ project.subtitle | escape }}</p>
          <h2>{{ project.title | escape }}</h2>
          <p class="project-description">{{ project.description | escape }}</p>
          <div class="project-links">
            {% if project.link_pdf.show == 1 %}<a class="text-link" href="{{ project.link_pdf.url | strip | escape }}">{{ project.link_pdf.display }} <span aria-hidden="true">↗</span></a>{% endif %}
            {% if project.link_github.show == 1 %}<a class="text-link" href="{{ project.link_github.url | strip | escape }}">{{ project.link_github.display }} <span aria-hidden="true">↗</span></a>{% endif %}
            {% if project.link_demo.show == 1 %}<a class="text-link" href="{{ project.link_demo.url | strip | escape }}">{{ project.link_demo.display }} <span aria-hidden="true">↗</span></a>{% endif %}
          </div>
        </div>
      </article>
    {% endif %}
  {% endfor %}
</div>
<div class="section-end"><a class="button button-primary" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a></div>
