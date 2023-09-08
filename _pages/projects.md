---
title: "AIM Lab | Projects"
layout: projectlay
excerpt: "AIM Lab | Projects"
sitemap: false
permalink: /projects/
---

<h2 id="project-header">Projects</h2>

{% assign number_printed = 0 %}
{% for project in site.data.project_list %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if project.highlight == 1 %}

<div class="col-sm-12 clearfix" style="transition: 0.3s ease;">
    <div style="margin-top: 50px;">
        <pubtit class="project-title">{{ project.title }}</pubtit>
        <div class="hover-container" style="position: relative;">
            <div class="well" style="background-color: white; padding: 0; margin-bottom: 0px">
                <img src="{{ site.url }}{{ site.baseurl }}/assets/project_pic/{{ project.image }}" width="100%" style="margin:0;"/>
            </div>
            <div class="well">
                <p style="margin-top: 0px;">{{ project.description }}</p>
                <span style="display: flex; justify-content: center;">
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
            </div>
        </div>
    </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}