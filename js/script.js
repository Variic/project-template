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


  /*const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';*/


  const generateTitleLinks = function(){/*ROZNICA*/
    console.log('Title was clicked');


    /* remove contents of titleList */
    const titleList = document.querySelector('ul.list');/*ROZNICA*/
    console.log(titleList);
    titleList.innerHTML= '';


    /* find all the articles and save them to variable: articles */
    const articles = document.querySelectorAll('.post');/*ROZNICA*/
    console.log('Show posts list!', articles);

    let html = '';

    for(let article of articles){
      console.log('Show let HTML!', html);


      /* get the article id */
      const articleId = article.getAttribute('ID');
      console.log('Show articles ID', articleId);


      /* find the title element */
      const titleList = document.querySelector('.titles');
      console.log('Show title element!', titleList);


      /* get the title from the title element */
      const articleTitle = article.querySelector('h3.post-title').innerHTML;/*ROZNICA*/
      console.log('Show articles title', articleTitle);


      /* create HTML of the link */
      const linkHtml = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('Show generated HTML link!', linkHtml);


      /* insert link into html variable */
      html = html + linkHtml;
      console.log('Show full HTML!', html);
    }

    titleList.innerHTML = html;


    const links = document.querySelectorAll('.titles a');
    console.log('What we have on LINKS', links);

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }

  };

  generateTitleLinks();


  function generateTags(){
    /* find all articles */

    /* START LOOP: for every article: */

    /* --- find tags wrapper */

    /* --- make html variable with empty string */

    /* --- get tags from data-tags attribute */

    /* --- split tags into array */

    /* --- START LOOP: for each tag */

    /* --- --- generate HTML of the link */

    /* --- --- add generated code to html variable */

    /* --- END LOOP: for each tag */

    /* --- insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
  }

  generateTags();


}
