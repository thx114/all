exports.chinese2number=function (chnStr) {
    var chnNumChar = {
      零: 0,
      一: 1,
      二: 2,
      三: 3,
      四: 4,
      五: 5,
      六: 6,
      七: 7,
      八: 8,
      九: 9
    };
    var chnNameValue = {
      十: { value: 10, secUnit: false },
      百: { value: 100, secUnit: false },
      千: { value: 1000, secUnit: false },
      万: { value: 10000, secUnit: true },
      亿: { value: 100000000, secUnit: true }
    };
    
    var rtn = 0;
    var section = 0;
    var number = 0;
    
    var secUnit = false;
    
    var str = chnStr.split('');
  
    for(var i = 0; i < str.length; i++) {
        var num = chnNumChar[str[i]];
        if(typeof num !== 'undefined') {
            number = num;
            if(i === str.length -1) {
                section += number;
            }
        } else {
            var unit = chnNameValue[str[i]].value;
            secUnit = chnNameValue[str[i]].secUnit;
            if(secUnit){
                section = (section + number) * unit;
                rtn += section;
                section = 0;
            } else {
                section += (number * unit);
            }
            number = 0;
        }
     }
     return rtn + section;
  }

exports.image2area=function(image,pos,add,center=true){
    if(!pos.x){throw Error('第二个参数必须为位置')}
    if(!image.imageWidth){throw Error('第一个参数必须为图片')}
    if(!(add instanceof Array)){throw Error('第三个参数必须为数组')}
    let x = pos.x
    let y = pos.y
    let w = image.imageWidth
    let h = image.imageHeight
    let out
    if(center){
        out = {
        left:x-w/2+add[0],
        top:y-h/2+add[1],
        right:x+w/2+add[2],
        bottom:y+h/2+add[3]}
    }
    else{
        out = {
        left:x+add[0],
        top:y+add[1],
        right:x+w+add[2],
        bottom:y+h+add[3]}
    }
    return out
}