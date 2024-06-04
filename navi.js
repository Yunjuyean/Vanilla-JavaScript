const hd_yys ={
    logo : {
        Text : "uglyus",
        href : "/uglyus/",
        img : "/uglyus/img/img_yys/svg/ugly_us_logo.svg",
        cls : ["me-3"]
    },
    gnb : [
        {
        Text : "우리의미션",
        href : "misson.html",
        cls : ["nav-mission me-5 gnb_li rel","d-block gnb_a","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "미션",
                href : "mission.html",
               
            },
            {
                Text : "소싱철학",
                href : "social.html"
            }
        ]
    },
    {
        Text : "정기배송",
        href : "misson.html",
        cls : ["nav-mission2 me-5 gnb_li rel","d-block gnb_a2","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "후기",
                href : "mission.html"
            },
            {
                Text : "혜택",
                href : "social.html"
            },
            {
                Text : "이용안내",
                href : "social.html"
            }
        ]
    },
    {
        Text : "싱싱마켓",
        href : "misson.html",
        cls : ["nav-mission3 me-5 gnb_li rel","d-block gnb_a3","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
           
        ]
    },
    {
        Text : "커뮤니티",
        href : "misson.html",
        cls : ["nav-mission4 me-5 gnb_li rel","d-block gnb_a4","gnb_ul abs","gnb_ul_li"],
        gnb_ul_li : [
            {
                Text : "오늘의레시피",
                href : "mission.html"
            },
            {
                Text : "채소이야기",
                href : "social.html"
            },
            {
                Text : "어글리어스밥풀루언서",
                href : "social.html"
            }
        ]
    }
    ],
    util : [
        {
            Text : "로그인",
            href : "login.html",
            cls : ["d-flex px-0 my-0","me-3 font_login","nav-link font_login"]
        },
        {
            Text : "회원가입",
            href : "consumer.html",
            cls : ["d-flex px-0 my-0","font_login","nav-link me-0 font_login"]
        }
    ]
}

window.onload = function(){
    // onload는 화면이 로딩이 끝나면 실행되는 이벤트
    // addEventListener와의 차이를 꼭 기록해둔다.!!!!
    // onload 이벤트는 딱 한번 실행된다. 주의!!!
    // 만약 2번쓰면 하나가 안된다!

    let navitag = "";

    for(x in hd_yys.gnb){
        navitag += `<li class='${hd_yys.gnb[x].cls[0]}'>
            <a href='${hd_yys.gnb[x].href}' class='${hd_yys.gnb[x].cls[1]}'>
            ${hd_yys.gnb[x].Text}
            </a>`;
        if(hd_yys.gnb[x].gnb_ul_li.length > 0)  navitag += `<ul>`;   
        for(j in hd_yys.gnb[x].gnb_ul_li){
            navitag +=`<li>
               <a href='${hd_yys.gnb[x].gnb_ul_li[j].href}'>
                    ${hd_yys.gnb[x].gnb_ul_li[j].Text}
               </a>
               </li>`  
        }
        if(hd_yys.gnb[x].gnb_ul_li.length > 0)  navitag += `</ul>`;
        navitag += `</li>`;     
    }

    document.querySelector("#gnb").innerHTML = navitag;
}
