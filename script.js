var names = "Pola Someshwar...";
const namespan = document.getElementById('namespan');
namespan.style.color = "white";
let i = 0;
function typeWriter()
{
    if(i<names.length)
    {
        namespan.textContent+=names.charAt(i);
        i+=1;
        setTimeout(typeWriter,250);
    }
}
typeWriter();