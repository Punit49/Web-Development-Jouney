let btn = document.querySelector("#btn");
let response = document.querySelector("#response");
let inputField = document.querySelector("#inputField");

const updateResult = (element) => {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    td1.textContent = element.name;
    td2.textContent = element['state-province'] ? element['state-province']: "N/A";
    tr.append(td1, td2);
    response.append(tr);
    console.log(element);
}

const getColleges = async (state) => {
    try{
        let url = `http://universities.hipolabs.com/search?name=${state}&country=india`;
        let res = await axios.get(url);
        console.log(res.data);
        
        if(res.data.length > 0){
            response.innerHTML = "";
            res.data.forEach(element => {
                updateResult(element);
            });
        }
        else{
            alert("No College Found!");
            response.innerHTML = "";
        }        
    }
    catch(err){
        console.error(`Error: ${err}`);
    }
};

btn.addEventListener('click', async () => {
    let country = inputField.value;
    if(country) await getColleges(country);
});