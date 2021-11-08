const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', function () {
    const targetRect = target.getBoundingClientRect();
    // console.log(targetRect);
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;
    let curX =0;
    let curY=0;
    let mouseX=0;
    let mouseY=0;
    
    document.addEventListener('mousemove',function(event){
        mouseX = event.clientX;
        mouseY = event.clientY;
        //console.log(mouseX + "px" + mouseY + "px");
        //console.log(`${mouseX} px ${mouseY} px백틱키사용`);
        gsap.to(".horizontal",.5,{y:mouseY});
        gsap.to(".vertical",.5,{x:mouseX});
        gsap.to(".target",.5, {x:mouseX, y:mouseY});
        gsap.to(".tag",.5,{x:mouseX, y:mouseY});
    });

// function animate(){
//     requestAnimationFrame(animate);
//         curX += (mouseX - curX) * 0.1;
//         curY += (mouseY - curY) * 0.1;
    
    
//         horizontal.style.transform = `translateY(${curY}px)`;
//         vertical.style.transform = `translateX(${curX}px)`;
//         target.style.transform = `translate(${curX - targetHalfWidth}px, ${curY - targetHalfHeight}px)`;
//         tag.style.transform = `translate(${curX}px, ${curY}px)`;
//         tag.innerHTML = `${Math.ceil(curX)}px ${Math.ceil(curY)}px`;
//     }
//     animate();
        const aniDuration = 2;

        gsap.to("h2.title",{duration:1, opacity:0.3});
        gsap.to(".box",{duration:2,x:300,ease:"elastic.out(1, 0.3)",  repeat:-1, yoyo:true});
        gsap.to(".green",{duration:3, rotation:360, scale:0.5, yoyo:true,  repeat:-1});
        
});

