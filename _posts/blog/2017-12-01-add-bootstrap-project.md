---
title: "Under Construction"
layout: post
date: 2017-12-17 22:48
image: /assets/images/blog/bootstrap.png
headerImage: false
tag:
- angular
- bootstrap
- javascript
category: blog
author: arul21
---

<div class="image-logo">
  <img class="image" src="{{site.url}}/{{site.images.bootstrap}}">
</div>

To add bootstrap 4 to your project, we will need to install the package with npm.

For this, we will go to the official bootstrap page and look for the command to install by npm.

When we have it, in the terminal we will write: {% highlight html%} npm install --save bootstrap {% endhighlight%}

Once finished we will go to the angular-cli.json file that is housed in the root of our Angular project and we will add the path of the bootstrap css file in node_modules. It will look like this:

{% highlight html%} "styles": ["../node_modules/bootstrap/dist/css/bootstrap.min.css", "styles.css"], {% endhighlight%}

This will add the own styles of Bootstrap in our, it will be enough to restart the angular server.

If later we want to add the JS library of Bootstrap we will do the same procedure, we will go to the angular-cli.json file and add the reference to the .js file:

{% highlight html%} "scripts": ["../node_modules/bootstrap/dist/js/bootstrap.min.js"], {% endhighlight%}

For the Bootstrap JS to work, it needs two more libraries, one is Jquery and the other is PopperJS.

We launch the following commands: {% highlight html%} npm install --save jquery npm install --save popper.js {% endhighlight%}

After this, we will go to the configuration file angular-cli.json and add the routes with the following result:

{% highlight html%} "scripts": ["../node_modules/popper.js/dist/popper.min.js", "../node_modules/jquery/dist/jquery.min.js", ".. /node_modules/bootstrap/dist/js/bootstrap.min.js "], {% endhighlight%}

With this, we will have added the CSS library and JS of Bootstrap.
