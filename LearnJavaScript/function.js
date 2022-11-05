//function___________________________________________||
function getPyramidVolum() {
    //_____________การคำนวณปริมาตรพีระมิด_______________//
    let length = 9 //ความยาว
    let width = 10; //ความกว้าง
    let height = 12; //ความสูง

    let baseArea = length * width; //พื่นที่ฐาน พีระมิด
    let pyramidVolume = 1 / 3 * baseArea * height; //ปริมาตร พีระมิด
    console.log(pyramidVolume);
}

function getPyramidVolum();

function getPyramidVolum();

function getPyramidVolum();



//function แบบมี parameter______________________________||
function getCylindrical(radius, length) {
    //_____________การคำนวณปริมาตรทรงกระบอก_____________//
    let CircleArea = 3.14 * (radius ** 2);
    let CylindricalVolume = length * CircleArea;
    console.log(CylindricalVolume);
}
getCylindrical(3, 9);
getCylindrical(7, 15);
getCylindrical(9, 12);



//function แบบมี parameter และ return ค่า________________||
function getSphere(radius) {
    //_____________การคำนวณปริมาตรทรงกลม________________//
    let SphereVolume = (4 / 3) * 3.14 * (radius ** 3);
    return SphereVolume;
}
getSphere(4);
let Volume1 = getSphere(6);
let Volume2 = getSphere(8);

console.log("ปริมาตรทรงกลมรัศมี 4 " + getSphere(4) + "ปริมาตรทรงกลมรัศมี 6 " + Volume1 + "ปริมาตรทรงกลมรัศมี 8 " + Volume1)