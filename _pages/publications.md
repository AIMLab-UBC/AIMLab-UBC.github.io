---
title: "AIM Lab | Publications"
layout: default-updated-styles
excerpt: "AIM Lab | Publications"
sitemap: false
permalink: /publications/
---
<div class="publications-hero-container">
</div>

<div>
{% for member in site.data.team_members %}
{% if member.name == 'Ali Bashashati' %}
    <div class="col-lg-12">
    {% assign firstname = member.name | split: ' ' | first %}
    {% assign lastname = member.name | split: ' ' | last %}
    {% for paper in site.data.publication_list %}
        {% assign authors = paper.authors | split: ',' %}
        {% for author in authors %}
            {% if author contains firstname %}
                {% if author contains lastname %}
                    {% assign has_papers = true %}
                {% endif %}
            {% endif %}
        {% endfor %}
    {% endfor %}
    {% if has_papers == true %}
    <h4 class="publications-title">Publications</h4>
    {% for paper in site.data.publication_list %}
        {% assign authors = paper.authors | split: ',' %}
        {% for author in authors %}
            {% if author contains firstname %}
                {% if author contains lastname %}
                    {% if paper.url == nil %}
                    <p>{{ paper.title }}</p>
                    {% else %}
                    <p><a href="{{ paper.url }}" class="off">{{ paper.title }}</a></p>
                    {% endif %}
                {% endif %}
            {% endif %}
        {% endfor %}
    {% endfor %}
    {% endif %}
    </div>
{% endif %}
{% endfor %}
</div>