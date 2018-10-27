

function sumCal(cycleCount,startTime,pweight,bweight){

};

//5초당 count를 kcal로 변환
function countToKcal(cycleCount){
    var kcal = 0;

    return kcal;
}



//평균속도를 구하는 함수
function getSpeed(cycleCount, startTime, inchOrMm){
    var endTime = new Date();  //현재 시간을 구함
   
    var distanceMm = getDistance(cycleCount,inchOrMm);
    var distanceKm = distanceMm / 1000000;
    
    var startTime = new Date(startTime); // startTime 문자열 포맷 '월/일/년 시:분:초' String
    var timeDiff = endTime - startTime;
    var timeH = timeDiff/(60*60*1000);

    console.log("timediff = ",timeDiff,'endTime',endTime,'startTime',startTime,'\n timeH=',timeH,'distanceKM',distanceKm);
    var speed = distanceKm/timeH;

    return speed;
};


//거리를 구하는 함수
function getDistance(cycleCount,inchOrMm){
    var diameter = inchOrMm; //자전거 지름
    if(inchOrMm <= 100){ //인치,mm 구분
        diameter = inchOrMm * 25.4;
    }
    return diameter * Math.PI * cycleCount;
};


//평균속도를 칼로리 지수로 만드는 함수
function toIndices(speed){
    var indices;
    return indices;
};

//현재 시간을 키값으로 포맷팅
function dateToString(){
    var today = new Date();
    var strToday = today.getFullYear()+"-"+today.getMonth()+2+"-"+today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    return strToday;
}

