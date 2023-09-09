---
title: "AIM Lab | Team"
layout: gridlay
excerpt: "AIM Lab| Team members"
sitemap: false
permalink: /team/
---

<h2 id="project-header">Team Members</h2>

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}
{% if member.alumni == 0 %}
{% assign even_odd = number_printed | modulo: 2 %}
{% assign color = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
 {% if color == 0 %}
  <div class="row team-row">
  {% else %}
  <div class="row team-row" style="background-color: #fff4eb;">
  {% endif %}
{% endif %}

<div class="col-sm-6">
  <div>
      <a href="{{ member.page_name }}"><img src="{{ site.url }}{{ site.baseurl }}/assets/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" /></a>
      <a href="{{ member.page_name }}"><h4>{{ member.name }}</h4></a>
      {% if member.email != 0 %}
      <a href="{{ member.email }}"> <i class="far fa-envelope" style="color: #f15a29; font-size:24px;"></i></a>
      {% endif %}
      {% if member.google_scholar != 0 %}
      <a href="{{ member.google_scholar }}/"> <i class="ai ai-google-scholar ai-3x" style="color: #f15a29; font-size:24px;"></i></a>
      {% endif %}
      {% if member.website != 0 %}
      <a href="{{ member.website }}/"> <i class="fas fa-link" style="color: #f15a29; font-size:24px;"></i></a>
      {% endif %}
      {% if member.github != 0 %}
      <a href="{{ member.github }}/"> <i class="fab fa-github-alt" style="color: #f15a29; font-size:24px;"></i></a>
      {% endif %}
      {% if member.twitter != 0 %}
      <a href="{{ member.twitter }}/"> <i class="fa fa-twitter" style="color: #f15a29; font-size:24px;"></i></a>
      {% endif %}
      {% if member.linkedin != 0 %}
      <a href="{{ member.linkedin }}/"> <i class="fab fa-linkedin-in" style="color: #f15a29; font-size:24px;"></i></a>
      {% endif %}
      <br>
      <i>{{ member.info }}<br></i>
      <ul style="overflow: hidden">
    {% if member.number_educ == 1 %}
    <li> {{ member.education1 }} </li>
    {% endif %}
    
    {% if member.number_educ == 2 %}
    <li> {{ member.education1 }} </li>
    <li> {{ member.education2 }} </li>
    {% endif %}
    
    {% if member.number_educ == 3 %}
    <li> {{ member.education1 }} </li>
    <li> {{ member.education2 }} </li>
    <li> {{ member.education3 }} </li>
    {% endif %}
    
    {% if member.number_educ == 4 %}
    <li> {{ member.education1 }} </li>
    <li> {{ member.education2 }} </li>
    <li> {{ member.education3 }} </li>
    <li> {{ member.education4 }} </li>
    {% endif %}
    
    </ul>
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


## Alumni

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}
{% if member.alumni == 1 %}
{% assign has_link = 0 %}

{% assign even_odd = number_printed | modulo: 2 %}
{% assign color = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
{% if color == 0 %}
<div class="row team-row">
{% else %}
<div class="row team-row" style="background-color: #fff4eb;">
{% endif %}
{% endif %}

  <div class="col-sm-6">
<div>
  <a href="{{ member.page_name }}"><img src="{{ site.url }}{{ site.baseurl }}/assets/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" /></a>
  <a href="{{ member.page_name }}"><h4>{{ member.name }}</h4></a>
  {% if member.email != 0 %}
  <a href="{{ member.email }}"> <i class="far fa-envelope" style="color: #f15a29; font-size:24px;"></i></a>
  {% assign has_link = 1 %}
  {% endif %}
  {% if member.google_scholar != 0 %}
  <a href="{{ member.google_scholar }}/"> <i class="ai ai-google-scholar ai-3x" style="color: #f15a29; font-size:24px;"></i></a>
  {% assign has_link = 1 %}
  {% endif %}
  {% if member.website != 0 %}
  <a href="{{ member.website }}/"> <i class="fas fa-link" style="color: #f15a29; font-size:24px;"></i></a>
  {% assign has_link = 1 %}
  {% endif %}
  {% if member.github != 0 %}
  <a href="{{ member.github }}/"> <i class="fab fa-github-alt" style="color: #f15a29; font-size:24px;"></i></a>
  {% assign has_link = 1 %}
  {% endif %}
  {% if member.twitter != 0 %}
  <a href="{{ member.twitter }}/"> <i class="fa fa-twitter" style="color: #f15a29; font-size:24px;"></i></a>
  {% assign has_link = 1 %}
  {% endif %}
  {% if member.linkedin != 0 %}
  <a href="{{ member.linkedin }}/"> <i class="fab fa-linkedin-in" style="color: #f15a29; font-size:24px;"></i></a>
  {% assign has_link = 1 %}
  {% endif %}
  {% if has_link != 0 %}
  <br>
  {% endif %}
  <i>{{ member.info }}<br></i>
  <ul style="overflow: hidden">
  
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}
  
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}
  
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}
  
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}
  
  </ul>
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

<br />
