document.addEventListener("click", function ($event) {
    if (
        $event.target.classList.contains("nav-toggler") ||
        $event.target.classList.contains("nav-toggler-icon")
    ) {
        
        let toggler = $event.target;
        let menuId = toggler.dataset.target;
        let menu = document.getElementById(menuId);
        let content = menu.getElementsByClassName("nav")[0];

        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
        } else {
            menu.style.maxHeight = content.scrollHeight + "px";
        }
    }
});
 
function expand(){
    const target = this.getAttribute("data-target");
    const expandible =  document.getElementById(target);
    const content = expandible.firstElementChild;
    expandible.style.display = 'block';
    if (expandible.style.height) {
        expandible.style.height = null;
        setTimeout(()=>{
            expandible.style.display = '';
        },300)
    } else {
        expandible.style.height = content.scrollHeight + "px";
    }
}

var expandibleTriggers = document.getElementsByClassName("expandible-trigger");
for (var i = 0; i < expandibleTriggers.length; i++) {
    expandibleTriggers[i].addEventListener('click', expand);
}

function expandSidebar(){
    const sidebar  =  document.getElementById('sidebarContainer');
    if(sidebar.classList.contains('expanded'))
    {
        sidebar.classList.remove('expanded')
    }else{
        sidebar.classList.add('expanded');
    }
}
const expandTrigger =  document.getElementById('expandTrigger');
expandTrigger.addEventListener('click',expandSidebar)

function showModal($event){
    const target = document.getElementById($event.target.dataset.target);
    console.log($event.target)
    if(target.classList.contains('show')){
        target.classList.remove('show');
        setTimeout(()=>{
            target.style.display = "none";
        },300)
    }else{
        target.style.display = "block";
        setTimeout(()=>{
            target.classList.add('show');
        },100)
    }
  
    
}
const modalTriggers =  document.getElementsByClassName('modal-trigger');
for (var i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', showModal);
}
