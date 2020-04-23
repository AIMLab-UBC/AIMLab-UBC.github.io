---
title: "AIM Lab | Mitchell Nursey"
layout: gridlay
excerpt: "AIM Lab | Mitchell Nursey"
sitemap: false
permalink: /team/mnursey
team_member_name: Mitchell Nursey
---

{% for member in site.data.team_members %}

{% if member.name == page.team_member_name %}

<div>
 <img src="{{ site.url }}{{ site.baseurl }}/assets/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
<h3>{{member.name}}</h3>

{% if member.email != 0 %}<a href="{{ member.email }}"> <i class="far fa-envelope" style="color:#FF330D; font-size:24px;"></i></a>{% endif %}{% if member.google_scholar != 0 %}<a href="{{ member.google_scholar }}/"> <i class="ai ai-google-scholar ai-3x" style="color:#FF330D; font-size:24px;"></i></a>{% endif %}{% if member.website != 0 %}<a href="{{ member.website }}/"> <i class="fas fa-link" style="color:#FF330D; font-size:24px;"></i></a>{% endif %}{% if member.github != 0 %}<a href="{{ member.github }}/"> <i class="fab fa-github-alt" style="color:#FF330D; font-size:24px;"></i></a>{% endif %}{% if member.twitter != 0 %}<a href="{{ member.twitter }}/"> <i class="fa fa-twitter" style="color:#FF330D; font-size:24px;"></i></a>{% endif %}{% if member.linkedin != 0 %}<a href="{{ member.linkedin }}/"> <i class="fab fa-linkedin-in" style="color:#FF330D; font-size:24px;"></i></a>{% endif %}{% if member.resume != 0 %}<a href="{{ member.resume }}"> <i class="fa fa-book fa-fw" style="color:#FF330D; font-size:24px;"></i></a>{% endif %}

<br/><i>{{ member.info }}<br/></i>

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
</div>

{% if member.desc != 0 %}
<br/>
{{member.desc}}
{% endif %}
{% endif %}

{% endfor %}
