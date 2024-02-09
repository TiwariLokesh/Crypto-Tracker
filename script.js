const form = document.querySelector("#searchForm");
form.addEventListener('submit',(e)=>{
e.preventDefault();   //refreshing will be prevented
    const ctype = form.elements.coinType.value;
    fetchPrice(ctype);
});

const fetchPrice = async(ctype)=>{
    const r = await axios.get(`https://api.cryptonator.com/api/ticker/${ctype}`);
    console.log(r.data.ticker.price);  //see from console date->ticker->price that we need to show
}