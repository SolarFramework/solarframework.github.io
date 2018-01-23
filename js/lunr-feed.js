// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.ref('id')
});



index.add({
    title: "API",
    content: "API\n\nTable of Contents\n\nsubmenuconfig\nSolAR API\n\n\n\nsubmenuconfig\n\n\n\n\n\nSolAR API\n\n\n\n",
    id: 0
  });
  

index.add({
    title: "Community",
    content: "Community\n\nTODO\n\n\nPlease use slack to comunicate with the SolAR comunity\n\n\ncontribute SolAR Framework\n\n\n",
    id: 1
  });
  

index.add({
    title: "Contribute",
    content: "\nTable of Contents\n\nsubmenuconfig\nContribute\n\n\n\nsubmenuconfig\n\n\n\n\n\nContribute\n\n\nThere are several ways to contribute to SolAR framework.\n\n\nYou can :\n\n\n\n\ncontribute to Core framework, by defining API, architecture, framework tools &#8230;&#8203; this typically needs software engineering and architecture skills.\n\n\ncontribute to Components, by creating a new SolAR component, that can be used in a pose estimation solution&#8230;&#8203; this typically needs computer vision skills (and software skills).\n\n\n\n\nTo know more about it works, please refer to the how it works section.\n\n\nPlease feel free to contact us !\n\n\nPlease contribute !\n\n\n",
    id: 2
  });
  

index.add({
    title: "Discover",
    content: "\nTable of Contents\n\nsubmenuconfig\nDiscover Solar\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nlegal notice\n\n\n\n\n\n\nDiscover Solar\n\n\nSolAR is an open-source framework released under Apache license 2.0 making it possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n",
    id: 3
  });
  

index.add({
    title: null,
    content: "\n\n  \n    SolAR\n    SolAR\n    https://solarframework.github.io//\n    \n    Tue, 23 Jan 2018 14:26:40 +0000\n    Tue, 23 Jan 2018 14:26:40 +0000\n    Jekyll v3.5.1\n    \n  \n\n",
    id: 4
  });
  

index.add({
    title: "welcome",
    content: "SolAR, Solution for Augmented Reality\n\n\n\n\n\n\nyou will find information about SolAR in the following sections\n\n\n\n\nDiscover will give you general information about the SolAR Framework project\n\n\nUse it explains how to use SolAR framework quickly, and more in depth for experts or future contributors\n\n\nContribute will give information for all SolAR contributors, as SolAR is open-source\n\n\nAPI will be helpful for all SolAR developers : contributors and users.\n\n\n\n\nBy using SolAR, you can easily build augmented reality applications by testing different vision based localization solutions, create and share your own camera pose estimation pipeline with the community, and even develop efficient low-level processing elements to meet specific requirements.\n\n\nSolAR is a framework that improves interoperability for augmented reality applications and offers efficiency and robustness thanks to a modular software pipeline architecture.\n",
    id: 5
  });
  

index.add({
    title: "Knowledge",
    content: "Knowledge\n\nsubmenuconfig\n\n\n\n\n\nTODO\n\n\n\n",
    id: 6
  });
  

index.add({
    title: null,
    content: "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.ref('id')\n});\n\n{% assign count = 0 %}\n{% for page in site.pages %}\nindex.add({\n    title: {{page.title | jsonify}},\n    content: {{page.content | strip_html | jsonify}},\n    id: {{count}}\n  });\n  {% assign count = count | plus: 1 %}\n{% endfor %}\n\n\n{% for collection in site.collections %}\n  {% assign name = collection.label %}\n  {% assign sorted_pages = site[name] | sort:\"weight\" %}\n  {% for page in sorted_pages %}\n\n    index.add({\n      title: {{page.title | jsonify}},\n      content: {{page.content | strip_html | jsonify}},\n      id: {{count}}\n    });\n    {% assign count = count | plus: 1 %}\n\n  {% endfor %}\n{% endfor %}\n\n\nvar store = [];\n{% for page in site.pages %}\n  {% capture link %}{{ site.url }}{{ site.baseurl }}{{ page.url }}{% endcapture %}\nstore.push({\"title\": {{page.title | jsonify}},\n  \"link\": {{ link | jsonify }}\n});\n{% endfor %}\n\n{% for collection in site.collections %}\n  {% assign name = collection.label %}\n  {% assign sorted_pages = site[name] | sort:\"weight\" %}\n  {% for page in sorted_pages %}\n    {% capture link %}{{ site.url }}{{ site.baseurl }}{{ page.url }}{% endcapture %}\n    store.push({\"title\": {{page.title | jsonify}},\n      \"link\": {{ link | jsonify }}\n    });\n  {% endfor %}\n{% endfor %}\n\nfunction searchAndDisplay(query){\n  var resultdiv = $('#results');\n  var result = index.search(query);\n  // Show results\n  resultdiv.empty();\n  // Add status\n  resultdiv.prepend('Found '+result.length+' result(s)');\n  // Loop through, match, and add results\n  for (var item in result) {\n    var ref = result[item].ref;\n    var searchitem = ''+store[ref].title+'';\n    resultdiv.append(searchitem);\n  }\n}\n\n// builds search\n$(document).ready(function() {\n    var query = (decodeURI(location.search).split(\"q\" + '=')[1] || '').split('&')[0];\n    var formattedQuery = query.split(\"+\").join(\" \");\n    searchAndDisplay(formattedQuery);\n\n    $('input#search').on('keyup', function () {\n      var query = $(this).val();\n      searchAndDisplay(query);\n    });\n});\n",
    id: 7
  });
  

index.add({
    title: "Made with SolAR",
    content: ":page-layout: _auto\n= Made with SolAR\n:showtitle:\n:page-title: Made with SolAR\n:page-description: Made with SolAR\n:page-liquid:\n\nTo be done\n",
    id: 8
  });
  

index.add({
    title: "package &amp; download third parties",
    content: ":page-layout: _auto\n= package & download third parties\n\n\n== packaging\n\n. clone the following git repository:\ngit clone ssh://gitolite@forge.b-com.com/bcom-templates/builddefs/builddefs-scripts.git\n\n\nStarting from a fresh installed package (ie. result of a \"make install\"), run\nthe following perl script (under builddefs-scripts/xplatform)\n\n  $ bcom-packager.pl\n----\n  OPTIONS:\n      -s, --sourcedir                  => product root directory (where libs and includes are located)\n      -o, --osname                     => specify the operating system targeted by the product build. It is one of [win|mac|linux]. (defaults to the current OS environment)\n      -i, --includedir                 => relative path to include folder to export (defaults to the sourcedir provided with -s)\n      -l, --libdir                     => relative path to the library folder to export (defaults to the sourcedir provided with -s)\n      -r, --redistfile                 => relative path and filename of a redistribution file to use (such as redist.txt intel ipp's file). Only listed libraries in this file will be packaged\n      -d, --destinationdir             => package directory root destination (where the resulting packaging will be stored)\n      -p, --packagename                => package name\n      -v, --packageversion             => package version\n      -n, --ignore-mode                => forces the pkg-config generated file to ignore the mode when providing -L flags\n      -m, --mode [debug|release]       => specify the current product build mode. Binaries will be packaged in the appropriate [mode] folder\n      -a, --architecture [x86_64|i386] => specify the current product build architecture. Binaries will be packaged in the appropriate [architecture] folder\n      -w, --withsuffix suffix          => specify the suffix used by the thirdparty when building with mode mode\n      -u, --useOriginalPCfiles         => specify to search and use original pkgconfig files from the thirdparty, instead of generating them\n      -h, --help                       => display this help\n\n  EXAMPLES:\n      -s {path_to_root_sourcedir} --o win d {path_to_destination_dir} -p intel-tbb -v 2017.5 -l build/macos_intel64_clang_cc8.0.0_os10.11.6_release -m release -i include\n\n----\n\n. Use the artifactory packager scripts.\n\nUnder windows, use *builddefs-scripts/win/artiPackager.bat*\n\nUnder linux, use *builddefs-scripts/unixes/artiPackager.sh*\n\nUsage: run the .bat / .sh scripts where the packages are.\n\n== Using pkgm-bcom\n\n. Source: https://forge.b-com.com/www/bcom-templates//tools/pkgm-bcom-index/\n. You must have java installed on your machine: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html\n. You will need to create an artifactory API_KEY: http://repository.b-com.com/webapp/#/profile\n. Download pkgm-bcom tool here: http://repository.b-com.com/bcom-devtools-generic-local/pkgm-bcom/1.0.0/multi/pkgm-1.0.0-fat.jar\n. In order to download dependencies described in a packagedependencies.txt file, you will need to launch:\n\n    java -jar [path to]/pkgm-1.0.0-fat.jar install -a x86_64 -c release -m shared -f packagedependencies.txt -k [YOUR artifactory API KEY]\n\n. NB: this will work only if third parties are available on artifactory repository\n\nFor example packagedependencies.txt can include the two following lines:\n\n  opencv|3.2.0|opencv|thirdParties|http://repository.b-com.com/argo-generic\n  boost|1.64.0|boost|thirdParties|http://repository.b-com.com/argo-generic\n",
    id: 9
  });
  

index.add({
    title: "Search",
    content: "Search results : \n\n\n",
    id: 10
  });
  

index.add({
    title: "Tags",
    content: "Tags\n\n{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}\n\n\n{% assign tag_words = site_tags | split:',' | sort %}\n\n\n\n\n\n  {% for item in (0..site.tags.size) %}{% unless forloop.last %}\n    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}\n    \n      {{ this_word }}\n        ({{ site.tags[this_word].size }})\n      \n    \n  {% endunless %}{% endfor %}\n\n\n\n\n  {% for item in (0..site.tags.size) %}{% unless forloop.last %}\n    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}\n    {{ this_word }}\n    {% for post in site.tags[this_word] %}{% if post.title != null %}\n      \n        \n          {{ post.title }}\n        \n        \n          {{ post.date | date_to_string }}\n        \n      \n      \n    {% endif %}{% endfor %}\n  {% endunless %}{% endfor %}\n\n",
    id: 11
  });
  

index.add({
    title: "Use it",
    content: ":page-layout: _auto\n= Use it !\n:showtitle:\n:page-title: Use it\n:page-description: Use it\n:page-layout: default\n:page-category: use_it\n:page-liquid:\n:toc:\n\n\n== submenuconfig\n\n[none]\n{% for collection in site.collections %}\n  {% assign name = collection.label %}\n  {% if name == page.categories[0] %}\n\n\t  {% assign sorted_subparts = site[name] | sort:\"weight\" %}\n\t  {% for subpart in sorted_subparts %}\n\t    {% assign page_level = subpart.url | split:'/' %}\n\n\t\t{% if page_level.size == 3 %}\n\t\t\t{% assign subpart_url = subpart.url | remove_first:'/' %}\n* {{ site.url }}{{ site.baseurl }}{{ subpart_url }}[{{ subpart.title }}]\n\t\t{% endif %}\n\t  {% endfor %}\n\t  {% break %}\n  \n  {% endif %}\n{% endfor %}\n\n\n== Please contribute\n\n//include::_opensource.adoc[]\n\nSolAR framework is *looking for contributors* .\n\n== How to use\n\n\nYou can start using SolAR Framework very quickly:\n\n* download and execute the SolAR installer. It will install all you need to user SolAR Framework. link:use_it/downloads[*binaries*].  It will only take 15 minutes .\n\n* download and test solAR sample code : link:_use_it/samples[*sample codes*], compile it and run it. You will learn about SolARFramework use (code organization, API call) . It will take about 30 minutes.\n\n* implement your own program based on SolAR: to help you some tutorials will soon be available.\n link:use_it/tutorials[*tutorials*] and do some exercises. You will learn more about SolARFramework, so that you will be able to program a code based on SolAR framework by your own. \n //It will take more time, depending on which level of expertise you want. \n//this step is needed if you want to be able to contribute to SolAR.\n\n\n== who \n\nSOlAR framework can be used by :\n\n* pose estimation developers (using a C++ API) and \n* designers (using an editor), \n\nto create a good pose estimation solution.\n\n//It can be used  by the developer of AR application in their IDE.\n\n\n",
    id: 12
  });
  




  
  
  

  
  
  

    index.add({
      title: "what",
      content: "\nTable of Contents\n\nsubmenuconfig\nWhat\nWhy\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nlegal notice\n\n\n\n\n\n\nWhat\n\n\nSolAR is an open source framework dedicated to Augmented Reality (AR).\n\n\nIt offers a C++ SDK to easily and quickly develop and use custom solutions for camera pose estimation. It provides developers with a full chain from low-level vision components development to camera pose estimation pipelines and AR service development.\n\n\nThe SolAR framework is open-source and released under Apache license 2.0,\nthat lets you use it for research as well as for commercial purposes\naddressing various domains (smart factory, smart home, real estate,\nhealth, etc.).\n\n\nSolAR aims at stimulating the interaction between all actors of AR development for the benefit of end-users.\n\n\nA SolAR compatible Unity plugin is coming soon.\n\n\n\n\nWhy\n\n\nAR applications developers and end-users face a dilemma.\n\n\nOn one hand, major IT actors have released toolkits to develop AR applications. Nevertheless, they do not always meet the specific needs required by dedicated use cases or contextual environments (localization accuracy, lighting conditions, indoor/outdoor environments, tracking area range, dynamic scenes, etc.).\n\n\nNo solution fits all, and generally, these toolkits do not provide the level of tuning required to optimally adapt the vision based localization solution to the use case. Moreover, these closed solutions do not always ensure the confidentiality of data, and can store information concerning your environment (3D maps, key frames) or the augmentations (3D meshes, procedure scenarios) that could contain crucial intellectual property and private information.\n\n\nOn the other hand, open source vision libraries and SLAM implementations can generally be modified and configured to optimally meet AR applications requirements. However, many SLAM implementations generally developed by academic actors do not provide the license or the level of maturity required for the development of commercial solutions. Likewise, open source vision libraries offer a huge number of low-level functions but require a huge expertise and important development resources to obtain a usable camera pose estimation pipeline ready for commercial use.\n\n\nTo that end, SolAR offers an alternative to current commercial AR SDKs or existing open-source solutions, providing the benefits of both worlds – openness, ease of use, efficiency, adaptiveness. It aims at creating an ecosystem bringing researchers, developers, and end-users together to help the adoption of augmented reality.\n\n\n",
      id: 13
    });
    

  

    index.add({
      title: "how",
      content: "\nTable of Contents\n\nsubmenuconfig\nhow\nSolAR is open-source\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nlegal notice\n\n\n\n\n\n\nhow\n\n\n\n\n\n\n\nThe SolAR Framework addresses the full chain of AR applications development:\n\n\n\n\nComponents creation: SolAR defines a unique API for basic components required for camera pose estimation (features extractor, descriptors calculation, matching, Perspective N Points, homography, image filters, etc.). The SolAR community can develop new components compliant with the SolAR API, whether royalty free or under a commercial license. To ease the publication of your SolAR components, you can embed them in containers.\n\n\nPipeline implementation of camera pose estimation: You can download containers of components published by the SolAR community. SolAR provides developers with a pipeline mechanism allowing to connect SolAR components to define your own camera pose estimation solution (today through a SDK, soon thanks to a dedicated graphic editor). When your pipeline is validated, you can publish it for AR applications developers.\n\n\nAR service development: By controlling the SolAR SDK directly from Unity, load the camera pose estimation solution developed by the SolAR community that best fits your application requirements. Simply develop your AR application as with any AR SDK and roll it out. Since SolAR is based on a unified interface, you will be able to easily make your application evolve with the new solutions developed by the SolAR community.\n\n\n\n\nThe following video presents these 3 steps in more detail:\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n\n\nSolAR is open-source\n\n\nThis framework is open-source and released under Apache license 2.0,\nthat lets you use it for research as well as commercial purposes.\n\n\nNevertheless, only the SolAR framework is provided under Apache 2.0. The components you can use with the help of the framework to develop your own solution have their own license, which may not be compatible with Apache 2.0 or your own legal framework. Always check the compatibility of the components' licenses with themselves and with your own project. The SolAR community gives absolutely no warranty as to the legality of any solution that may result from your use of the framework, and cannot be held responsible for your use of the framework and of the components.\n\n\nAll components that are to be hosted on SolAR’s Github repositories must be released by their copyright holders under Apache 2.0, and can only make use of third-party software released under licenses compatible with Apache 2.0. Otherwise the components have to be externally hosted.\n\n\nb&lt;&gt;com and the SolAR community will try their best to review the components hosted on SolAR’s Github, but cannot warrant that all these components will respect the aforementioned conditions. Thus, you must always check the legal conditions of any component you intend to use.\n\n\n",
      id: 14
    });
    

  

    index.add({
      title: "who",
      content: "\nTable of Contents\n\nsubmenuconfig\nWho ?\nContact Mail\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nlegal notice\n\n\n\n\n\n\nWho ?\n\n\n\n\n\n\n\nThe SolAR initiative was launched by the b&lt;&gt;com Institute of Research and Technology, and is open to any contributors or users who share the SolAR goals.\n\n\nOur Contributors\n\n\n\n\n\n\n\n\n\n\nContact Mail\n\n\nFor any requests, please contact us.\n\n\n",
      id: 15
    });
    

  

    index.add({
      title: "when",
      content: "\nTable of Contents\n\nsubmenuconfig\nSolAR roadmap\nContact Mail\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nlegal notice\n\n\n\n\n\n\nSolAR roadmap\n\n\nThe SolAR source code is going to be released for Windows and Linux in early November.\nIt will include the interface definition required to build simple camera pose estimation pipelines (samples will be given for natural image markers and fiducial markers) as well as a Unity plugin allowing AR service developers to create their first AR applications using SolAR.\n\n\nThe following roadmap presents the features that will be implemented in a near future on SolAR core (pipeline, multi-threading, openVX compliance, Android and iOS support, etc.) as well as the new expected components allowing the creation of extended camera pose estimation pipelines (SLAM, visual/inertial, depth sensor support, etc.).\n\n\nThis roadmap is a projection, and may be subject to modifications. Please contact us if you have any questions.\n\n\n\n\n\n\n\nAll contributions are welcome to bring about this roadmap!\n\n\n\n\nContact Mail\n\n\nFor any requests, please contact us.\n\n\n",
      id: 16
    });
    

  

    index.add({
      title: "for whom",
      content: "\nTable of Contents\n\nsubmenuconfig\nFor whom is SolAR?\nSolAR applications\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nlegal notice\n\n\n\n\n\n\nFor whom is SolAR?\n\n\n\n\nFor component developers, allowing them to create specific and optimized basic vision processing elements and share them with the community, either for free or not.\n\n\nFor pose estimation developers, allowing them to create a pose estimation pipeline with the best computer vision components available.\n\n\nFor AR service developers, allowing them to benefit from the best pose estimation pipelines for their AR applications.\n\n\n\n\n\n\nSolAR applications\n\n\nSolAR does not aim at focalizing on dedicated use cases, but rather offers a generic framework addressing all kinds of applications where AR can bring an added value:\n\n\n\n\nHome\n\n\n\nGaming, enhanced video contents, IoT interaction interface, etc.\n\n\n\n\n\nHealth services\n\n\n\nSurgery aid, rehabilitation, training, education, etc.\n\n\n\n\n\nIndustry\n\n\n\nAssembly, quality control, maintenance, factory planning, logistics, training, monitoring, sales and marketing, etc.\n\n\n\n\n\nReal estate\n\n\n\nConsultation, design, companion on construction sites, supervision, training, sales and marketing, etc.\n\n\n\n\n\nAnd much more.\n\n\n\n\n",
      id: 17
    });
    

  

    index.add({
      title: "legal notice",
      content: "\nTable of Contents\n\nsubmenuconfig\nLegal notice\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nlegal notice\n\n\n\n\n\n\nLegal notice\n\n\nSince the SolAR project is managed and hosted by the b&lt;&gt;com Institute of Research and Technology, it falls under their legal notice.\n\n\n",
      id: 18
    });
    

  

  
  
  

  
  
  

    index.add({
      title: "Fiducialmarker",
      content: "\nThis tutorial will walk you through the implementation of one of the first solution to do augmented reality: The fiducial marker. The tutorial will take approximately one hour to complete.\n\n\nPrerequisites\n\n\n\nA PC configured with the correct tools.\n\n\n\n\n\nProject files\n\n\n\nDownload the files required by the project.\n\n\nUnarchive the files to your desktop.\n\n\n\n\n\nFiducial pipeline overview\n\nFiducial markers are generally white and black 2D patterns that are easily identifiable in an image and that holds all information required to easily compute the pose of a camera that records it. They could be squared, circular, or defined by a set of binary points, and they have been and are still widely used as they offer robustness to estimate the pose of a camera for augmented reality applications. Fiducial maker based approaches are mostly build according to the following steps:\n\n\n\n\nInitialization: to load the fiducial marker and start the camera.\n\n\nDetection: to find fiducial patterns in the current image captured by the camera.\n\n\nRecognition: to select among the fiducial patterns detected in the current image the one we are looking for.\n\n\nCamera pose estimation: to estimate the position and orientation of the camera in the coordinate system of the fiducial marker.\n\n\n\n\nIn this tutorial, we focus on the squared binary marker based on pattern defined by a squared grid of black and white cells surrounded by a black border:\n\n\n\n\n\n\n\nIn our implementation, the number of cells in height and width must be similar, and the thickness of the border must be equal to the thickness of a cell of the pattern.\nWe will now provide much more details concerning the different components and how we will connect them to implement a pose estimation pipeline based on squared fiducial markers.\nThe following schema presents the full pipeline we will implement next:\n\n\n\n\n\nFigure 1. camera pose estimation pipeline based on a fiducial marker.\n\n\nThis pipeline seems quite complex, but you will see that its implementation  will take few minutes thanks to the SolAR framework. Following, we detail each component used during the four steps of our pipeline:\n\n\n\n\nInitialization step\n\n\n\nMarker2DSquaredBinary: This component load a file describing the squared binary marker. It is a yaml file defining the real size of the marker (including borders) in the user-defined unit (centimeter, meter, &#8230;&#8203;) as well as the squared binary pattern where 1 defined a white cell and 0 a black cell. Following, an example of file defining a squared binary marker:\n\n\n%YAML:1.0\n---\nMarkerWidth: 0.157\nMarkerHeight: 0.157\nPattern: !!opencv-matrix\n   rows: 6\n   cols: 6\n   dt: u\n   data: [ 1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1 ]\n\n\n\nThe user-defined unit have to be common for your whole pipeline, including camera calibration or for the unit defining your augmentations. For example, when you set the size of a cell of a chessboard used for camera calibration, be careful that this size is defined according to the same user-defined unit used for defining the marker size.\n\n\n\nDescriptorExtractorSBPattern: A squared binary pattern is represented by a matrix of Boolean, and this component simply concatenate each row of this matrix to create a vector of boolean (DescriptorBuffer) representing the descriptor of the squared binary pattern.\n\n\nCamera:  Now that the squared binary marker is loaded, we can create a camera component. This component load a file describing the intrinsic parameters of the camera estimated thanks to a calibration tool (here, add a link to this calibration tutorial). Without a good calibration, the pose estimated by this pipeline will be certainly wrong. Then, the component will start the camera by giving its id, and you can now get the current image by calling the nextImage() method in a loop.\n\n\n\n\n\nDetection step\n\n\n\nImageConvertor: This component convert the color image captured by the camera to a grey image.\n\n\nImageFilter: This component applies a filter to the image. Here, we apply a binarize filter to obtain a black and white (or binary) image. This filter requires a threshold between 0 and 255 to select if a grey pixel becomes black or white. If you set this threshold to -1, the threshold is automatically computed according to the OTSU method based on a histogram computed on the whole image. This filter is the weak point of this pipeline as the binarize threshold should be locally computed by region of the current image to reduce the impact of local specular reflections on the marker or overexposure.\n\n\nContoursExtractor: This component extracts contours from the previous binary image. In order to focus on contours of interest, we can set the minimum edges of the contours to 4.\n\n\nContoursFilterBinaryMarker: This component first keeps only contours that are closed and approximates low curves defined by a set of successive edges by a single edge. Then, it selects only contours with four edges. You can set the minimum size of the contours you want to keep (size defined in pixels) in order to exclude small quad contours.\n\n\nPerspectiveControllers: This component warps and crops the binary image to extract a set of sub-images whose borders are defined by the contours kept by the previous filter.\n\n\n\n\n\nRecognition step\n\n\n\nSBPatternDescriptorExtractor:  First, this component checks if each sub-image that have been created by the previous component corresponds to a squared binary marker (by detecting if the borders of the sub-image are black). Then, if this is the case then it extracts its squared binary pattern descriptors (by detecting the color of each cell of the pattern, and this for the four rotations of the sub-image).\n\n\nDescriptorMatcherRadius: This component compares the squared binary pattern of the marker we are looking for with the squared binary patterns extracted from the current image. It does it by computing the hamming distance between the descriptors.\n\n\nSBPatternReindexer: By setting in parameter the size of teh pattern (number of cells defining the pattern, for example 5 if it is a 5x5 pattern), and by knowing the contours extracted from the current image that match with the marker we are looking for, this component creates two vector of points: the first one with the 4 corners of the marker (in cells, meaning in the pattern space), and the second one with the 4 corners of the marker extracted from the image (in pixel, meaning in image space).\n\n\n\n\n\nCamera pose estimation step\n\n\n\nImage2WorldMapper4Marker2D: This component computes the 3D position of the four corners of the marker in the 3D coordinate system of the real space. To do that, we have to set as parameters the size of the pattern (in cells) as well as the size of the marker (in world unit defined by the user) to apply a cross-multiplication to the 4 corners of the marker given by the previous SBPatternReindexer component.\n\n\nPoseEstimation: This component applies a P4P (Perspective 4-Points) algorithm on the four corners of the marker to estimate the pose of the camera. This algorithm consists in solving the non-linear system that defines the pose of the camera knowing the position of 4 points in the real space as well as their projections in the image plane of the camera.\n\n\n\n\n\n\n\n\nInstructions\n\nFirst, create a new QTcreator porject and follow the instructions available in the hello World tutorial (add link).\nAs you need both OpenCV and Tools modules, you will need to add both of them as well as third parties in the packagedependencies.txt file:\n\n\n\nSolARFramework|1.0.0|SolARFramework|bcomBuild|url_repo_artifactory\nSolARModuleOpenCV|1.0.0|SolARModuleOpenCV|bcomBuild|url_repo_artifactory\nSolARModuleTools|1.0.0|SolARModuleTools|bcomBuild|url_repo_artifactory\nxpcf|1.0.0|xpcf|thirdParties|http://repository.b-com.com/\nboost|1.64.0|boost|thirdParties|http://repository.b-com.com/\nopencv|3.2.0|opencv|thirdParties|http://repository.b-com.com/\nspdlog|1.0.0|spdlog|thirdParties|http://repository.b-com.com/\neigen|3.3.4|eigen|thirdParties|http://repository.b-com.com/amc-generic\n\n\n\nNow you can run QMake (click right of your project in QT creator, and click on run QMake). Every pathes for headers and library links are now set.\n\n\nmain.cpp\n\nFinally, replace the code of your main.cpp by the following one:\n\n\nmain.cpp\n\n#include &quot;SolARModuleManagerOpencv.h&quot;\n\nusing namespace std;\nusing namespace SolAR;\nnamespace xpcf  = org::bcom::xpcf;\n\nvoid run(int argc,char** argv){\n\n    // To redirect log to the console\n    LOG_ADD_LOG_TO_CONSOLE();\n\n    // ADD HERE: load your Opencv module\n\n    // ADD HERE: declarations and instantiation of components\n    // Example to declare and create a camera:\n    // SRef&lt;ISolARCamera&gt; camera = opencvModule.createComponent&lt;ISolARCamera&gt;(UUID::OPENCV::CAMERA);\n\n\n    // ADD HERE: declarations of data structures used to connect components\n    // Example to declare a SolARImage:\n    // SRef&lt;SolARImage&gt; inputImage;\n\n\n    // ADD HERE: Components configuration\n    // Generally through the method setParamerters of the components, except for the input components such as the camera or the marker that use specific methods to load configuration files\n\n\n    // ADD HERE: The pipeline loop\n\n}\n\nint printHelp(){\n        printf(&quot; usage :\\n&quot;);\n        printf(&quot; fiducialMarker.exe FiducialMarkerFilename CameraCalibrationFile VideoFile|cameraId configFile\\n\\n&quot;);\n        printf(&quot; Escape key to exit&quot;);\n        return 1;\n}\n\nint main(int argc, char *argv[])\n{\n    if(argc==3 || argc ==4){\n        run(argc,argv);\n        return 1;\n    }\n    else\n        return(printHelp());\n}\n\n\n\nAs you can see, the executable takes 4 arguments:\n\n\n\n\nThe url of a file describing the fiducial marker you are looking.\n\n\nThe url of the file defining the calibration of your camera (generate it with the calibration tool).\n\n\nThe Id of your camera.\n\n\nAnd finally, the configuration file defining where are the registery files and the dll pathes of the modules used in your sample (here we only need SolARModuleOpencv). An example of configuration file is available here.\n\n\n\n\nDownload and copy in your project folder the files describing the fiducial marker as well as the configuration file (here) and update this last with the good pathes. Similarly, copy the camera calibration file generate by the calibration tool in your project folder.\n\n\nNow, in your IDE, you can set the command line arguments of your executable with pathes relative to your executable folder:\n\n\n\n\nfiducialMarker.yml camera_calibration.yml 0 config.ini\n\n\n\n\nYour development environment is now ready, now you just need to fill the main.cpp.\n\n\n\nLoad your module(s)\n\nThis is very simple. Create a SolARModuleManagerOpencv, set as constructor argument the url of the configuration file of the Opencv module (pass as the fourth argument of your executable).\n\n\nmain.cpp\n\n// ADD HERE: load your Opencv module\nSolARModuleManagerOpencv opencvModule(argv[4]);\nif (!opencvModule.isLoaded()) // xpcf library load has failed\n{\n    LOG_ERROR(&quot;XPCF library load has failed&quot;)\n    return;\n}\n\n\n\nThat is done, now you can easily instantiate any components embedded in the module.\n\n\n\nComponents declaration and instanciation\n\nThe goal here is to declare and instanciate all components you will need for the camera pose estimation based on fiducial marker.\nIn the main.cpp, you can find in comment how to easily declare and instanciate a camera component:\n\n\ntitle\n\nSRef&lt;ISolARCamera&gt; camera = opencvModule.createComponent&lt;ISolARCamera&gt;(UUID::OPENCV::CAMERA);\n\n\n\nYou can do it now for all 12 components of the pipeline described in figure 1  (SolARDescriptorsExtractorSBPattern is used twice, but can be instantiated only once).\n\n\nmain.cpp\n\n// ADD HERE: declarations and instantiation of components\n// Example to declare and create a camera:\n// SRef&lt;ISolARCamera&gt; camera = opencvModule.createComponent(UUID::OPENCV::CAMERA);\nSRef&lt;ISolARCamera&gt; camera = opencvModule.createComponent&lt;ISolARCamera&gt;(UUID::OPENCV::CAMERA);\nSRef&lt;ISolARMarker2DSquaredBinary&gt; binaryMarker = opencvModule.createComponent&lt;ISolARMarker2DSquaredBinary&gt;(UUID::OPENCV::MARKER2D_SQUARED_BINARY);\nSRef&lt;ISolARImageViewer&gt; imageViewerFilteredContours = opencvModule.createComponent&lt;ISolARImageViewer&gt;(UUID::OPENCV::IMAGE_VIEWER);\nSRef&lt;ISolARImageFilter&gt; imageFilter = opencvModule.createComponent&lt;ISolARImageFilter&gt;(UUID::OPENCV::IMAGE_FILTER);\nSRef&lt;ISolARImageConvertor&gt; imageConvertor = opencvModule.createComponent&lt;ISolARImageConvertor&gt;(UUID::OPENCV::IMAGE_CONVERTOR);\nSRef&lt;ISolARContoursExtractor&gt; contoursExtractor = opencvModule.createComponent&lt;ISolARContoursExtractor&gt;(UUID::OPENCV::CONTOURS_EXTRACTOR);\nSRef&lt;ISolARContoursFilter&gt; contoursFilter = opencvModule.createComponent&lt;ISolARContoursFilter&gt;(UUID::OPENCV::CONTOURS_FILTER_BINARY_MARKER);\nSRef&lt;ISolARPerspectiveController&gt; perspectiveController = opencvModule.createComponent&lt;ISolARPerspectiveController&gt;(UUID::OPENCV::PERSPECTIVE_CONTROLLER);\nSRef&lt;ISolARDescriptorsExtractorSBPattern&gt; patternDescriptorExtractor = opencvModule.createComponent&lt;ISolARDescriptorsExtractorSBPattern&gt;(UUID::OPENCV::DESCRIPTORS_EXTRACTOR_SBPATTERN);\nSRef&lt;ISolARDescriptorMatcher&gt; patternMatcher = opencvModule.createComponent&lt;ISolARDescriptorMatcher&gt;(UUID::OPENCV::DESCRIPTOR_MATCHER_RADIUS);\nSRef&lt;ISolARSBPatternReIndexer&gt; patternReIndexer = opencvModule.createComponent&lt;ISolARSBPatternReIndexer&gt;(UUID::OPENCV::SBPATTERN_REINDEXER);\nSRef&lt;ISolARImage2WorldMapper&gt; img2worldMapper = opencvModule.createComponent&lt;ISolARImage2WorldMapper&gt;(UUID::OPENCV::IMAGE2WORLD_MAPPER);\nSRef&lt;ISolARPoseEstimation&gt; PnP = opencvModule.createComponent&lt;ISolARPoseEstimation&gt;(UUID::OPENCV::POSE_ESTIMATION);\n\n\n\n\nData structures declaration\n\nYour components will exchange data through data structures when running the pipeline. You need to declare all those shown in figure 1.\n\n\nmain.cpp\n\n// ADD HERE: declarations of data structures used to connect components\n// Example to declare a SolARImage:\n// SRef&lt;SolARImage&gt; inputImage;\n\nSRef&lt;SolARImage&gt; inputImage;\nSRef&lt;SolARImage&gt; greyImage  = xpcf::utils::make_shared&lt;SolARImage&gt;(SolARImage::ImageLayout::LAYOUT_GREY,\n                                 SolARImage::PixelOrder::INTERLEAVED,SolARImage::DataType::TYPE_8U); (1)\nSRef&lt;SolARImage&gt; binaryImage  = xpcf::utils::make_shared&lt;SolARImage&gt;(SolARImage::ImageLayout::LAYOUT_GREY,\n                                 SolARImage::PixelOrder::INTERLEAVED,SolARImage::DataType::TYPE_8U); (1)\n\nSRef&lt;SolARImage&gt; contoursImage;\nSRef&lt;SolARImage&gt; filteredContoursImage;\nstd::vector&lt;SRef&lt;SolARContour2Df&gt;&gt;              contours;\nstd::vector&lt;SRef&lt;SolARContour2Df&gt;&gt;              filtered_contours;\nstd::vector&lt;SRef&lt;SolARImage&gt;&gt;                   patches;\nstd::vector&lt;SRef&lt;SolARContour2Df&gt;&gt;              recognizedContours;\nSRef&lt;SolARDescriptorBuffer&gt;                     recognizedPatternsDescriptors;\nSRef&lt;SolARDescriptorBuffer&gt;                     markerPatternDescriptor;\nstd::vector&lt;SolARDescriptorMatch&gt;               patternMatches;\nstd::vector&lt;SRef&lt;SolARPoint2Df&gt;&gt;                pattern2DPoints;\nstd::vector&lt;SRef&lt;SolARPoint2Df&gt;&gt;                img2DPoints;\nstd::vector&lt;SRef&lt;SolARPoint3Df&gt;&gt;                pattern3DPoints;\nSolARPose                                       pose;\n\nSolARCamCalibration K;\nSolARCamDistortion camDist;\n\n\n\n\n\n1\nhere, the image converter and filter do not yet instantiate the output image, so you need to do it yourself.\n\n\n\n\n\nComponents configuration\n\nTo complete\n\n\nmain.cpp\n\n// ADD HERE: Components configuration\n// Generally through the method setParamerters of the components, except for the input components such as the camera or the marker that use specific methods to load configuration files\n\nbinaryMarker-&gt;loadMarker(argv[1]);\npatternDescriptorExtractor-&gt;extract(binaryMarker-&gt;getPattern(), markerPatternDescriptor);\n\nint minContourSize = 4;\ncontoursExtractor-&gt;setParameters(minContourSize);\n\nint minContourLength = 20;\ncontoursFilter-&gt;setParameters(minContourLength);\n\nSolARSizei CorrectedImagesSize = {640,480};\nperspectiveController-&gt;setParameters(CorrectedImagesSize);\n\nint patternSize = binaryMarker-&gt;getPattern()-&gt;getSize();\npatternDescriptorExtractor-&gt;setParameters(patternSize);\n\npatternReIndexer-&gt;setParameters(patternSize);\n\nSolARSizei sbPatternSize;\nsbPatternSize.width = patternSize;\nsbPatternSize.height = patternSize;\nimg2worldMapper-&gt;setParameters(sbPatternSize, binaryMarker-&gt;getSize());\n\n//Load camera parameters and start it\ncamera-&gt;loadCameraParameters(argv[2]);\n\nPnP-&gt;setCameraParameters(camera-&gt;getIntrinsicsParameters(), camera-&gt;getDistorsionParameters());\noverlay3D-&gt;setCameraParameters(camera-&gt;getIntrinsicsParameters(), camera-&gt;getDistorsionParameters());\n\nif (camera-&gt;start(atoi(argv[3])) != FrameworkReturnCode::_SUCCESS) // Camera\n{\n    LOG_ERROR (&quot;Camera with id {} does not exist&quot;, argv[3]);\n    return ;\n}\n\n\n\n\nThe pipeline loop\n\nTo complete\n\n\nmain.cpp\n\nbool process = true;\nwhile (process)\n{\n  if(camera-&gt;getNextImage(inputImage)==SolAR::FrameworkReturnCode::_ERROR_)\n       break;\n\n  // Convert Image from RGB to grey\n  imageConvertor-&gt;convert(inputImage, greyImage);\n\n  // Convert Image from grey to black and white\n  imageFilter-&gt;binarize(greyImage,binaryImage,-1,255);\n\n  // Extract contours from binary image\n  contoursExtractor-&gt;extract(binaryImage,contours);\n\n  // Filter 4 edges contours to find those candidate for marker contours\n  contoursFilter-&gt;filter(contours, filtered_contours);\n\n  // Create one warpped and cropped image by contour\n  perspectiveController-&gt;correct(binaryImage, filtered_contours, patches);\n\n  // test if this last image is really a squared binary marker, and if it is the case, extract its descriptor\n   if (patternDescriptorExtractor-&gt;extract(patches, filtered_contours, recognizedPatternsDescriptors, recognizedContours) != FrameworkReturnCode::_ERROR_)\n   {\n       // From extracted squared binary pattern, match the one corresponding to the squared binary marker\n       if (patternMatcher-&gt;match(markerPatternDescriptor, recognizedPatternsDescriptors, patternMatches) == SolAR::DescriptorMatcher::DESCRIPTORS_MATCHER_OK)\n       {\n\n           // Reindex the pattern to create two vector of points, the first one corresponding to marker corner, the second one corresponding to the poitsn of the contour\n           patternReIndexer-&gt;reindex(recognizedContours, patternMatches, pattern2DPoints, img2DPoints);\n\n           // Compute the 3D position of each corner of the marker\n           img2worldMapper-&gt;map(pattern2DPoints, pattern3DPoints);\n\n           // Compute the pose of the camera using a Perspective n Points algorithm using only the 4 corners of the marker\n           if (PnP-&gt;poseFromSolvePNP(pose, img2DPoints, pattern3DPoints) == FrameworkReturnCode::_SUCCESS)\n           {\n               LOG_INFO(&quot;Pose: {}&quot;, pose);\n           }\n       }\n   }\n}\n\n\n\n\nDisplay a cube\n\nto complete\n\n\n",
      id: 19
    });
    

  

    index.add({
      title: "setup",
      content: "downloads\n\nsubmenuconfig\n\n\n\n\nsetup\n\n\nsamples\n\n\ntutorials\n\n\ntools\n\n\nprogrammer&#8217;s guide\n\n\n\n\n\n\nDevelopment overview\n\n\nTable 1. What you need\n\n\n\n\n\n\n\nyou want to\nUse SolAR ramework\nContribute to SolAR framework\n\n\n\n\nSolAR module  source code\nno\nyes\n\n\n\n\nSolARFramework   setup\nyes\nno\n\n\nSolARFramework   third parties\nyes\nyes\n\n\nQT or Visual C++\nyes\nyes\n\n\nSolARFramework   source code\nno\nyes\n\n\n\n\n\n\nSolarFramework Installer for windows\n\n\nA SolAR Framework Windows installer is provided in order to quickly install:\n\n\n\n\nthe SolARFramework library (debug and release modes) and interfaces (C++ header files)\n\n\nSolAR modules libraries (debug and release modes) and interfaces (C++ header files)\n\n\nthe required third party libraries (debug and release modes) and third party interfaces (C++ header files)\n\n\nthe QT creator pre-requisites\n\n\nSolAR samples (C++ sample code)\n\n\n\n\nThe installer can be downloaded here:\n\n\nhttps://github.com/SolarFramework/binaries/releases/download/SolARFramework-installer%2F0.2%2Fwin/SolarFramework-installer.exe\n\n\nUsing the installer is straightforward:\n\n\n\n\ndownload then launch the installer\n\n\nread then accept the license agreement, then press \"Next\"\n\n\n\n\n\n\n\n\n\n\nPlease close QT on your computer, before executing the installer.\n\n\n\n\n\n\n\n\n\n\n\n\nselect the destination installation folder (default is: C:\\SolARFramework).\n\n\n\n\n\n\n\n\n\n\n\nselect the components you want to install.\n\n\n\n\n\n\n\n\n\nRegarding this last step, you have the choice between:\n\n\n\n\nSolAR libraries: this will install SolAR Framework and SolAR modules libraries and interfaces only. Additionnaly this will install\na SolAR component manager (xpcf) used by SolAR to load SolAR modules on the fly, and to instantiate components contained by modules\n\n\nQT creator dependencies: this will install a windows version of pkg-config program, used by SolAR build scripts to generate Makefiles under QT creator\n\n\nThird party libraries: this will install the following third party libraries and interfaces: opencv, boost, eigen and spdlog\n\n\nSample code: this will create a Samples folder under your SolARFramework installation folder. This folder contains sample C++ projects that you can use\nto learn the basics of SolAR.\n\n\n\n\nPlease use the default values: it will install everything you need to use SolAR, especially if you want to first test a sample code.\n\n\n\n\nFrequently Asked Questions\n\n\n\n\nWhen I run the installer, it asks me to  update pkgconfig, do I need to accept? \nyes, please accpet it will uninstall the current version and replace by a new one.\n\n\n\n\n",
      id: 20
    });
    

  

    index.add({
      title: "samples",
      content: "\nTable of Contents\n\nsubmenuconfig\nSamples\nPrerequesite\nSample project configuration\nFrequently Asked Questions\n\n\n\nsubmenuconfig\n\n\n\n\nsetup\n\n\nsamples\n\n\ntutorials\n\n\ntools\n\n\nprogrammer&#8217;s guide\n\n\n\n\n\n\nSamples\n\n\n\n\n\nPrerequesite\n\n\nYou should have first installed SolAR binaries, please refer to the binaries part. This will also provide you with the sample codes.\n\n\nPlease check your SolAR directory :\n\n\n\n\n\n\n\nThe \"Samples\" directory contains two sample programs. These programs demonstrate how to use SolAR framework and an opencv-based Module to perform a simple camera pose estimation. One is based on a natural image marker, the other one is based on a fiducial marker.\n\n\nThe following is dedicated to the use of Qt. Yet Visual Studio 2017 solutions and projects are also provided : just open solutions (.sln), build and run : everything is pre-configured.\n\n\n\n\nSample project configuration\n\n\nPlease choose the sample code you are interested in and open the corresponding directory.\n\n\nThen open the project .pro file with QT creator.\n\n\nCompile\n\nPlease click on \"run qmake\" : it will configure the compilation with your config parameters that were set during the SolAR binaries set-up.\n\n\n\n\n\n\n\nThen click on \"build\" and check that the sample code is correctly compiled.\n\n\n\n\n\n\n\n\nRun it\n\nThe current sample folder contains all necessary files to run the executable code. So configure the working directory to be the current sample folder by selecting Build and Run / Run menu. For instance, for the dynamic Natural Image Marker sample, please select your \"&#8230;&#8203;/Samples/NaturalImageMarker/Dynamic\" directory.\n\n\n\n\n\n\n\nYou also have to set the input parameters required by the sample code to run as expected, please refer to the readme.adoc file\n\n\n\n\n\n\n\n\nNatural Marker samples\n\nThis is an example of Natural Image Marker based homography estimation using SolAR Framework.\nTo use it, you can print the Natural Image \"graf1.png\" present in the current directory or you can display it on your computer screen. Then be sure that the scene captured with your camera includes this target image, as illustrated below.\n\n\n\n\n\n\n\nIf it runs as expected, a square box should be drawn on the marker.\n\n\n\n\n\nFrequently Asked Questions\n\n\n\n\nWhen I compile the sample code, I obtain the error \"error: C2039: 'TOOLS': is not a member of 'SolAR::MODULES'\": what is the problem? \nIt probably means that your SolAR binaries are not up-to-date, try to close QT, and  re install SolAR see the binaries part.\n\n\nWhen I compile the sample code, I obtain the error \n\"SolARCameraOpencv.h\" does not exist. This is probably due to a environment parameter problem. Please close and re open QT, and retry. Check your SolAR directory, as advised in this section.\n\n\nWhen I run the sample code, I see \"File readme.adoc does not exist\", what does it mean? \nIt means your working directory for this sample is not configured properly. See the \"sample configuration\" sub section.\n\n\nWhen I run the sample code, I see \"missing parameters\", what does it mean? \nIt means your project run configuration have some missing parameters. The missing parameters are described in the console log, and in the readme.adoc in the sample directory. See the \"sample configuration\" sub section for details.\n\n\nI&#8217;ve successfully tested the sample codes and decided to further investigate the Solar Framework. Yet, after updating the sample codes via the git hub repository, it turned out that the sample codes don&#8217;t compile any longer. What should I do ? \nThe Solar binaries (the DLL&#8217;s) are likely to be outdated. You are encouraged to proceed to a full update of the whole Solar Framework, including the third parties. Then recompile the bcomBuild binaries : SolarFramework, SolarModuleTools and SolARContainerOpenCV.\n\n\nWhen I compile the sample code, I have the error \"IComponentManager.h\" does not exist: what should I do\npkgconfig is probably missing on your computer. Please retry to setup SolAR, and take care about pkgconfig.\n\n\n\n\n",
      id: 21
    });
    

  

    index.add({
      title: "tutorials",
      content: "tutorials\n\nTable of Contents\n\nsubmenuconfig\nTutorials\n#1 Create your first SolAR Project\nConfigure your SolAR project\n#2 Create your first pipeline to extract keypoints\n#3 Match an image with your video stream\n#4 Calibrate your camera\n#5 Estimate a camera pose with a natural image marker\n\n\n\nsubmenuconfig\n\n\n\n\nsetup\n\n\nsamples\n\n\ntutorials\n\n\ntools\n\n\nprogrammer&#8217;s guide\n\n\n\n\n\n\nTutorials\n\n\n\n\n\n#1 Create your first SolAR Project\n\n\n\n\n\nConfigure your SolAR project\n\n\nThis tutorial will &#8230;&#8203; The tutorial will take approximately ??? to complete.\n\n\nPrerequisites\n\n\n\nA PC configured with the SolAR framework (see setup.)\n\n\nA PC configured with a C++ IDE (please note QT creator is recommended).\n\n\n\n\n\nInstructions\n\n\n\nCreate your project\n\nOpen QTCreator and create a new project (in File menu).\n\n\nChoose \"Non-Qt project\" and \"Plain C++ Application\", set the location and the name of your project (for example SolARFiducialTutorial), and select as build system \"qmake\", and then the building kit of your choice. Finally, click on finish to create your project.\n\n\n\n\n\n\n\nPlease note you can put your SolarProjects in the same directory as your SolAR setup (at the same levels as samples).\n\n\n\n\n\n\n\n\n\n\n\n\n\nConfigure your project\n\nAdd a package dependices file for your project\n\nCreate in your project folder a file called packagedependencies.txt and add in it your dependencies, namely the basic dependencies required by the SolARFramework (SolARFramework, xpcf, boost, eigen and spdlog) as well as the one required for the openCV module (SolARModuleOpencv and opencv):\n\n\n\nxpcf|1.0.0|xpcf|thirdParties|http://repository.b-com.com/\nboost|1.64.0|boost|thirdParties|http://repository.b-com.com/\nopencv|3.2.0|opencv|thirdParties|http://repository.b-com.com/\nspdlog|1.0.0|spdlog|thirdParties|http://repository.b-com.com/amc-generic\neigen|3.3.4|eigen|thirdParties|http://repository.b-com.com/amc-generic\nSolARFramework|1.0.0|SolARFramework|bcomBuild|url_repo_artifactory\nSolARModuleOpenCV|1.0.0|SolARModuleOpenCV|bcomBuild|url_repo_artifactory\nSolARModuleTools|1.0.0|SolARModuleTools|bcomBuild|url_repo_artifactory\n\n\n\n\n\n\n\n\n\nyou can copy/paste the \"packagedependencies.txt\" from a sample code project, if you prefer.\n\n\n\n\n\n\nConfigure your .pro file for compilation\n\nSolAR framework uses tools for building that can be invoked through the .pro file in your QT project.\nPlease copy/paste the following, and replace by your project name\n\n\n\nQT += core\nQT -= gui\n\n\nCONFIG += c++11\nCONFIG -= qt\nCONFIG += console\nCONFIG -= app_bundle\nTARGET = MyHelloWorldProject\n\nTEMPLATE = app\n\nSOURCES += \\\n    main.cpp\n\n# The following define makes your compiler emit warnings if you use\n# any feature of Qt which as been marked deprecated (the exact warnings\n# depend on your compiler). Please consult the documentation of the\n# deprecated API in order to know how to port your code away from it.\nDEFINES += QT_DEPRECATED_WARNINGS\n\n# You can also make your code fail to compile if you use deprecated APIs.\n# In order to do so, uncomment the following line.\n# You can also select to disable deprecated APIs only up to a certain version of Qt.\n#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0\n\nHEADERS +=\n\nDEFINES += MYVERSION=$${VERSION}\n\nCONFIG(debug,debug|release) {\n    DEFINES += _DEBUG=1\n    DEFINES += DEBUG=1\n}\n\nCONFIG(release,debug|release) {\n    DEFINES += NDEBUG=1\n}\n\nwin32:CONFIG -= static\nwin32:CONFIG += shared\nQMAKE_TARGET.arch = x86_64 #must be defined prior to include\n#NOTE : CONFIG as staticlib or sharedlib, QMAKE_TARGET.arch and PROJECTDEPLOYDIR MUST BE DEFINED BEFORE templatelibconfig.pri inclusion\ninclude ( $$(BCOMDEVROOT)/builddefs/qmake/templateappconfig.pri)\n\nDEPENDENCIESCONFIG = sharedlib\n#NOTE : DEPENDENCIESCONFIG as staticlib or sharedlib, QMAKE_TARGET.arch and PROJECTDEPLOYDIR MUST BE DEFINED BEFORE packagedependencies.pri inclusion\n#include ( $$(BCOMDEVROOT)/builddefs/qmake/packagedependencies.pri)\n\nunix {\n    LIBS += -ldl\n}\n\nmacx {\n    QMAKE_MAC_SDK= macosx\n    QMAKE_CXXFLAGS += -fasm-blocks -x objective-c++\n}\n\nwin32 {\n    QMAKE_LFLAGS += /MACHINE:X64\n    DEFINES += WIN64 UNICODE _UNICODE\n    QMAKE_COMPILER_DEFINES += _WIN64\n    QMAKE_CXXFLAGS += -wd4250 -wd4251 -wd4244 -wd4275\n\n    # Windows Kit (msvc2013 64)\n    LIBS += -L$$(WINDOWSSDKDIR)lib/winv6.3/um/x64 -lshell32 -lgdi32 -lComdlg32\n    INCLUDEPATH += $$(WINDOWSSDKDIR)lib/winv6.3/um/x64\n\n}\n\n\n\nRun Qmake. You should see appear in your project folder\n\n\n\n\n\n\n\nThen build your project to be sure it is correctly configured.\n\n\n\n\nWrite your Hello World\n\nThis tutorial will help you to write a simple program that will dsplay an image\nPlease replace the code of your main.cpp by the following one:\n\n\nmain.cpp\n\n#include &quot;SolARModuleManagerOpencv.h&quot;\n\nusing namespace std;\nusing namespace SolAR;\nnamespace xpcf  = org::bcom::xpcf;\n\nvoid run(int argc,char** argv){\n\n    // To redirect log to the console\n    LOG_ADD_LOG_TO_CONSOLE();\n\n    // ADD HERE: load your Opencv module\n\n    // ADD HERE: declarations and instantiation of components\n    // Example to declare and create a camera:\n    // SRef&lt;ISolARCamera&gt; camera = opencvModule.createComponent&lt;ISolARCamera&gt;(UUID::OPENCV::CAMERA);\n\n\n    // ADD HERE: declarations of data structures used to connect components\n    // Example to declare a SolARImage:\n    // SRef&lt;SolARImage&gt; inputImage;\n\n\n    // ADD HERE: Components configuration\n    // Generally through the method setParamerters of the components, except for the input components such as the camera or the marker that use specific methods to load configuration files\n\n\n    // ADD HERE: The pipeline loop\n\n}\n\nint printHelp(){\n        printf(&quot; usage :\\n&quot;);\n        printf(&quot; HelloWorld.exe ImagePath \\n\\n&quot;);\n        printf(&quot; Escape key to exit&quot;);\n        return 1;\n}\n\nint main(int argc, char *argv[])\n{\n    if(argc==3 || argc ==4){\n        run(argc,argv);\n        return 1;\n    }\n    else\n        return(printHelp());\n}\n\n\n\nThe executable should take as the only parameter the url of the image you want to display.\n\n\nto complete\n==== Build your project\n\n\nNow you can run QMake (click right of your project in QT creator, and click on run QMake). Every pathes for headers and library links are now set.\n\n\nCheck your empty project is ok pour SolAR\n\n\n\n\n\n\n#2 Create your first pipeline to extract keypoints\n\n\n\n\n\n#3 Match an image with your video stream\n\n\n\n\n\n#4 Calibrate your camera\n\n\n\n\n\n#5 Estimate a camera pose with a natural image marker\n\n\ntutorial\n\n:include _NaturalImageMarkerdynamicetuto[Natural Image Marker Simple sample code]\n\n\n\nexercise\n\n\n\nexercise correction\n\n\n\n",
      id: 22
    });
    

  

    index.add({
      title: "tools",
      content: "\nTable of Contents\n\nsubmenuconfig\nCamera Calibration Program\n\n\n\nsubmenuconfig\n\n\n\n\nsetup\n\n\nsamples\n\n\ntutorials\n\n\ntools\n\n\nprogrammer&#8217;s guide\n\n\n\n\n\n\nCamera Calibration Program\n\n\nThis example helps you to calibrate your camera and it provides a camera calibration parameters set.\nThese parameters stored in a file can be taken as input by any program to set the intrinsic parameters of your camera.\nRight now, we do not offer a solution for non-calibrated pose pipeline. Natural Marker and Fiducial Marker program samples\nassume you will provide the camera calibration parameters at runtime.\n\n\nIn general, this tool is useful for any program you will create by yourself using SolAR.\n\n\nThe calibration process is based on state of the art method and uses a chessboard.\n\n\nYou can have one while printing the \"chessboard.png\" in this project.\n\n\nThe input file used for this calibration program gives information about how to setup your chessboard: measure the squares on your chessboard sheet, aspect ratio and square size.\n\n\nTo get more details, please read the readme.adoc file that you can find in the camera calibration folder.\n\n\nlink: http://forge.b-com.com/git/argo/SolAR/Samples/CameraCalibration.git\n\n\n\n\n\n\n\n\n\nIf you use QT creator, open the .pro file and configure your project as usual (see \"getting started\").\n\n\nHave a look at the \".cpp\" file, which is clearly commented and explained step by step.\n\n\n2 files are used :\n\n\n\n\ncalibration_config.yml, which is an input file\n\n\ncamera_calibration.yml, which is an output file (but can be used as input file for other programs)\n\n\n\n\n=== Fiducial Marker samples\n\n\nHere is an example of Fiducial Image Marker based on SolAR.\n\n\nFor the three versions of it, you can see a visual feedback of natural marker estimation.  As for Natural Image, you can choose simple, static or dynamic mode (the differences are the same as for natural markers).\n\n\n\n\n",
      id: 23
    });
    

  

    index.add({
      title: "programmer's guide",
      content: "\nTable of Contents\n\nsubmenuconfig\nThe programmer&#8217;s guide\nSolAR Overview\nSolAR Data Structures\nSolAR components interfaces\nSolAR components handling\nFrequently Asked Questions\nContact Mail\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nlegal notice\n\n\n\n\n\n\nThe programmer&#8217;s guide\n\n\n\n\n\nSolAR Overview\n\n\nSolAR is a solution to easily and quickly implement custom camera pose estimation pipelines based on a set of vision and mathematics components in order to make them available to AR application developers.\n\n\nThe SolAR core handles everything that will allow the implementation of a pipeline:\n\n\n\n\nSolAR Data Structures define the information that flow in the pipelines and are exchanged between components.\n\n\nSolAR Components Interfaces define a standardized interface for the different categories of basic processing elements required to implement camera pose estimation (i.e.: key point extractor, descriptor computation, etc.). This unified interface is required to ensure interoperability between components allowing to easily swap one with another to improve the final camera pose estimation pipeline.\n\n\nThe SolAR Pipeline Manager handles the implementation of a pipeline by loading components, connecting them, and running the pipeline.\n\n\n\n\nThe SolAR Components are implementations of basic processing elements compliant with the SolAR components interfaces. Several components can implement the same component interface. In general, these components are created by wrapping computer vision libraries that could be either open-source (OpenCV, PCL, ROS, etc.) or proprietary. Each component can define its own parameters that will be used to fine tune the camera pose estimation solution.\n\n\n\n\n\n\n\n\n\nComing soon: configure components on the fly, pipeline, multithread, metadata.\n\n\n\n\n\n\nSolAR Data Structures\n\n\nThe SolAR pipeline consists of a chain of basic processing elements linked together so that the outputs of each element are the inputs of the next one. In order to provide modularity, SolAR specifies standard data structures defining the information exchanged between components required to implement a camera pose estimation solution.\n\n\nThe following categories describe the current SolAR data structures, with more to come.\n\n\nImage\n\nA SolAR image is an array of pixels where each pixel is defined by a set of color components coded with a given number of bits. Each pixel can be encoded with a dedicated colorimetric space (RGB, YUV, LAB, etc.). Contrary to OpenCV, an image is not just a matrix or an array. A SolAR image is clearly defined as an image object to ensure that a component waiting for an image as an input will not receive a random matrix such as a pose. Thus, an image is defined by:\n\n\n\n\nThe image size (width, height)\n\n\nThe image layout such as LAYOUT_GRB, LAYOUT_BGR, LAYOUT_GREY, LAYOUT_RGBA, LAYOUT_RGBX, LAYOUT_UNDEFINED\n\n\nThe pixel order either INTERLEAVED or PER_CHANNEL\n\n\nThe size of each color component, also called data type which can be either TYPE_8U, TYPE_16U, TYPE_32U, TYPE_64U\n\n\nA pointer to the raw data\n\n\n\n\nIn order to limit memory allocations and copies, which can drastically impact the efficiency of the camera pose estimation implementation, an image can point to the raw data instantiated by third party libraries such as OpenCV or OpenVX.\n\n\n\nMatrix\n\nThe SolAR implementation of matrices is based on the open source Eigen library for linear algebra. The SolAR framework redefines the following matrices:\n\n\n\n\nSolARVector4f  equates to a 4x1 matrix of floats\n\n\nSolARVector4d  equates to a 4x1 matrix of doubles\n\n\nSolARVector3f  equates to a 3x1 matrix of floats\n\n\nSolARVector3d  equates to a 3x1 matrix of doubles\n\n\nSolARTranslationVectorf equates to a 3x1 matrix of floats used to define a translation\n\n\nSolARPoint_3Df equates to a 3x1 matrix of floats used to define a 3D point\n\n\nSolARPoint_2Df equates to a 2x1 matrix of floats used to define a 2D point\n\n\nSolARPoseMatrixf equates to a 4x4 matrix of floats used to define a pose\n\n\nSolARMatrix33d equates to a 3x3 matrix of doubles\n\n\nSolARRotationMatrixf equates to a 3x3 matrix of floats used to define a rotation\n\n\nSolARQuaternionf equates to a Quaternion in floats used to define a rotation\n\n\n\n\n\nPose\n\nThe SolaARPose data structure is based on a standard row major homogeneous 4x4 matrix. Euler angles and quaternions can be directly extracted from this structure built using Eigen algorithms.\n\n\n\nMarker\n\nA SolAR Marker is a structure describing a convex area in a SolAR Image. A SolAR Marker allows managing different types of markers such ad fiducial markers or checker boards. It encodes shape and pose information as follows:\n\n\n\n\nEdges: a set of SolARPoint_2Df defining the convex area. A fiducial marker can be described with four edges. The order of the points is important and impacts the structure of the marker\n\n\nTranslation: a SolARVector3f defining the translation of the marker relative to the camera\n\n\nRotation: a SolARRotationMatrixf  defining the rotation of the marker relative to the camera\n\n\n\n\nThe SolAR Marker embeds information about the marker in a minimalist way. The reason is directly linked to the desired genericity across all the existing markers in the state-of-the-art methods.\n\n\n\nFeatures\n\nThe current implementation of the SolAR Features data structure takes advantage of the OpenCV Features2D definition. However, we are currently working on an abstract API to handle multiple keypoints, features descriptors and extractors implementations using technologies such as CUDA and OpenVX. We will be especially focusing on proper memory management and avoiding useless data copying.\n\n\nThe current SolAR Features data structure is not the final implementation we are aiming for and will be undergoing changes as we actively work on it.\n\n\n\n\n\nSolAR components interfaces\n\n\nSolAR components are vision or mathematics processing elements compliant with the SolAR component interface defined by the SolAR framework.\n\n\n\n\n\n\n\nAcquisition\n\nThe Acquisition Interface manages the capturing strategy from a given device and provides the input signal to the next processing component.\n\n\nImage\n\nThe ISolARCamera interface is dedicated to acquiring images from external device. It allows grabbing the current image and sets/extracts some parameters related to the projection and acquisition models as follows:\n\n\n\n\nget/set camera acquisition parameters: get default acquisition setting parameters (image size, frame rate..). The user can also set custom parameters which force the camera grabbing parameters to that value.\n\n\nget/set camera projection parameters: get camera projection parameters including camera matrix and distortion parameters. It assumes that camera is already correctly calibrated. The user can set these parameters by performing a preliminary calibration.\n\n\n\n\n\n\nConversion\n\nThe Conversion Interface manages conversion for different data structure.\n\n\nImage\n\nThe ISolaARImageConvertor performs the conversion between several image formats. It allows converting both color and type value using one unified method which automatically detects the color and/or type layers of the input and output.\n\n\n\n\nFiltering\n\nThe Filtering Interface manages filtering operations for different data structure.\n\n\nImage\n\nThe ISolARImageFilter is dedicated to perform various filtering operations assuming input/output consistency. The interface embeds the following operations:\n\n\n\n\nBinarizing\n\n\nEqualizing\n\n\nBlurring\n\n\nErosion\n\n\nDilation\n\n\nGradient\n\n\nLaplacian\n\n\n\n\n\nFeatures\n\nThe ISolARFeaturesFilter is dedicated to filter different extracted/computed features.\n\n\n\nMarkers\n\nThe ISolARMarkerFilter is dedicated to enhance marker filtering.\n\n\n\n\nEstimation\n\nThe Estimation Interface manages several pose estimation methods for cameras, objects and markers.\n\n\nFeatures\n\nThe ISolARKeypointDetector, ISolARDescriptorExtractor and ISolARDescriptorMatcher allow to detect geometrically relevant points in the image using known algorithms such as SURF or SIFT. (SURF, SIFT..). They also compute descriptors around these points and correlate sets of matches.\n\n\nThe ISolARHomographyFinder performs an homography transformation estimation and extracts a camera pose.\n\n\n\nMarker\n\nThe ISolARMarkerFinder allows to perform marker finding operations on different types of markers. It detects, segments and recognizes the marker and estimates its pose relative to the camera.\n\n\n\n\nSolAR Third Party Connector\n\nThe SolAR third party connector is a special SolAR Component used to exchange internal SolAR pose data with any third party outside of the SolAR framework. It is used to safely provide access to a SolAR Image and its associated SolAR Pose in a thread safe race free fashion. It internally implements a mutex locked circular buffer, allowing safe producer/consumer access. It allows synchronous and asynchronous read access for the consumer.\n\n\n\n\n\n\n\nThe internal buffer size of the container is currently set at one which means only the latest image and pose are available to the consumer at any given time. In the near future, SolAR will allow users to provide initialization parameters when creating components so the users will be able to specify the size of the buffer they desire.\n\n\nProducer\n\nAny component wishing to expose its pose data to an external third party must use a Third Party Connector. It can then use the set method to set the current SolAR Image and its associated SolAR Pose. The set method is thread safe and blocking. It will not return until the lock on the internal buffer is released by the reader.\n\n\n\nConsumer\n\nAny third party external to SolAR that needs access to internal pose data of a component must connect to its Third Party Connector. It can then use either the get method or the tryGet method to get the latest SolARImage and its associated SolARPose. The get method is thread safe and blocking. This means it will not return until there is available data to read and the lock on the internal buffer is released by the writer. The tryGet method is also thread safe but non blocking. It will return immediately after being called. It will return true if it was able to acquire the lock and read the data, or false if it was unable to obtain the lock or if there was nothing to read.\n\n\n\n\n\n\nSolAR components handling\n\n\nSolAR relies on the Cross Platform Component Framework (XPCF), a versatile framework that provides dynamic component instantiation and loading from modules. Basically, modules are libraries that collect components sharing a common element: purpose, framework, etc. XPCF also provides uniform component parametrization. Using XPCF, and thanks to the unified SolAR interfaces, it will be possible to build applications by picking and choosing different components in different modules at runtime without prior knowledge of the components when the application itself is compiled.\n\n\nFor more details, please refer to the XPCF website (coming soon).\n\n\n\n\nFrequently Asked Questions\n\n\n\n\nWhat is SolAR?\nSolAR is an open source initiative to develop a framework for pose estimation that can be used for Augmented Reality (AR) applications.\n\n\nWho initiated the SolAR project?\nThe b&lt;&gt;comInstitute of Research and Technology initiated the SolAR project after collecting the feedback of AR actors, AR end-users (industry, real-estate, medical, etc.), AR developers (essentially SMEs) and computer vision experts (academic researchers and research engineers from companies).\n\n\nWho can contribute to the SolAR project?\nAnyone can contribute to the SolAR project. Contributors only need to be proficient in C++ and computer vision skills.\n\n\nCan I use the SolAR framework for my AR applications?\nOf course! Just be wary of the licenses of the components used by the pose estimation pipelines you choose as each component can be under its own license, independently of the encompassing SolAR Apache v2 license.\n\n\n\n\n\n\nContact Mail\n\n\nFor any requests, please contact us.\n\n\n",
      id: 24
    });
    

  



var store = [];

  
store.push({"title": "API",
  "link": "https://solarframework.github.io///API.html"
});

  
store.push({"title": "Community",
  "link": "https://solarframework.github.io///community.html"
});

  
store.push({"title": "Contribute",
  "link": "https://solarframework.github.io///contribute.html"
});

  
store.push({"title": "Discover",
  "link": "https://solarframework.github.io///discover.html"
});

  
store.push({"title": null,
  "link": "https://solarframework.github.io///feed.xml"
});

  
store.push({"title": "welcome",
  "link": "https://solarframework.github.io///"
});

  
store.push({"title": "Knowledge",
  "link": "https://solarframework.github.io///knowledge.html"
});

  
store.push({"title": null,
  "link": "https://solarframework.github.io///js/lunr-feed.js"
});

  
store.push({"title": "Made with SolAR",
  "link": "https://solarframework.github.io///made_with_solAR.html"
});

  
store.push({"title": "package &amp; download third parties",
  "link": "https://solarframework.github.io///argodoc/packageanddownload.html"
});

  
store.push({"title": "Search",
  "link": "https://solarframework.github.io///search.html"
});

  
store.push({"title": "Tags",
  "link": "https://solarframework.github.io///tags.html"
});

  
store.push({"title": "Use it",
  "link": "https://solarframework.github.io///use_it.html"
});



  
  
  

  
  
  
    
    store.push({"title": "what",
      "link": "https://solarframework.github.io///discover/what/"
    });
  
    
    store.push({"title": "how",
      "link": "https://solarframework.github.io///discover/how/"
    });
  
    
    store.push({"title": "who",
      "link": "https://solarframework.github.io///discover/who/"
    });
  
    
    store.push({"title": "when",
      "link": "https://solarframework.github.io///discover/when/"
    });
  
    
    store.push({"title": "for whom",
      "link": "https://solarframework.github.io///discover/for_whom/"
    });
  
    
    store.push({"title": "legal notice",
      "link": "https://solarframework.github.io///discover/legal_notice/"
    });
  

  
  
  

  
  
  
    
    store.push({"title": "Fiducialmarker",
      "link": "https://solarframework.github.io///use_it/tutorials/FiducialMarker/fiducialMarker/"
    });
  
    
    store.push({"title": "setup",
      "link": "https://solarframework.github.io///use_it/downloads/"
    });
  
    
    store.push({"title": "samples",
      "link": "https://solarframework.github.io///use_it/samples/"
    });
  
    
    store.push({"title": "tutorials",
      "link": "https://solarframework.github.io///use_it/tutorials/"
    });
  
    
    store.push({"title": "tools",
      "link": "https://solarframework.github.io///use_it/tools/"
    });
  
    
    store.push({"title": "programmer's guide",
      "link": "https://solarframework.github.io///use_it/programmer_guide/"
    });
  


function searchAndDisplay(query){
  var resultdiv = $('#results');
  var result = index.search(query);
  // Show results
  resultdiv.empty();
  // Add status
  resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
  // Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><div class="result-body"><li><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a></li></div>';
    resultdiv.append(searchitem);
  }
}

// builds search
$(document).ready(function() {
    var query = (decodeURI(location.search).split("q" + '=')[1] || '').split('&')[0];
    var formattedQuery = query.split("+").join(" ");
    searchAndDisplay(formattedQuery);

    $('input#search').on('keyup', function () {
      var query = $(this).val();
      searchAndDisplay(query);
    });
});
