//__________Operators___________________________________
a1 = 3 + 2; // 5    บวก
a2 = 3 - 2; // 1    ลบ
a3 = 3 * 2; // 6    คูณ
a4 = 3 / 2; // 1.5  หาร
a5 = 3 ** 2 // 9    ยกกำลัง
a6 = 3 % 2 // 1    เศษ จากการหาร 

//___________เพิ่ม ลด ค่า และ การเข้า += -= *= /= ___________
x = 5;
x = x + 1; //6
x++; //6
x--; //4

x = 5;
x = x + 5; //10
x += 5; //10

//เครื่องหมายเปรียบเทียบ ผลลัพธ์จะแสดงเป็นค่า boolean_____________
let m = 7;
let n = 5;

let p1 = m > n; //true   มากกว่า
let p2 = m >= y; //true   มากกว่าเท่ากับ

let p3 = m < n; //false  น้อยกว่า
let p4 = m <= n; //false  น้อยกว่าเท่ากับ

let p5 = m === n; //false  เท่ากัน
let p6 = m !== n //true   ไม่เท่ากัน

//___________ ตรรกะ ศาสตร์ และ&& หรือ|| ______________________

let p = true;
let q = false;

let i1 = p && q; //fales and และ
let i2 = p || q; //true  or  หรือ
let i3 = !p //fales negation นิเสธ