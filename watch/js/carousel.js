//авто прокрутка слайдера
//slideshow style interval
/*var autoSwap = setInterval( swap,1500);*/

//pause slideshow and reinstantiate on mouseout
/*$('ul, span').hover(
  function () {
    clearInterval(autoSwap);
},
  function () {
   autoSwap = setInterval( swap,1500);*/

//Аккардион
//global variables

var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel-sl li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.items').each(function(index) {
    items[index] = $(this).text();
});

//swap assets function
function swap(action) {
  var direction = action;

  //moving carousel backwards
  if(direction === 'counter-clockwise') {
    var leftitem = $('.left-pos').attr('id') - 1;
    if(leftitem === 0) {
      leftitem = itemCount;
    }

    $('.right-pos').removeClass('right-pos').addClass('back-pos');
    $('.main-pos').removeClass('main-pos').addClass('right-pos');
    $('.left-pos').removeClass('left-pos').addClass('main-pos');
    $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');

    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }

  //moving carousel forward
  if(direction === 'clockwise' || direction === '' || direction === null ) {
    function pos(positionvalue) {
      if(positionvalue !== 'leftposition') {
        //increment image list id
        position++;

        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }

      //setting the left positioned item
      if(positionvalue === 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;

        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }

      return position;
    }

    let preRight = $('.right-pos + .back-pos');

    if(itemCount === startItem + 1) {
      preRight = $('#1');
    }

   $('.left-pos').removeClass('left-pos').addClass('back-pos');
   $('.main-pos').removeClass('main-pos').addClass('left-pos');
   $('.right-pos').removeClass('right-pos').addClass('main-pos');
    preRight.removeClass('back-pos').addClass('right-pos');

    startItem++;
    position=0;
    if(startItem >= itemCount) {
      startItem = 0;
    }
  }
}

//next button click function
$('#next').click(function() {
  swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function() {
  if($(this).attr('class') == 'items right-pos') {
     //swap('counter-clockwise');
     swap('clockwise');
  }
  else {
    //swap('clockwise');
  }
});
