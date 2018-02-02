$(document).ready(function(){

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items : 1,
    navigation : true,
    pagination: true,
    responsive: true,
    nav:true,
    loop : false,
    navText: [
      "<i class='my-arrow-left'></i>",
      "<i class='my-arrow-right'></i>"
    ]
  });
  // Listen to owl events:
  var arrowLeft = $('.my-arrow-left');
  var arrowRight = $('.my-arrow-right');

  var height;

  var itemList = $('.horisontal-graph__item');
  var itemListHalf = $('.hasMinus .horisontal-graph__item');

  $('.vertical-graph__item__section').each(function(){
    height = $(this).data('height') + '%';
    $(this).css('height',height);
  });

  renderGraph(itemList);
  renderGraph(itemListHalf);
  
});

function renderGraph(itemList) {
  var width,
      maxWidth = 0;
  itemList.each(function(){
    width = parseFloat($(this).find('.value').text());
    if(width > maxWidth) {
      maxWidth = width;
    }
  });

  itemList.each(function(){
    width = Math.abs((parseFloat($(this).find('.value').text()) / maxWidth)) * 100;
    $(this).find('.line').css('max-width',width+'%');
  });
}
