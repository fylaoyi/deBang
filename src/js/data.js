var setData = {
    turnPage : function (index,nowNum) {
        if(!index || index) {
            $.ajax({
                type:'get',
                url:'http://localhost:8080/src/source/job.txt',
                success:function(data) {
                    $('.content-list').html('');
                    var workObj = JSON.parse(data);
                    var workArr = [];
                    workArr.push(workObj[index]);
                    if(workArr[0].length >= 10) {
                        $('.page').css('display', 'block');
                        allNum = Math.ceil((workArr[0].length) / 10);
                        nowNum = !nowNum ? 1 : nowNum;
                        data = {a:'page', nowNum:nowNum, allNum:allNum};
                        setData.create(data, index);
                        // console.log(setData);
                        if(nowNum === allNum) {
                            for(var i = (nowNum - 1) * 10; i < workArr[0].length; i ++) {
                                var $ul = $('<ul></ul>');
                                var job = workArr[0][i];
                                for(var j = 0; j < 6; j ++) {
                                    var $li = $('<li></li>');
                                    $li.addClass('sp' + j);
                                    $li.html(job[j]);
                                    $ul.append($li);
                                }
                                $('.content-list').append($ul);
                            }
                        }else{
                            for(var i = (nowNum - 1) * 10; i < (nowNum - 1) * 10 + 9; i ++) {
                                var $ul = $('<ul></ul>');
                                var job = workArr[0][i];
                                for(var j = 0; j < 6; j ++) {
                                    var $li = $('<li></li>');
                                    $li.addClass('sp' + j);
                                    $li.html(job[j]);
                                    $ul.append($li);
                                }
                                $('.content-list').append($ul);
                            }
                        }
                    }else{
                        $('.page').css('display', 'none');
                        for(var i = 0; i < workArr[0].length; i ++) {
                        var $ul = $('<ul></ul>');
                        var job = workArr[0][i];
                            for(var j = 0; j < 6; j ++) {
                                var $li = $('<li></li>');
                                $li.addClass('sp' + j);
                                $li.html(job[j]);
                                $ul.append($li);
                            }
                            $('.content-list').append($ul);
                        }
                    }
                }
            })
        }
    },
    create: function (json, len) {
        if(!json.a) {
            return false;
        }else{
            var $page = document.getElementsByClassName('page')[0];
            var nowNum = json.nowNum;
            var allNum = json.allNum;
            $page.innerHTML = "";
            if(nowNum > 1) {
                var $A = document.createElement('a');
                $A.href = '#' + (nowNum - 1);
                $A.innerHTML = '上一页';
                $page.appendChild($A);
            }
            // if(nowNum > 5) {
            //     var $A = document.createElement('a');
            //     $A.href = '#' + 1;
            //     $A.innerHTML = '首页';
            //     $page.appendChild($A);
            // }
            if(allNum < 9) {
                for(var i = 1; i <= allNum; i ++) {
                    var $A = document.createElement('a');
                    $A.href = "#" + i;
                    if(nowNum === i) {
                        $A.innerHTML = i;
                        $A.className = 'strong';
                    }else{
                        $A.innerHTML = i;
                    }
                    $page.appendChild($A);
                }
            }else{
                for(var i = 1; i <= 9; i ++) {
                    var $A = document.createElement('a');
                    if(nowNum < 5) {
                        $A.href = '#' + i;
                        if(i === nowNum) {
                            $A.innerHTML = i;
                        }else{
                            $A.innerHTML = '[' + i + ']';
                        }
                    }else if((allNum - nowNum) < 4) {
                        $A.href = '#' + (allNum - 9 + i);
                        if((allNum - nowNum) === 0 && i === 9) {
                            $A.innerHTML = allNum - 9 + i;
                        }else if((allNum - nowNum) === 1 && i === 8) {
                            $A.innerHTML = allNum - 9 + i;
                        }else if((allNum - nowNum) === 2 && i === 7) {
                            $A.innerHTML = allNum - 9 + i;
                        }else if((allNum - nowNum) === 3 && i ===6) {
                            $A.innerHTML = allNum - 9 + i;
                        }else{
                            $A.innerHTML = '[' + (allNum - 9 + i) + ']';
                        }
                    }else{
                        $A.href = '#' + (nowNum - 5 + i);
                        if(i === 5) {
                            $A.innerHTML = (nowNum - 5) + i;
                        }else{
                            $A.innerHTML = '[' + (nowNum - 5 + i) + ']';
                        }
                    }
                    $page.appendChild($A);
                }
            }
        }
        if((allNum - nowNum) > 5) {
            var $A = document.createElement('a');
            $A.href = '#' + allNum;
            $A.innerHTML = "尾页";
            $page.appendChild($A);
        }
        if((allNum - nowNum > 0)) {
            var $A = document.createElement('a');
            $A.href = '#' + (nowNum + 1);
            $A.innerHTML = '下一页';
            $page.appendChild($A);
        }
        var aCol = document.getElementsByTagName('a');
        for(var i = 0; i < aCol.length; i ++) {
            aCol[i].onclick = function() {
                $page.innerHTML = "";
                var nowNum = parseInt(this.getAttribute('href').substring(1));
                setData.turnPage(len,nowNum);
            }
        }
    }
}
module.exports = setData;

    