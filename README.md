# AIM Lab blog

This site is based on Jekyll using [Poole](http://getpoole.com).

## Get started

- Install [Ruby and Bundler](https://jekyllrb.com/docs/installation/)
- Clone this repo
```
git clone https://github.com/AIMLab-UBC/AIMLab-UBC.github.io.git
cd AIMLab-UBC.github.io
```
- Install the pinned GitHub Pages dependencies and serve the website locally
```
bundle install
bundle exec jekyll serve
```

Use `bundle exec` so local builds use the same Jekyll and Sass versions as
GitHub Pages, even if a newer Jekyll is installed on your computer.

### Publishing and styles

The site uses GitHub Pages' existing **Deploy from a branch** setup. Commits to
`master`, including page edits made in GitHub's web interface, are built and
published automatically. No repository settings changes or custom deployment
workflow are needed.

The redesigned layouts and styles are compatible with that builder. Keep Sass
imports in `css/main.scss` and `_sass/` in the legacy `@import` format; GitHub
Pages' Ruby Sass compiler does not support `@use`, `@forward`, or `sass:*`
modules. The `github-pages` version in `Gemfile` matches the
[published Pages dependencies](https://pages.github.com/versions/).

To check a production build before pushing:

```
bundle exec jekyll build --safe
bundle exec ruby scripts/check-css.rb
```

After pushing, check the **pages build and deployment** run in the repository's
Actions tab. There should be only one publishing workflow. Adding another
workflow that deploys to Pages can let one build overwrite another.

### Biography in Team section

We allow our team members to add an individual biography page to include a short introduction about themselves. To add a biography page, please follow these steps:
1. `cd _pages`
2. `cp alib.md YOUR_FIRST_NAME_INITIAL_LAST_NAME.md`
3. change the name in `YOUR_FIRST_NAME_INITIAL_LAST_NAME.md` to your name
4. `cd _data`
5. open `team_members.yml`
6. under your team member data, add `page_name: YOUR_FIRST_NAME_INITIAL_LAST_NAME` and `desc: YOUR_DESC`
7. push your commits to `master` branch
8. go to `aimlab.ca` and click your avatar or your name in the Team section. 

