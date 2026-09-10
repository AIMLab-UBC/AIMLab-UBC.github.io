---
title: "AIM Lab | Gallery"
layout: default
excerpt: "Life at AIM Lab: lab meetings, gatherings and research events."
sitemap: true
permalink: /gallery/
---
<header class="gallery-intro">
  <div><p class="eyebrow">Life at AIM Lab</p><h1>Gallery</h1></div>
  <figure><img src="{{ '/img/team-patio.jpg' | relative_url }}" alt="The AIM Lab team gathered on the BRC patio in 2022" width="1800" height="1350"><figcaption>BRC Patio 2022</figcaption></figure>
</header>
<div class="gallery">
  {% for item in site.data.gallery_images %}
    <figure class="gallery-item">
      <img src="{{ item.image | relative_url }}" alt="{{ item.description | escape }}" loading="lazy" decoding="async">
      <figcaption>{{ item.description | escape }}</figcaption>
    </figure>
  {% endfor %}
</div>
