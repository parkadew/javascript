// 반복문 
//for(초기화식; 조건식; 증강식;) { }

for(let i =0; i<3; i++){
    console.log("반복문")
}
// i=0, console.log -->i=1
// i=1, console.log -->i=2
// i=2, console.log -->i=3
// i=3, xxxxx

//반복문 === 편의성
//10개를 작성해야하는것을 반복하여 1회 작성으로 만들 수 있음
for(let i=0; i<=10; i++){
    console.log(`현재 숫자는 ${i+1}입니다 `)
    
}

//오산고등학교 (1~3학년, 각 학년당 9반)
//console.log()

for(let i=1; i<4; i++){
    console.log("b")

        for (let j=1; j<10;j++){
            console.log (`${1}학년 ${j}반`)
        }
}

