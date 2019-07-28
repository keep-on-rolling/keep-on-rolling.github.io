---
layout: default
title: Latest Posts
lang: en
lang-ref: index
---

<div class="posts">
  {% assign related = site.posts | where:"lang", page.lang %}
  {% if related.size > 0 %}
    {% for post in related %}
      <article class="post">

        <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

        <div class="entry">
          {{ post.excerpt }}
        </div>

        <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">{{ site.data.translations.readMore[post.lang] }}</a>
      </article>
    {% endfor %}
  {% endif %}
</div>
