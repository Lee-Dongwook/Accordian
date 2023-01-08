window.onload = () =>
{
const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
console.log(panelFaqContainer);


const btnAllClose = document.getElementById('btn-all-close');
console.log(btnAllClose);

for(let i = 0; i<panelFaqContainer.length; i++)
{
    panelFaqContainer[i].addEventListener('click',function(){
        console.log('클릭!' + i);

    })
}


}