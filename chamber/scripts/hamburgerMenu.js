function toggleMenu(){
    const nav = document.getElementsByTagName("nav")[0]
    if (nav.className == '')
    {
        nav.className = 'hide'
    }
    else 
    {
        nav.className = ''
    }
}