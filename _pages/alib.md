---
title: "AIM Lab | Ali Bashashati"
layout: default
excerpt: "Ali Bashashati, Director of AI Research at OVCARE and Associate Professor at UBC."
sitemap: true
permalink: /about/alib
team_member_name: Ali Bashashati
---
{% for member in site.data.team_members %}
{% if member.name == page.team_member_name %}
<header class="page-heading"><p class="eyebrow"><a href="{{ '/about/' | relative_url }}">Our team</a></p><h1>{{ member.name | escape }}</h1></header>
<div class="profile-layout">
  <div>
    <section class="profile-bio">
      <div class="profile-overview">
        <img class="member-photo" src="{{ '/assets/teampic/' | append: member.photo | relative_url }}" alt="{{ member.name | escape }}" width="180" height="225">
        <div><p class="member-role">{{ member.info | escape }}</p>{% include member-links.html member=member %}{% include member-education.html member=member %}</div>
      </div>
      {% if member.desc and member.desc != 0 %}<p class="prose">{{ member.desc | escape }}</p>{% endif %}
    </section>
    <section class="profile-papers" aria-labelledby="papers-title"><h2 id="papers-title">Papers</h2>{% include publication-list.html heading='h3' %}</section>
  </div>
  <aside class="profile-social" aria-label="Updates from Ali Bashashati">
    <a class="twitter-timeline" data-width="350" data-theme="light" href="https://twitter.com/ABashashati?ref_src=twsrc%5Etfw">Tweets by ABashashati</a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </aside>
</div>
{% endif %}
{% endfor %}
