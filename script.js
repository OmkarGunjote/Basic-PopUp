const trigger = document.querySelector('#trigger');
const open = document.querySelector('.open-popup');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

open-popup.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        closeModal();
    }
})

function openModal() {
    open.classList.add('active');
}
function closeModal() {
    open.classList.remove('active');
}