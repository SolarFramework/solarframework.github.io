// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.ref('id')
});



index.add({
    title: "About",
    content: "About\n\nTable of Contents\n\nsubmenuconfig\nWhy ?\nWhat ?\n\nPlease contribute\nSolAR framework adapts to your specific needs\n\n\nFor who ?\nPhilosophy\nWho ?\nOur roadmap\n\nOur Partners\nOur Contributors\n\n\n\n\n\nsubmenuconfig\n\n\n\n\n\nWhy ?\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nIndustry is waiting for a sustainable, efficient, easy-to-use and interoperable solution for the roll-out of augmented reality applications in order to improve their performances, the quality of their products, the security of their employees, the experience of their clients, etc.\n\n\nBut commercial solutions, kind of black box that cannot be customized, do not always answer their requirements.\n\n\nFor this reason, the SolAR framework aims at creating an ecosystem bringing researchers, developpers, and end-users together to accelerate the augmented reality technological development.\n\n\nWe hope that this open-source framework will limit the creation of vertical siloes and enables players in the chain to offer part of an overall AR solution.\n\n\n\n\nWhat ?\n\n\nThe SolAR framework aims at providing you with a solution to build augmented reality services.\n\n\nSolAR is the Solution for AR services.\n\n\n\n\n\n\n\nPlease contribute\n\nSolAR framework is Open-source\n\nhis framework is open-source, under Apache v2 licence,\nthat lets you use it for research as well as commercial purposes\nadressing various domains (smart factory, smart home, real estate,\ne-health, etc).\n\n\nNevertheless, the components you will connect to develop your own solution can be under various licences. Always check the compatibility of the components licences, the SolAR community can not be held reponsible for a violation of the licenses of the components that you use.\n\n\n\n\nSolAR framework adapts to your specific needs\n\nBut as your requirements are particular :\n\n\n\n\nspecific environment\n\n\ndevice\n\n\naccuracy\n\n\ntracking area scale\n\n\n\n\nyou will find here all you need to build a customized and efficient solution to estimate your vision sensor pose for augmented reality purpose.\n\n\n\n\n\nFor who ?\n\n\nSolAR is for:\n\n\n\n\ncomputer vision contributors\n\n\npose estimation designers and developers\n\n\nAR services developers\n\n\n\n\n\n\n\n\n\n\n\nPhilosophy\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nSolAR aims at providing a tool for pose estimation on any device, for any AR application and any vision technology.\n\n\nAs AR usage are always different, this is difficult to define a best \"pose estimation solution\" suiting to every situation.\n\n\n\n\n\n\n\n\nrefaire un schéma équivalent plutôt que reprendre celui d&#8217;OpenCV?\nSee below the camera pose relative to a real scene (image credit: OpenCV).\n\n\n\n\n\n\n\n\n\n\nFor that purpose, SolAR provides you the framework to make possible to assemble different vision components easily to answer to your own problematics.\n\n\nYou can also help the SolAR framework by :\n\n\n\n\ngiving your feedbacks\n\n\ncontributing to it\n\n\nshare your own components.\n\n\n\n\nWe hope that the following video will help you to understand the SolAR framework philosophy :\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n\n\nWho ?\n\n\nSolAR initiative has been launched by the Technological Research\n\n\nInstitute b&lt;&gt;com, and is open to any contributors or users who share the  SolAR philosophy.\n\n\n\n\nOur roadmap\n\n\nUnresolved directive in about.adoc - include::roadmap.adoc[]\n\n\nOur Partners\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nOur Contributors\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nNam Duong\n\n\n\n\nName\n\n\nDuong\n\n\n\n\nSurname\n\n\ntest\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nPHD Student\n\n\n\n\nMail\n\n\nnam-duong.duong@b-com.com\n\n\n\n\nSkills\n\n\nMachine Learning\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nAmine\n\n\n\n\nName\n\n\nKacete\n\n\n\n\nSurname\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\namine.kacete@b-com.com\n\n\n\n\nSkills\n\n\nMachine Learning\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nNicole\n\n\n\n\nName\n\n\nLeminous\n\n\n\n\nSurname\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nProject Leader\n\n\n\n\nMail\n\n\nnicole.leminous@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nCécile\n\n\n\n\nName\n\n\nMarc\n\n\n\n\nSurname\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\ncecile.marc@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nJean-Bernard\n\n\n\n\nName\n\n\nRault\n\n\n\n\nSurname\n\n\nJean-Marc\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\njean-bernard.rault@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nJérôme\n\n\n\n\nName\n\n\nRoyan\n\n\n\n\nSurname\n\n\nGranger\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nProduct Owner\n\n\n\n\nMail\n\n\njerome.royan@b-com.com\n\n\n\n\nSkills\n\n\nAugmented reality, Virtual reality\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nAzdine\n\n\n\n\nName\n\n\nTadrist\n\n\n\n\nSurname\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nazdine.tadrist@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nThomas\n\n\n\n\nName\n\n\nWentz\n\n\n\n\nSurname\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nthomas.wentz@b-com.com\n\n\n\n\nSkills\n\n\nRGB-D pose estimation\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nSylvain\n\n\n\n\nName\n\n\nDuchene\n\n\n\n\nSurname\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nsylvain.duchene@b-com.com\n\n\n\n\nSkills\n\n\nComputer Vision / Computer Graphics\n\n\n\n\n\n\n\n\n\n\n\n",
    id: 0
  });
  

index.add({
    title: "Community",
    content: "Community\n\nTODO\n\n\n\n",
    id: 1
  });
  

index.add({
    title: "Contribute",
    content: "Contribute !\n\nTable of Contents\n\nsubmenuconfig\nContribute\nCreate a component\n\n\n\nsubmenuconfig\n\n\n\n\n\nContribute\n\n\nThere are several ways to contribute to SolAR framework.\n\n\nYou can :\n\n\n\n\ncontribute to Core framework, by defining API, architecture, framework tools &#8230;&#8203; this typically needs software engineering and architecture skills.\n\n\ncontribute to Components, by creating a new SolAR component, that can be used in a pose estimation solution&#8230;&#8203; this typically needs computer vision skills (and software skills).\n\n\n\n\n\n\n\n\n\nPlease feel free to contact us !\n\n\n\n\nCreate a component\n\n\nAnyone can create a new component. C++ and computer vision skills are useful.\n\n\nYou can create a component :\n\n\n\n\nfor your own usage, because you need a new component for your pose estimation scheme. You can keep it private.\n\n\nfor the comunity, as you think your component can be useful for other developers. You can give it public in the SolAR libraries.\n\n\n\n\n\n\n\n\n\nPlease contribute !\n\n\n\n\n\n\n\n\nil faudra ajouter ici un lien vers GIT, pour indiquer comment contribuer.\n\n\n\n\n\n",
    id: 2
  });
  

index.add({
    title: "Discover",
    content: "\nTable of Contents\n\nsubmenuconfig\nDiscover Solar\nSolAR helps you to develop customized Augmented Reality solutions\nSolAR is always improving\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhy\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nDiscover Solar\n\n\n\n\n\nSolAR helps you to develop customized Augmented Reality solutions\n\n\nSolAR is an open-source framework making possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\nBy using SolAR, you can easily build augmented reality applications by testing different vision based localization solutions, create and share to the community your own localization pipeline, and even develop efficient components to meet specific requirements.\n\n\nSolAR is a modular framework improving interoperability for Augmented Reality applications , and offering efficiency and robustness to your augmented reality applications.\n\n\n\n\nSolAR is always improving\n\n\nAs SolAR is an open-souce project, join the community and contribute to the SolAR framework.\n\n\n",
    id: 3
  });
  

index.add({
    title: null,
    content: "\n\n  \n    SolAR\n    SolAR\n    https://solarframework.github.io//\n    \n    Mon, 25 Sep 2017 08:55:57 +0000\n    Mon, 25 Sep 2017 08:55:57 +0000\n    Jekyll v3.5.1\n    \n  \n\n",
    id: 4
  });
  

index.add({
    title: "welcome",
    content: "\nTable of Contents\n\nDiscover Solar\nSolAR helps you to develop customized Augmented Reality solutions\nSolAR is always improving\n\n\n\nDiscover Solar\n\n\n\n\n\nSolAR helps you to develop customized Augmented Reality solutions\n\n\nSolAR is an open-source framework making possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\nBy using SolAR, you can easily build augmented reality applications by testing different vision based localization solutions, create and share to the community your own localization pipeline, and even develop efficient components to meet specific requirements.\n\n\nSolAR is a modular framework improving interoperability for Augmented Reality applications , and offering efficiency and robustness to your augmented reality applications.\n\n\n\n\nSolAR is always improving\n\n\nAs SolAR is an open-souce project, join the community and contribute to the SolAR framework.\n\n\n",
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
      content: "Titre discover what\n\nTable of Contents\n\nsubmenuconfig\nWhat ?\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhy\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nWhat ?\n\n\nThe SolAR framework aims at providing you with a solution to build customized augmented reality services.\n\n\nIt will allow you easily developping your own camera pose estimation pipeline to develop robust and efficient AR services for your customers.\n\n\n\n\n\n\n\nSolAR framework adapts to your specific needs\n\nAs your requirements are particular :\n\n\n\n\nspecific environment\n\n\ndevice\n\n\naccuracy\n\n\ntracking area scale\n\n\n\n\nyou will find here all you need to build a customized and efficient solution to estimate your vision sensor pose for augmented reality purpose.\n\n\n\n",
      id: 13
    });
    

  

    index.add({
      title: "how",
      content: "\nTable of Contents\n\nsubmenuconfig\nhow\nSolAR defines component interfaces\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhy\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nhow\n\n\nSolAR framework is Open-source\n\nhis framework is open-source, under Apache v2 licence,\nthat lets you use it for research as well as commercial purposes\nadressing various domains (smart factory, smart home, real estate,\ne-health, etc).\n\n\nNevertheless, the components you will connect to develop your own solution can be under various licences. Always check the compatibility of the components licences, the SolAR community can not be held reponsible for a violation of the licenses of the components that you use.\n\n\n\n\n\nSolAR defines component interfaces\n\n\nSolAR framework is a solution to assemble vision components in order to create a pose estimation solution.\n\n\n\n\n\n\n\nCore SolAR is the solution to assemble vision components\n\nSolAR Core is the solution implemented to make possible to connect components in a pose estimation solution.\n\n\n\n\n\n\n\n\npeut-être expliquer ici les choix qui ont été fait et l&#8217;aspect moyens : aspect comunautaire\n\n\n\n\n\n\nSolAR components are provided by SolAR framework\n\nSolAR components are vision components \"SolAR compatible\" that can be used in the SolAR framework.\n\n\nSolAR compatible means that your component must follow SolAR API defined in SolAR Core.\n\n\nHere are some type of components families\n\n\n\n\n\n\n\n\nSolAR can use third parties\n\nSolAR helps you to use vision components in order to create pose estimation.\n\n\nSolAR can use third parties, as some well-known opensource vision frameworks.\n\n\nFor instance, SolAR has already some components based on OpenCV.\n\n\nAs so, you can benefit from the best vision components, and assemble them.\n\n\n\n",
      id: 14
    });
    

  

    index.add({
      title: "who",
      content: "\nTable of Contents\n\nsubmenuconfig\nWho ?\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhy\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nWho ?\n\n\nSolAR initiative has been launched by the Technological Research Institute b&lt;&gt;com, and is open to any contributors or users who share the  SolAR philosophy.\n\n\nOur Partners\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nOur Contributors\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nNam Duong\n\n\n\n\nName\n\n\nDuong\n\n\n\n\nSurname\n\n\ntest\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nPHD Student\n\n\n\n\nMail\n\n\nnam-duong.duong@b-com.com\n\n\n\n\nSkills\n\n\nMachine Learning\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nAmine\n\n\n\n\nName\n\n\nKacete\n\n\n\n\nSurname\n\n\nAmine\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\namine.kacete@b-com.com\n\n\n\n\nSkills\n\n\nMachine Learning\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nNicole\n\n\n\n\nName\n\n\nLeminous\n\n\n\n\nSurname\n\n\nNicole\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nProject Leader\n\n\n\n\nMail\n\n\nnicole.leminous@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nCécile\n\n\n\n\nName\n\n\nMarc\n\n\n\n\nSurname\n\n\nCess\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\ncecile.marc@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nJean-Bernard\n\n\n\n\nName\n\n\nRault\n\n\n\n\nSurname\n\n\nJean-Marc\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\njean-bernard.rault@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nJérôme\n\n\n\n\nName\n\n\nRoyan\n\n\n\n\nSurname\n\n\nGranger\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nProduct Owner\n\n\n\n\nMail\n\n\njerome.royan@b-com.com\n\n\n\n\nSkills\n\n\nAugmented reality, Virtual reality\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nAzdine\n\n\n\n\nName\n\n\nTadrist\n\n\n\n\nSurname\n\n\nAzdine\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nazdine.tadrist@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nThomas\n\n\n\n\nName\n\n\nWentz\n\n\n\n\nSurname\n\n\nThomas\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nthomas.wentz@b-com.com\n\n\n\n\nSkills\n\n\nRGB-D pose estimation\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nSylvain\n\n\n\n\nName\n\n\nDuchene\n\n\n\n\nSurname\n\n\nSylvain\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nsylvain.duchene@b-com.com\n\n\n\n\nSkills\n\n\nComputer Vision / Computer Graphics\n\n\n\n\n\n\n\n\n\n\n\n",
      id: 15
    });
    

  

    index.add({
      title: "why",
      content: "\nTable of Contents\n\nsubmenuconfig\nWhy SolAR ?\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhy\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nWhy SolAR ?\n\n\nWe created SolAR because an opensource framework is clearly missing for pose estimation.\n\n\nSo we created SolAR to :\n\n\n\n\noffer an opensource pose estimation framework, where anyone can contribute, to take the best of the knowledges in this specific problematic.\n\n\nmake possible for vision component developers to test it in a complete pose estimation environment, as they can connect it in a end-to-end pose estimation scheme.\n\n\nmake possible for AR service developpers to have the best pose estimation for their use cases (they can choose their pose estimation solution based on SolAR).\n\n\n\n\n",
      id: 16
    });
    

  

    index.add({
      title: "when",
      content: "\nTable of Contents\n\nsubmenuconfig\nSolAR initiative\nOur roadmap\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhy\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nSolAR initiative\n\n\nSolAR initiative started in November 2016.\n\n\n\n\nOur roadmap\n\n\n\n\n\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nWARNING : mettre la roadmap ici\n\n\n",
      id: 17
    });
    

  

    index.add({
      title: "for whom",
      content: "\nTable of Contents\n\nsubmenuconfig\nfor whom is SolAR?\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nhow\n\n\nwho\n\n\nwhy\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nfor whom is SolAR?\n\n\n\n\nSolAR framework is for pose estimation experts, to make possible to create a pose estimation scheme with the best computer vision components.\n\n\nSolAR framework is also for AR service developpers : they will benefit from the best pose estimation int their AR application.\n\n\n\n\n\n\n\n\n\n",
      id: 18
    });
    

  

  
  
  



var store = [];

  
store.push({"title": "About",
  "link": "https://solarframework.github.io///about.html"
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
  
    
    store.push({"title": "why",
      "link": "https://solarframework.github.io///discover/why/"
    });
  
    
    store.push({"title": "when",
      "link": "https://solarframework.github.io///discover/when/"
    });
  
    
    store.push({"title": "for whom",
      "link": "https://solarframework.github.io///discover/for_whom/"
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
