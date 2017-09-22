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
    content: "Contribute !\n\nTable of Contents\n\nsubmenuconfig\nContribute\nCreate a component\n\n\n\nsubmenuconfig\n\n\n\n\nhow it works\n\n\ngetting started\n\n\ncreate a component\n\n\ncontribute to core\n\n\nbest practises\n\n\ntools\n\n\n\n\n\n\nContribute\n\n\nThere are several ways to contribute to SolAR framework.\n\n\nYou can :\n\n\n\n\ncontribute to Core framework, by defining API, architecture, framework tools &#8230;&#8203; this typically needs software engineering and architecture skills.\n\n\ncontribute to Components, by creating a new SolAR component, that can be used in a pose estimation solution&#8230;&#8203; this typically needs computer vision skills (and software skills).\n\n\n\n\n\n\n\n\n\nPlease feel free to contact us !\n\n\n\n\nCreate a component\n\n\nAnyone can create a new component. C++ and computer vision skills are useful.\n\n\nYou can create a component :\n\n\n\n\nfor your own usage, because you need a new component for your pose estimation scheme. You can keep it private.\n\n\nfor the comunity, as you think your component can be useful for other developers. You can give it public in the SolAR libraries.\n\n\n\n\n\n\n\n\n\nPlease contribute !\n\n\n\n\n\n\n\n\nil faudra ajouter ici un lien vers GIT, pour indiquer comment contribuer.\n\n\n\n\n\n",
    id: 2
  });
  

index.add({
    title: "Discover",
    content: "\nTable of Contents\n\nsubmenuconfig\nDiscover Solar\nSolAR helps you to develop customized Augmented Reality solutions\nSolAR is always improving\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nwhy\n\n\nwho\n\n\nhow\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nDiscover Solar\n\n\n\n\n\nSolAR helps you to develop customized Augmented Reality solutions\n\n\nSolAR is an open-source framework making possible to easily create your own camera pose estimation solution to develop augmented reality applications.\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\nBy using SolAR, you can easily build augmented reality applications by testing different vision based localization solutions, create and share to the community your own localization pipeline, and even develop efficient components to meet specific requirements.\n\n\nSolAR is a modular framework improving interoperability for Augmented Reality applications , and offering efficiency and robustness to your augmented reality applications.\n\n\n\n\nSolAR is always improving\n\n\nAs SolAR is an open-souce project, join the community and contribute to the SolAR framework.\n\n\n",
    id: 3
  });
  

index.add({
    title: null,
    content: "\n\n  \n    SolAR\n    SolAR\n    https://solarframework.github.io//\n    \n    Fri, 22 Sep 2017 13:53:39 +0000\n    Fri, 22 Sep 2017 13:53:39 +0000\n    Jekyll v3.5.1\n    \n  \n\n",
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
      title: "how it works",
      content: "\nTable of Contents\n\nsubmenuconfig\nArchitecture\nFrequently Asked Questions\nContact\nSpecification\n\n\n\nsubmenuconfig\n\n\n\n\nhow it works\n\n\ngetting started\n\n\ncreate a component\n\n\ncontribute to core\n\n\nbest practises\n\n\ntools\n\n\n\n\n\n\nArchitecture\n\n\n\n\n\n\n\nSolAR framework is conceived to help you to connect and assemble different software components.\n\n\nIt is then possible to choose the best components for your usage.\n\n\nSolAR software priority\n\nSolAR has been conceived to offer the best management of components to allow:\n\n\n\n\nlow memory usage\n\n\ndynamic component loading\n\n\neasy building\n\n\nmodularity\n\n\n\n\nFor this, SolAR framework relies on a Component Manager conceived by the project team.\n\n\n\nComponent manager\n\nPlease click here to know more about  XPCF, the component manager used in SolAR framework.\n\n\n\n\n\n\n\n\nrajouter lien ici\n\n\n\n\n\n\n\n\nFrequently Asked Questions\n\n\n\n\nWhat is SolAR?\nThis is an OpenSource  initiative to develop a framework for pose estimation, that can be used for Augmented Reality applications.\n\n\nWho initiated SolAR project?\nThe french b&lt;&gt;com IRT initiated the SolAR project, after having &#8230;&#8203; wARNING: to be completed.\n\n\nWho can contribute to SolAR project?\nAnyone can contribute to SolAR project. This requires C++ and vision skills.\n\n\nCan I use SolAR framework for my AR applications?\nyes &#8230;&#8203;.\n\n\n\n\n\n\nContact\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nFor any request, Please Contact Us\n\n\n\n\nSpecification\n\n\nBest of vision tools\n\nThe best of vision tools should be used, and as the best components are based on C++, this framework also.\n\n\n\nModularity\n\nSolAR framework is conceived to be modular, so that you can add several components, and load it when needed.\n\n\n\nFramework API\n\nSolAR framework can be used directly in C using its API, for C developers.\n\n\nTo help developsers, components are documented :\n\n\n\n\nAPI documentation\n\n\ncomponents sample documentation\n\n\ntutorials\n\n\n\n\n\nFramework authoring tool\n\nComing soon !\n\n\nSolAR framework will soon be interfaced with a graphic interface, allowing developers that are not experimented in C++ to be able to create a pose estimation solution anywar, by assemble components with a graphic tool.\nHere are some ilustrations about how the graphical tool should be.\n\n\n\n\n\n\n\nThe authoring tool will also help you to save a pose estimation scheme, and share it with AR designers .\n\n\n\n\n\n\n\nTo help developsers, components are documented :\n\n\n\n\nAPI documentation\n\n\nComponents sample documentation\n\n\nTutorials\n\n\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nSolAR aims at providing a tool for pose estimation on any device, for any AR application and any vision technology.\n\n\nAs AR usage are always different, this is difficult to define a best \"pose estimation solution\" suiting to every situation.\n\n\n\n\n\n\n\n\nrefaire un schéma équivalent plutôt que reprendre celui d&#8217;OpenCV?\nSee below the camera pose relative to a real scene (image credit: OpenCV).\n\n\n\n\n\n\n\n\n\n\nFor that purpose, SolAR provides you the framework to make possible to assemble different vision components easily to answer to your own problematics.\n\n\nYou can also help the SolAR framework by :\n\n\n\n\ngiving your feedbacks\n\n\ncontributing to it\n\n\nshare your own components.\n\n\n\n\nWe hope that the following video will help you to understand the SolAR framework philosophy :\n\n\n\n\nYour browser does not support the video tag.\n\n\n\n\n\n",
      id: 13
    });
    

  

    index.add({
      title: "getting started",
      content: "\nTable of Contents\n\nsubmenuconfig\nGetting started\nInstall and build SolAR Framework and SolarContainerOpenCV\n\n\n\nsubmenuconfig\n\n\n\n\nhow it works\n\n\ngetting started\n\n\ncreate a component\n\n\ncontribute to core\n\n\nbest practises\n\n\ntools\n\n\n\n\n\n\nGetting started\n\n\nLinux (Ubuntu 16.04)\n\nInstall your environment following these guidelines:\n\n\nInstall pre-requisites\n\nIn a console window, enter the following command:\n\n\n\n\n\nsudo apt-get install python3-pip unzip build-essential gdb git pkg-config default-jre libqt5core5a libgtk2.0-0 libwebp5 libjasper1 libopenexr22 libopenni0 libdc1394-22 libavcodec-ffmpeg56 libavutil-ffmpeg54 libavformat-ffmpeg56 libswscale-ffmpeg3\n\n\n\n\n\nAnd follow the instructions to complete the installation\n\n\n\nInstall QT Creator from QT installer\n\nDownload qt installer for Linux 64 bits here:\nhttp://download.qt.io/official_releases/qt/5.9/5.9.1/qt-opensource-linux-x64-5.9.1.run\n\n\nThen, just run the installer. For this, open a console window and enter the following command:\n\n\n\ncd ~/Téléchargements\n\n\n\n(french version)\n\n\nor\n\n\n\n$ cd ~/Downloads\n\n\n\n(english version)\n\n\nThen:\n\n\n\n$ chmod 755 qt-opensource-linux-x64-5.9.1.run\n$ sudo ./qt-opensource-linux-x64-5.9.1.run\n\n\n\n\nSet up environmnent variables\n\n\n\ncreate a BCOMDEVROOT directory on your local hard drive\n\n\nmkdir [path]/BCOMDEVROOT\nmkdir [path]/BCOMDEVROOT/linux\n\n\n\n\n\n\nAdd the following line into your ~/.profile file:\n\n\n\nexport BCOMDEVROOT= \"[path]/BCOMDEVROOT/linux\"\n\n\n\nAlso add the following line to your .bashrc file:\n\n\n\nexport PATH=/opt/Qt5.9.1/5.9/gcc_64/bin/:/opt/Qt5.9.1/Tools/QtCreator/bin/:$PATH\n\n\n\n\n\nWindows 7/10\n\nPre-requisites\n\nInstall pkgconfig, sourcetree, python3 and jre\n\n\n\n\n\n\n\n\nlinks are required here\n\n\n\n\n\n\nInstall Visual Studio\n\nYou can either install Visual Community 2015 (adapted for OpenSource) or install Visual Studio 2015.\n\n\n\n\n\n\n\n\nCheck Visual Studio C /C ++compiler is installed correctly\n\nCreate a new C++ project and follow steps advised by the prompt.\n\n\nIf the compiler is not installed, you will have an option to install it right from the new project window.\n\n\nimage::images\\300px-CreateCProject.png [https://b-com.com/en]\n\n\nYou should verify you are able to run a console application \"hello world\" in C++.\n\n\n\n\n\n\n\n\nCheck Visual Studio C /C ++compiler is installed correctly\n\nVerify your C++ compiler is well installed and known by the system : in a developper command prompt, execute the \"cl\" command.\n\n\n\n\n\n\n\n\nInstall QT creator\n\nInstall QT community by downloading and launching the following file:\n\n\n\nhttp://download.qt.io/official_releases/online_installers/qt-unified-windows-x86-online.exe\n\n\n\nDuring installation choose a minimal QT 5.9.0 with msvc2015 64bits, and QT Tools→QT creator (default selection) only\n\n\nCheck your QT configuration\n\nOpen the \"tools/ options\" window and check compiler and debugger is installed. Every tab should be filled in .\n\n\nIf not, make sure your Visual installation is complete (see sections just above).\n\n\nIf Qt does not autodetect the windows debugger, you might need to manually install the debugging tools for Windows, as stated on  [http://doc.qt.io/qtcreator/creator-debugger-engines.html this Qt Page].\nYou can get the Windows Driver Kit that contains the debugging tools from [https://developer.microsoft.com/en-us/windows/hardware/windows-driver-kit this page].\n\n\nCompiler\n\n\n\n\n\n\n\nDebugger\n\n\n\n\n\n\n\n\n\nSet up environmnent variables\n\n\n\ncreate a BCOMDEVROOT directory on your local hard drive\nFor instance at the following location:\n\n\n\n\n[path]/BCOMDEVROOT/windows\n\n\nAdd the following environment variable:\n\n\n\nBCOMDEVROOT= \"[path]/BCOMDEVROOT/windows\"\n\n\n\n\n\n\n\n\n\ndo not use \"\\\" in BCOMDEVROOT variable!!!\n\n\n\n\n\n\n\n\n\nInstall and build SolAR Framework and SolarContainerOpenCV\n\n\nDownload and build SolAR from scratch\n\n\n\nCreate a SolAR directory\n\n\nUsing a git client, clone the following repository on the develop branch:\n\n\nssh://gitolite@forge.b-com.com/argo/tools/build-scripts.git\n\n\n\n\n\n\nfor instance, using the git command line, you may run:\n\n\n\ngit clone -b develop ssh://gitolite@forge.b-com.com/argo/tools/build-scripts.git\n\n\n\n\n\nWindows users: double click on build-scripts/solarshell.bat\n\n\nUnix users: open a terminal console, and go to your SolAR directory\n\n\nExecute the following command:\n\n\n./build-scripts/fromscratch.sh\n\n\n\n\n\n\n\nUpdate and re-build SolAR\n\n\n\nUpdate git repositories\n\n\n\n\nFrom your SolAR folder, update the develop branches of the three following git repositories: SolarFramework, SolarContainerOpenCV and xpcf.\n\n\n\n\nWindows users: double click on build-scripts/solarshell.bat\n\n\nUnix users: open a terminal console, and go to your SolAR directory\n\n\nExecute the following command:\n\n\n./build-scripts/build.sh debug\n\n\n\n\n\n\nand/or\n\n\n\n./build-scripts/build.sh release\n\n\n\n\n",
      id: 14
    });
    

  

    index.add({
      title: "create a component",
      content: "Create a component\n\nTable of Contents\n\nsubmenuconfig\nContainers and components\ninstall cookiecutter\nget the templates\ninterface\ncomponent\ncontainer\nfinalizing installation\nHow to create your Unit Test\nCreate your API documentation\nDOC API for Estimation pose developper\nComments for SolAR comunity\nGenerate API documentation with doxygen A REVOIR\nPublish your doxgen documentation A REVOIR\nCheck your documentation is available\nShare your component to the SolAR community\nComponent manager overview\nContact\n\n\n\nsubmenuconfig\n\n\n\n\nhow it works\n\n\ngetting started\n\n\ncreate a component\n\n\ncontribute to core\n\n\nbest practises\n\n\ntools\n\n\n\n\n\n\nContainers and components\n\n\n\n\n\n\n\n\nA container contains several components .\n\n\n\n\n\nFor Example, SolarContainerOpenCV includes 10 components.\n\n\n\n\ninstall cookiecutter\n\n\nrun:\n\n\n\npip install cookiecutter\n\n\n\n\n\nget the templates\n\n\nrun the following command:\n\n\n\ngit clone ssh://gitolite@forge.b-com.com/argo/tools/templates.git\ncd templates\n\n\n\n\n\ninterface\n\n\n\n$ python template_interface/cookiecutter_runner.py\n\n\n\nCopy the generated .h file (inside the [new interface] folder) into\nyour ArgoFramework/interfaces folder.\n\n\n\n\ncomponent\n\n\n\n$ python template_component/cookiecutter_runner.py\n\n\n\n\n\ncontainer\n\n\n\n$ python template_container/cookiecutter_runner.py\n\n\n\n\n\nfinalizing installation\n\n\nDo not forget:\n\n\n\n\nthat a BCOMDEVROOT (without backslashes on windows) environment variable\nmust be set, pointing to your installation folder\n\n\nthat an XPCF_REGISTRY_PATH environment variable must be set, pointing to\nthe containers XML file\n\n\nthe XML file itself must be modified, depending on your installation: precisely\nyou will have to set the path to your container library\n\n\n\n\n\n\nHow to create your Unit Test\n\n\nWrite your unit test\n\nDefine unit tests, based on boost framework .\nYou can know more about boost with this link : http://www.boost.org/\n\n\nYour Unit tests for a specific component, should be placed in the component directory/unittest.\nIf you have used the SolARComponent template, this directory should be already there.\n\n\n\n\n\n\n\n\n\nOpen {yourcomponent}/unittest/{yourcomponent}unittest.pro\n\n\nYou have to describe your unit tests in the file  {yourcomponent}unittest.cpp\n\n\n\n\nFor example\n\n\n\n#define\nBOOST_TEST_MODULE \\{Yourcomponent}UnitTest\n\n#include &lt;boost/test/unit_test.hpp&gt; (1)\n#BOOST_AUTO_TEST_CASE(TestLoadImage) (2)\n{ // test execution instructions\n}\n\n\n\n\n\n1\nPlease note your code contains include of boost\n\n\n2\nYou have to define the name of your test thanks to the boost macro \"BOOST_AUTO_TEST_CASE\".\n\n\n\n\nIn this example , the definition of the test case \"TestLoadImage\" for your component.\n\n\nIt means, that when you will execute the unit test, it will executes this test \"TestLoadImage\" following the instructions in this declaration.\nYou can define several test cases.\n\n\nInside your test, please write a kind of demo main function, but where you check results of your component function thanks to macro BOOST CHECK and/or BOOST_TEST.\n\n\nYou will find easily information about BOOST macro on Internet http://www.boost.org/doc/libs/1_64_0/libs/test/doc/html/index.html.\n\n\n\n\n\n\n\n\nThere is no \"main\" function, as it is automatically generated by boost (used in unit tests).\n\n\n\n\n\n\n\nPlease ensure that it contains sufficient tests cases to verify your code is OK (normal case, error cases).\n\n\n\n\nExample here : // Case normal, with an existing image file.\n\n\n\n\n\n\n\n\nremplacer ici par le nouveau code source SolAR\n\n\n\n\n\n\nBOOST_AUTO_TEST_CASE(TestLoadImage)\n{ // To simplify this example test, let's suppose we'll test 'float'.\n // Some test are stupid, but all should pass.\n int result= 0;\n std::shared_ptr&lt;IArgoImage&gt; myArgoImage0 = getArgoImageInstance();\n\n....\nBOOST_CHECK( myArgoImage0 !=  NULL);\n....\n\n// getArgoImageInstance should not return a null pointer result\n\nmyArgoImage0-&gt;LoadImage(&quot;../test.jpg&quot;);\nBOOST_TEST( result= = 0,&quot;ARGO ERROR: Load Image should return 0&quot;);\n// As the image indicated exists, loadImage should return 0, as a normal case\n\n}\n\nBOOST_AUTO_TEST_CASE(TestLoadImageInexistante)\n{\n// Some test are stupid, but all should pass.\nint result= 0; std::shared_ptr&lt;IArgoImage&gt;\nmyArgoImage0 =  getArgoImageInstance();\n\n....\nBOOST_TEST(( myArgoImage0 !=  NULL),&amp;quot;ARGO ERROR: ArgoImage should not return null pointer&amp;quot;);\n\nresult=  myArgoImage0-&amp;gt;LoadImage(&amp;quot;../test2.jpg&amp;quot;);\nBOOST_TEST( result= = -1,&amp;quot;ARGO ERROR: Load Image should return -1&amp;quot;);\n....\n\n// As the image indicated does not exist, loadImage should return -1, an error\n\n }\n\n\n\n\nCheck your project unit tests\n\nRun it with the command line here\n*&gt;results.xml -x --log_format= XML -l all -o XML -m XML -r detailed\n\n\n\n\n\n\n\nExecute your unit tests. A command prompt should display results.\n\n\n\n\nEach test results is identified with its name\n\n\n\n\n\n\n\n\n\nThanks to the \"&gt;results.xml\" argument, a file should be created with  the resulta of your tests.\nThis are the results than jenkingswill use when your unit tests will be integrated in jenkins .\n\n\n\nAdd your unit tests in jenkins stream\n\nAdding unit tests in jenkins stream requires to modify a shell script in the ArgoAll git repository. First, clone ArgoAll and switch to the develop branch:\n\n\n\n\n\ngit clone -b develop ssh://gitolite@forge.b-com.com/argo/F-Argo/ArgoAll.git\n\n\n\n\n\nThen edit the file \"newbuild.sh\" inside the ArgoAll folder. Find the string \"# BUILDING AND RUNNING UNIT TEST\".\nYou will see several lines looking like this:\n\n\n\n\n\nmakeAndInstall &amp;quot;ArgoImageOpencv/unittest&amp;quot; &amp;quot;../../../../ArgoImageOpencv/unittest/ArgoImageOpencvUnitTest.pro&amp;quot;\n\n\n\n\n\n\n\nNow copy paste this line, and replace \"ArgoImageOpencv/unittest\" with \"[Yourcomponent]/unittest\" and \"ArgoImageOpencvUnitTest.pro\" by [YouComponentUnitTest.pro].\n\n\nThis new line will ensure that your test will be built by Jenkins.\n\n\nThen find the string \"running unit tests\". You will see lines looking like this: ./ArgoImageOpencvUnitTest --log_format= JUNIT --log_level= all --report_level= no --log_sink= ../../../tests/ArgoImageOpencvUnitTest.xml\n\n\nCopy paste this line, and replace : . \"ArgoImageOpencvUnitTest\" with [YouComponentUnitTest] . \"ArgoImageOpencvUnitTest.xml\" with[YouComponentUnitTest].xml\n\n\nThis new line will ensure that Jenkins will run your test. Save and close \"newbuild.sh\".\n\n\nCommit and push your changes. Done!\n\n\n\n\n\n\n\nCreate your API documentation\n\n\n:toclevels:2\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nSee doxgen syntax, with the samples given by SolAR framework.\n\n\n\n\n\n\n\n\nIf you use QT creator, you can use the DOXYGEN comments completions (check if activated in options/completion)\n\n\n\n\n\n\n\nDOC API for Estimation pose developper\n\n\nIf your documentation is destinated to Estimation Pose Developper or designer, aka framework users, you just need to comment your H files that are shared in SolAR framewok\n\n\n\n\n\n\n\n\nremplacer ici par le GIT SolAR\n\n\n\n\n\n\n\n\ngit clone ssh://gitolite@forge.b-com.com/argo/F-Argo/ArgoFramework.git\n\n\n\n\n\nThis is a subpart of documentation, as Framework users don&#8217;t need to know how the SolAR framework is built inside.\n\n\n\n\nComments for SolAR comunity\n\n\n\n\n\n\n\n\nje pense que cette partie n&#8217;est pas claire, à reformuler\nYou have to comment your whole code with the same format as the H files, with doxygen format.\nNo Doxygen documentation will be generated, but the comments will help the SolAR comunity to understand and contribute to the code.\n\n\n\n\n\n\n\nGenerate API documentation with doxygen A REVOIR\n\n\n\n\n\n\n\n\ncette partie est à revoir complètement, suite à l&#8217;intégration de la création de doc DOXYGEN dans jenkins.\nDownload Doxygen http://www.stack.nl/~dimitri/doxygen/\nInstall it on your computer.\nYou can use Doxygen in two modes. Run Doxygen :\n\n\n\n\n\nYou just have to run Doxygen on the \"SolARFramework\" project.\nIt will generate API documentation based on H files in the SolAR framework repository. *The API documentation will be available in a directory named doxygen and subdirectory html.\n\n\n\n\nPublish your doxgen documentation A REVOIR\n\n\n\n\n\n\n\n\ncette partie est à revoir complètement, suite à l&#8217;intégration de la création de doc DOXYGEN dans jenkins.\ncopy and paste your doxygen directory from the working directory with your clone of SolAR website.\nIf not already done, execute:\n\n\n\n\n\n\n\n\n\n\n\nremplacer ici par le GIT SolAR\n\n\n\n\n\n\n\n\ncd c:/DEV/websiteSolAR\ngit clone ssh://gitolite@forge.b-com.com/argo/Argo-Doc/argo-site.git solAR\ngit checkout develop\n\n\n\n\n\nadd your doxygen directory in git website directory example\n\n\n\n\n\n\n\n\nremplacer ici par le GIT SolAR\n\n\n\n\n\n\n\n\ncp doxygen c:/DEV/solAR\ncd c:/DEV/solAR\ngit status\ngit commit\ngit checkout\ngit push\n\n\n\n\n\n\n\nCheck your documentation is available\n\n\nConsult this link to be sure the documentation is up-to-date.\n\n\n\n\n\n\n\n\nchanger le lien avec le nouveau lien\n\n\n\n\n\n\n\n\n\n\n\nremplacer ici par le lien doc SolAR\n\n\n\n\n\nhttps://forge.b-com.com/www/SolAR/doxygen/html/\n\n\n\n\nShare your component to the SolAR community\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nCommit your component to the gforge\n\nIn your new SolARComponent folder\n\n\n\n\n\ngit init\n\n\n\n\n\nAdd an initial file for the first commit\n\n\n\n\n\ngit add README.adoc\n\n\n\n\n\nFirst local commit\n\n\n\n\n\ngit commit -m \"first commit : README.adoc\"\n\n\n\n\n\n\n\n\n\n\n\nest-ce encore d&#8217;actualité? on n&#8217;aura plus un GIT par composant,si ?\nCreate the git repository on the gforge.\nFor example, here the url of the ArgoDescriptor component\n\n\n\n\n\nPush the first file to the distant repository\n\n\n\n\n\n\n\n\nremplacer ici par le GIT SolAR\n\n\n\n\n\n\n\n\ngit remote add origin http://forge.b-com.com/git/argo/F-Argo/packages/ArgoDescriptor.git\ngit push --set-upstream origin master\n\n\n\n\n\nMove to the develop branch git branch develop\n\n\n\n\n\ngit push --set-upstream origin develop\n\n\n\n\n\n\n\n\nComponent manager overview\n\n\nThe component manager will help you to load and use your component.\n\n\nPlease have a look at the component manager to know how to create your component compliant with the framework.\n\n\nPlease click here to know more about  XPCF, the component manager used in SolAR framework.\n\n\n\n\n\n\n\n\nrajouter lien ici\n\n\n\n\n\n\n\nContact\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nFor any request, Please Contact Us\n\n\n",
      id: 15
    });
    

  

    index.add({
      title: "contribute to core",
      content: "Contribute to Core\n\nTable of Contents\n\nsubmenuconfig\nSolAR Core presentation\nContainers and components\nThe SolAR core\nSolar Core GIT\nBest practises\nContact\n\n\n\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nPlease contribute to SolAR !\n\n\n\n\n\n\n\n\nThe SolAR initiative is looking for contributors for architecture, development and documentation on the Core of the framework.\n\n\n\n\n\n\n\nsubmenuconfig\n\n\n\n\nhow it works\n\n\ngetting started\n\n\ncreate a component\n\n\ncontribute to core\n\n\nbest practises\n\n\ntools\n\n\n\n\n\n\nSolAR Core presentation\n\n\nThe SolAR core handles\n\n\n\n\nthe dynamic load of different components embedded in containers downloaded from different distant servers.\n\n\nthe connection between some of these components, their configuration\n\n\nthe feature of saving the  pose estimator scheme (the required components, their configurations as well as their connectivities)\n\n\nto build a dynamic library that could be directly used by third applications.\n\n\nmulti-threading management (?) A VALIDER\n\n\nlocal and distant distributed architecture management\n\n\n\n\n\n\n\nMoreover, the *SolAR core* has to manage the compatibility between components licenses and supported  plateforms by informing the user of conflicting components due to incompatible license or plateform //availability.\n\n\n\n\n\nCore SolAR is the main part of SolAR, where components can be connected to realize a pose estimation.\n\n\n\n\nThe whole solution for pose estimation, connecting different vision SolAR components is called a \"pose estimation scheme\" or a \"pose estimation peipeline\".\nPose estimation scheme is currently done with the SLAM technique.\n\n\n\n\n\nSLAM schema, since the Parallel Tracking And Mapping implementation, takes advantage of multi-threading to be able to execute the camera pose estimation as well as mapping and loop closure detection in real-time on low ressources terminals.\n\n\n\n\nIn this way, camera pose can be estimated at frame rate while mapping and loop closure detection that are processor-consuming can be executed in parallel when needed according to pre-defined criteria.\n\n\n\nMoreover, augmented reality applications generally require very low latency tracking (even more when executed on see-through displays) requiring local computation, but mapping or loop closure detection can be remotely executed to reduce local terminal load.\n\n\n\n\nContainers and components\n\n\n\n\n\n\n\n\nA container contains several components .\n\n\n\n\n\nFor Example, SolarContainerOpenCV includes 10 components.\n\n\n\n\nThe SolAR core\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nSolAR Core architecture\n\nSolAR Editor (roadmap 2018) will totally rely on SolAR Core architecture, that is why Core architecture has been conceived to be modular.\n\n\n\n\n\n\n\n\ncécile: je pense que qqs chémas d&#8217;architecture logicelle de SolAR Core seraient utiles ici.\n\n\n\n\n\n\nSolAR Core repository structure\n\n|- config |- doc |- interfaces |- libs |- models |- scripts |- src |-\nresources |- samples |- tests |- tools\n\n\nconfig/\n\n\n*application’s configuration (can be embedded in the application through a bundle or setup, or deployed in the OS' specific configuration folder  - for instance /etc on unixes)\n\n\ndoc/\n\n\n\n\ndocumentation\n\n\n\n\ninterfaces/\n\n\n\n\nlibrary public API (for C/C++ packages). Can also contain client/server remoting interface description files (Corba’s IDL, COM/DCOM, dbus' xml, C header file for in house stub/skeleton code generators for  pcz etc…)\n\n\n\n\nlibs/\n\n\n\n\nproject directory entry point for all the submodules library the main project depends on (NOTE : submodules can also be included at other levels of the project tree, depending on their purpose)\n\n\n\n\nmodel/\n\n\nconception models (UML, Merise …)\n\n\nscripts/\n\n\n\n\nscripts (database creation, packages installation, deployment …) not\nused during project build\n\n\n\n\nsrc/\n\n\nmain product/executable source code\n\n\nresources/\n\n\nmain product/executable resources (deployed in /usr/share in linux, or\nbundled in the application)\n\n\nsamples/\n\n\n\n\nusage samples\n\n\n\n\ntests/\n\n\nmain product/executable’s tests\n\n\ntools/\n\n\nmain product/executable’s tools used for project build(code generators\n…)\n\n\nlibs/libname/doc\n\n\n\n\nlibname&#8217;s documentation\n\n\n\n\nlibs/libname/interfaces/\n\n\nlibname&#8217;s public interface\n\n\nlibs/libname/src/\n\n\n\n\nlibname&#8217;s source code\n\n\n\n\nlibs/libname/samples/\n\n\n\n\nlibname&#8217;s use samples\n\n\n\n\nlibs/libname/tests/\n\n\n\n\nlibname&#8217;s tests\n\n\n\n\n[https://forge.b-com.com/plugins/docman/?group_id= 251&amp;action= show&amp;id= 935\ntypical header of your source files]\n\n\n\n\n\nSolar Core GIT\n\n\n\n\n\nBest practises\n\n\n\n\n\nContact\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nFor any request, Please Contact Us\n\n\n",
      id: 16
    });
    

  

    index.add({
      title: "best practises",
      content: "Best practises\n\nTable of Contents\n\nsubmenuconfig\nProject organization\n\nFiles\n\n\nC / C++ Coding Rules\n\nLanguage features\nLibraries and headers\nNaming conventions\nDesign conventions\nLayout conventions\nTracing and debugging\nError handling\nMiscellaneous conventions\nDocumentation\nC/C++ Performance rules\nTools\n\n\nAppendix A.\tCode sample\n\nI.\tPrototype C++ header file\nII.\t Prototype C++ source file\nIII.\tHow to remove ‘goto’\n\n\nAppendix B.\tRules management\n\nI.\tResponsibility\nII.\tDeviation\nIII.\tTraining\nIV.\tControl\n\n\n\n\n\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nSolAR is a framework that defines interfaces (API) to computer vision components and a GUI that is used to graphically build Camera Pose Estimation schemes, based on the framework, for different applications/needs.\nThe following rules shall be used for every addition/modification to the SolAR project.\nThis encompasses the SolAR framework and the GUI interface and unless otherwise specified, these rules shall apply to both.\n\n\n\n\nsubmenuconfig\n\n\n\n\nhow it works\n\n\ngetting started\n\n\ncreate a component\n\n\ncontribute to core\n\n\nbest practises\n\n\ntools\n\n\n\n\n\n\nProject organization\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nIn order to ease the source code management, we should follow the same hierarchy for each module. A module typically becomes one dynamic or static library (dll or lib). To make the code more accessible and friendly for everyone, developers should follow the rules below:\n\n\nFiles\n\n\n\n\n\n\n\nC++/C modules\n- Project-wide definitions must be in a dedicated header file (for instance definitions.h)\n- Each module may have a common .h file that contains all common constants, macros, enum, structures… It should not contain elements that are not common to classes in the module.\n\n\nC++/C source files\nC++/C source files should contain the implementation of only one class (except for very small private utility classes related to that class).\nSee Naming conventions for naming conventions.\n\n\nC++/C headers files\nC++/C headers files should contain the declaration of only one class (except for very small public utility classes related to that class).\nSee Naming conventions for naming conventions.\n\n\nDirectory layout for each module\nThe directory layout for each module should be as described in:\n coding_rules.adoc chapter Project organisation\n\n\n\n\n\n\n\nC / C++ Coding Rules\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nWhy restricting C++?\n\n\nEven if compilers now correctly compile even the most advanced C++ language features, some advanced features make the code overly complex and difficult to maintain.\n\n\nWhy restricting C?\n\n\nC can be written in many ways to do the same things but some ways are more obfuscated and offers less robustness.\n\n\nThen, what language to use?\nb&lt;&gt;com is using a mix of C and C++ based on existing code, external dependencies (like platform types, SDK, etc).\n\n\nThat’s why the following rules makes sense in our environment and, in order to facilitate porting and code review, developers must use the set of rules defined below. An example of code and header can be found in annexes A1 and A2.\n\n\nLanguage features\n\nAs it is very easy to make unreadable and non-understandable C code, here are a few rules/restrictions to follow for the C language itself:\n\n\n\n\n\n\n\n\nTemplates\nTemplates should be used following the \"KISS\" principle. Extreme template programming must be avoided and replaced with ad-hoc design to ensure code maintainability.\n\n\nExceptions\nExceptions must not be used outside package boundary (i.e. outside a static or dynamic library no exception must be thrown).\n\n\nOperator overload\nOperator overloading should be used appropriately.\n\n\nWeird language features of C++\nWeird language features of C++ must not be used, especially:\n- static variables that invoke constructors at initialization time  (except for some very special cases, such as the singleton pattern)\n- run-time type information (‘casts’ can fail at run-time)\n\n\nBit fields\nBit fields must not be used for the following reasons: they are not portable because the implementation of bit fields is left to the compiler manufacturer according to the platform; and usage of bit fields is usually inefficient in terms of code size. Use one variable instead of each bit field.\nConsider using the STL bitset template class instead.\n\n\nNamespaces\nNamespaces may be used for std classes to avoid the full Class::methName statement. But for internal classes with ambiguous names, try to always use their full class name.\n\n\n'goto' keyword\nThe 'goto' keyword should not be used, and if it is, it can only be used to jump to the end of a method for error recovery.\nBy considering the architecture of a method, this keyword can nearly always be avoided.\nSee annex A3 for examples.\n\n\n‘continue’ and ‘break’ keywords\nThe ‘continue’ statement should not be used; the ‘break’ statement should not be used except inside switch statements.\n\n\n‘return’\nThe 'return' keyword may be used anywhere in the code.\nHowever, it requires that the no dynamic allocation rule is respected (see below) and that no vital code is skipped.\nIt also requires that all synchronization is made through C++11 lock_guard objects.\n\n\nC++ types\nTypes such as bool, etc. may be used if they are not platform dependant.\n\n\nC++ iostreams\nIostreams should be used.\n\n\nDynamic memory allocations\nDynamic memory allocation should be avoided.\nMost of the time, C++ offers semantics that allows no dynamic allocation design.\nmalloc/free, new/delete should be used during initialization sequence (in the class constructors for instance)\nDuring run time, explicit memory allocations should not be used to avoid memory fragmentation and leaks.\nIf an array is needed at some point during the execution of the program, this need should preferably be planned and reserved at the initialization sequence.\nLocal arrays are recommended if they are small in size (no more than 16-32 values).\n\n\nArrays\nuse STL&#8217;s vector&lt;T&gt; and array&lt;T&gt; instead of old C-style arrays, as C-style arrays don&#8217;t behave as expected with C++ objects.\n\n\nDynamically allocation of member (aggregated/composed) object\ndynamic allocation of a \"local\" object must occur only when the inner object lifetime is different from the \"hosting\" class (aggregation case) OR when the used framework doesn&#8217;t allow the creation of the object upon class creation (for instance, when no default constructor is available).\nWhen dynamically allocating inner objects, prefer the use of STL&#8217;s shared_ptr or unique_ptr (depending on the inner object lifetime), to ensure proper behavior upon exception throwing &#8230;&#8203;\n\n\nClass instantiations during run time\nAll the necessary classes, arrays, structures should be present, allocated and initialized before run time (during the initialization sequence) except for transient objects (objects operated by a pipeline should be created at the beginning and destroyed at the end for instance)\n\n\nConstants\nConstants must be declared using static const or enum for enumeration of constants. #define must be avoided (language evolution tends to avoid #statements).\n\n\nconst\nconst keyword MUST be used. It must be used appropriately.\nUsed on method parameters, it clearly shows when a parameter is an input, input/output or output parameter.\nUsed for methods, it clearly shows that const methods leave the underlying object members unmodified. (typically getters should be const methods).\n\n\n\n\nC++11\n\n\n\n\n\n\n\n\nMove semantics\nMove semantics must not be used. In most cases, move semantics can be replaced with designing the method using C++ references upon output parameters, or with the use of STL shared_ptr.\n\n\nLambdas expressions\n\n\n\nThreads\nC++11 threads and related facilities (mutex, scoped lock_guard, future &#8230;&#8203;) must be used\n\n\nLiterals\n\n\n\nRange for\nRange for must be used to work on containers as it improves the code readibility\n\n\nauto\nauto keyword use is recommended when it simplifies the code readibility.\nIt allows to avoid explicit typing of objects when there&#8217;s not a strong interest to :\n- for iterators\n- for temporary objects\n\n\nsmart pointers\nSTL&#8217;s smart pointers must be used. When possible, it should replace most of old C-style pointers (DLL boundary issue ?)\n\n\nFunction objects\nstd::function, std::bind, std::mem_fn &#8230;&#8203; readibility, maintainability issues ?\n\n\nSTL containers initializer list\n\n\n\nDate and time\nSTL chrono, useful also for performance counters\n\n\nSTL\narray&lt;T&gt;, bitset&lt;T&gt;\n\n\n\n\n\nLibraries and headers\n\n\n\n\n\n\n\nSTL containers\nSTL should be used for container types, such as vectors, lists, maps, etc. (but must not be used across DLL boundaries).\n\n\nC++ strings\nThe C++ string object should be used for string manipulation (but must not be used across DLL boundaries).\n\n\nC++ 'cin', 'cout', 'cerr'\nThe C++ 'cin', 'cout', 'cerr' must not be used (except inside unit test code and command line tools).\n\n\nC 'stdin', 'stdout', 'stderr'\nThe C 'stdin', 'stdout', 'stderr' must not be used (except inside unit test code and command line tools).\n\n\nC headers/libraries\nC headers/libraries may be used.\n\n\nSystem specific headers/libraries\nSystem specific headers/libraries must not be used\n(except in system specific source code – in that case it should be clearly isolated and identified). The code should use as little as possible the windows SDKs (tradeoff between using existing code and code created from scratch).\n\n\nMultiple header include\nTo avoid multiple definitions, each header must have:\n#ifndef HEADERNAME_H\n#define HEADERNAME_H\n&lt;header&gt;\n#endif // HEADERNAME_H\n\n\nInclude inside header files\n#include should not be inside header files in order to avoid include files obfuscation, and to prevent some cases of bad build of a project which shares dependencies with a non-rebuilt project.\n\n\nFunction and variable declaration\nFunction and variable declarations must be done in header files (and not in other files).\n\n\n#pragma once\nUse of #pragma once is prohibited :\n- even if it is supported by a vast majority of c++ compilers, it is not a standard directive of the language\n- although it protects from header naming conflict, it doesn&#8217;t prevent from ncluding a header twice if it exists in more than one location in a project as files are excluded based on their filesystem-level identity.\n\n\n\n\n\nNaming conventions\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\n\n\n\n\n\n\nAbout names\n- Words must be in English.\n- Words inside the name must start with an uppercase letter. Other letters of the word must be lowercase letters (except for constants).\n- Names should not contain underscores '_' (except for constants and the prefixes as specified bellow).\n- Names should not contain abbreviations (except if the abbreviation is widely used in the particular field, such as ESDescriptor for “elementary stream descriptor”).\n- Names should be explicit according to what they will do, avoid generic names (like i, a, x…).\n\n\nC++ source files\nC++ source files must begin with the name of the class followed by ‘.cpp’.\n\n\nC source files\nC source files must begin with the name of the class followed by ‘.c’.\n\n\nC++/C headers files\nC++/C header files must begin with the name of the class followed by ‘.h’.\n\n\nC++ template headers files\nC++ template header files must begin with the name of the class followed by ‘.[inl|tpl]’.\n\n\nC++ template source files\nC++ template source files must begin with the name of the class followed by ‘.[ipp|tcc]’.\n\n\nClasses,\nstructures,\nglobal functions, structure tags, typedefs,\nenumerated values\nClass names, structure names, global functions, structure tags, typedefs, enumerated values must have their name beginning with an uppercase.\nExample MatrixBase\n\n\nMethods\nMethod names must begin with a lowercase letter (except for constructors and destructors).\nExample\treadAccessUnit()\n\n\nPrivate members\nPrivate member variable names must be prefixed with 'm_' and start with a lowercase letter.\nExample\tm_accessUnitList\n\n\nPrivate static members\nIf used, private static member variable names must be prefixed with 's_' and start with a lowercase.\nExample\ts_socketCounter\n\n\nLocal variables\nLocal variable names must start with a lowercase letter.\nExample\tdataLength\n\n\nConstants\nConstants must be all uppercase with each word separated by “_”.\nExample\tMAX_LENGTH\n\n\n\n\n\nDesign conventions\n\n\n\n\n\n\n\nMultiple inheritance\nPolymorphism\nMultiple inheritances should not be used, except if the additional classes are pure virtual (equivalent to Java interfaces).\n\n\nClasses with public virtual methods\nClasses with public virtual methods must have a virtual destructor (or else the destructor will not be called). When possible, use the appropriate compiler warning to be warn when destructor isn&#8217;t declared virtual while some public methods are.\n\n\nStatic member variables\nStatic member variables must not be used (these are basically “global variables”). (except for singleton design pattern)\n\n\nPublic member variables\nPublic member variables must not be used (except in pure “struct-like” classes). Instead, getter and/or setter methods should be provided to access member variables.\nExample\tint getMember()\n{\n&#8230;&#8203;.return m_member;\n}\nError setMember(int variable)\n{\n&#8230;&#8203;.if (variable&#8230;&#8203;)\n&#8230;&#8203;.{\n&#8230;&#8203;&#8230;&#8203;..m_variable = variable;\n&#8230;&#8203;&#8230;&#8203;..return NoErr;\n&#8230;&#8203;.}\n&#8230;&#8203;.return Error_NUMBER;\n}\n\n\nUnsigned/signed types\nSigned and unsigned computations should not be mixed. Signed and unsigned doesn’t work well together and are, in many cases, not comparable one another.\nSituations like “comparing unsigned values with potentially negative values” or “use signed computations to be casted into unsigned variables” makes the code vulnerable.\n\n\nSigned types\nUnsigned types  should be used.\nSigned types should only be used when the value for the variable or parameter in question could sensibly be negative.\n\n\n'enum' type\nFor variables or parameters that may take one of a set of values whose representation is arbitrary, the enum type should be used.\nExample\tenum CM_Colors { CM_RED, CM_GREEN, CM_BLUE };\n\n\nDynamic length structure\nIt is recommended to avoid structures with dynamic length. However, if they are used, the size should be bounded in size in order to avoid unlimited memory occupation.\n\n\nPreprocessor definitions\nThe definition and use of preprocessing flags (#ifdef/#ifndef) in the source code should be limited; in particular, there should not be any OS or compiler specific code.\nHowever, if specific code is present, it should be isolated and clearly identified.\nMost of the time, a different design approach allows to avoid inlined OS preprocessor definitions (namespace or inheritance usage for instance).\n\n\nCode under conditional compilation flags\nCode under #if, #ifdef, #ifndef should be limited. Theses sections, if not build with the rest of the code, can easily be broken without notice.\n\n\nInline\nInline may be used instead of macro for functions that are called often and when they are more than one line long.\n\n\nRange of variables\nConsider the range of each variable: each variable should remain local to a code block as much as possible.\nVariable like the for iterator can remain local to the loop. If the if condition statement block needs a local variable: declare it inside the statement block. This variable will not be visible outside the block, preventing misuse.\nNote for Intel compilers: before ICC11, declaring a variable into a for statement for (int myVariable;…) resulted in having the variable defined locally to the function containing the for. With ICC11, this variable exists only with the for statement code block.\nExample\tif (myCondFct())\n{\n&#8230;&#8203;.\tint myLocalVar = methodVar * m_aMember;\n&#8230;&#8203;.useMyLocalVar(myLocalVar);\n}\naMethodThatCanNotUseMyLocalVarHere();\nmyLocalVar is only used in the if statement block. If someone attempts to use it outside, the project will not build. This variable only serves that code block and it is not useful outside. The code is easier to read, no need to monitor myLocalVar, or wonder if it is used elsewhere…\n\n\nScope of variables\nAvoid using one variable for multiple purposes (the compiler handles this optimization process better than anybody).\n\n\nCode organization\nIt is recommended to differentiate:\n- Functions dedicated to computing.\n- Functions dedicated to schedule and control the computing functions.\n- Functions dedicated to data flow management.\nExample\tError computeFunc(UInt32* res, UInt32* sourceTable)\n{\n&#8230;&#8203;.// compute code\n&#8230;&#8203;.res = sourceTable[0] * sourceTable[1] + MY_CONST;\n&#8230;&#8203;.return NoErr;\n}\nError dataFlowFunc(MyStruct destStruct, MyStruct* sourceStruct)\n{\n&#8230;&#8203;.// copy struct\n&#8230;&#8203;.memcpy(destStruct, sourceStruct, sizeof(destStruct));\n&#8230;&#8203;.return NoErr;\n}\nError controlFunc(MyStruct* destStruct, MyStruct* sourceStruct, UInt32* sourceTable)\n{\n&#8230;&#8203;.Error err;\n&#8230;&#8203;.UInt32 res;\n&#8230;&#8203;.err = computeFunc(&amp;res, sourceTable);\n&#8230;&#8203;.if (err == NoErr)\n&#8230;&#8203;.{\n&#8230;&#8203;&#8230;&#8203;..err = dataFlowFunc(destStruct, sourceStruct);\n&#8230;&#8203;.}\n&#8230;&#8203;.return err;\n}\n\n\nThread concurrency\nUse threads with caution. It is recommended to ask architecture experts about the use of threads. Use C++11 threads' library.\n\n\nSingleton design pattern\nThis pattern should not be used unless absolutely needed. When used, special care should be taken to consider concurrent access issues; the unique instance should be automatically created in the first call of “getInstance”; and the constructor should be declared as private.\nSometimes, a statically created singleton is the prefered choice (more than the dynamically created one).\n\n\nCasts\nCasts should not be used unless absolutely needed. C-style casts must be prohibited and replaced with C++ casts.\nExample\tUInt16 var1;\nUInt32 var2;\nUInt64 myResult;\nmyResult = var1 * var2;\nmyResult = (UInt64) var1 * var2;\nmyResult = UInt64(var1) * UInt64(var2);\n\n\n\n\n\n\n\n\n\n\nDon&#8217;t put two methods calls on the same line. Don&#8217;t put break keyword in switch/case statement at the end of a processing line.\n\n\n\n\n\n\nLayout conventions\n\n\n\n\n\n\n\nTabs\nTabs must not be used. Spaces must be used for indentation. Editors should be set to fill with spaces, not tabs. Tab settings tend to be different for editors, printers and web pages.\nNote: This is obviously an arbitrary choice, but mixing tabs and spaces causes much difficulty in reviewing code…\n\n\nIndentation\nIndentation offset must be set to 4 spaces and is performed according to the following rules:\n- code surrounded by braces must be indented by one level.\n\n\nBlank lines\nA blank line should be used to separate logically distinct sections of code.\n\n\nCurly brackets\nCompound statements (if, else, else if, while, for, switch, do) must ALWAYS make use of curly brackets, even where the \"associated\" body only consists of a single line. Structures must use curly brackets around the clause.\n\n\nCurly brackets\nCurly brackets should appear at the beginning of the next line or at the end of the line.\nExample\tif (a == b) {\n&#8230;&#8203;.c = 0;\n}\nelse {\n}\nif (a == b)\n{\n&#8230;&#8203;.c = 0;\n}\nelse\n{\n}\n\n\nParentheses\nAlthough C++ has precedence rules that should ensure a given expression is evaluated in the same order regardless of the compiler, additional parentheses should be used where the order of evaluation is not obvious.\n\n\nMultiple parentheses\nParentheses on multiple lines must be aligned on the previous parentheses with the same level. Operators must be at the end of the lines.\nExample\tif (a == b) &amp;&amp; &#8230;&#8203;..(c == d ||\n&#8230;&#8203;.(e == f))\nif (a == b) &amp;&amp; (c == d ||\n&#8230;&#8203;.(e == f))\n\n\nFunctions\nEach function should perform a single well-defined operation.\nFunctions should not be too long. Up to 2 pages of printout or about 100 lines of source code is reasonable. These figures include comments and blank lines.\n\n\nSource files\nSources files must be small. 1000 lines of source code is reasonable (including comments and blank lines).\nThese files are easier to read and faster to compile (Intel compiler can compile several source files in parallel).\n\n\nHeader files\nHeader files must be small. 100 lines for headers are reasonable.\n\n\nSwitch\nCase/default from a switch statement are written on the same column as the switch keyword. break; and other lines are indented.\n The break keyword must ALWAYS be on its own line. Mixing the break keyword with processing code makes the code confused : it can be interpreted as \"fall-off\" code when break is at the end of long lines.\nExample\tswitch (getStyle(config))\n{\ncase STYLE_GOOD:\n&#8230;&#8203;.// Ah, it&#8217;s so good!\n&#8230;&#8203;.break;\ncase STYLE_BAD:\n&#8230;&#8203;.// Oh no, it&#8217;s bad!\n&#8230;&#8203;.break;\ndefault:\n&#8230;&#8203;.// Hmmm!\n&#8230;&#8203;.break;\n}\n\n\nInstructions\nPut one instruction per line.\n\n\nfor\nAlways put curly brackets in for clause. for instructions must be on their own lines (not on the for line)\n\n\n\n\n\nTracing and debugging\n\n\n\n\n\n\n\nBoost::log\nBoost::log is the recommended framework to log, as it provides great functionality out of the box without the need for extra/complex configuration\n\n\n\n\n\nError handling\n\n\n\n\n\n\n\nDefault error codes and types\nThe default error codes and error types should be declared in a common b&lt;&gt;com header file.\n\n\nType of value returned for error codes\nThe type of value returned for error codes should be Error.\nExample\tError parseString(char *str);\n\n\nMemory allocation\nA method that attempts to allocate memory must provide an allocation failure mechanism, typically by returning an error code. Note that other methods that call such a method must also provide a failure mechanism, and so on&#8230;&#8203; Memory allocation should not be performed in constructors as constructors don’t return error code.\n\n\nFile management\nThe success of a file opening must be checked and if not successful, the error must be handled appropriately.\nFiles must be closed when no longer used or when an error to exit occurs.\nWhen closing the file, the return value must be checked.\n\n\nFunction call\nThe success of a function call must be checked and if not successful, the error must be handled appropriately. The error codes returned by functions must be tested and treated.\n\n\nInit/deinit functions\nAfter calling constructors and before destructors, it is sometimes necessary to call init and deinit functions to permit error handling on structures that might fail (as these errors cannot be handled in constructors and destructors.\n\n\n\n\n\nMiscellaneous conventions\n\n\n\n\n\n\n\nCompiler warnings\nSource code must not have any warnings when compiled on any targeted platform with any targeted compiler (with a reasonably high warning level – at least level 3).\n\n\nC – C++ interfacing\nAll C public interfaces (*.h) which may be compiled with a C++ compiler must wrap the contents of the file with the pair of macros BEGIN_EXTERN_C and END_EXTERN_C.\nExample\tBEGIN_EXTERN_C\nEND_EXTERN_C\n\n\nC++ interfacing\nAll C class headers (*.h) which may be compiled with a C compiler must include a C API and ensure the non visibility of C code by putting it within an “#ifdef __cplusplus … #endif” statement.\n\n\nDynamic library export\nThe definition of each class or function that is exported in a dynamic library must be preceded by the XX_EXTERN keyword, XX being the prefix for the module to which the class belongs.\n\n\nPortability\nSee http://www.mozilla.org/hacking/portable-cpp.html for more miscellaneous recommendations on portability on various platforms. If a rule differs from b&lt;&gt;com coding rules, follow the b&lt;&gt;com coding rule.\n\n\n\n\n\nDocumentation\n\n\n\n\n\n\n\nCopyright\nEach b&lt;&gt;com source and header file must use the template copyright header comment.\n(See Annex A1: .h)\nSource from other origins (Open Source for example) may have their own license. In this case, the license must be respected. The headers of third party files must be left intact (then it should not be replaced by b&lt;&gt;com copyright).\n\n\nPrimary documentation\nof a class\nThe primary documentation of a class must appear in the header file.\n\n\nClass description\nEach class must have a description before the class declaration.\n(see Annex A1: class description)\n\n\nMethods\nEach method (public, protected and private) must have a short description before the method declaration.\n(see Annex A1: setup method description)\nA method that is already sufficiently documented in the superclass may omit the description or have a single-line comment '// see superclass'\n(see Annex A1: clone method description)\n\n\nMember variable\nEach member variable must have a description either before the member variable declaration or on the same line.\n(see Annex A1: member description)\n\n\nComments\nComments are written in English. Do not use accented characters in source files.\nAll comments should be “DOxygen” compatible (see Tools). All tags must start with ‘@’ and not ‘\\’.\nEach block of code should be commented. Algorithms must be commented.\nBugs from Bugzilla must not be referenced in the code.\n\n\n/*…/\nThis type of comment block must be used for comments that apply either to a class, a function, a structure, an enum, a member… which is present below the comment block.\n(see Annex A1: class description)\n\n\n//\nThis comment line should be used inside the code to comment lines in C++ sources. They should be used even for block of comments.\n(see Annex A2)\n\n\n/…/\nThis comment block should not be used for C++ except for the template copyright block on top of the file and for method and variable documentation.\n\n\n\n\n\nC/C++ Performance rules\n\nBecause we need performance for all code types to achieve close-to-realtime target, these rules replace corresponding rules in previous chapters in order to ensure better software performance.\nFor C++, to improve performance, classes must act as evolved structures/handlers. They must point at a set of non reentrant methods (avoiding static code, allowing parallelism, allowing instantiation).\n\n\n\n\n\n\n\n\n'goto' keyword\nThe 'goto' keyword must not be used.\n\n\n‘continue’ and ‘break’ keywords\nThe ‘continue’ statement must not be used; the ‘break’ statement must not be used outside of switch statements.\n\n\nC++ &#8594; C convertibility\nC++ source must always be convertible into C code. If the rules associated with classes are followed, a class can be immediately converted into a structure and a bunch of methods with, as parameter, a handle on the structure that represents the former members.\n\n\nRecursive code\nRecursive code must not be used for performance reasons and lack of control over the code and because no parallelization and optimization are possible.\n\n\n?No class as class member?\nA class must not contain another class as a member except through pointers.\n\n\nStructures must not contain arrays\nA structure (class or struct) must not contain arrays except through pointers.\nThe size of the structures must remain reasonable.\n\n\nDynamic memory allocation\nDynamic memory allocation must not be used.\nmalloc/free, new/delete must be used during initialization sequence (into the class creators for instance)\nDuring run time, explicit memory allocation must not be used to avoid memory fragmentation and leaks.\nIf an array is needed at some point during the execution of the program, this need must be planned and reserved at the initialization sequence.\nLocal arrays are tolerated if they are small in size (no more than 16-32 values).\n\n\nClass instantiations during run time\nAll the necessary classes, arrays, structures must be present, allocated and initialized before run time (during the initialization sequence).\n\n\nDynamic length structure\nDynamic length structures must not be used (in order to avoid unlimited memory occupation).\n\n\n\n\n\nTools\n\n\n\n\n\n\n\nUncrustify\nMost of the code formatting rules described in this document can be enforced using “uncrustify”.\n\n\nDOxygen\nDOxygen extract comments from the source code and generates documentation. It is recommended to check the comment structure with this tool.\nRefer to the online manual (http://www.stack.nl/~dimitri/doxygen/index.html) for a complete description of DOxygen rules.\n\n\n\n\n\n\n\nAppendix A.\tCode sample\n\n\nI.\tPrototype C++ header file\n\n\n\n\n\n\n\nII.\t Prototype C++ source file\n\n\n\n\n\n\n\nIII.\tHow to remove ‘goto’\n\n\n\n\n\n\n\n\n\nAppendix B.\tRules management\n\n\nI.\tResponsibility\n\nThe Development group manager is responsible of these rules.\n\n\n\nII.\tDeviation\n\nAny b&lt;&gt;com source code must follow these rules. Third party package follow their own rules and should not be modified to follow these rules.\n\n\n\nIII.\tTraining\n\nAny C/C++ developers and integrators must be trained to these rules.\n\n\n\nIV.\tControl\n\nThe compliancy with these coding rules can be performed with Uncrustify tool with the appropriate config file (see tools).\n\n\n\n",
      id: 17
    });
    

  

    index.add({
      title: "tools",
      content: "Tools\n\nTable of Contents\n\nsubmenuconfig\nAccess to Forge\nAccess to Jenkins\n\n\n\nsubmenuconfig\n\n\n\n\nhow it works\n\n\ngetting started\n\n\ncreate a component\n\n\ncontribute to core\n\n\nbest practises\n\n\ntools\n\n\n\n\n\n\nAccess to Forge\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nliens à placer ici\n\n\n\n\nAccess to Jenkins\n\n\nYou can access Jenkins server here: http://argo.ci.b-com.com/job/argo-site/\n\n\n",
      id: 18
    });
    

  

  
  
  

    index.add({
      title: "what",
      content: "\nTable of Contents\n\nsubmenuconfig\nWhat ?\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nwhy\n\n\nwho\n\n\nhow\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nWhat ?\n\n\nThe SolAR framework aims at providing you with a solution to build customized augmented reality services.\n\n\nIt will allow you easily developping your own camera pose estimation pipeline to develop robust and efficient AR services for your customers.\n\n\n\n\n\n\n\nSolAR framework adapts to your specific needs\n\nAs your requirements are particular :\n\n\n\n\nspecific environment\n\n\ndevice\n\n\naccuracy\n\n\ntracking area scale\n\n\n\n\nyou will find here all you need to build a customized and efficient solution to estimate your vision sensor pose for augmented reality purpose.\n\n\n\n",
      id: 19
    });
    

  

    index.add({
      title: "why",
      content: "\nTable of Contents\n\nsubmenuconfig\nWhy SolAR ?\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nwhy\n\n\nwho\n\n\nhow\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nWhy SolAR ?\n\n\nWe created SolAR because an opensource framework is clearly missing for pose estimation.\n\n\nSo we created SolAR to :\n\n\n\n\noffer an opensource pose estimation framework, where anyone can contribute, to take the best of the knowledges in this specific problematic.\n\n\nmake possible for vision component developers to test it in a complete pose estimation environment, as they can connect it in a end-to-end pose estimation scheme.\n\n\nmake possible for AR service developpers to have the best pose estimation for their use cases (they can choose their pose estimation solution based on SolAR).\n\n\n\n\n",
      id: 20
    });
    

  

    index.add({
      title: "who",
      content: "\nTable of Contents\n\nsubmenuconfig\nWho ?\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nwhy\n\n\nwho\n\n\nhow\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nWho ?\n\n\nSolAR initiative has been launched by the Technological Research Institute b&lt;&gt;com, and is open to any contributors or users who share the  SolAR philosophy.\n\n\nOur Partners\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nOur Contributors\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nNam Duong\n\n\n\n\nName\n\n\nDuong\n\n\n\n\nSurname\n\n\ntest\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nPHD Student\n\n\n\n\nMail\n\n\nnam-duong.duong@b-com.com\n\n\n\n\nSkills\n\n\nMachine Learning\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nAmine\n\n\n\n\nName\n\n\nKacete\n\n\n\n\nSurname\n\n\nAmine\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\namine.kacete@b-com.com\n\n\n\n\nSkills\n\n\nMachine Learning\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nNicole\n\n\n\n\nName\n\n\nLeminous\n\n\n\n\nSurname\n\n\nNicole\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nProject Leader\n\n\n\n\nMail\n\n\nnicole.leminous@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nCécile\n\n\n\n\nName\n\n\nMarc\n\n\n\n\nSurname\n\n\nCess\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\ncecile.marc@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nJean-Bernard\n\n\n\n\nName\n\n\nRault\n\n\n\n\nSurname\n\n\nJean-Marc\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\njean-bernard.rault@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nJérôme\n\n\n\n\nName\n\n\nRoyan\n\n\n\n\nSurname\n\n\nGranger\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nProduct Owner\n\n\n\n\nMail\n\n\njerome.royan@b-com.com\n\n\n\n\nSkills\n\n\nAugmented reality, Virtual reality\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nAzdine\n\n\n\n\nName\n\n\nTadrist\n\n\n\n\nSurname\n\n\nAzdine\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nazdine.tadrist@b-com.com\n\n\n\n\nSkills\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nThomas\n\n\n\n\nName\n\n\nWentz\n\n\n\n\nSurname\n\n\nThomas\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nthomas.wentz@b-com.com\n\n\n\n\nSkills\n\n\nRGB-D pose estimation\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nFirst Name\n\n\nSylvain\n\n\n\n\nName\n\n\nDuchene\n\n\n\n\nSurname\n\n\nSylvain\n\n\n\n\nEntity\n\n\nIRT b&lt;&gt;com\n\n\n\n\n\n\n\n\nRole\n\n\nResearch Engineer\n\n\n\n\nMail\n\n\nsylvain.duchene@b-com.com\n\n\n\n\nSkills\n\n\nComputer Vision / Computer Graphics\n\n\n\n\n\n\n\n\n\n\n\n",
      id: 21
    });
    

  

    index.add({
      title: "how",
      content: "\nTable of Contents\n\nsubmenuconfig\nhow\nSolAR defines component interfaces\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nwhy\n\n\nwho\n\n\nhow\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nhow\n\n\nSolAR framework is Open-source\n\nhis framework is open-source, under Apache v2 licence,\nthat lets you use it for research as well as commercial purposes\nadressing various domains (smart factory, smart home, real estate,\ne-health, etc).\n\n\nNevertheless, the components you will connect to develop your own solution can be under various licences. Always check the compatibility of the components licences, the SolAR community can not be held reponsible for a violation of the licenses of the components that you use.\n\n\n\n\n\nSolAR defines component interfaces\n\n\nSolAR framework is a solution to assemble vision components in order to create a pose estimation solution.\n\n\n\n\n\n\n\nCore SolAR is the solution to assemble vision components\n\nSolAR Core is the solution implemented to make possible to connect components in a pose estimation solution.\n\n\n\n\n\n\n\n\npeut-être expliquer ici les choix qui ont été fait et l&#8217;aspect moyens : aspect comunautaire\n\n\n\n\n\n\nSolAR components are provided by SolAR framework\n\nSolAR components are vision components \"SolAR compatible\" that can be used in the SolAR framework.\n\n\nSolAR compatible means that your component must follow SolAR API defined in SolAR Core.\n\n\nHere are some type of components families\n\n\n\n\n\n\n\n\nSolAR can use third parties\n\nSolAR helps you to use vision components in order to create pose estimation.\n\n\nSolAR can use third parties, as some well-known opensource vision frameworks.\n\n\nFor instance, SolAR has already some components based on OpenCV.\n\n\nAs so, you can benefit from the best vision components, and assemble them.\n\n\n\n",
      id: 22
    });
    

  

    index.add({
      title: "when",
      content: "\nTable of Contents\n\nsubmenuconfig\nSolAR initiative\nOur roadmap\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nwhy\n\n\nwho\n\n\nhow\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nSolAR initiative\n\n\nSolAR initiative started in November 2016.\n\n\n\n\nOur roadmap\n\n\n\n\n\n\n\n\n\n\n\n\n\nNOT VALIDATED\nTIP: Write here if you validate with your name and your comment\n\n\n\n\n\nWARNING : mettre la roadmap ici\n\n\n",
      id: 23
    });
    

  

    index.add({
      title: "for whom",
      content: "\nTable of Contents\n\nsubmenuconfig\nfor whom is SolAR?\n\n\n\nsubmenuconfig\n\n\n\n\nwhat\n\n\nwhy\n\n\nwho\n\n\nhow\n\n\nwhen\n\n\nfor whom\n\n\n\n\n\n\nfor whom is SolAR?\n\n\n\n\nSolAR framework is for pose estimation experts, to make possible to create a pose estimation scheme with the best computer vision components.\n\n\nSolAR framework is also for AR service developpers : they will benefit from the best pose estimation int their AR application.\n\n\n\n\n\n\n\n\n\n",
      id: 24
    });
    

  

  
  
  

  
  
  

    index.add({
      title: "downloads",
      content: "downloads\n\nsubmenuconfig\n\n\n\n\ndownloads\n\n\ngetting started\n\n\nAPI documentation\n\n\ntutorials\n\n\n\n\n",
      id: 25
    });
    

  

    index.add({
      title: "getting started",
      content: "getting started\n\nsubmenuconfig\n\n\n\n\ndownloads\n\n\ngetting started\n\n\nAPI documentation\n\n\ntutorials\n\n\n\n\n\n\nFrequently Asked Questions\n\n\n\n\nCan I build SolaR on Linux\nyes, it has been tested on Linux, especially in Ubuntu 16.\n\n\nCan I build SolaR on Windows\nyes, it has been tested on Windows.\n\n\nCan I build SolaR on Mac\nit has not been tested yet, but feel free to give your feedbacks. WARNING :to be corrected\n\n\n\n\n",
      id: 26
    });
    

  

    index.add({
      title: "API documentation",
      content: "API doc\n\nsubmenuconfig\n\n\t\n\t\n\t  \n\t  \n\t\n\t  \n\t  \n\t\n\t  \n\t  \n\t\n\t  \n\t  \n\t\n\t  \n\t  \n\t\t  \n\t\t  \n\t\t    \n\n\t\t\t\n\t\t\t\t\n\tdownloads\n\t\t\t\n\t\t  \n\t\t    \n\n\t\t\t\n\t\t\t\t\n\tgetting started\n\t\t\t\n\t\t  \n\t\t    \n\n\t\t\t\n\t\t\t\t\n\tAPI documentation\n\t\t\t\n\t\t  \n\t\t    \n\n\t\t\t\n\t\t\t\t\n\ttutorials\n\t\t\t\n\t\t  \n\t\t  \n\t\n\n\n\n\n",
      id: 27
    });
    

  

    index.add({
      title: "tutorials",
      content: "tutorials\n\nsubmenuconfig\n\n\n\n\ndownloads\n\n\ngetting started\n\n\nAPI documentation\n\n\ntutorials\n\n\n\n\n\n\nUse SolAR for Keypoint Detection\n\n\n:include _keypoint_detection_sample.adoc[]\n\n\n\n\nUse SolAR for Descriptor Extraction\n\n\n:include _descriptor_extraction_sample.adoc[]\n\n\n\n\nUse SolAR for Descriptor Matching\n\n\n:include _descriptor_matching_sample.adoc[]\n\n\n",
      id: 28
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



  
  
  

  
  
  
    
    store.push({"title": "how it works",
      "link": "https://solarframework.github.io///contribute/how_it_works/"
    });
  
    
    store.push({"title": "getting started",
      "link": "https://solarframework.github.io///contribute/how_to_build/"
    });
  
    
    store.push({"title": "create a component",
      "link": "https://solarframework.github.io///contribute/create_component/"
    });
  
    
    store.push({"title": "contribute to core",
      "link": "https://solarframework.github.io///contribute/contribute_to_core/"
    });
  
    
    store.push({"title": "best practises",
      "link": "https://solarframework.github.io///contribute/best_practises/"
    });
  
    
    store.push({"title": "tools",
      "link": "https://solarframework.github.io///contribute/tools/"
    });
  

  
  
  
    
    store.push({"title": "what",
      "link": "https://solarframework.github.io///discover/what/"
    });
  
    
    store.push({"title": "why",
      "link": "https://solarframework.github.io///discover/why/"
    });
  
    
    store.push({"title": "who",
      "link": "https://solarframework.github.io///discover/who/"
    });
  
    
    store.push({"title": "how",
      "link": "https://solarframework.github.io///discover/how/"
    });
  
    
    store.push({"title": "when",
      "link": "https://solarframework.github.io///discover/when/"
    });
  
    
    store.push({"title": "for whom",
      "link": "https://solarframework.github.io///discover/for_whom/"
    });
  

  
  
  

  
  
  
    
    store.push({"title": "downloads",
      "link": "https://solarframework.github.io///use_it/downloads/"
    });
  
    
    store.push({"title": "getting started",
      "link": "https://solarframework.github.io///use_it/getting_started/"
    });
  
    
    store.push({"title": "API documentation",
      "link": "https://solarframework.github.io///use_it/api_documentation/"
    });
  
    
    store.push({"title": "tutorials",
      "link": "https://solarframework.github.io///use_it/tutorials/"
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
