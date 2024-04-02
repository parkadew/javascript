

/*
박관령
수학,국어,영어,탐구 영역이 있다
이 네가지 과목은 평균에 따라 

90점이상이면 A
80점이상 B
70점이상 C
그 외 F

박관형님의 이번학기 성적은 0학점입니다" 출력
*/


// let num = (국어 + 영어 + 수학 + 탐구)
// let A = 90;

// if(A > 90) {
//     answer = "A"
// }
// else if ( B > 80) {
//     answer = B
// }
// else if ( C > 70) {
//     answer = C
// }
// else {
//     answer="F"
// }
// console.log (answer)




//자연어로 풀이하고 입력 출력값을 더 신경쓰자
//입력 -> 평균 점수
//평균 점수를 구하려면 네과목의 합 /4 --> "네과목의 점수"

//출력 -> 학점이 포함된 메세지를 출력해야한다
// console.log (`${name}님의 학점은 ${grade}입니다`) ---> name, grade

//연산 -> 평균 점수에 따라서 분기가 생성되어 학점이 달라진다.
//

let name = "박관형"
let grade;
let kor,math,tam,eng;
kor = 90;
math = 70;
tam = 100;
eng = 60;
let avg = (kor + math + tam + eng) / 4;

// avg가 90점 이상이면 A
if(avg >= 90){
    grade = "A"
}else if (avg >= 80){
    grade ="B"
}else if (avg >= 70){
    grade = "C"
}else {
    grade = "F"
}
console.log (`${name}님의 학점은 ${grade}입니다`) 

// avg가 80점 이상이면 B

// avg가 70점 이상이며 C

