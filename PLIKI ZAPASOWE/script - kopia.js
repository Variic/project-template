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


      /* find the title element */
      const titleList = document.querySelector('.titles');


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
    const articles = document.querySelectorAll('.post');/*ROZNICA*/

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
        html = html + linkHtml;

      }
      /* --- END LOOP: for each tag */

      /* --- insert HTML of all the links into the tags wrapper */
      wrapperList.innerHTML = html;

    /* END LOOP: for every article: */
    }
  }

  generateTags();


  /*--------------------------------------------------------------------------*/


  function tagClickHandler(event){
  /* DONE prevent default action for this event */
    event.preventDefault();
    console.log('Tag link was clicked!');
    console.log('event', event);

    /* DONE make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log('SHOW CLICKED ELEMENT!', clickedElement);

    /* DONE make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('SHOW HREF!', href);

    /* DONE make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log('SHOW TAG!', tag);

    /* DONE find all tag links with class active */
    const activeTag = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log('SHOW ACTIVE TAG!', activeTag);

    /* DONE START LOOP: for each active tag link */
    for(let activeTag of activeTags){

      /* DONE remove class active */
      activeTag.classList.remove('active');

      /* DONE END LOOP: for each active tag link */
    }

    /* DONE find all tag links with "href" attribute equal to the "href" constant */
    const tagLink = document.querySelectorAll('a[href="' + href + '"]');
    console.log('SHOW TAG LINKS!', tagLink);

    /* START LOOP: for each found tag link */
    for(let tagLink of tagLinks){
    /* add class active */
      tagLink.classList.add('active');
      console.log('SHOW ACTIVE TAG LINK!', tagLink);
      /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

  }

  function addClickListenersToTags(){
  /* find all links to tags */
    const linkTag = document.querySelectorAll('.post');
    console.log('SHOW LINKS', linkTag);
    /* START LOOP: for each link */
    for(let linkTag of linkTags){

    /* add tagClickHandler as event listener for that link */
    linkTag.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
   }
  }

  addClickListenersToTags();

}
