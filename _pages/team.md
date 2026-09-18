---
title: "AIM Lab | About"
layout: default
excerpt: "Meet the researchers, engineers and healthcare professionals at the UBC Artificial Intelligence in Medicine Lab."
sitemap: true
permalink: /about/
---
<header class="page-heading"><p class="eyebrow">About AIM Lab</p><h1>Our Team</h1></header>
<section class="content-section" aria-labelledby="members-title">
  <h2 id="members-title">Lab members</h2>
  <div class="team-grid team-grid-current">
    {% for member in site.data.team_members %}
      {% if member.alumni == 0 %}{% include member-card.html member=member %}{% endif %}
    {% endfor %}
  </div>
</section>
<section class="content-section" aria-labelledby="alumni-title">
  <h2 id="alumni-title">Alumni</h2>
  <div class="team-grid">
    {% for member in site.data.team_members %}
      {% if member.alumni == 1 %}{% include member-card.html member=member %}{% endif %}
    {% endfor %}
  </div>
</section>
