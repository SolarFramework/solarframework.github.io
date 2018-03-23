// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.ref('id')
});



index.add({
    title: "api quick reference",
    content: "\nTable of Contents\n\nSolAR API\n\n\n\nSolAR API\n\n\n\n",
    id: 0
  });
  

index.add({
    title: "Community",
    content: "Community\n\nTODO\n\n\nPlease use slack to comunicate with the SolAR comunity\n\n\ncontribute SolAR Framework\n\n\n",
    id: 1
  });
  

index.add({
    title: null,
    content: "\n\n  \n    SolAR\n    SolAR\n    https://solarframework.github.io//\n    \n    Fri, 23 Mar 2018 13:29:17 +0000\n    Fri, 23 Mar 2018 13:29:17 +0000\n    Jekyll v3.5.1\n    \n  \n\n",
    id: 2
  });
  

index.add({
    title: "for whom",
    content: "\nTable of Contents\n\nFor whom is SolAR?\nSolAR applications\n\n\n\nFor whom is SolAR?\n\n\n\n\nFor component developers, allowing them to create specific and optimized basic vision processing elements and share them with the community, either for free or not.\n\n\nFor pose estimation developers, allowing them to create a pose estimation pipeline with the best computer vision components available.\n\n\nFor AR service developers, allowing them to benefit from the best pose estimation pipelines for their AR applications.\n\n\n\n\n\n\nSolAR applications\n\n\nSolAR does not aim at focalizing on dedicated use cases, but rather offers a generic framework addressing all kinds of applications where AR can bring an added value:\n\n\n\n\nHome\n\n\n\nGaming, enhanced video contents, IoT interaction interface, etc.\n\n\n\n\n\nHealth services\n\n\n\nSurgery aid, rehabilitation, training, education, etc.\n\n\n\n\n\nIndustry\n\n\n\nAssembly, quality control, maintenance, factory planning, logistics, training, monitoring, sales and marketing, etc.\n\n\n\n\n\nReal estate\n\n\n\nConsultation, design, companion on construction sites, supervision, training, sales and marketing, etc.\n\n\n\n\n\nAnd much more.\n\n\n\n\n",
    id: 3
  });
  

index.add({
    title: "glossary",
    content: "Glossary\n",
    id: 4
  });
  

index.add({
    title: "how",
    content: "\nTable of Contents\n\nhow\nSolAR is open-source\n\n\n\nhow\n\n\n\n\n\n\n\nThe SolAR Framework addresses the full chain of AR applications development:\n\n\n\n\nComponents creation: SolAR defines a unique API for basic components required for camera pose estimation (features extractor, descriptors calculation, matching, Perspective N Points, homography, image filters, etc.). The SolAR community can develop new components compliant with the SolAR API, whether royalty free or under a commercial license. To ease the publication of your SolAR components, you can embed them in containers.\n\n\nPipeline implementation of camera pose estimation: You can download containers of components published by the SolAR community. SolAR provides developers with a pipeline mechanism allowing to connect SolAR components to define your own camera pose estimation solution (today through a SDK, soon thanks to a dedicated graphic editor). When your pipeline is validated, you can publish it for AR applications developers.\n\n\nAR service development: By controlling the SolAR SDK directly from Unity, load the camera pose estimation solution developed by the SolAR community that best fits your application requirements. Simply develop your AR application as with any AR SDK and roll it out. Since SolAR is based on a unified interface, you will be able to easily make your application evolve with the new solutions developed by the SolAR community.\n\n\n\n\nThe following video presents these 3 steps in more detail:\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n\n\nSolAR is open-source\n\n\nThis framework is open-source and released under Apache license 2.0,\nthat lets you use it for research as well as commercial purposes.\n\n\nNevertheless, only the SolAR framework is provided under Apache 2.0. The components you can use with the help of the framework to develop your own solution have their own license, which may not be compatible with Apache 2.0 or your own legal framework. Always check the compatibility of the components' licenses with themselves and with your own project. The SolAR community gives absolutely no warranty as to the legality of any solution that may result from your use of the framework, and cannot be held responsible for your use of the framework and of the components.\n\n\nAll components that are to be hosted on SolAR’s Github repositories must be released by their copyright holders under Apache 2.0, and can only make use of third-party software released under licenses compatible with Apache 2.0. Otherwise the components have to be externally hosted.\n\n\nb&lt;&gt;com and the SolAR community will try their best to review the components hosted on SolAR’s Github, but cannot warrant that all these components will respect the aforementioned conditions. Thus, you must always check the legal conditions of any component you intend to use.\n\n\n",
    id: 5
  });
  

index.add({
    title: "Discover",
    content: "\nTable of Contents\n\nDiscover Solar\n\n\n\nDiscover Solar\n\n\nSolAR is an open-source framework released under Apache license 2.0 making it possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n",
    id: 6
  });
  

index.add({
    title: "api quick reference",
    content: "\nTable of Contents\n\nSolAR API\n\n\n\nSolAR API\n\n\n\n",
    id: 7
  });
  

index.add({
    title: "Applications",
    content: "Applications\n\nDocuments\n\n\nYou can find here a document describing use case identified for the industry.\n\n\nEnglish version\n\n\nFrench version\n\n\n",
    id: 8
  });
  

index.add({
    title: "welcome",
    content: "SolAR, Solution for Augmented Reality\n\n\n\n\n\n\nyou will find information about SolAR in the following sections\n\n\n\n\nDiscover will give you general information about the SolAR Framework project\n\n\nUse it explains how to use SolAR framework quickly, and more in depth for experts or future contributors\n\n\nContribute will give information for all SolAR contributors, as SolAR is open-source\n\n\nAPI will be helpful for all SolAR developers : contributors and users.\n\n\n\n\nBy using SolAR, you can easily build augmented reality applications by testing different vision based localization solutions, create and share your own camera pose estimation pipeline with the community, and even develop efficient low-level processing elements to meet specific requirements.\n\n\nSolAR is a framework that improves interoperability for augmented reality applications and offers efficiency and robustness thanks to a modular software pipeline architecture.\n",
    id: 9
  });
  

index.add({
    title: "technologies",
    content: "Technologies\n",
    id: 10
  });
  

index.add({
    title: "legal notice",
    content: "\nTable of Contents\n\nLegal notice\n\n\n\nLegal notice\n\n\nEditorial information\n\nSite: www.solarframework.org\nMailing address: Fondation de Coopération Scientifique b&lt;&gt;com\nZAC DES CHAMPS BLANCS\n1219, AVENUE CHAMPS BLANCS\n35510 CESSON-SÉVIGNÉ (FR)\nPhone: +33(0)2 56 35 88 00\nE-mail: framework.solar@b-com.com\nDirector of publication: Bertrand Guilbaud\nSite host: GitHub Inc.\n\n\n\nCopyright\n\nThe pictures, logos and videos on this website \"www.solarframework.org\" are protected by intellectual property laws and may not be copied or imitated in whole or in part. None of them may be reproduced without the consent of their owners or copyright holders.\n\n\n\nHyperlinks\n\nThe website \"www.solarframework.org\" includes links to other sites.\nThese pages are not part of the site \"www.solarframework.org\", whose editorial staff is not responsible and cannot be held liable for the content and information published on those sites. Links to third-party sites are provided for the sake of convenience only, and their content cannot be guaranteed.\n\n\n\nCookies\n\nSome pages on this site use cookies, i.e. information that may be stored in your hard drive to remember you over a period of time. These cookies are from Google Analytics and they are used to measure the website’s usage (visits statistics, etc.). You may find more information on how Google collects data at www.google.com/policies/privacy/partners/. For the sake of privacy, Google Analytics is configured to anonymize all IP addresses it collects on this site.\nThe cookies will remain on your computer until you delete them or until they expire after 12 months.\nYou are free to deny or delete these cookies at any time by configuring your browser not to accept any cookie and by deleting the cookies already on your computer.\n\n\nThis website receives assistance from the French government under the Investissements d&#8217;Avenir program, with reference number ANR-A0-AIRT-07.\n\n\n\n",
    id: 11
  });
  

index.add({
    title: null,
    content: "// builds lunr\nvar index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.ref('id')\n});\n\n{% assign count = 0 %}\n{% for page in site.pages %}\nindex.add({\n    title: {{page.title | jsonify}},\n    content: {{page.content | strip_html | jsonify}},\n    id: {{count}}\n  });\n  {% assign count = count | plus: 1 %}\n{% endfor %}\n\n\n{% for collection in site.collections %}\n  {% assign name = collection.label %}\n  {% assign sorted_pages = site[name] | sort:\"weight\" %}\n  {% for page in sorted_pages %}\n\n    index.add({\n      title: {{page.title | jsonify}},\n      content: {{page.content | strip_html | jsonify}},\n      id: {{count}}\n    });\n    {% assign count = count | plus: 1 %}\n\n  {% endfor %}\n{% endfor %}\n\n\nvar store = [];\n{% for page in site.pages %}\n  {% capture link %}{{ site.url }}{{ site.baseurl }}{{ page.url }}{% endcapture %}\nstore.push({\"title\": {{page.title | jsonify}},\n  \"link\": {{ link | jsonify }}\n});\n{% endfor %}\n\n{% for collection in site.collections %}\n  {% assign name = collection.label %}\n  {% assign sorted_pages = site[name] | sort:\"weight\" %}\n  {% for page in sorted_pages %}\n    {% capture link %}{{ site.url }}{{ site.baseurl }}{{ page.url }}{% endcapture %}\n    store.push({\"title\": {{page.title | jsonify}},\n      \"link\": {{ link | jsonify }}\n    });\n  {% endfor %}\n{% endfor %}\n\nfunction searchAndDisplay(query){\n  var resultdiv = $('#results');\n  var result = index.search(query);\n  // Show results\n  resultdiv.empty();\n  // Add status\n  resultdiv.prepend('Found '+result.length+' result(s)');\n  // Loop through, match, and add results\n  for (var item in result) {\n    var ref = result[item].ref;\n    var searchitem = ''+store[ref].title+'';\n    resultdiv.append(searchitem);\n  }\n}\n\n// builds search\n$(document).ready(function() {\n    var query = (decodeURI(location.search).split(\"q\" + '=')[1] || '').split('&')[0];\n    var formattedQuery = query.split(\"+\").join(\" \");\n    searchAndDisplay(formattedQuery);\n\n    $('input#search').on('keyup', function () {\n      var query = $(this).val();\n      searchAndDisplay(query);\n    });\n});\n",
    id: 12
  });
  

index.add({
    title: "Made with SolAR",
    content: ":page-layout: _auto\n= Made with SolAR\n:showtitle:\n:page-title: Made with SolAR\n:page-description: Made with SolAR\n:page-liquid:\n\nTo be done\n",
    id: 13
  });
  

index.add({
    title: "package &amp; download third parties",
    content: ":page-layout: _auto\n= package & download third parties\n\n\n== packaging\n\n. clone the following git repository:\ngit clone ssh://gitolite@forge.b-com.com/bcom-templates/builddefs/builddefs-scripts.git\n\n\nStarting from a fresh installed package (ie. result of a \"make install\"), run\nthe following perl script (under builddefs-scripts/xplatform)\n\n  $ bcom-packager.pl\n----\n  OPTIONS:\n      -s, --sourcedir                  => product root directory (where libs and includes are located)\n      -o, --osname                     => specify the operating system targeted by the product build. It is one of [win|mac|linux]. (defaults to the current OS environment)\n      -i, --includedir                 => relative path to include folder to export (defaults to the sourcedir provided with -s)\n      -l, --libdir                     => relative path to the library folder to export (defaults to the sourcedir provided with -s)\n      -r, --redistfile                 => relative path and filename of a redistribution file to use (such as redist.txt intel ipp's file). Only listed libraries in this file will be packaged\n      -d, --destinationdir             => package directory root destination (where the resulting packaging will be stored)\n      -p, --packagename                => package name\n      -v, --packageversion             => package version\n      -n, --ignore-mode                => forces the pkg-config generated file to ignore the mode when providing -L flags\n      -m, --mode [debug|release]       => specify the current product build mode. Binaries will be packaged in the appropriate [mode] folder\n      -a, --architecture [x86_64|i386] => specify the current product build architecture. Binaries will be packaged in the appropriate [architecture] folder\n      -w, --withsuffix suffix          => specify the suffix used by the thirdparty when building with mode mode\n      -u, --useOriginalPCfiles         => specify to search and use original pkgconfig files from the thirdparty, instead of generating them\n      -h, --help                       => display this help\n\n  EXAMPLES:\n      -s {path_to_root_sourcedir} --o win d {path_to_destination_dir} -p intel-tbb -v 2017.5 -l build/macos_intel64_clang_cc8.0.0_os10.11.6_release -m release -i include\n\n----\n\n. Use the artifactory packager scripts.\n\nUnder windows, use *builddefs-scripts/win/artiPackager.bat*\n\nUnder linux, use *builddefs-scripts/unixes/artiPackager.sh*\n\nUsage: run the .bat / .sh scripts where the packages are.\n\n== Using pkgm-bcom\n\n. Source: https://forge.b-com.com/www/bcom-templates//tools/pkgm-bcom-index/\n. You must have java installed on your machine: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html\n. You will need to create an artifactory API_KEY: http://repository.b-com.com/webapp/#/profile\n. Download pkgm-bcom tool here: http://repository.b-com.com/bcom-devtools-generic-local/pkgm-bcom/1.0.0/multi/pkgm-1.0.0-fat.jar\n. In order to download dependencies described in a packagedependencies.txt file, you will need to launch:\n\n    java -jar [path to]/pkgm-1.0.0-fat.jar install -a x86_64 -c release -m shared -f packagedependencies.txt -k [YOUR artifactory API KEY]\n\n. NB: this will work only if third parties are available on artifactory repository\n\nFor example packagedependencies.txt can include the two following lines:\n\n  opencv|3.2.0|opencv|thirdParties|http://repository.b-com.com/argo-generic\n  boost|1.64.0|boost|thirdParties|http://repository.b-com.com/argo-generic\n",
    id: 14
  });
  

index.add({
    title: "Search",
    content: "Search results : \n\n\n",
    id: 15
  });
  

index.add({
    title: "state of the art",
    content: ":page-layout: _auto\n= State of the art\n:showtitle:\n:page-title: state of the art\n:page-category: knowledge\n:page-description: state of the art\n:page-liquid:\n:page-layout: default\n",
    id: 16
  });
  

index.add({
    title: "Tags",
    content: "Tags\n\n{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}\n\n\n{% assign tag_words = site_tags | split:',' | sort %}\n\n\n\n\n\n  {% for item in (0..site.tags.size) %}{% unless forloop.last %}\n    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}\n    \n      {{ this_word }}\n        ({{ site.tags[this_word].size }})\n      \n    \n  {% endunless %}{% endfor %}\n\n\n\n\n  {% for item in (0..site.tags.size) %}{% unless forloop.last %}\n    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}\n    {{ this_word }}\n    {% for post in site.tags[this_word] %}{% if post.title != null %}\n      \n        \n          {{ post.title }}\n        \n        \n          {{ post.date | date_to_string }}\n        \n      \n      \n    {% endif %}{% endfor %}\n  {% endunless %}{% endfor %}\n\n",
    id: 17
  });
  

index.add({
    title: "v1",
    content: ":page-layout: _auto\n//= Titre discover who\n:showtitle:\n:page-title: v1\n:page-description: v1\n:page-layout: default\n:page-category: api\n:page-liquid:\n:toc:\n:toclevels: 1\n\n== SolAR API\n\n\n\n++++\n\n++++\n\n\n\n\n",
    id: 18
  });
  

index.add({
    title: "what",
    content: ":page-layout: _auto\n//= Titre discover what\n:showtitle:\n:page-title: what\n:page-description: what\n:page-layout: default\n:page-category: discover\n:page-liquid:\n:toc:\n:toclevels: 1\n:linkattrs:\n\n== What\n\nSolAR is *an open source* framework dedicated to *Augmented Reality (AR)*.\n\nIt offers a C++ SDK to *easily and quickly develop* and use *custom solutions for camera pose estimation*. It provides developers with a *full chain* from low-level vision components development to *camera pose estimation pipelines* and AR service development.\n\nThe SolAR framework is open-source and released under https://www.apache.org/licenses/LICENSE-2.0[*Apache license 2.0*,role=\"external\", window=\"_blank\"],\nthat lets you use it for *research* as well as for *commercial purposes*\naddressing various domains (smart factory, smart home, real estate,\nhealth, etc.).\n\nSolAR aims at stimulating the interaction between *all actors of AR development* for the benefit of end-users.\n\nA SolAR compatible Unity plugin is coming soon.\n\n== Why\n\nAR applications developers and end-users face a dilemma.\n\nOn one hand, major IT actors have released toolkits to develop AR applications. Nevertheless, they do not always meet the specific needs required by dedicated use cases or contextual environments (localization accuracy, lighting conditions, indoor/outdoor environments, tracking area range, dynamic scenes, etc.).\n\nNo solution fits all, and generally, these toolkits do not provide the level of tuning required to optimally adapt the vision based localization solution to the use case. Moreover, these closed solutions do not always ensure the confidentiality of data, and can store information concerning your environment (3D maps, key frames) or the augmentations (3D meshes, procedure scenarios) that could contain crucial intellectual property and private information.\n\nOn the other hand, open source vision libraries and SLAM implementations can generally be modified and configured to optimally meet AR applications requirements. However, many SLAM implementations generally developed by academic actors do not provide the license or the level of maturity required for the development of commercial solutions. Likewise, open source vision libraries offer a huge number of low-level functions but require a huge expertise and important development resources to obtain a usable camera pose estimation pipeline ready for commercial use.\n\nTo that end, SolAR offers an alternative to current commercial AR SDKs or existing open-source solutions, providing the benefits of both worlds – *openness, ease of use, efficiency, adaptiveness*. It aims at creating an ecosystem bringing researchers, developers, and end-users together to help the adoption of augmented reality.\n\n//We hope that this open-source framework will limit the creation of vertical silos and enable collaborators in the supply chain to each contribute their part in an overall AR solution.\n\n//It's a solution to define a set of software components that should respect a *standardized API* to easily connect them together in order to build a dedicated pose estimator.\n\n//The solution can be easily used in a *rendering engine* by AR service developers to create a new AR application suiting end-user requirements.\n\n//The SolAR framework is powerful thanks to the contribution of new components which will be available for the end-use.\n\n//These components will encapsulate external methods or classes dealing with a specific task.\n\n//TIP: NOT VALIDATED\n//TIP: Write here if you validate with your name and your comment\n",
    id: 19
  });
  

index.add({
    title: "when",
    content: ":page-layout: _auto\n//= Titre discover when\n:showtitle:\n:page-title: when\n:page-description: when\n:page-layout: default\n:page-category: discover\n:page-liquid:\n:toc:\n:toclevels: 1\n\n== SolAR roadmap\ninclude::_roadmap.adoc[]\n",
    id: 20
  });
  

index.add({
    title: "Who",
    content: ":page-layout: _auto\n= Who\n:showtitle:\n:page-description: who\n:page-layout: default\n:page-category: discover\n:page-liquid:\n:toc:\n:toclevels: 1\n:linkattrs:\n\n== Who ?\nimage::images\\BCOM-SignInnovation.png[b-com,300,link=https://b-com.com/en,role=\"external\", window=\"_blank\"]\n\n//The SolAR initiative was launched by the https://b-com.com/en[bcom] Institute of Research and Technology, and is open to any contributors or users who share the SolAR goals.\n\nThe SolAR initiative was launched by the https://b-com.com/en[\"bcom\",role=\"external\", window=\"_blank\"] Institute of Research and Technology, and is open to any contributors or users who share the SolAR goals.\n\n\n== Our Contributors\n\n\nimage:images\\Orange.jpg[Orange,100,link=https://www.orange.com/en/home,role=\"external\", window=\"_blank\"]\n\nimage:images\\Artefacto.jpg[Artefacto,100,link=http://www.artefacto-ar.com/en/,role=\"external\", window=\"_blank\"]\n\ninclude::../contribute/_contact.adoc[]\n\n\n// redirect ne marche pas en local mais avec jekyll c'est ok\n",
    id: 21
  });
  




  
  
  



var store = [];

  
store.push({"title": "api quick reference",
  "link": "https://solarframework.github.io///api/api/"
});

  
store.push({"title": "Community",
  "link": "https://solarframework.github.io///community/"
});

  
store.push({"title": null,
  "link": "https://solarframework.github.io///feed.xml"
});

  
store.push({"title": "for whom",
  "link": "https://solarframework.github.io///discover/for_whom/"
});

  
store.push({"title": "glossary",
  "link": "https://solarframework.github.io///knowledge/glossary/"
});

  
store.push({"title": "how",
  "link": "https://solarframework.github.io///discover/how/"
});

  
store.push({"title": "Discover",
  "link": "https://solarframework.github.io///discover/"
});

  
store.push({"title": "api quick reference",
  "link": "https://solarframework.github.io///api/"
});

  
store.push({"title": "Applications",
  "link": "https://solarframework.github.io///knowledge/"
});

  
store.push({"title": "welcome",
  "link": "https://solarframework.github.io///"
});

  
store.push({"title": "technologies",
  "link": "https://solarframework.github.io///knowledge/knowledge/"
});

  
store.push({"title": "legal notice",
  "link": "https://solarframework.github.io///discover/legal_notice/"
});

  
store.push({"title": null,
  "link": "https://solarframework.github.io///js/lunr-feed.js"
});

  
store.push({"title": "Made with SolAR",
  "link": "https://solarframework.github.io///made_with_solAR/"
});

  
store.push({"title": "package &amp; download third parties",
  "link": "https://solarframework.github.io///argodoc/packageanddownload/"
});

  
store.push({"title": "Search",
  "link": "https://solarframework.github.io///search/"
});

  
store.push({"title": "state of the art",
  "link": "https://solarframework.github.io///knowledge/state_of_the_art/"
});

  
store.push({"title": "Tags",
  "link": "https://solarframework.github.io///tags/"
});

  
store.push({"title": "v1",
  "link": "https://solarframework.github.io///api/v1/"
});

  
store.push({"title": "what",
  "link": "https://solarframework.github.io///discover/what/"
});

  
store.push({"title": "when",
  "link": "https://solarframework.github.io///discover/when/"
});

  
store.push({"title": "Who",
  "link": "https://solarframework.github.io///discover/who/"
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
