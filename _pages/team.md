---
title: "AIM Lab - Team"
layout: gridlay
excerpt: "AIM Lab: Team members"
sitemap: false
permalink: /team/
---

# Group Members

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4> 
  {% if member.email != 0 %}
  <a href="{{ member.email }}"> <i class="far fa-envelope" style="color:#158CBA; font-size:24px;"></i></a>
  {% endif %}
  {% if member.google_scholar != 0 %}
  <a href="{{ member.google_scholar }}/"> <i class="ai ai-google-scholar ai-3x" style="color:#158CBA; font-size:24px;"></i></a>
  {% endif %}
  {% if member.website != 0 %}
  <a href="{{ member.website }}/"> <i class="fas fa-link" style="color:#158CBA; font-size:24px;"></i></a>
  {% endif %}
  {% if member.github != 0 %}
  <a href="{{ member.github }}/"> <i class="fab fa-github-alt" style="color:#158CBA; font-size:24px;"></i></a>
  {% endif %}
  {% if member.twitter != 0 %}
  <a href="{{ member.twitter }}/"> <i class="fa fa-twitter" style="color:#158CBA; font-size:24px;"></i></a>
  {% endif %}
  {% if member.linkedin != 0 %}
  <a href="{{ member.linkedin }}/"> <i class="fab fa-linkedin-in" style="color:#158CBA; font-size:24px;"></i></a>
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

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% comment %}
## Visitors

<table align="center" class="table table-condensed">
<tr>
    <td>Kiran Garimella (University of Oxford) 2018</td>
</tr>
</table>
{% endcomment %}


## Alumni
<table align="center" class="table table-condensed">
<tr>
    <th>Undergraduate Students</th>
</tr>
  <tr><td>Christopher Halim, Summer Student (Summer 2019) supervised by Ali Bashashati</td></tr>
  <tr><td>Jason Peng, Research Intern (Summer 2019) supervised by Ali Bashashati</td></tr>
  <tr><td>Sina Zareian, Co-op Student (Spring & Summer 2019) supervised by Ali Bashashati</td></tr>
</table>

<br />
