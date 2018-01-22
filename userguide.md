# User guide of Asciidoc use in solAR

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


## Source code display

Source code snippets can display on a large part of the screen. To improve readability you can use both above options: minimize source code block height and/or add a ```show/hide``` button for source code block folding.

### Minimize block height

On a source block code like
```

.myFile.c
[source, c]
-----
// some comment
someSources() {}
-----
```

you just have to insert ```.minimizeHeight``` after ```[source```. 

This will create an asciidoc [role](http://asciidoctor.org/docs/user-manual/#role) named ```minimizeHeight``` and an HTML class with this name. In our css, we force the ```.minimizeHeight``` block snippet's height to 200px. A scrollbar will automatically be displayed if needed. 

The height is hardcoded in our CSS file and will be the same for all ```minimizeHeight``` source blocks. You can overwrite it if needed in an overwriting CSS.

Here we go:
```

.myFile.c
[source.minimizeHeight, c]
-----
// some comment
someSources() {}
-----
```

> Tips: don't forget the blank line and the '.' before myFile.c or your block will not be interpreted as source code block.

> Tips: for your convenience you can use the alternative ```role``` syntax. Example: ```[source, c, role="minimizeHeight"]```. But we recommend you to avoid this syntax because it's less expandable: we can use ```[source.minimizeHeight.myOtherRole, c]``` whereas ```[source, c, role="minimizeHeight,myOtherRole"]``` doesn't work (yet?)... and it's better to keep the same syntax everywhere in your doc.

### Source code folding

Lets use the same example as in previous chapter. If you want to add the ```show/hide``` button, add ```blockHide``` or ```blockShow```, depending of the init value you want for the block code.
```

.myFile.c
[source.blockHide, c]
-----
// some comment
someSources() {}
-----
```

This will create an asciidoc [role](http://asciidoctor.org/docs/user-manual/#role) named ```blockHide```  or ```blockShow``` and an HTML class with this name. 

Both ```blockHide``` and ```blockShow``` classes are listened to (clic event) by the js/block-folding.js file. The js code toggle the class blockHide or blockShow on clic and the CSS updates style depending on the current class.

This can be combined to ```minimizeHeight``` role with syntax ```[source.minimizeHeight.blockHide, c]```
http://asciidoctor.org/docs/user-manual/#callouts callout captions