console.log("한 번만 실행되지");
for(var i = 0; i < 10; i++ ){
    console.log("나는 열번 실행되지");
}

let count = 10;
count++; // 10
count; // 11
++count; // 12

let count = 10; // count는 10으로 초기화됩니다.
count += 100;   // count에 100을 더합니다. count는 이제 110입니다.
count += 1;     // count에 1을 더합니다. count는 이제 111입니다.
++count;        // count를 1 증가시킵니다(전위 증가 연산자). count는 이제 112입니다.
count++;        // count를 1 증가시킵니다(후위 증가 연산자). 이 시점에서는 여전히 112입니다.
console.log(count); // count의 현재 값(113)을 출력합니다.

let multy = 10;
    multy = multy / 3;  // multy /= 3

// 문자연산식

let mystudy = "리액트";
    mystudy = "리액트" + "뷰"; // mystudy +="뷰";

let startjs = 10;
let startjs = 10; //20
    startjs += "원"; //20원
    startjs += 100; //20원100
    startjs += 100; //20원100100  문자 다음에는 숫자가 합쳐지지 않음

    


    let meg = "";
    for(let i = 0; i < 10; i+= 2 ){
        meg +=" 나 \"열번\"나오게 해줘 \n";
    }
    console.log(meg)

    const nav_data = [
        {
            gnb_li_a : "회사소개",
            gnb_li_href : "./company.html"
        },
        {
            gnb_li_a : "제품소개",
            gnb_li_href : "./product.html"
        },
        {
            gnb_li_a : "커뮤니티",
            gnb_li_href : "./board.html"
        },
        {
            gnb_li_a : "인트라넷",
            gnb_li_href : "./intro.html"
        }
    ]
    // object 접근법
    // console.log(nav_data[1].gnb_li_href);
    // console.log(nav_data[1]["gnb_li_href"]);
    
    let mygnb = "";
    for(let liea = 0; liea < nav_data.length; liea++ ){
        mygnb += nav_data[liea].gnb_li_href;    
    }
    console.log( mygnb );
    
    let mygnb2 = "";
    for(let v in nav_data){
        //console.log("forin문처리 : ",v);
        mygnb2 += `${nav_data[v].gnb_li_href}\n` ;
    }
    console.log(mygnb2);

    
    
    // document.getElementsByClassName("gnb").length;
    // document.querySelectorAll(".gnb").length