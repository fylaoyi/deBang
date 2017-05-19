var setData = require('./data.js'),
    lunbotu = require('./lunbotu.js'),
    $work = $('.nav').find('li');
setData.turnPage(0, undefined);
$work.each(function(index) {
        $work[index].onclick = function() {
            for(var i = 0; i < $work.length; i ++) {
                $work[i].className = '';
            }
            this.className = 'pu';
            len = $(this).index();
            setData.turnPage(len); 
        }
        $work[index].onmouseover = function() {
            for(var i = 1; i < $work.length; i ++) {
                $work[i].className = '';
            }
            this.className = 'pu';
        }
        // if(index != 0) {
        //     $work[index].onmouseleave = function() {
        //         this.className = '';
        //     }
        // }

    })
    var $Hot = $('.city-detail').find('li');
        $('.country').mouseover(function() {
                $('.city').css('display', 'block');
                var $Li = $('.city-title').find('li');
                $Li.each(function(index) {
                    $Li[index].onmouseover = function () {
                        for(var i = 0; i < $Li.length; i ++) {
                            $Li[i].className = '';
                        }
                        this.className = 'active';
                        var num = ($(this)).index();
                            $('.city-detail').get(0).innerHTML = "";
                            $.ajax({
                                type:'get',
                                url:'http://localhost:8080/src/source/city1.txt',
                                success:function(data) {
                                    var cityArr = [];
                                    var cityObj = JSON.parse(data);
                                    for(var prop in cityObj) {
                                        cityArr.push(cityObj[prop]);
                                    }
                                    for(var prop in cityArr[num]) {
                                        var $li = $('<li></li>');
                                        $li.prop('id', cityArr[num][prop]);
                                        $li.html(prop);
                                        $('.city-detail').append($li);
                                    }
                                }
                            })
                    }
                })
        });
        $('.city').mouseleave(function() {
            $('.city').css('display', 'none');
        });
var oLi = $('.feel').find('li');
$('.left').click(function(){
    lunbotu.autoPlay();
})
$('.right').click(function() {
    lunbotu.autoPlay(-1);
})