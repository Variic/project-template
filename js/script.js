{

  'use strict';

  /*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    event.preventDefault();
    console.log('Link was clicked!');
    console.log('event', event);

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    const clickedElement = this;
    console.log('clickedElement:', clickedElement);

    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('article'); /*ROZNICA*/

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelect = clickedElement.getAttribute('href');
    console.log('Link was clicked', articleSelect);

    /* [IN PROGRESS] find the correct article using the selector (value of 'href' attribute) */
    const articleTarget = document.querySelector(articleSelect);
    console.log('The selected article is', articleTarget);

    /* [IN PROGRESS] add class 'active' to the correct article */
    articleTarget.classList.add('active');
  };


  /*--------------------------------------------------------------------------*/


  const generateTitleLinks = function(){/*ROZNICA*/


    /* remove contents of titleList */
    const titleList = document.querySelector('ul.list');/*ROZNICA*/
    titleList.innerHTML= '';


    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll('.post');/*ROZNICA*/

    let html = '';

    for(let article of articles){


      /* get the article id */
      const articleId = article.getAttribute('ID');


      /* find the title element */
      const titleList = document.querySelector('.titles');


      /* get the title from the title element */
      const articleTitle = article.querySelector('h3.post-title').innerHTML;/*ROZNICA*/


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

  };

  generateTitleLinks();


  /*--------------------------------------------------------------------------*/


  const optArticleTagsSelector = '.post-tags .list';

  function generateTags(){

    /* find all articles */
    const articles = document.querySelectorAll('.post');/*ROZNICA*/
    console.log('SHOW POST LIST!', articles);

    /* START LOOP: for every article: */
    for(let article of articles){

    /* --- find tags wrapper */
    const wrapperList = article.querySelector(optArticleTagsSelector);

    /* --- make html variable with empty string */
    let html = '';

    /* --- get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('SHOW ARTICLE TAGS!', articleTags);

    /* --- split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('SHOW TAGS ARRAY!', articleTagsArray);

    /* --- START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log('SHOW TAG!', tag);

    /* --- --- generate HTML of the link */
    const linkHtml = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
    console.log('SHOW LINK HTML!', linkHtml);

    /* --- --- add generated code to html variable */
    html = html + linkHtml;
    console.log('SHOW LET HTML!', html);
    }
    /* --- END LOOP: for each tag */

    /* --- insert HTML of all the links into the tags wrapper */
    wrapperList.innerHTML = html;
    console.log('SHOW WRAPPER LIST!', wrapperList);

    /* END LOOP: for every article: */
  }
  }

  generateTags();


}
