document.addEventListener("click", function ($event) {

    const parent =  $event.target.parentNode;
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
    // if click on element with .modal-trigger open modal
    if($event.target.classList.contains('modal-trigger')){
        showModal($event.target);
    }else{
        if(parent.classList.contains('modal-trigger')) {
            showModal(parent);
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

function showModal(trigger){
    const target = document.getElementById(trigger.dataset.target);
    console.log(target)
    if(target.style.display =="none" || target.style.display === ''){
        target.style.display = "block";
        setTimeout(()=>{
            target.classList.add('show');
        },100)
    }else{
        if(target.classList.contains('modal-animated')){
            target.classList.remove('show');
            setTimeout(()=>{
                target.style.display = "none";
            },300)
        }else{
            target.classList.remove('show');
            target.style.display = "none";
        }
    }
}

/*
const modalTriggers =  document.getElementsByClassName('modal-trigger');

for (var i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', showModal);
}*/
