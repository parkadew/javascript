
/*
        논리연산자 
        true/false

        ex)
        let a = 5;
        let b = 3;
        console.log(a > b ) // true (초과)
        console.log(a >= b ) // true (이상)

        참, 거짓을 판단할수있는 연산이 조건에 들어왔을떄 
        true / false를 출력

        비교연산자 
        >, <, >=, <= 

        ==  동등비교 --- "값만"(숫자)       문자/숫자     문자열 데이터 

        === 일치비교 --- "값과 데이터 유형"(문자까지 {문자열})

            ex)
                a = 3;
                b = "3";

                a == b (true)
                a === b (faulse)


        !=  부등비교 --- "값만"
        !== 불일치비교 --- "값 혹은 데이터 유형"
            같지 않아!
            둘중 하나라도 값이 true라면 값이 true 다 
        ex)
            응, 같지 않아
            아니, 같아 

            a = 3;
            b = "3";

            a != b (false)
            a랑 b는 값이 같지 않아? -> 아니(faulse) 같아



            a !== b (true)
            {값도 다르고 타입도 달라}
            a랑 b는 값 혹은 데이터 유형이 같지않아? 
            -> a,b 값이 아니, 같아 (faulse)
            a,b는 데이터 타입은 같지 않아 (true)
            ---> true (응, 같지않아)

            ------> 둘중에 하나라도 다르면 다르다'
                다르다(true), 같다(false)

            let a = 5;
            a = a + 1;
            console.log

            




            

*/


    5 == 5; // true
    5 == "5"; // true 
    5 == 8 // false 
    false == "0" // true 
    false == "false" // false 

    false == undefined // false
    false == null //

    false == null // true 
    false === null // false
    
    5 === 5; //true 
    5 === "5" // false 

   0 === -0 // true 음의 정수,양의 정수 

   5 != 8; // true 
   5 != 5; // f
   5 != "5" // f
    5 !== 8; //t
    5 !== 5; //t
    5 !== "5" // t

    //값이 정해져있지 않다

    /*
        논리합 &&  --> 들다 true 야 ?
        논리곱 || --> 둘중 하나라도 true 야?
        부정 !  --> 반대 

        true || true // true 
        true || false // true 
        false || true // true 
        false || false // false
        
        true && true // true 
        true && false // false 
        false && true // false 
        false && false // false 

        let c = 5;
        //특정 한 조건에만 실행하고 싶은 코드 
        // &&(and) ||(or)
        if(c > 1 && c > 4) {
            console.log(c)
        }

         
    */



        /*
            삽항 연산자 
                조건식(t/f) ? true : false
                항이 총 3개지다 
            && 연산자 
                조건식 && true
            ?? 연산자 
        
        
        */
        const d = 4;
        const e = d > 4 ? "참" : "거짓";
       
        // 삼항 연산자는 값의 분기가 생길 때
        // 삼항 연산자는 이어서 작성이 가능 , 가독성이 좋지 않아서 
        // 3~4항 정도로 항이 작을 떄, 단순할 때 많이 사용
        console.log(e)  // 거짓 

        const f = d > 3 && "참"
        //조건이 참이면 끝까지 거짓이면 여기서 멈춘다
        //값이 존재할때만 실행할 떄 많이 쓰임
        // 조건식에 변수의 값이 있을 때는 true  없을 떄는 false 

        let g = undefined
        let b = a1 && "상품리스트"


        checklist

        1. 논리연산자, 비교연산자 --> 조건식의 조건 if()

        2. 입력과 출력값을 추상화하고 출력 값은 구체화 --> 연산을 자연어로 풀이

        3.  프로그래머스 lv0의 정답률이 가장 높은 것부터 풀이
            https://school.programmers.co.kr/learn/challenges?order=recent

        4. 1시간 ~ 2시간, 꾸준히, 정기적으로

        5. 제어문 반복문은 언제 사용하는가 (자연어로 풀이했을떄,)