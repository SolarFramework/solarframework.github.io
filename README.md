# SolAR doc README 

## Environment setup 

This documentation has been written for ubuntu 16.04

There is a dependency with graphviz tool:
```
$ sudo apt-get install graphviz
```

Here are the commands you need to issue to install RVM with Ruby 2.X.
```
$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
$ curl -sSL https://get.rvm.io | bash -s stable --ruby
$ source ~/.rvm/scripts/rvm
$ rvm install 2.4.0
$ bash --login
$ rvm --default use 2.4.0
$ gem install bundler
```

For the following, please be sure to be placed in the documentation directory, moreover on the git branch you want.
Then we need to create a `bundle` (similar to python's `virtualenv`).
To do so, you need to issue the following commands:
```
$ bundle config --local github.https true
$ bundle --path=.bundle/gems --binstubs=.bundle/.bin
```

The link might become obsolete, so the related install guide can be found at
https://rvm.io/rvm/install.

## Generate the HTML website

```
$ bundle exec jekyll build
```

To ease the development process, you can also use the automatic document rebuild
upon modification:
```
$ bundle exec jekyll serve --watch
```
Website can then be seen at URL http://localhost:4000

## Generate the documentation in HTML (single file) 

```
$ bundle exec asciidoctor index.adoc
```

## Generate the documentation in PDF 

```
$ bundle exec asciidoctor -r asciidoctor-diagram -r asciidoctor-pdf -a allow-uri-read -b pdf CONTENT_FILE.adoc
```

## Generate the documentation as slides 

```
$ git clone -b 3.3.0 --depth 1 https://github.com/hakimel/reveal.js.git
$ bundle exec asciidoctor-revealjs CONTENT_FILE.adoc
```
Where `CONTENT_FILE.adoc` is the name of your slides in asciidoc format.

Below a quick example of asciidoc slide:

```
= My presentation title

== Slide 1

TODO

== Slide 2

* XXX
* YYY
* ZZZ

== Slide 3

[%step]
* this
* is
* revealed
* gradually
```

(Full doc: https://github.com/asciidoctor/asciidoctor-reveal.js/#fragments)

## Add a new doc part 

### Top level parts 
Top level parts are listed in the navigation bar (example: About, Use it, Contribute...)
If you want to create one, you have to :
* create the adoc page at the root of this project (It is important for SEO to keep the filename readable and separate words with "_" character if needed)
* link this page to the navigation bar:
    * edit _config.yml and (when working) _configuration.production.yml by adding a new entry in *collections*
    * the entry looks like 
    ```
    filename:
          output: true
          permalink: /filename/:path/
          title: My title
          weight: x
    ```
    
    * ```output: true``` and ```permalink: /filename/:path/``` are needed in case this part will have submenus
    * ```weight: x``` is needed to sort the navbar items (growing sort)

Note: if the entry leads to an external website, add manually a new ```<li>``` tag in _includes/navbar.html (as it is made for *Jenkins* entry).

### Second level parts 
Second level parts are listed in a submenu placed under the navigation bar (example use_it). Second level parts are not mandatory. Second level parts are linked to only one top level part. This top level part is registered as a jekyll collection.

#### Create a directory
It will contain all the submenu items.
It has to be named ```_my_top_level_name```
It is important for SEO to keep ```my_top_level_name``` readable and to separate words with "_" character if needed. Lowercase is more a convenience.


#### Feed this directory with submenu items/pages
Jekyll will process ```_my_top_level_name``` directory and list all adoc files inside. It will use them as submenu items. Adoc filenames should not start with "_". They will be misinterpreted otherwise.
As a consequence you must create as many adoc file as you want submenu items.
Here is an example of an adoc file template with submenu:
```
= My submenu item 1
:showtitle:
:page-title: My submenu item 1
:page-category: my_top_level_name
:page-weight: 1
:page-description: My submenu item 1
:page-liquid:
:page-layout: default
```
Jekyll will use:
* :page-category to list all submenu items of a category
* :page-weight to order the submenu items in the list (growing order)
* :page-title to display the item on the submenu under the navbar
* :page-liquid to enable running liquid code inside the page (mandatory if you want that the submenu page displays the submenu too, see part "Link submenu to second level pages")


#### Declare a new jekyll collection in config file
Edit the _config.yml and/or _config.production.yml
Add the following code after ```collections:```:
```
my_top_level_name:
    output: true
    permalink: /:collection/:path/
```
Different options can be set here, see http://jekyllrb.com/docs/collections/#permalinks

Don't forget to remove the first "_" character

Note that you have to ask jekyll to re-build/re-serve the documentation to take in account the yml config changes.


#### Link submenu to the top level page
* Open the adoc file containing the top level page (example use_it.adoc). If it doesn't exist, create the adoc page at the root of this project (It is important for SEO to keep the filename readable and to separate words with "_" character if needed)
* On the yaml front matter, add the following attribute:
```
:page-category: my_top_level_name
:page-weight: 1 (to be updated just after your copy)
:page-liquid:
```
* The first part of the adoc file (excluding front matter) must be the following :
```
== submenuconfig

[none]
{% for collection in site.collections %}
  {% assign name = collection.label %}
  {% if name == page.categories[0] %}

      {% assign sorted_subparts = site[name] | sort:"weight" %}
      {% for subpart in sorted_subparts %}
        {% assign page_level = subpart.url | split:'/' %}

        {% if page_level.size == 3 %}
          {% assign subpart_url = subpart.url | remove_first:'/' %}
* {{ site.url }}{{ site.baseurl }}{{ subpart_url }}[{{ subpart.title }}]
        {% endif %}
      {% endfor %}
      {% break %}
 
  {% endif %}
{% endfor %}
```
It will tell jekyll to list all submenu items matching with the collection ```my_top_level_name``` and to display it (via CSS specific rules) just under the navigation bar. The items are sorted thanks to "weight" parameter.

#### Order of items in submenus
The items in submenu are ordered via the line ```{% assign sorted_subparts = site[name] | sort:"weight" %}``` in the above code. Besides you have to fill in the *weight* information for each matching submenu page. To do that, just add a line ```:page-weight: x``` (example: ```:page-weight: 3```) in the YAML front matter, ideally just after ```:page-category:``` line to keep all informations about submenus display together. Items will be displayed on submenu in growing order. In md files, you can use the line ```weight: x``` instead.

#### Link submenu to second level pages
Well, now you have the top level page displaying the submenu. But clicking on an item of this submenu make it disappear. The reason is that it must be added it on the submenu pages.

Just copy and pasta all the ```== submenuconfig``` code from the above part.


### Third level part 
You can use the keyword ```:toc:``` in the yaml front matter to generate a third level title list.
Those titles will be displayed in a top left menu. Table of content (toc) will take H2 (```==```) and H3 (```===```) titles in the page to generate the list of titles. When clicking on a list item, the page scrolls to the matching item. Contrary to the second level titles, all the content is in the same page.


## Embed video

We use mp4 format, as you can find a sample on http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4
To embed a video in the page, you can use the following line:

```video::contribute/video_file.mp4[]```
or 
```video::http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4```

To link to a video, you can use the following line ```link:http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4[Test]```
 