
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstpageanim(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        duration:1,
        stagger:.2,
        delay:-1,
        ease:Expo.easeInOut
    })
    .from("#footer",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        delay:-1
    })
}
firstpageanim()
var timeout;
function circlechaptakaro(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        xscale=gsap.utils.clamp(.8,1.2,dets.clientX=xprev);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY=yprev);
     
        xprev=dets.clientX;
        yprev=dets.clientY;
        circlemousefollower(xscale,yscale)
        timeout=settimeout(function(){
            document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        },100); 
    });
}
circlechaptakaro()

function circlemousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
circlemousefollower()




