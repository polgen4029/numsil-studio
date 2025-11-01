document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");
});


const fixViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--fixed-vh', `${vh}px`);
    };

    // 최초 1회만 계산
    fixViewportHeight();

    // 만약 방향 전환(가로/세로) 시만 다시 계산하고 싶다면:
    window.addEventListener('orientationchange', fixViewportHeight);


//타이틀 애니메이션
{
    //타이틀 애니메이션
    const titleAni = document.querySelectorAll('.char');
    titleAni.forEach(char => {
        char.addEventListener('mouseenter', () => {
        char.classList.remove('animate');
        void char.offsetWidth;
    char.classList.add('animate');
    });
});
}

// NUSIL -> STUDIO 애니메이션
function ScrollAniContent () {

    const currentScrollY = window.pageYOffset;
    const currentWindowHeight = window.innerHeight;
    const titleContainer = document.getElementById("numsil-animation")
    const titlechar = document.querySelectorAll(".Mix_T");
    const ContainerRect = titleContainer.getBoundingClientRect()
    
    /* console.log(ContainerRect.top-currentWindowHeight)
    console.log(ContainerRect.bottom) */
    
    
    if (ContainerRect.top<currentWindowHeight&&ContainerRect.bottom>0) {
        for(i=0;i<titlechar.length;i++) {
            titlechar[i].classList.add(`ani${i}`)

            //console.log("애니메이션 재생")
        }
    } else if(ContainerRect.top<currentWindowHeight&&ContainerRect.bottom<=0) {
        for(i=0;i<titlechar.length;i++) {
            titlechar[i].classList.remove(`ani${i}`)
            //console.log("애니메이션 꺼짐")
        }
    }
    else if (ContainerRect.top>currentWindowHeight) {
        for(i=0;i<titlechar.length;i++) {
            titlechar[i].classList.remove(`ani${i}`)

            //console.log("애니메이션 꺼짐")
        }
    }
    else if (ContainerRect.top<currentWindowHeight) {
        for(i=0;i<titlechar.length;i++) {
            titlechar[i].classList.add(`ani${i}`)

            //console.log("애니메이션 재생")
        }
    }
}

//인트로 Sticky 요소 그라데이션
{
        const stickyStart = document.querySelector(".lastwords-container");
        const lastWords = document.querySelector('.lastwords');

        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const stickyRect = stickyStart.getBoundingClientRect();
            const currentScroll = window.pageYOffset;

            // 여유 구간(offset)
            const offsetStart = 0;
            const offsetEnd = -windowHeight*1.5;

            // 색상 변화 시작과 종료 scroll 값
            const scrollStart = currentScroll + stickyRect.top + offsetStart;
            const scrollEnd = scrollStart + Math.abs(stickyRect.top-stickyRect.bottom) + offsetEnd;

            // progress 계산
            let progress = (currentScroll - scrollStart) / (scrollEnd - scrollStart);
            progress = Math.max(0, Math.min(1, progress)); // 0~1 clamp

            // 배경색: #F3F2EC → #ac2a03
            const startBg = { r: 243, g: 242, b: 236 };
            const endBg = { r: 0, g: 0, b: 0 };
            const currentBg = {
                r: Math.round(startBg.r + (endBg.r - startBg.r) * progress),
                g: Math.round(startBg.g + (endBg.g - startBg.g) * progress),
                b: Math.round(startBg.b + (endBg.b - startBg.b) * progress),
            };

            // 텍스트 색: #000000 → #F3F2EC
            const startText = { r: 0, g: 0, b: 0 };
            const endText = { r: 243, g: 242, b: 236 };
            const currentText = {
                r: Math.round(startText.r + (endText.r - startText.r) * progress),
                g: Math.round(startText.g + (endText.g - startText.g) * progress),
                b: Math.round(startText.b + (endText.b - startText.b) * progress),
            };

            // 적용
            lastWords.style.backgroundColor = `rgb(${currentBg.r}, ${currentBg.g}, ${currentBg.b})`;
            lastWords.style.color = `rgb(${currentText.r}, ${currentText.g}, ${currentText.b})`;
});

}

//Sticky 요소 정렬

function lastWordsPaddingSet ()
        {
            const stickyArticle = document.querySelector(".lastwords.textcontent");
            const ArticleHeight = stickyArticle.offsetHeight;
            stickyArticle.style.paddingTop = `${(window.innerHeight/2)-(ArticleHeight/2)}px`

        }
//Sticky 효과 주기
{
            

            window.addEventListener("scroll", () => {
                const stickyStart = document.querySelector(".lastwords-container");
                const lastWords = document.querySelector(".lastwords");
                const stickyRect = stickyStart.getBoundingClientRect();

 
            
                    


                if(stickyRect.top<0 && stickyRect.bottom>=0){
                    lastWords.classList.add("sticky")

                }

                
                else if (stickyRect.top<0 && stickyRect.bottom<0) {
                    lastWords.classList.remove("sticky")
                }
                else if (stickyRect.top>=0) {
                    lastWords.classList.remove("sticky")
                }
                
                
            });

}





//간단 스크롤시 요소들 페이드인 페이드아웃
{
    const ScrollFades = document.querySelectorAll(".discocontent, .mainarticle")
    const titlechar = document.querySelectorAll(".Mix_T");



    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    // 요소의 상단이 뷰포트 하단에 닿을 때
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else {
                 entry.target.classList.remove('visible');
            }
        });
        }, {
        root: null,
        rootMargin: "0px 0px -15% 0px", // 하단을 기준으로
        threshold: 0
        });

        ScrollFades.forEach(el => observer.observe(el));
        titlechar.forEach(el => observer.observe(el));

}

//간단 페이드 인만
{
{
    const ScrollFades = document.querySelectorAll(".placecontenttop, .why, .placemainarticle, .works")




    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    // 요소의 상단이 뷰포트 하단에 닿을 때
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
        }, {
        root: null,
        rootMargin: "0px 0px -10% 0px", // 하단을 기준으로
        threshold: 0
        });

        ScrollFades.forEach(el => observer.observe(el));


}


}



//sticky요소들 위치 설정 (데스크탑)



function StickyPosDesc ()
{
    const stickyCover = document.querySelector(".stickycover");
    const stickyButton = document.querySelector(".underphoto-layout-button")
    const UnderLayout = document.querySelector(".underphoto-layout")
    const MainClick = document.querySelector(".mainclick");
    const NumsilChar = document.querySelector(".invisible")
    const serviceLayout = document.querySelector(".underphoto-services");

    MainClick.style.height =`${NumsilChar.offsetHeight}px`


    stickyCover.style.height = `${stickyButton.offsetHeight}px`
    UnderLayout.style.top = `${stickyButton.offsetHeight}px`
    serviceLayout.style.top = `${stickyButton.offsetHeight}px`
}
function StickyPosMob () {

    const stickyCover = document.querySelector(".stickycover");
    const stickyButton = document.querySelector(".underphoto-layout-button")
    const UnderLayout = document.querySelector(".underphoto-layout")
    const MainClick = document.querySelector(".mainclick");
    const NumsilChar = document.querySelector(".invisible");
    const serviceLayout = document.querySelector(".underphoto-services");


    stickyCover.style.height = `${stickyButton.offsetHeight}px`
    UnderLayout.style.top = `${stickyButton.offsetHeight}px`
    serviceLayout.style.top = `${stickyButton.offsetHeight}px`

}

function mainArticleWidthSet () {
    const mainArticle = document.querySelector(".mainarticle");
    const introTop = document.querySelector(".intercontenttop");

    mainArticle.style.width = `${introTop.offsetWidth}px`
}


//delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




//ABOUT, SERVICE 메뉴동작
{
    const thoughtClick = document.getElementById("thoughtclick");
    const serviceClick = document.getElementById("serviceclick");
    const serviceTopButton = document.querySelector(".scrollbutton-container")

    let isThoughtActive = false;
    let isServiceActive = false;
    
    serviceTopButton.addEventListener("click", async ()=>{
        const servicePop = document.getElementById("servicepop");
        const serviceText = document.getElementById("serviceclick");

        servicePop.classList.remove("rotate");
        serviceText.classList.remove("scale");

        ScrollPos = document.querySelector(".underphoto-layout-button");
        const ScrollTop = ScrollPos.getBoundingClientRect().top + window.scrollY

        
        window.scrollTo({
            top: ScrollTop,
            behavior: "smooth"});
        await delay(1000);
        serviceOnClickReset();
        isServiceActive = !isServiceActive
    })


    thoughtClick.addEventListener("click", async ()=>{
        
        const thoughtPop = document.getElementById("thoughtpop");
        const servicePop = document.getElementById("servicepop");
        const thoughtText = document.getElementById("thoughtclick");
        const serviceText = document.getElementById("serviceclick");

        if(!isThoughtActive && !isServiceActive){
        
        thoughtPop.classList.add("rotate");
        thoughtText.classList.add("scale");
        thoughtOnClick();
        }

        else if(!isThoughtActive && isServiceActive){

        
        thoughtPop.classList.add("rotate");
        thoughtText.classList.add("scale");
        servicePop.classList.remove("rotate");
        serviceText.classList.remove("scale");

        serviceOnClickReset();
        thoughtOnClick();

        isServiceActive = !isServiceActive
        
        }
        else if (isThoughtActive) {
        
        thoughtPop.classList.remove("rotate");
        thoughtText.classList.remove("scale")
        thoughtOnClickReset();
        
    }

        isThoughtActive = !isThoughtActive;

    })

    serviceClick.addEventListener("click", () => {

        const thoughtPop = document.getElementById("thoughtpop");
        const servicePop = document.getElementById("servicepop");
        const thoughtText = document.getElementById("thoughtclick");
        const serviceText = document.getElementById("serviceclick");

        if(!isServiceActive && !isThoughtActive){
        
        servicePop.classList.add("rotate");
        serviceText.classList.add("scale");
        serviceOnClick();
        }

        else if(!isServiceActive && isThoughtActive){


        servicePop.classList.add("rotate");
        serviceText.classList.add("scale");
        thoughtPop.classList.remove("rotate");
        thoughtText.classList.remove("scale");

        thoughtOnClickReset();
        serviceOnClick();

        isThoughtActive = !isThoughtActive
        
        }
        else if (isServiceActive) {

        servicePop.classList.remove("rotate");
        serviceText.classList.remove("scale");
        serviceOnClickReset();
        
    }

        isServiceActive = !isServiceActive;

    })


}


function thoughtOnClick () {
    const stickyCover = document.querySelector(".stickycover");
    const stickyButton = document.querySelector(".underphoto-layout-button")
    const UnderLayout = document.querySelector(".underphoto-layout")

    const rootStyle = getComputedStyle(document.documentElement);
    const fixedVh = parseFloat(rootStyle.getPropertyValue('--fixed-vh'));
    

    if(window.innerWidth>=1700){stickyCover.style.height = `${stickyButton.offsetHeight+UnderLayout.offsetHeight+0.16*window.innerHeight}px`} //DESKTOP



    else if(window.innerWidth<1200){stickyCover.style.height = `${stickyButton.offsetHeight+UnderLayout.offsetHeight+16*(fixedVh)}px`} //TABLET+MOBILE

    UnderLayout.classList.add("visible");
}

function thoughtOnClickReset () {
    const stickyCover = document.querySelector(".stickycover");
    const stickyButton = document.querySelector(".underphoto-layout-button")
    const UnderLayout = document.querySelector(".underphoto-layout")


    UnderLayout.classList.remove("visible");

    stickyCover.style.height = `${stickyButton.offsetHeight}px`
    
    //stickyCover.style.marginBottom = '0vh'
}

function serviceOnClick () {
    const stickyCover = document.querySelector(".stickycover");
    const stickyButton = document.querySelector(".underphoto-layout-button")
    const UnderLayout = document.querySelector(".underphoto-services")

    const rootStyle = getComputedStyle(document.documentElement);
    const fixedVh = parseFloat(rootStyle.getPropertyValue('--fixed-vh'));


    if(window.innerWidth>=1700){stickyCover.style.height = `${stickyButton.offsetHeight+UnderLayout.offsetHeight+0.16*window.innerHeight}px`} //DESKTOP


    else if(window.innerWidth<1200){stickyCover.style.height = `${stickyButton.offsetHeight+UnderLayout.offsetHeight+16*(fixedVh)}px`} //TABLET + MOBILE


    UnderLayout.classList.add("visible");
}

function serviceOnClickReset () {
    const stickyCover = document.querySelector(".stickycover");
    const stickyButton = document.querySelector(".underphoto-layout-button")
    const UnderLayout = document.querySelector(".underphoto-services")



    UnderLayout.classList.remove("visible");
 
    stickyCover.style.height = `${stickyButton.offsetHeight}px`
    //stickyCover.style.marginBottom = '0vh'
}




//뒷배경 스크롤 블러
function titleScrollOpacity () {
    const titleView = document.querySelector(".title")
    const currentScrollY = window.pageYOffset
    const currentWindowHeight = window.innerHeight;

    titleView.style.filter = (`blur(${(currentScrollY/currentWindowHeight)*30}px)`)

}
//뒵배경 스크롤 올라가기
function titleScrollTop () {
    const titleView = document.querySelector(".title")
    const currentScrollY = window.pageYOffset
    const currentWindowHeight = window.innerHeight;

    titleView.style.top = -(currentScrollY)*0.3 + 'px'
    if ((currentScrollY===currentWindowHeight)) {
        return
    }
    
}




{ window.addEventListener("scroll" ,() => {
        const currentScrollY = window.pageYOffset
        const currentWindowHeight = window.innerHeight;
        const currentWindowWidth = window.innerWidth;

        ScrollAniContent();
        
        if(currentScrollY<currentWindowHeight){
        titleScrollOpacity();
        titleScrollTop ();
        }

        

        
        
})}

//layoutphoto height 설정

    function UnderphotoDescImgResize () {
    
    const layoutPhotoFirst = document.getElementById("underphoto-firstPhoto");
    const layoutPhotoSecond = document.getElementById("underphoto-secondPhoto");

    const layoutArticleFirst = document.getElementById("underphoto-firstArticle")
    const layoutArticleSecond = document.getElementById("underphoto-secondArticle")

    layoutPhotoFirst.style.height = `${layoutArticleFirst.offsetHeight}px`
    layoutPhotoSecond.style.height = `${layoutArticleSecond.offsetHeight}px`

    }






//Gearlist position 설정 

{
    const contentTop = document.querySelector(".placecontenttop");
    const gearlistposition = document.querySelector(".gearlistmenu");

    const contentTopHeight = contentTop.offsetHeight;
    gearlistposition.style.top = `${contentTopHeight}px`
    

}
//Ratelist position 설정
{
    const contentTop = document.querySelector(".placecontenttop");
    const ratemenuposition = document.querySelector(".ratemenu");

    const contentTopHeight = contentTop.offsetHeight;
    ratemenuposition.style.top = `${contentTopHeight}px`
    

}

//기본 상태에서 Gearlist 클릭시 요소 실행 (DESKTOP)

function ClickHeightSet ()
    {
    const placeSize = document.getElementById("placecontent");
    const gearlist = document.querySelector(".gearlistmenu");

    const rootStyle = getComputedStyle(document.documentElement);
    const fixedVh = parseFloat(rootStyle.getPropertyValue('--fixed-vh'));

    const gearlistHeight = gearlist.offsetHeight;

    if(window.innerWidth>=1700){placeSize.style.height = `${0.8*window.innerHeight + gearlistHeight + 100}px`} //DESKTOP
    else if(window.innerWidth<1200){placeSize.style.height = `${fixedVh * 100 + gearlistHeight + 100}px`}  //TABLET + PHONE


    }

function ClickHeightReset ()
    {
    const placeSize = document.getElementById("placecontent");
    const gearlist = document.querySelector(".gearlistmenu");

    const rootStyle = getComputedStyle(document.documentElement);
    const fixedVh = parseFloat(rootStyle.getPropertyValue('--fixed-vh'));

    const gearlistHeight = gearlist.offsetHeight;
    if(window.innerWidth>=1700){placeSize.style.height = `${0.8*window.innerHeight}px`} //DESKTOP
    else if(window.innerWidth<1200){placeSize.style.height = `${fixedVh * 100}px`} //TABLET + PHONE

    }













//소개글 위치 이동
function ClickPositionSet ()
    {
    const mainArticle = document.querySelector(".placemainarticle");
    const gearlist = document.querySelector(".gearlistmenu");

    const gearlistHeight = gearlist.offsetHeight;
    mainArticle.style.top = `${gearlistHeight}px`

    }

function ClickPositionReset ()
    {
    const mainArticle = document.querySelector(".placemainarticle");
    const gearlist = document.querySelector(".gearlistmenu");


    const gearlistHeight = gearlist.offsetHeight;

   

    mainArticle.style.top = `0px`
    
    }












//메뉴 투명도 조정 - GEARLIST
function ClickMenuOpacitySet ()
    {
    const gearlist = document.querySelector(".gearlistmenu");
    gearlist.classList.add("visible");
    }

function ClickMenuOpacityReset ()
    {
    const gearlist = document.querySelector(".gearlistmenu");
    gearlist.classList.remove("visible");
    }



//메뉴 클릭, 터치시 동작 GEARLIST, RATE
 {
    const gearlistClick = document.getElementById("gearlistclick");
    const ratelistClick = document.getElementById("ratelistclick");
    const gearPop = document.getElementById("gearpop");
    const ratePop = document.getElementById("ratepop");
    

    let isGearActive = false;
    let isRateActive = false;

    gearlistClick.addEventListener("click", async ()=>{


        if(!isGearActive && !isRateActive) {
        gearPop.classList.add("rotate");
        gearlistClick.classList.add("scale");
        
        ClickHeightSet ();
       
        ClickPositionSet ();
  
        ClickMenuOpacitySet ();

        }

        else if (!isGearActive && isRateActive) 
        {
        gearPop.classList.add("rotate");
        gearlistClick.classList.add("scale");
        ratePop.classList.remove("rotate");
        ratelistClick.classList.remove("scale")

        ClickRatePositionReset ();
        ClickPositionSet ();
  

        ClickRateHeightReset ();
        ClickHeightSet ();
        

        ClickRateMenuOpacityReset ();
        ClickMenuOpacitySet ();
       
        
        isRateActive = !isRateActive;
        

        }
        else if (isGearActive) {
        gearPop.classList.remove("rotate");
        gearlistClick.classList.remove("scale");
        
        ClickMenuOpacityReset ();
        ClickHeightReset ();
      
    
        ClickPositionReset ();
        
        }

        isGearActive = !isGearActive;
       

    });

    ratelistClick.addEventListener("click", async ()=>{

        if(!isRateActive && !isGearActive) {
        
        ratePop.classList.add("rotate");
        ratelistClick.classList.add("scale");

 
        ClickRateHeightSet ();
        ClickRatePositionSet ();
        ClickRateMenuOpacitySet ();
     

        }

        else if (!isRateActive && isGearActive) 
        {
        ratePop.classList.add("rotate");
        ratelistClick.classList.add("scale");
        gearPop.classList.remove("rotate");
        gearlistClick.classList.remove("scale");
    
        ClickPositionReset ();
        ClickRatePositionSet ();
 

        ClickHeightReset ();
        ClickRateHeightSet ();
        


        

        ClickMenuOpacityReset ();
        ClickRateMenuOpacitySet ();
       
        
        isGearActive = !isGearActive;
        
        }

        else if (isRateActive) {
        
        ratePop.classList.remove("rotate");
        ratelistClick.classList.remove("scale");

        ClickRateMenuOpacityReset ();

        ClickRatePositionReset ();

   
        ClickRateHeightReset ();
        
    
        
        
        }

        isRateActive = !isRateActive;
       

    });


}

//초기 상태에서 Rate메뉴를 클릭하는 경우
 

    

//높이 늘리기 - RATE

function ClickRateHeightSet ()
    {
    const placeSize = document.getElementById("placecontent");
    const gearlist = document.querySelector(".ratemenu");
    //편의상 변수 이름은 수정하지 않음
    const rootStyle = getComputedStyle(document.documentElement);
    const fixedVh = parseFloat(rootStyle.getPropertyValue('--fixed-vh'));

    const gearlistHeight = gearlist.offsetHeight;

    if(window.innerWidth>=1700){placeSize.style.height = `${0.8*window.innerHeight + gearlistHeight + 100}px`} //DESKTOP

    else if(window.innerWidth<1200){placeSize.style.height = `${fixedVh * 100 + gearlistHeight + 100}px`} //TABLET + MOBILE
    }

function ClickRateHeightReset ()
    {
    const placeSize = document.getElementById("placecontent");


    const rootStyle = getComputedStyle(document.documentElement);
    const fixedVh = parseFloat(rootStyle.getPropertyValue('--fixed-vh'));

    if(window.innerWidth>=1700){placeSize.style.height = `${0.8*window.innerHeight}px`} //DESKTOP

    else if(window.innerWidth<1200){placeSize.style.height = `${fixedVh * 100}px`} //TABLET + MOBILE
    }




//소개글 위치 이동
function ClickRatePositionSet ()
    {
    const mainArticle = document.querySelector(".placemainarticle");
    const gearlist = document.querySelector(".ratemenu");

    const gearlistHeight = gearlist.offsetHeight;
    mainArticle.style.top = `${gearlistHeight}px`
    }

function ClickRatePositionReset ()
    {
    const mainArticle = document.querySelector(".placemainarticle");
    const gearlist = document.querySelector(".ratemenu");


    mainArticle.style.top = `0px`

    }
//소개글 투명도 조절

function ClickRateMenuOpacitySet () 
    {
    const gearlist = document.querySelector(".ratemenu");
    gearlist.classList.add("visible");
    }

function ClickRateMenuOpacityReset ()
    {
    const gearlist = document.querySelector(".ratemenu");
    gearlist.classList.remove("visible");
    }

//WORK 소개 문구 너비 세팅
function WorkWidthSet () {
    const workText = document.querySelector(".works");
    const workArticle = document.querySelector(".works-article")
    workTextWidth = workText.offsetWidth;

    workArticle.style.width = `${workTextWidth}px`


}

//모바일 앨범아트 터치
function DiscoMobTouch () {
    const DiscoGraph = document.querySelectorAll(".img-container");

    
    DiscoGraph.forEach(element => {
        element.addEventListener("click", ()=>{

                element.classList.toggle("dim")
                console.log("SEX")
            }
        )
        
    });
}



//속성 설정용 (높이 너비 등)

if (window.innerWidth>=1700) { //DESKTOP
    StickyPosDesc ();
    mainArticleWidthSet();
    lastWordsPaddingSet ();
    UnderphotoDescImgResize ();
    WorkWidthSet ();

    window.addEventListener("resize", ()=>{
        StickyPosDesc ();
        mainArticleWidthSet();
        lastWordsPaddingSet ();
        UnderphotoDescImgResize ();
        WorkWidthSet ();

    })
}
if (window.innerWidth<1200) { //TABLET + MOBILE
    DiscoMobTouch ();
    StickyPosMob ();
    lastWordsPaddingSet ();
    WorkWidthSet ();
 } 




