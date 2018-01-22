# Install and build the project

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
