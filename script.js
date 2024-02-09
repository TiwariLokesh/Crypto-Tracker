const form = document.querySelector("#searchForm");
form.addEventListener('submit',(e)=>{
e.preventDefault();   //refreshing will be prevented
    const ctype = form.elements.coinType.value;
    fetchPrice(ctype);
});