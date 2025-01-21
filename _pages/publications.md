---
title: "AIM Lab | Publications"
layout: default-updated-styles
excerpt: "AIM Lab | Publications"
sitemap: false
permalink: /publications/
---
<div class="publications-hero-container">
</div>

<div class="front-effect-container">
    <img class="image" data-index="0" data-status="inactive" src="../img/front_effect/OvCa-Zoom.jpg" />
    <img class="image" data-index="1" data-status="inactive" src="../img/front_effect/OvCa-Zoom7.jpg" />
    <img class="image" data-index="2" data-status="inactive" src="../img/front_effect/OvCa-Zoom6.jpg" />
    <img class="image" data-index="3" data-status="inactive" src="../img/front_effect/OvCa-Zoom8.jpg" />
    <img class="image" data-index="4" data-status="inactive" src="../img/front_effect/OvCa-Zoom12.jpg" />
    <img class="image" data-index="5" data-status="inactive" src="../img/front_effect/OvCa-Zoom9.jpg" />
    <img class="image" data-index="6" data-status="inactive" src="../img/front_effect/OvCa-Zoom13.jpg" />
    <img class="image" data-index="7" data-status="inactive" src="../img/front_effect/OvCa-Zoom15.jpg" />
    <img class="image" data-index="8" data-status="inactive" src="../img/front_effect/OvCa-Zoom3.jpg" />
    <img class="image" data-index="9" data-status="inactive" src="../img/front_effect/OvCa-Zoom11.jpg" />
    <img class="image" data-index="10" data-status="inactive" src="../img/front_effect/OvCa-Zoom10.jpg" />
    <img class="image" data-index="11" data-status="inactive" src="../img/front_effect/OvCa-Zoom4.jpg" />
    <img class="image" data-index="12" data-status="inactive" src="../img/front_effect/OvCa-Zoom2.jpg" />
    <img class="image" data-index="13" data-status="inactive" src="../img/front_effect/OvCa-Zoom14.jpg" />
    <img class="image" data-index="14" data-status="inactive" src="../img/front_effect/OvCa-Zoom5.jpg" />
</div>

<div>
{% for member in site.data.team_members %}
{% if member.name == 'Ali Bashashati' %}
    <div class="col-lg-12" style="padding: 15px 0;">
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
        <div class="scrollbox">
            <ul class="styled-list">
            {% for paper in site.data.publication_list %}
                {% assign authors = paper.authors | split: ',' %}
                {% for author in authors %}
                    {% if author contains firstname %}
                        {% if author contains lastname %}
                            {% if paper.url == nil %}
                            <li><p>{{ paper.title }}</p></li>
                            {% else %}
                            <li><p><a href="{{ paper.url }}" class="off">{{ paper.title }}</a></p></li>
                            {% endif %}
                        {% endif %}
                    {% endif %}
                {% endfor %}
            {% endfor %}
            {% endif %}
            </ul>
        </div>
    </div>
{% endif %}
{% endfor %}
</div>