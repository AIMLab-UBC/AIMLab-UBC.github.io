---
title: "AIM Lab | Ali Bashashati"
layout: default
excerpt: "AIM Lab | Ali Bashashati"
sitemap: true
permalink: /about/alib
team_member_name: Ali Bashashati
---

<div style="display:flex; flex-direction: row-reverse; padding-bottom: 50px; margin: 25px;">
    <div class="twitter-container" style="margin: 0 25px;">
        <a class="twitter-timeline" data-width="350" data-theme="light" href="https://twitter.com/ABashashati?ref_src=twsrc%5Etfw">Tweets by ABashashati</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
    <div>
        {% for member in site.data.team_members %}
        {% if member.name == page.team_member_name %}
        <div style="border: 1px solid #cfd9de; padding: 25px; border-radius: 13px;">
            <div>
                <img src="{{ site.url }}{{ site.baseurl }}/assets/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left; margin-right: 20px;" />
                <h3>{{member.name}}</h3>
                {% if member.email != 0 %}
                <a href="{{ member.email }}"> <i class="far fa-envelope icon"></i></a>
                {% endif %}
                {% if member.google_scholar != 0 %}
                <a href="{{ member.google_scholar }}/"> <i class="ai ai-google-scholar ai-3x icon"></i></a>
                {% endif %}
                {% if member.website != 0 %}
                <a href="{{ member.website }}/"> <i class="fas fa-link icon"></i></a>
                {% endif %}
                {% if member.github != 0 %}
                <a href="{{ member.github }}/"> <i class="fab fa-github-alt icon"></i></a>
                {% endif %}
                {% if member.twitter != 0 %}
                <a href="{{ member.twitter }}/"> <i class="fa fa-twitter icon"></i></a>
                {% endif %}
                {% if member.linkedin != 0 %}
                <a href="{{ member.linkedin }}/"> <i class="fab fa-linkedin-in icon"></i></a>
                {% endif %}
                {% if member.resume != 0 %}
                <a href="{{ member.resume }}"> <i class="fa fa-book fa-fw icon"></i></a>
                {% endif %}
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
        </div>
        <div class="col-lg-12">
            {% assign firstname = member.name | split: ' ' | first %}
            {% assign lastname = member.name | split: ' ' | last %}
            {% for paper in site.data.publication_list %}
            {% assign authors = paper.authors | split: ',' %}
            {% for author in authors %}
            {% if author contains firstname %}
            {% if author contains lastname %}
            {% assign has_papers = true %}
            {% endif %}
            {% endif %}
            {% endfor %}
            {% endfor %}
            {% if has_papers == true %}
            <h4 style="font-size: 30px;">Papers</h4>
            {% for paper in site.data.publication_list %}
            {% assign authors = paper.authors | split: ',' %}
            {% for author in authors %}
            {% if author contains firstname %}
            {% if author contains lastname %}
            {% if paper.url == nil %}
            <p>{{ paper.title }}</p>
            {% else %}
            <p><a href="{{ paper.url }}" class="off">{{ paper.title }}</a></p>
            {% endif %}
            {% endif %}
            {% endif %}
            {% endfor %}
            {% endfor %}
            {% endif %}
        </div>
        {% endif %}
        {% endfor %}
    </div>
</div>

