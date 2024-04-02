
let month = 2;
// if 는 조건문이라면,switch 값
// 가독성이 좋은 것을 활용, 조건에 대한 분기가 많을 떄,
// 그 분기가 값으로 이루어질때
switch (month) {
    case 1:
        console.log("1월")
        break;
        //탈출문, 해당 문장을 만나면 더이상 코드 블럭을 실행하지 않고 종료
    case 2:
        console.log("2월")
    case 3:
        console.log("3월")
    default: 
        console.log("잘못 입력하셨습니다")
}
console.log("안녕하세요")
