# AIM Lab blog

This site is based on Jekyll using [Poole](http://getpoole.com).

## Get started

- Install [jekyll](https://jekyllrb.com/docs/installation/)
- Clone this repo
```
mkdir aim_lab_website
cd aim_lab_website
git clone https://github.com/AIMLab-UBC/AIMLab-UBC.github.io.git
cd AIMLab-UBC.github.io.git
```
- Deploy the website locally
```
jekyll serve
```

### Biography in Team section

We allow our team member to add an individual biography page to include a short introduction about themslves. To add a biography page, please follow these steps:
1. `cd _pages`
2. `cp alib.md YOUR_FIRST_NAME_INITIAL_LAST_NAME.md`
3. change the name in `YOUR_FIRST_NAME_INITIAL_LAST_NAME.md` to your name
4. `cd _data`
5. open `team_members.yml`
6. under your team member data, add `page_name: YOUR_FIRST_NAME_INITIAL_LAST_NAME` and `desc: YOUR_DESC`
7. push your commits to `master` branch
8. go to `aimlab.ca` and add your avatar or your name in Team section. 

