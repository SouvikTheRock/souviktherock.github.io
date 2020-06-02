window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;
    if(window.innerWidth>991)
    {
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}
window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;
    if(window.innerWidth>700)
    {
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}
window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;
    if(window.innerWidth>100)
    {
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}
