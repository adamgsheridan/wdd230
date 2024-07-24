function toggleMenu(){
    const nav = document.getElementsByTagName("nav")[0]
    console.log(nav)
    if (nav.className == '')
    {
        nav.className = 'hide'
    }
    else 
    {
        nav.className = ''
    }
}