# User guide of Asciidoc use in solAR

## Add a new doc part 

The structure of the documentation (chapters, subchapters) is described in ```_data/toc.yml```. In this file, ```horizontalnav``` represents the black navbar. It is composed of a chapters, described as a list of tuples (```title```, ```path```). If a chapter contains subchapters that you want to display in a submenu, then add a ```node``` attribute in your chapter tuple. This ```node``` attribute will reference a new part of toc.yml described after ```horizontalnav``` object.

When you have described the structure you want, then you have to create matching directories and files.
- for new chapter (without node)
    - create a directory at root of this project, named with the path you use in ```toc.yml```
    - inside this directory create an index.adoc with the content of your chapter
- for new chapter node
    - same as above
    - create as many directories as you have of subchapters in the node, with an index.adoc file with the content of each subchapter in each directory
- for a subchapter
    - create a directory named with the path you use in ```toc.yml``` inside the directory of the chapter you want this subchapter in
    - inside this directory create an index.adoc with the content of your chapter


## Add a table of content (TOC)

In each adoc page you can add the line ```:toc:``` in the meta data at top of the file. It will automatically generate a table of content from the title founded in the current page and the pages included from the current page.

*Tip: To enable the TOC, the adoc page must be a 'standalone' page (i.e. referenced in ```_data/toc.yml```) not an adoc page included from another adoc page*

*Tip: The table of content will take the first ```<h2>``` title of the page as title of the table of content part. So, in pages with toc activated, please remove the option ```:showtitle:```, and the ```<h1>``` title and replace it with an ```<h2>``` title.*

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