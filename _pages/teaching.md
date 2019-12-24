---
title: "AIM Lab - Teaching"
layout: gridlay
excerpt: "AIM Lab: Teaching."
sitemap: false
permalink: /teaching/
---

# Teaching

### University of British Columbia. Courses

{% assign courses = site.data.courselist | where: "type", "course" %}
{% for course in courses %}

  <a href="{{ course.link.url }}">{{ course.link.display }} ({{course.term}}) - {{ course.title }} </a>

{% endfor %}

<br>
