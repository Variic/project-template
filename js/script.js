{

  'use strict';

  /*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    event.preventDefault();

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    const clickedElement = this;

    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('article'); /*ROZNICA*/

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelect = clickedElement.getAttribute('href');
    console.log('SHOW THIS ELEMENT', articleSelect);
    /* [IN PROGRESS] find the correct article using the selector (value of 'href' attribute) */
    const articleTarget = document.querySelector(articleSelect);

    /* [IN PROGRESS] add class 'active' to the correct article */
    articleTarget.classList.add('active');
  };


  /*--------------------------------------------------------------------------*/


  function generateTitleLinks(customSelector = ''){
    console.log('SHOW CUSTOM SELECTOR', customSelector);


    /* remove contents of titleList */
    const titleList = document.querySelector('ul.list');
    titleList.innerHTML= '';


    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll('.post' + customSelector);
    console.log('SHOW ARTICLES!', articles);

    let html = '';

    for(let article of articles){


      /* get the article id */
      const articleId = article.getAttribute('ID');


      /* get the title from the title element */
      const articleTitle = article.querySelector('h3.post-title').innerHTML;


      /* create HTML of the link */
      const linkHtml = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';


      /* insert link into html variable */
      html = html + linkHtml;
    }

    titleList.innerHTML = html;


    const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }

  }

  generateTitleLinks();


  /*--------------------------------------------------------------------------*/


  const optArticleTagsSelector = '.post-tags .list';

  function generateTags(){

    /* find all articles */
    const articles = document.querySelectorAll('.post');

    /* START LOOP: for every article: */
    for(let article of articles){

      /* --- find tags wrapper */
      const wrapperList = article.querySelector(optArticleTagsSelector);

      /* --- make html variable with empty string */
      let html = '';

      /* --- get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* --- split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* --- START LOOP: for each tag */
      for(let tag of articleTagsArray){

        /* --- --- generate HTML of the link */
        const linkHtml = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        /* --- --- add generated code to html variable */
        html = linkHtml + html;

      /* --- END LOOP: for each tag */
      }

      /* --- insert HTML of all the links into the tags wrapper */
      wrapperList.innerHTML = html;

    /* END LOOP: for every article: */
    }
  }

  generateTags();


    /*--------------------------------------------------------------------------*/


    function tagClickHandler(event){
      console.log('Link was clicked!');
      console.log('event', event);

      /* prevent default action for this event */
      event.preventDefault();

      /* make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;
      console.log('ELEMENT WAS CLICKED', clickedElement);

      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href');
      console.log('SHOW ME THIS HREF', href);

      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-', '');
      console.log('SHOW TAG', tag);

      /* find all tag links with class active */
      const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
      console.log('SHOW ACTIVE TAGS', activeTagLinks);

      /* START LOOP: for each active tag link */
      for(let activeTagLink of activeTagLinks){

        /* remove class active */
        activeTagLink.classList.remove('active');

      /* END LOOP: for each active tag link */
      }

      /* find all tag links with "href" attribute equal to the "href" constant */
      const tagHrefLinks = document.querySelectorAll('a[href="' + href + '"]');
      console.log('SHOW ACTIVE TAGS', tagHrefLinks);

      /* START LOOP: for each found tag link */
      for(let tagHrefLink of tagHrefLinks){

        /* add class active */
        tagHrefLink.classList.add('active');

      /* END LOOP: for each found tag link */
      }

      /* execute function "generateTitleLinks" with article selector as argument */


    }

    function addClickListenersToTags(){
      /* find all links to tags */
      const tagLinks = document.querySelectorAll(optArticleTagsSelector);

      /* START LOOP: for each link */
      for(let tagLink of tagLinks){

        /* add tagClickHandler as event listener for that link */
        tagLink.addEventListener('click', tagClickHandler);

      /* END LOOP: for each link */
      }

    }

    addClickListenersToTags();
}
