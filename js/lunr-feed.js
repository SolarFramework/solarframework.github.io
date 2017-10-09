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
    content: "\nTable of Contents\n\nsubmenuconfig\nDiscover Solar\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nDiscover Solar\n\n\nSolAR is an open-source framework released under Apache license 2.0 making possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n",
    id: 3
  });
  

index.add({
    title: null,
    content: "\n\n  \n    SolAR\n    SolAR\n    https://solarframework.github.io//\n    \n    Mon, 09 Oct 2017 13:14:06 +0000\n    Mon, 09 Oct 2017 13:14:06 +0000\n    Jekyll v3.5.1\n    \n  \n\n",
    id: 4
  });
  

index.add({
    title: "welcome",
    content: "\nTable of Contents\n\nSolAR, Solution for Augmented Reality\nSolAR helps you to develop customized Augmented Reality solutions\nSolAR is always improving\n\n\n\nSolAR, Solution for Augmented Reality\n\n\n\n\n\n\n\n\n\nSolAR helps you to develop customized Augmented Reality solutions\n\n\nSolAR is an open-source framework released under Apache license 2.0 making possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\nBy using SolAR, you can easily build augmented reality applications by testing different vision based localization solutions, create and share to the community your own camera pose estimation pipeline, and even develop efficient low-level processing elements to meet specific requirements.\n\n\nSolAR is a framework improving interoperability for Augmented Reality applications that aims at offering efficiency and robustness thanks to a modular software pipeline architecture.\n\n\n\n\nSolAR is always improving\n\n\nSolAR is an open-souce project, join the community, contribute to the SolAR framework and participate to the augmented reality adoption.\n\n\n",
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
    content: ":page-layout: _auto\n= Use it !\n:showtitle:\n:page-title: Use it\n:page-description: Use it\n:page-layout: default\n:page-category: use_it\n:page-liquid:\n:toc:\n\n\n== submenuconfig\n\n[none]\n{% for collection in site.collections %}\n  {% assign name = collection.label %}\n  {% if name == page.categories[0] %}\n\n\t  {% assign sorted_subparts = site[name] | sort:\"weight\" %}\n\t  {% for subpart in sorted_subparts %}\n\t    {% assign page_level = subpart.url | split:'/' %}\n\n\t\t{% if page_level.size == 3 %}\n\t\t\t{% assign subpart_url = subpart.url | remove_first:'/' %}\n* {{ site.url }}{{ site.baseurl }}{{ subpart_url }}[{{ subpart.title }}]\n\t\t{% endif %}\n\t  {% endfor %}\n\t  {% break %}\n  \n  {% endif %}\n{% endfor %}\n\n\n== Please contribute\ninclude::_opensource.adoc[]\n\n== Please have a look at features coming soon\ninclude::roadmap.adoc[]\n\n== How to use\n\nSOlAR framework can be used by :\n\n* pose estimation developers (using a C++ API) and \n* designers (using an editor), \n\nto create a good pose estimation solution.\n\nIt can be used  by the developer of AR application in their IDE.\n\n\n",
    id: 12
  });
  




  
  
  

    index.add({
      title: "what",
      content: "\nTable of Contents\n\nsubmenuconfig\nWhat\nWhy\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nWhat\n\n\nSolAR is an open source framework dedicated to Augmented Reality (AR) technology.\n\n\nIt offers a C++ SDK to easily and quickly develop and use customized solutions for camera pose estimation. It provides developers with a full chain from low-level vision components development to camera pose estimation pipelines implementation and AR service development.\n\n\nThe SolAR framework is open-source and released under Apache v2 licence,\nthat lets you use it for research as well as for commercial purposes\naddressing various domains (smart factory, smart home, real estate,\ne-health, etc.).\n\n\nThe SolAR framework aims at stimulating the interaction between all actors of the AR technology development and ease the technology transfer for the benefit of end-users.\n\n\nA Unity plugin SolAR compatible will come soon.\n\n\n\n\nWhy\n\n\nAR applications developers and end-users face a dilemma.\n\n\nOn one side, major IT actors have released toolkits to develop AR applications. Nevertheless, they do not always meet the specific needs required by dedicated use cases or contextual environments (localization accuracy, lighting conditions, indoor/outdoor environments, tracking area range, dynamic scenes, etc.).\n\n\nNo solution fits all, and generally, these proprietary toolkits do not provide the level of tuning required to optimally adapt the vision based localization solution to the use case. Moreover, these closed solutions do not always ensure the confidentiality of data, and can store information concerning your environment (3D maps, key frames) or the augmentations (3D meshes, procedure scenarios) that could contain crucial intellectual properties.\n\n\nOn the other side, open source vision library and SLAM implementations can generally be modified and configured to optimally meet AR applications requirements. Only, many SLAM implementations generally developed by academic actors do not provide the license or the level of maturity required for the development of commercial solutions. Likewise, open source vision libraries offer a huge number of low-level functions but require a huge expertise and important development resources to obtain a full runnable camera pose estimation ready for commercial products.\n\n\nSo, SolAR framework offers an alternative to current commercialized AR SDK or existing open-source solutions offering the benefits of both previous approaches – openness, easiness, efficiency, adaptiveness. It aims at creating an ecosystem bringing researchers, developers, and end-users together to accelerate the augmented reality technological development.\n\n\nWe hope that this open-source framework will limit the creation of vertical siloes and enable players in the supply chain to offer part of an overall AR solution.\n\n\n",
      id: 13
    });
    

  

    index.add({
      title: "how",
      content: "\nTable of Contents\n\nsubmenuconfig\nhow\nSolAR is open-source\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nhow\n\n\n\n\n\n\n\nSolAR Framework addresses the full chain of AR applications development:\n\n\n\n\nSolAR Components creation: SolAR framework defines a unique API for base components required for camera pose estimation (features extractor, descriptors calculation, matching, Perspective N Points, homography, image filters, etc.). SolAR community can develop new components compliant with the SolAR components API, whether royalty free or under commercial license. To ease the publication of your SolAR components, you can embed them in containers.\n\n\nCamera pose estimation pipeline implementation: You can download containers of components published by the SolAR community. The SolAR framework provides developers with a pipeline mechanism allowing to connect SolAR components to define your own camera pose estimation solution (today through a SDK, soon thanks to a dedicated graphic editor). When your pipeline is validated, you can published it for AR applications developers.\n\n\nAR service development: Bu using Unity directly the SolAR SDK, load the camera pose estimation solution of your choice developed by the SolAR community that most fit your application requirements. Simply develop your AR application as you can do it with any AR SDK and roll out it. As SolAR is based on a unique interface, you will be able to easily evolve your application with the new solutions developed by the SolAR community.\n\n\n\n\nThe following video present in more details these 3 steps.\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n\n\nSolAR is open-source\n\n\nThis framework is open-source and released under Apache v2 licence,\nthat lets you use it for research as well as commercial purposes\nadressing various domains (smart factory, smart home, real estate,\ne-health, etc).\n\n\nNevertheless, the components you will connect to develop your own solution can be under various licences. Always check the compatibility of the components licences, the SolAR community can not be held reponsible for a violation of the licenses of the components that you use.\n\n\n",
      id: 14
    });
    

  

    index.add({
      title: "who",
      content: "\nTable of Contents\n\nsubmenuconfig\nWho ?\nContact Mail\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nWho ?\n\n\nSolAR initiative has been launched by the Technology Research Institute b&lt;&gt;com, and is open to any contributors or users who share the  SolAR philosophy.\n\n\nOur Contributors\n\n\n\n\n\n\n\n\n\nContact Mail\n\n\nFor any request, Please Contact Us\n\n\n",
      id: 15
    });
    

  

    index.add({
      title: "when",
      content: "\nTable of Contents\n\nsubmenuconfig\nSolAR roadmap\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nSolAR roadmap\n\n\nThe SolAR source code is going to be released soon for Windows and Linux (early November).\nIt will include the interface definition required to build simple camera pose estimation pipelines (samples will be given on natural images and fiducial markers) as well as a first Unity plugin allowing AR service developers to create their first AR applications based on the SolAR framework.\n\n\nThe following roadmap presents the features that will be implemented in a near future on SolAR core (pipeline, multi-threading, compliance openVX, Android and iOS support, etc.) as well as the new expected components allowing the creation of extended camera pose estimation pipelines (SLAM, visual/inertial, based on depth sensors, etc.).\n\n\nThis roadmap is a prevision, and can be modified. Please contact us for any question .\n\n\n\n\n\n\n\nAll contributions are welcome to shorten this roadmap!\n\n\n",
      id: 16
    });
    

  

    index.add({
      title: "for whom",
      content: "\nTable of Contents\n\nsubmenuconfig\nfor whom is SolAR?\nSolAR adapts\nSolAR main applications\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nfor whom is SolAR?\n\n\n\n\nSolAR framework is for pose estimation developers, to make possible to create a pose estimation scheme with the best computer vision components.\n\n\nSolAR framework is also for AR service developpers : they will benefit from the best pose estimation int their AR application.\n\n\n\n\n\n\nSolAR adapts\n\n\nAs your requirements are particular :\n\n\n\n\nspecific environment\n\n\ndevice\n\n\naccuracy\n\n\ntracking area scale\n\n\n\n\nyou will find here all you need to build a customized and efficient solution to estimate your vision sensor pose for augmented reality purpose.\n\n\n\n\nSolAR main applications\n\n\nSolAR focuses on 4 big use cases and adpats to their constraints .\n\n\n\n\nhome services\n\n\nhealth services\n\n\nindustry\n\n\nreal estate\n\n\n\n\n",
      id: 17
    });
    

  

    index.add({
      title: "programmer's guide",
      content: "\nTable of Contents\n\nsubmenuconfig\nGuide\nSolAR Overview\nSolAR Data Structure\nSolAR components interface\nSolAR component manager\nFrequently Asked Questions\nContact\nContact Mail\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nGuide\n\n\n\n\n\nSolAR Overview\n\n\nSolAR framework is a solution to easily and quickly implement customized camera pose estimation pipelines based on a set of vision/mathematic components in order to publish them for AR application developers.\n\n\nThe SolAR core handles everything that will allow the implementation of a pipeline:\n\n\n\n\nSolAR Data Structure defines the information that flows in the pipelines and exchanged between components.\n\n\nSolAR components interface defines a standard interface for the different categories of basic processing elements required to implement a camera pose estimation (ex: key point extractor, descriptor computation, etc.). This unique interface is required to ensure interoperability between components allowing to easily swap one by another to improve the final camera pose estimation pipeline. Please refer to API definition to know more about SolAR interfaces.\n\n\nSolAR components manager handles the implementation of a pipeline by loading components, connecting them, and running the pipeline.\n\n\n\n\nThe SolAR Components are implementation of basic processing elements compliant with the SolAR components interface. Several components can implement the same component interface. In general, these components are created by wrapping computer vision libraries that could be either open-source (OpenCV, PCL, ROS, etc.) or proprietary. Each component can define its own parameters that will be used to tune the camera pose estimation solution.\n\n\n\n\n\n\n\n\n\nComing soon: configure component on the fly, pipeline, multithread, metadata. Please refer to the roadmap for more information.\n\n\n\n\n\n\nSolAR Data Structure\n\n\nThe SolAR pipeline consists in a chain of basic processing elements arranged so that the outputs of each element are the inputs of the next ones. In order to provide modularity, SolAR provides standard data structures corresponding to the information exchanged between successive components required to implement a camera pose estimation solution.\n\n\nYou will find next the first data structures organized by categories that are currently defined by the SolAR framework.\n\n\nImage\n\nA SolAR image is a array of pixels where each pixel is defined by a set of color components coded with a given number of bits. Each pixel can be encoded with a dedicated colorimetric space (RGB, YUV, LAB, etc.). Contrary to OpenCV, an image is not just a Matrix, but is clearly defined as an image object to ensure that a component waiting for an image in input will not receive a matrix such as a pose what does not make sense. Thus, an image is defined by:\n\n\n\n\nthe image size (width, height),\n\n\nthe image layout such as LAYOUT_GRB, LAYOUT_BGR, LAYOUT_GREY, LAYOUT_RGBA, LAYOUT_RGBX, LAYOUT_UNDEFINED,\n\n\nthe pixel order either INTERLEAVED or PER_CHANNEL,\n\n\nthe size of each color component, so called data type among TYPE_8U, TYPE_16U, TYPE_32U, TYPE_64U,\n\n\na pointer to the raw data\n\n\n\n\nIn order to limit memory allocations and copies, what could drastically impact the efficiency of the camera pose estimation implementation, an image can point the raw data instantiated by third party libraries such as OpenCV or OpenVX.\n\n\nAPI Documentation to be updated\n\n\n\nMatrix\n\nThe matrix implementation is based on the third party eigen. SolAR framework redefines the following matrices:\n\n\n\n\nSolARVector4f  corresponding to a 4x1 matrix of floats,\n\n\nSolARVector4d  corresponding to a 4x1 matrix of doubles,\n\n\nSolARVector3f  corresponding to a 3x1 matrix of floats,\n\n\nSolARVector3d  corresponding to a 3x1 matrix of doubles,\n\n\nSolARTranslationVectorf corresponding to a 3x1 matrix used to define a translation,\n\n\nSolARPoint_3Df corresponding to a 3x1 matrix of float used to define a 3D point,\n\n\nSolARPoint_2Df corresponding to a 2x1 matrix of float used to define a 2D point,\n\n\nSolARPoseMatrixf corresponding to a 4x4 matrix of floats used to define a pose,\n\n\nSolARMatrix33d corresponding to a 3x3 matrix of doubles,\n\n\nSolARRotationMatrixf corresponding to a 3x3 matrix of float used to define a rotation,\n\n\nSolARQuaternionf corresponding to a Quaternion in float used to define a rotation.\n\n\n\n\n\nPose\n\nToDo\n\n\n\nMarker\n\nToDo\n\n\n\nFeatures\n\nToDo\n\n\n\n\n\nSolAR components interface\n\n\nSolAR components are vision or mathematic basic processing elements compliant with the SolAR component interface defined by the SolAR framework.\n\n\n\n\n\n\n\nImage\n\nCamera\n\nToDo\n\n\n\nImage conversion\n\nToDo\n\n\n\nImage filters\n\nToDo\n\n\n\n\nFeatures\n\nExtraction\n\nToDo\n\n\n\nDescription\n\nToDo\n\n\n\nMatching\n\nToDo\n\n\n\n\nPose Estimation\n\nToDo\n\n\n\nSolAR third Party Connector\n\nToDo\n\n\n\n\n\nSolAR component manager\n\n\nToDo\n\n\n\n\nFrequently Asked Questions\n\n\n\n\nWhat is SolAR?\nThis is an open source initiative to develop a framework for pose estimation that can be used for Augmented Reality applications.\n\n\nWho initiated SolAR project?\nThe french Institute of reseach and Technology b&lt;&gt;com initiated the SolAR project, after collecting the feedback of AR actors, among AR end-users (Industry, real-estate, medical, etc.), AR developers (essentially SME), computer vision expert (Academic researcher and research engineers from companies).\n\n\nWho can contribute to SolAR project?\nAnyone can contribute to SolAR project. This requires C++ and computer vision skills.\n\n\nCan I use SolAR framework for my AR applications?\nOf course, just check the licenses of the components used by the pose estimation pipelines you choose.\n\n\n\n\n\n\nContact\n\n\n\n\n\nContact Mail\n\n\nFor any request, Please Contact Us\n\n\n",
      id: 18
    });
    

  

    index.add({
      title: "legal notice",
      content: "\nTable of Contents\n\nsubmenuconfig\nLegal notice\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nLegal notice\n\n\nWebSite administrators give you more information about the legal notice here.\n\n\n",
      id: 19
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
  
    
    store.push({"title": "programmer's guide",
      "link": "https://solarframework.github.io///discover/programmer_guide/"
    });
  
    
    store.push({"title": "legal notice",
      "link": "https://solarframework.github.io///discover/legal_notice/"
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
