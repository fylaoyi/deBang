var lock = true;
var oLi = $('.feel').find('li');
var index = 0;
var lunbotu = {
    target1 : {
        zIndex: 0,
        width: 328,
        height: 190,
        opacity: 0.333333,
        left: 0,
        top: 90
    },
    target2 : {
        left: 43.3333,
        top: 66.25,
        zIndex: 1,
        width: 410,
        height: 237.5,
        opacity: 0.5
    },
    target3 : {
        left: 86.6667,
        top: 36.5625,
        zIndex: 2,
        width: 512.5,
        height: 296.875,
        opacity: 1
    },
    target4 : {
        left: 130,
        top: 0,
        width: 640,
        height: 370,
        zIndex: 3
    },
    target5 : {
        zIndex: 2,
        width: 512,
        height: 296,
        opacity: 1,
        left: 301.333,
        top: 37
    },
    target6 : {
        zIndex: 1,
        width: 409.6,
        height: 236.8,
        opacity: 0.5,
        left: 447.067,
        top: 66.6
    },
    target7 : {
        zIndex: 0,
        width: 327.68,
        height: 189.44,
        opacity: 0.333333,
        left: 572.32,
        top: 90.28
    },
    autoPlay : function (direction) {
        if(lock) {
            lock = false;
            if(direction === 1 || !direction) {//向左
                oLi.eq((index + 1) % 7).animate(this.target1,'slow');
                oLi.eq((index + 2) % 7).animate(this.target2,'slow');
                oLi.eq((index + 3) % 7).animate(this.target3,'slow');
                oLi.eq((index + 4) % 7).animate(this.target4, 'slow')
                oLi.eq((index + 5) % 7).animate(this.target5, 'slow')
                oLi.eq((index + 6) % 7).animate(this.target6, 's7ow')
                oLi.eq((index + 7) % 7).animate(this.target7, 'slow' ,function() {
                    index ++;
                    lock = true;
                })
            }else if(direction == -1) {//向右
                oLi.eq((index - 1) % 7).animate(this.target1, 'slow')
                oLi.eq((index + 5) % 7).animate(this.target7, 'slow')
                oLi.eq((index + 4) % 7).animate(this.target6, 'slow')
                oLi.eq((index + 3) % 7).animate(this.target5, 'slow')
                oLi.eq((index + 2) % 7).animate(this.target4, 'slow')
                oLi.eq((index + 1) % 7).animate(this.target3, 'slow')
                oLi.eq((index) % 7).animate(this.target2, 'slow', function() {
                    index--;
                    lock = true;
                })
            }
        }
    }
}

module.exports = lunbotu;
