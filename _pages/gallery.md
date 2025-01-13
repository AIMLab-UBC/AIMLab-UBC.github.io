---
title: "AIM Lab | Gallery"
layout: default-updated-styles
excerpt: "AIM Lab | Gallery"
sitemap: false
permalink: /gallery/
---
<div class="gallery-hero-container">
</div>

<h4 class="publications-title">Gallery</h4>
<div class="gallery">
  {% for image in site.static_files %}
    {% if image.path contains '/img/gallery_pics/' %}
      <div class="gallery-item">
        <img src="{{ image.path }}" alt="Gallery Image">
      </div>
    {% endif %}
  {% endfor %}
</div>

<div style="padding-bottom: 36px;"></div>




