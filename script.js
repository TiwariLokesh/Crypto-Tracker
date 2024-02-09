const form = document.querySelector("#searchForm");
const res = document.querySelector("#result");

form.addEventListener('submit',(e)=>{
e.preventDefault();   //refreshing will be prevented
    const ctype = form.elements.coinType.value;
    fetchPrice(ctype);
});

const fetchPrice = async(ctype)=>{
    const r = await axios.get(`https://api.cryptonator.com/api/ticker/${ctype}`);
     const price = r.data.ticker.price; //see from console date->ticker->price that we need to show
     const volume = r.data.ticker.volume;
     const change = r.data.ticker.change;   
     const base = r.data.ticker.base;   
     const target = r.data.ticker.target;  
     const time = r.data.timestamp;  
}