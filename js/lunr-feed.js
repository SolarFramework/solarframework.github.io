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
    content: "\nTable of Contents\n\nsubmenuconfig\nDiscover Solar\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nDiscover Solar\n\n\nSolAR is an open-source framework released under Apache license 2.0 making it possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n",
    id: 3
  });
  

index.add({
    title: null,
    content: "\n\n  \n    SolAR\n    SolAR\n    https://solarframework.github.io//\n    \n    Wed, 18 Oct 2017 13:45:14 +0000\n    Wed, 18 Oct 2017 13:45:14 +0000\n    Jekyll v3.5.1\n    \n  \n\n",
    id: 4
  });
  

index.add({
    title: "welcome",
    content: "\nTable of Contents\n\nSolAR, Solution for Augmented Reality\nSolAR helps you to develop custom Augmented Reality solutions\nSolAR is always improving\n\n\n\nSolAR, Solution for Augmented Reality\n\n\n\n\n\n\n\n\n\nSolAR helps you to develop custom Augmented Reality solutions\n\n\nSolAR is an open-source framework released under Apache license 2.0 making it possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\nBy using SolAR, you can easily build augmented reality applications by testing different vision based localization solutions, create and share your own camera pose estimation pipeline with the community, and even develop efficient low-level processing elements to meet specific requirements.\n\n\nSolAR is a framework that improves interoperability for augmented reality applications and offers efficiency and robustness thanks to a modular software pipeline architecture.\n\n\n\n\nSolAR is always improving\n\n\nSolAR is an open-source project. Join the community, contribute to the SolAR framework and create a new breed of augmented reality.\n\n\n",
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
      content: "\nTable of Contents\n\nsubmenuconfig\nWhat\nWhy\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nWhat\n\n\nSolAR is an open source framework dedicated to Augmented Reality (AR).\n\n\nIt offers a C++ SDK to easily and quickly develop and use custom solutions for camera pose estimation. It provides developers with a full chain from low-level vision components development to camera pose estimation pipelines and AR service development.\n\n\nThe SolAR framework is open-source and released under Apache license 2.0,\nthat lets you use it for research as well as for commercial purposes\naddressing various domains (smart factory, smart home, real estate,\nhealth, etc.).\n\n\nSolAR aims at stimulating the interaction between all actors of AR development for the benefit of end-users.\n\n\nA SolAR compatible Unity plugin is coming soon.\n\n\n\n\nWhy\n\n\nAR applications developers and end-users face a dilemma.\n\n\nOn one hand, major IT actors have released toolkits to develop AR applications. Nevertheless, they do not always meet the specific needs required by dedicated use cases or contextual environments (localization accuracy, lighting conditions, indoor/outdoor environments, tracking area range, dynamic scenes, etc.).\n\n\nNo solution fits all, and generally, these toolkits do not provide the level of tuning required to optimally adapt the vision based localization solution to the use case. Moreover, these closed solutions do not always ensure the confidentiality of data, and can store information concerning your environment (3D maps, key frames) or the augmentations (3D meshes, procedure scenarios) that could contain crucial intellectual property and private information.\n\n\nOn the other hand, open source vision libraries and SLAM implementations can generally be modified and configured to optimally meet AR applications requirements. However, many SLAM implementations generally developed by academic actors do not provide the license or the level of maturity required for the development of commercial solutions. Likewise, open source vision libraries offer a huge number of low-level functions but require a huge expertise and important development resources to obtain a usable camera pose estimation pipeline ready for commercial use.\n\n\nTo that end, SolAR offers an alternative to current commercial AR SDKs or existing open-source solutions, providing the benefits of both worlds – openness, ease of use, efficiency, adaptiveness. It aims at creating an ecosystem bringing researchers, developers, and end-users together to help the adoption of augmented reality.\n\n\n",
      id: 13
    });
    

  

    index.add({
      title: "how",
      content: "\nTable of Contents\n\nsubmenuconfig\nhow\nSolAR is open-source\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nhow\n\n\n\n\n\n\n\nThe SolAR Framework addresses the full chain of AR applications development:\n\n\n\n\nComponents creation: SolAR defines a unique API for basic components required for camera pose estimation (features extractor, descriptors calculation, matching, Perspective N Points, homography, image filters, etc.). The SolAR community can develop new components compliant with the SolAR API, whether royalty free or under a commercial license. To ease the publication of your SolAR components, you can embed them in containers.\n\n\nPipeline implementation of camera pose estimation: You can download containers of components published by the SolAR community. SolAR provides developers with a pipeline mechanism allowing to connect SolAR components to define your own camera pose estimation solution (today through a SDK, soon thanks to a dedicated graphic editor). When your pipeline is validated, you can publish it for AR applications developers.\n\n\nAR service development: By controlling the SolAR SDK directly from Unity, load the camera pose estimation solution developed by the SolAR community that best fits your application requirements. Simply develop your AR application as with any AR SDK and roll it out. Since SolAR is based on a unified interface, you will be able to easily make your application evolve with the new solutions developed by the SolAR community.\n\n\n\n\nThe following video presents these 3 steps in more detail:\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n\n\nSolAR is open-source\n\n\nThis framework is open-source and released under Apache license 2.0,\nthat lets you use it for research as well as commercial purposes.\n\n\n",
      id: 14
    });
    

  

    index.add({
      title: "who",
      content: "\nTable of Contents\n\nsubmenuconfig\nWho ?\nContact Mail\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nWho ?\n\n\n\n\n\n\n\nThe SolAR initiative was launched by the b&lt;&gt;com Institute of Research and Technology, and is open to any contributors or users who share the SolAR goals.\n\n\nOur Contributors\n\n\n\n\n\n\n\n\n\n\nContact Mail\n\n\nFor any requests, please contact us.\n\n\n",
      id: 15
    });
    

  

    index.add({
      title: "when",
      content: "\nTable of Contents\n\nsubmenuconfig\nSolAR roadmap\nContact Mail\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nSolAR roadmap\n\n\nThe SolAR source code is going to be released for Windows and Linux in early November.\nIt will include the interface definition required to build simple camera pose estimation pipelines (samples will be given for natural image markers and fiducial markers) as well as a Unity plugin allowing AR service developers to create their first AR applications using SolAR.\n\n\nThe following roadmap presents the features that will be implemented in a near future on SolAR core (pipeline, multi-threading, openVX compliance, Android and iOS support, etc.) as well as the new expected components allowing the creation of extended camera pose estimation pipelines (SLAM, visual/inertial, depth sensor support, etc.).\n\n\nThis roadmap is a projection, and may be subject to modifications. Please contact us if you have any questions.\n\n\n\n\n\n\n\nAll contributions are welcome to bring about this roadmap!\n\n\n\n\nContact Mail\n\n\nFor any requests, please contact us.\n\n\n",
      id: 16
    });
    

  

    index.add({
      title: "for whom",
      content: "\nTable of Contents\n\nsubmenuconfig\nFor whom is SolAR?\nSolAR applications\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nFor whom is SolAR?\n\n\n\n\nFor component developers, allowing them to create specific and optimized basic vision processing elements and share them with the community, either for free or not.\n\n\nFor pose estimation developers, allowing them to create a pose estimation pipeline with the best computer vision components available.\n\n\nFor AR service developers, allowing them to benefit from the best pose estimation pipelines for their AR applications.\n\n\n\n\n\n\nSolAR applications\n\n\nSolAR does not aim at focalizing on dedicated use cases, but rather offers a generic framework addressing all kinds of applications where AR can bring an added value:\n\n\n\n\nHome\n\n\n\nGaming, enhanced video contents, IoT interaction interface, etc.\n\n\n\n\n\nHealth services\n\n\n\nSurgery aid, rehabilitation, training, education, etc.\n\n\n\n\n\nIndustry\n\n\n\nAssembly, quality control, maintenance, factory planning, logistics, training, monitoring, sales and marketing, etc.\n\n\n\n\n\nReal estate\n\n\n\nConsultation, design, companion on construction sites, supervision, training, sales and marketing, etc.\n\n\n\n\n\nAnd much more.\n\n\n\n\n",
      id: 17
    });
    

  

    index.add({
      title: "programmer's guide",
      content: "\nTable of Contents\n\nsubmenuconfig\nThe programmer&#8217;s guide\nSolAR Overview\nSolAR Data Structures\nSolAR components interfaces\nSolAR components handling\nFrequently Asked Questions\nContact Mail\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nThe programmer&#8217;s guide\n\n\n\n\n\nSolAR Overview\n\n\nSolAR is a solution to easily and quickly implement custom camera pose estimation pipelines based on a set of vision and mathematics components in order to make them available to AR application developers.\n\n\nThe SolAR core handles everything that will allow the implementation of a pipeline:\n\n\n\n\nSolAR Data Structures define the information that flow in the pipelines and are exchanged between components.\n\n\nSolAR Components Interfaces define a standardized interface for the different categories of basic processing elements required to implement camera pose estimation (i.e.: key point extractor, descriptor computation, etc.). This unified interface is required to ensure interoperability between components allowing to easily swap one with another to improve the final camera pose estimation pipeline.\n\n\nThe SolAR Pipeline Manager handles the implementation of a pipeline by loading components, connecting them, and running the pipeline.\n\n\n\n\nThe SolAR Components are implementations of basic processing elements compliant with the SolAR components interfaces. Several components can implement the same component interface. In general, these components are created by wrapping computer vision libraries that could be either open-source (OpenCV, PCL, ROS, etc.) or proprietary. Each component can define its own parameters that will be used to fine tune the camera pose estimation solution.\n\n\n\n\n\n\n\n\n\nComing soon: configure components on the fly, pipeline, multithread, metadata.\n\n\n\n\n\n\nSolAR Data Structures\n\n\nThe SolAR pipeline consists of a chain of basic processing elements linked together so that the outputs of each element are the inputs of the next one. In order to provide modularity, SolAR specifies standard data structures defining the information exchanged between components required to implement a camera pose estimation solution.\n\n\nThe following categories describe the current SolAR data structures, with more to come.\n\n\nImage\n\nA SolAR image is an array of pixels where each pixel is defined by a set of color components coded with a given number of bits. Each pixel can be encoded with a dedicated colorimetric space (RGB, YUV, LAB, etc.). Contrary to OpenCV, an image is not just a matrix or an array. A SolAR image is clearly defined as an image object to ensure that a component waiting for an image as an input will not receive a random matrix such as a pose. Thus, an image is defined by:\n\n\n\n\nThe image size (width, height)\n\n\nThe image layout such as LAYOUT_GRB, LAYOUT_BGR, LAYOUT_GREY, LAYOUT_RGBA, LAYOUT_RGBX, LAYOUT_UNDEFINED\n\n\nThe pixel order either INTERLEAVED or PER_CHANNEL\n\n\nThe size of each color component, also called data type which can be either TYPE_8U, TYPE_16U, TYPE_32U, TYPE_64U\n\n\nA pointer to the raw data\n\n\n\n\nIn order to limit memory allocations and copies, which can drastically impact the efficiency of the camera pose estimation implementation, an image can point to the raw data instantiated by third party libraries such as OpenCV or OpenVX.\n\n\n\nMatrix\n\nThe SolAR implementation of matrices is based on the open source Eigen library for linear algebra. The SolAR framework redefines the following matrices:\n\n\n\n\nSolARVector4f  equates to a 4x1 matrix of floats\n\n\nSolARVector4d  equates to a 4x1 matrix of doubles\n\n\nSolARVector3f  equates to a 3x1 matrix of floats\n\n\nSolARVector3d  equates to a 3x1 matrix of doubles\n\n\nSolARTranslationVectorf equates to a 3x1 matrix of floats used to define a translation\n\n\nSolARPoint_3Df equates to a 3x1 matrix of floats used to define a 3D point\n\n\nSolARPoint_2Df equates to a 2x1 matrix of floats used to define a 2D point\n\n\nSolARPoseMatrixf equates to a 4x4 matrix of floats used to define a pose\n\n\nSolARMatrix33d equates to a 3x3 matrix of doubles\n\n\nSolARRotationMatrixf equates to a 3x3 matrix of floats used to define a rotation\n\n\nSolARQuaternionf equates to a Quaternion in floats used to define a rotation\n\n\n\n\n\nPose\n\nThe SolaARPose data structure is based on a standard row major homogeneous 4x4 matrix. Euler angles and quaternions can be directly extracted from this structure built using Eigen algorithms.\n\n\n\nMarker\n\nA SolAR Marker is a structure describing a convex area in a SolAR Image. A SolAR Marker allows managing different types of markers such ad fiducial markers or checker boards. It encodes shape and pose information as follows:\n\n\n\n\nEdges: a set of SolARPoint_2Df defining the convex area. A fiducial marker can be described with four edges. The order of the points is important and impacts the structure of the marker\n\n\nTranslation: a SolARVector3f defining the translation of the marker relative to the camera\n\n\nRotation: a SolARRotationMatrixf  defining the rotation of the marker relative to the camera\n\n\n\n\nThe SolAR Marker embeds information about the marker in a minimalist way. The reason is directly linked to the desired genericity across all the existing markers in the state-of-the-art methods.\n\n\n\nFeatures\n\nThe current implementation of the SolAR Features data structure takes advantage of the OpenCV Features2D definition. However, we are currently working on an abstract API to handle multiple keypoints, features descriptors and extractors implementations using technologies such as CUDA and OpenVX. We will be especially focusing on proper memory management and avoiding useless data copying.\n\n\nThe current SolAR Features data structure is not the final implementation we are aiming for and will be undergoing changes as we actively work on it.\n\n\n\n\n\nSolAR components interfaces\n\n\nSolAR components are vision or mathematics processing elements compliant with the SolAR component interface defined by the SolAR framework.\n\n\n\n\n\n\n\nAcquisition\n\nThe Acquisition Interface manages the capturing strategy from a given device and provides the input signal to the next processing component.\n\n\nImage\n\nThe ISolARCamera interface is dedicated to acquiring images from external device. It allows grabbing the current image and sets/extracts some parameters related to the projection and acquisition models as follows:\n\n\n\n\nget/set camera acquisition parameters: get default acquisition setting parameters (image size, frame rate..). The user can also set custom parameters which force the camera grabbing parameters to that value.\n\n\nget/set camera projection parameters: get camera projection parameters including camera matrix and distortion parameters. It assumes that camera is already correctly calibrated. The user can set these parameters by performing a preliminary calibration.\n\n\n\n\n\n\nConversion\n\nThe Conversion Interface manages conversion for different data structure.\n\n\nImage\n\nThe ISolaARImageConvertor performs the conversion between several image formats. It allows converting both color and type value using one unified method which automatically detects the color and/or type layers of the input and output.\n\n\n\n\nFiltering\n\nThe Filtering Interface manages filtering operations for different data structure.\n\n\nImage\n\nThe ISolARImageFilter is dedicated to perform various filtering operations assuming input/output consistency. The interface embeds the following operations:\n\n\n\n\nBinarizing\n\n\nEqualizing\n\n\nBlurring\n\n\nErosion\n\n\nDilation\n\n\nGradient\n\n\nLaplacian\n\n\n\n\n\nFeatures\n\nThe ISolARFeaturesFilter is dedicated to filter different extracted/computed features.\n\n\n\nMarkers\n\nThe ISolARMarkerFilter is dedicated to enhance marker filtering.\n\n\n\n\nEstimation\n\nThe Estimation Interface manages several pose estimation methods for cameras, objects and markers.\n\n\nFeatures\n\nThe ISolARKeypointDetector, ISolARDescriptorExtractor and ISolARDescriptorMatcher allow to detect geometrically relevant points in the image using known algorithms such as SURF or SIFT. (SURF, SIFT..). They also compute descriptors around these points and correlate sets of matches.\n\n\nThe ISolARHomographyFinder performs an homography transformation estimation and extracts a camera pose.\n\n\n\nMarker\n\nThe ISolARMarkerFinder allows to perform marker finding operations on different types of markers. It detects, segments and recognizes the marker and estimates its pose relative to the camera.\n\n\n\n\nSolAR Third Party Connector\n\nThe SolAR third party connector is a special SolAR Component used to exchange internal SolAR pose data with any third party outside of the SolAR framework. It is used to safely provide access to a SolAR Image and its associated SolAR Pose in a thread safe race free fashion. It internally implements a mutex locked circular buffer, allowing safe producer/consumer access. It allows synchronous and asynchronous read access for the consumer.\n\n\n\n\n\n\n\nThe internal buffer size of the container is currently set at one which means only the latest image and pose are available to the consumer at any given time. In the near future, SolAR will allow users to provide initialization parameters when creating components so the users will be able to specify the size of the buffer they desire.\n\n\nProducer\n\nAny component wishing to expose its pose data to an external third party must use a Third Party Connector. It can then use the set method to set the current SolAR Image and its associated SolAR Pose. The set method is thread safe and blocking. It will not return until the lock on the internal buffer is released by the reader.\n\n\n\nConsumer\n\nAny third party external to SolAR that needs access to internal pose data of a component must connect to its Third Party Connector. It can then use either the get method or the tryGet method to get the latest SolARImage and its associated SolARPose. The get method is thread safe and blocking. This means it will not return until there is available data to read and the lock on the internal buffer is released by the writer. The tryGet method is also thread safe but non blocking. It will return immediately after being called. It will return true if it was able to acquire the lock and read the data, or false if it was unable to obtain the lock or if there was nothing to read.\n\n\n\n\n\n\nSolAR components handling\n\n\nSolAR relies on the Cross Platform Component Framework (XPCF), a versatile framework that provides dynamic component instantiation and loading from modules. Basically, modules are libraries that collect components sharing a common element: purpose, framework, etc. XPCF also provides uniform component parametrization. Using XPCF, and thanks to the unified SolAR interfaces, it will be possible to build applications by picking and choosing different components in different modules at runtime without prior knowledge of the components when the application itself is compiled.\n\n\nFor more details, please refer to the XPCF website (coming soon).\n\n\n\n\nFrequently Asked Questions\n\n\n\n\nWhat is SolAR?\nSolAR is an open source initiative to develop a framework for pose estimation that can be used for Augmented Reality (AR) applications.\n\n\nWho initiated the SolAR project?\nThe b&lt;&gt;comInstitute of Research and Technology initiated the SolAR project after collecting the feedback of AR actors, AR end-users (industry, real-estate, medical, etc.), AR developers (essentially SMEs) and computer vision experts (academic researchers and research engineers from companies).\n\n\nWho can contribute to the SolAR project?\nAnyone can contribute to the SolAR project. Contributors only need to be proficient in C++ and computer vision skills.\n\n\nCan I use the SolAR framework for my AR applications?\nOf course! Just be wary of the licenses of the components used by the pose estimation pipelines you choose as each component can be under its own license, independently of the encompassing SolAR Apache v2 license.\n\n\n\n\n\n\nContact Mail\n\n\nFor any requests, please contact us.\n\n\n",
      id: 18
    });
    

  

    index.add({
      title: "legal notice",
      content: "\nTable of Contents\n\nsubmenuconfig\nLegal notice\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhen\n\n\nfor whom\n\n\nprogrammer&#8217;s guide\n\n\nlegal notice\n\n\n\n\n\n\nLegal notice\n\n\nSince the SolAR project is managed and hosted by the b&lt;&gt;com Institute of Research and Technology, it falls under their legal notice.\n\n\n",
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
