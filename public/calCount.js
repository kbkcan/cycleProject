var calCount ={};

calCount.cal= function(rpm , startTime){
    
    var speed = getSpeed(rpm,startTime);
    var indices = toIndices(speed);

    var pWeight = 80.0;//사람 몸무게를 가져온다.
    var bWeight = 10.0;//자전거 무게를 가져온다.
    var endTime = new Date().toLocaleString();//현재 시간을 구함
    
    var kcal=(pWeight + bWeight) * indices * (endTime-startTime);

    return kcal;

};




//평균속도를 구하는 함수
calCount.getSpeed = function(rpm, startTime){
    var endTime = new Date().toLocaleString();  //현재 시간을 구함
    var inchOrMm = 26;  //자전거 타이어 규격 사이즈를 받음
    var distanceMm = getDistance(rpm,inchOrMm);
    var distanceKm = distanceMm / 1000000;
    
    var startTime = new Date(startTime); // startTime 문자열 포맷 '월/일/년 시:분:초' String
    


    var speed = timeH/distanceKm;

    return speed;
}


//거리를 구하는 함수
calCount.getDistance = function(rpm,inchOrMm){
    var bDiameter = inchOrMm; //자전거 지름
    if(inchOrcm <= 100){ //인치,cm 구분
        bDiameter = inchOrMm * 25.4;
    }
    return bDiameter * 3.14 * rpm;
}


//평균속도를 칼로리 지수로 만드는 함수
calCount.toIndices=function(speed){
    var indices;
    return indices;
}

module.exports = calCount;
