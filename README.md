SimpScroll
=========

A very simple javascript scroll system. With this you can create your own scroll element with HTML+CSS and make it functional with SimpScroll. 

**Features**:

  - Support ie9+ / Firefox / Chrome / Opera
  - Actions with Mousewheel and Mouse click
  - Fully free custom style of scrollbar.

**Version**: 0.1.0

**Author**: Murillo Brandão(Askdoof)

**License**: Mit

How to use
-----------

Implement the SimpScroll script on your page:
```sh
<script src="simpscroll.min.js"></script>
```

Now you just need to link a scrollbar element with a content element with the simpScroll() function:
```sh
<script>
  simpScroll(Content, Scrollbar);
</script>
```
   - Content: the query selector of your content element (Eg: "#content")
   - Scrollbar: the query selector of your scrollbar element (Eg: "#scrollbar")

Structure
-----------
The elements need to have a structure like this:
```sh
<div id="page">
  <div id="content"></div>
  <div id="scrollbar"><div id="scroller"></div></div>
</div>
```
The scrollbar element **needs** to have the "#scroller" element inside it.


Demo
----
You can check a demo [here].

See the demo files on this git to understand better.

[here]:https://github.com/Askdoof/SimpScroll
