'use strict';

var timeOut;

if(screen.width <= 320) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=0.3, user-scalable=0">');
} else if (screen.width <= 568) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=0.4, user-scalable=0">');
} else if (screen.width <= 1024) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=0.75, user-scalable=0">');
} else {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">');
}

var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

var halloween = [
    {
        class  : 'js-section-01',
        scroll : {
            // '0'     : ['transform:translate3d(0px,0px,0px);'],
            // '1000'  : ['transform:translate3d(0px,0px,0px);'],
            '2000'  : ['transform:translate3d(0px,0px,0px);'],
            '3000'  : ['transform:translate3d(0px,'+ parseInt(-winHeight -10, 10) +'px,0px);'],
            // '3004'  : ['transform:translate3d(0px,'+ parseInt(-winHeight -10, 10) +'px,0px);', 'z-index:-1000'],
        }
    },
    {
        class  : 'saturday',
        scroll : {
            '0'     : ['transform:translate3d(0px,'+ winHeight * -0.25 +'px,0px) scale(0);'],
            '1000'  : ['transform:translate3d(0px,0px,0px)scale(1);'],
            // '2000'  : ['transform:translate3d(0px,0px,0px)scale(1);'],
        }
    },
    {
        class  : 'oct26',
        scroll : {
            '0'     : ['transform:translate3d(0px,0px,0px);', 'font-size: 12.6rem;'],
            '1000'  : ['transform:translate3d(0px,0px,0px);', 'font-size: 11.7rem;'],
            // '2000'  : ['transform:translate3d(0px,0px,0px);'],
        }
    },
    {
        class  : 'nine-pm',
        scroll : {
            '0'     : ['transform:translate3d(0px,0px,0px) rotate(0deg) scale(0);', 'opacity:0;'],
            '1000'  : ['transform:translate3d(0px,0px,0px) rotate(90deg) scale(1);', 'opacity:1;'],
            // '2000'  : ['transform:translate3d(0px,0px,0px);'],
            // '801'  : ['transform:translate3d(0px,0px,0px);'],
        }
    },
    {
        class  : 'party',
        scroll : {
            '0'     : ['transform:translate3d(0px,'+winWidth+'px,0px);'],
            // '800'   : ['transform:translate3d(0px,0px,0px);'],
            '1000'  : ['transform:translate3d(0px,0px,0px);'],
        }
    },
    {
        class  : 'js-section-02',
        scroll : {
            '0'     : ['transform:translate3d(0px,0px,0px);'],
            '7000'  : ['transform:translate3d(0px,0px,0px);'],
            '8000'  : ['transform:translate3d(0px,'+ parseInt(-winHeight -10, 10) +'px,0px);'],
        }
    },
    {
        class  : 'get',
        scroll : {
            '2700'  : ['transform:translate3d('+ winWidth * 0.05 +'px,'+winHeight * 0.7 +'px,0px) scale(0);'],
            '3200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'its',
        scroll : {
            '3600'  : ['transform:translate3d('+ winWidth * 0.5 +'px,0px,0px) scale(0);'],
            '4000'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'halloween',
        scroll : {
            '4500'  : ['transform:translate3d(0px,'+winHeight * 0.5 +'px,0px) scale(0);'],
            '5500'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'js-section-03',
        scroll : {
            '0'      : ['transform:translate3d(0px,0px,0px);'],
            '12700'  : ['transform:translate3d(0px,0px,0px);'],
            '13700'  : ['transform:translate3d(0px,'+ parseInt(-winHeight -10, 10) +'px,0px);'],
        }
    },
    {
        class  : 'byob',
        scroll : {
            '8000'  : ['transform:translate3d('+ winWidth * 0.10 +'px,'+winHeight+'px,0px) scale(0);'],
            '8700'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            // '18000'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'line-left',
        scroll : {
            '9650'  : ['transform: scale(0);'],
            '9800'  : ['transform: scale(1);'],
            // '18000'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'bring-your-own',
        scroll : {
            '9200'   : ['transform:translate3d('+ winWidth * -0.25 +'px,'+winHeight+'px,0px) scale(0);'],
            '9700'   : ['transform:translate3d(0px,0px,0px) scale(1);'],
            '11300'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            '11800'  : ['transform:translate3d(0px,'+ -winHeight +'px,0px) scale(1);'],
        }
    },
    {
        class  : 'blood',
        scroll : {
            '9700'   : ['transform:translate3d('+ winWidth * -0.25 +'px,'+winHeight+'px,0px) scale(0);'],
            '10300'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            '11300'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            '11800'  : ['transform:translate3d(0px,'+ -winHeight +'px,0px) scale(1);'],
        }
    },
    {
        class  : 'or-booze',
        scroll : {
            '11000'  : ['transform:translate3d('+ winWidth * -0.15+'px,'+ winHeight +'px,0px) scale(0);'],
            '11300'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            // '200'  : [],
        }
    },
    {
        class  : 'js-section-04',
        scroll : {
            '0'      : ['transform:translate3d(0px,0px,0px);'],
            '18200'  : ['transform:translate3d(0px,0px,0px);'],
            '19200'  : ['transform:translate3d(0px,'+ parseInt(-winHeight -10, 10) +'px,0px);'],
            // '3000'  : ['transform:translate3d(0px,0px,0px);'],
            // '400'  : []
        }
    },
    {
        class  : 'j-and-k',
        scroll : {
            '13200'  : ['transform:translate3d(0px,'+winHeight * 0.75+'px,0px) scale(0);'],
            '14200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            // '200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'apartment',
        scroll : {
            '13700'  : ['transform:translate3d(0px,'+winHeight * 0.65+'px,0px) scale(0);'],
            '14700'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            // '200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'lines-1',
        scroll : {
            '14200'  : ['transform:translate3d(0px,'+winHeight * 0.55+'px,0px) scale(0);'],
            '15200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            // '200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'lines-2',
        scroll : {
            '14200'  : ['transform:translate3d(0px,'+winHeight * 0.55+'px,0px) scale(0);'],
            '15200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            // '200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'address',
        scroll : {
            '14700'  : ['transform:translate3d(0px,'+winHeight * 0.45+'px,0px) scale(0);'],
            '15700'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
            // '200'  : ['transform:translate3d(0px,0px,0px) scale(1);'],
        }
    },
    {
        class  : 'js-section-05',
        scroll : {
            '0'      : ['transform:translate3d(0px,0px,0px);'],
            '21700'  : ['transform:translate3d(0px,0px,0px);'],
            '22500'  : ['transform:translate3d(0px,'+ parseInt(-winHeight -10, 10) +'px,0px);'],
            // '3000'  : ['transform:translate3d(0px,0px,0px);'],
            // '400'  : []
        }
    },
    {
        class  : 'rsvp-txt',
        scroll : {
            '19200'  : ['transform:translate3d(0px,'+ winHeight +'px,0px);'],
            '19700'  : ['transform:translate3d(0px,0px,0px);'],
        }
    },
    {
        class  : 'or-else',
        scroll : {
            '20200'  : ['transform:translate3d(0px,'+ -winHeight +'px,0px);'],
            '20700'  : ['transform:translate3d(0px,0px,0px);'],
        }
    },
    {
        class  : 'js-section-06',
        scroll : {
            '0'  : ['transform:translate3d(0px,0px,0px);'],
        }
    },
];

var loadData = function(data) {
    var block, pos, el, value;

    for (var i = 0; i < data.length; i++) {
        block = data[i];
        el = document.getElementsByClassName(block.class)[0];

        for(pos in block.scroll) {
            value = block.scroll[pos];
            el.setAttribute('data-' + pos, value.join(' '));
        }
        // console.log(el);
    }
};

var scrollToTop = function() {
    if (document.body.scrollTop!==0 || document.documentElement.scrollTop!==0){
        window.scrollBy(0,-200);
        timeOut = setTimeout(scrollToTop(),10);
    } else {
        clearTimeout(timeOut);
    }
};

var pageResize = function() {
    $('section').height(window.innerHeight);
};

$(window).on('load resize orientationchange', function(){
    pageResize();
});

window.onload = function(){
    // init();ever
    loadData(halloween);
    skrollr.init({
        smoothScrolling: false,
        forceHeight: true
    });
    $('.hide').fadeIn(400);

    $('body').on('click', '.skull-lg', function(){
        // window.scrollTo(0,0);
        console.log('click');
        scrollToTop();
    });
};
