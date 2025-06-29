var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub:true,
    //markers: true,
}})

tl.to("#fanta",{
    top: "115%",
    left: "1%"
},'orange')

tl.to("#o2",{
    top:"155%",
    left:"23%"
},'orange')

tl.to("#o1",{
    width:"15%",
    top:"170%",
    right:"8%"
},'orange')

tl.to("#leaf",{
    top:"105%",
    rotate:"130deg",
    left:"80%"
},'orange')

tl.to("#leaf2",{
    top:"105%",
    rotate:"130deg",
    left:"0%"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub:true,
    //markers: true,
}})

tl2.to("#o2",{
    width:"28%",
    left:"35.5%",
    top: "200%"
},'fr')
tl2.to("#fanta",{
    width: "35%",
    left:"32%",
    top: "220%"
},'fr')
