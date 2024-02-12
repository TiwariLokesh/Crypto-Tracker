const form = document.querySelector("#searchForm");
const res = document.querySelector("#tableResult");
var upd;

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    if (upd) {
        clearTimeout(upd);
    }

    const ctype = form.elements.coinType.value;
    fetchPrice(ctype);
});

const fetchPrice = async (ctype) => {
    try {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${ctype}`);
        console.log(response);
        const data = response.data.data;
        const price = parseFloat(data.priceUsd).toFixed(2);
        const volume = parseFloat(data.volumeUsd24Hr).toFixed(2);
        const change = parseFloat(data.changePercent24Hr).toFixed(2);
        const time = new Date().toLocaleString();

        res.innerHTML = ` <tr style="background-color: blue; color: white; font-weight: 700;">
            <td>Property</td>
            <td>Value</td>
        </tr>
        <tr>
            <td>${ctype.toUpperCase()} Price</td>
            <td>${price} USD</td>
        </tr>
        <tr>
            <td>Volume (24hr)</td>
            <td>${volume} USD</td>
        </tr>
        <tr>
            <td>Change (24hr)</td>
            <td>${change}%</td>
        </tr>
        <tr>
            <td>Last Update</td>
            <td>${time}</td>
        </tr>`;

        upd = setTimeout(() => fetchPrice(ctype), 10000);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
