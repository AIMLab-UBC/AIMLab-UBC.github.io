---
title: "AIM Lab | Gallery"
layout: default
excerpt: "Life at AIM Lab: lab meetings, gatherings and research events."
sitemap: true
permalink: /gallery/
---
<header class="gallery-intro">
  <div><p class="eyebrow">Life at AIM Lab</p><h1>Gallery</h1></div>
  <figure><img src="{{ '/img/gallery_pics/Team-indian1.jpg' | relative_url }}" alt="The AIM Lab team standing together at Tandoori Flame in 2025" width="1428" height="1071"><figcaption>Lunch at Tandoori Flame 2025</figcaption></figure>
</header>
<div class="gallery">
  {% for item in site.data.gallery_images %}
    <figure class="gallery-item">
      <img src="{{ item.image | relative_url }}" alt="{{ item.description | escape }}" loading="lazy" decoding="async">
      <figcaption>{{ item.description | escape }}</figcaption>
    </figure>
  {% endfor %}
</div>
