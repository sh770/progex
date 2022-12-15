// Q3:
    // 1. create a login page (you can reuse the code from the previous lesson)
    // 2. assume that the user is logged in if the user name is "admin" and the password is "1234"
    // 3. if the user is logged in, show a welcome message and table of all users in "data_base_l3.json" and their emails
  
    let Data;

    //more option don't waite to fetch: use in fetch when the html page load.
    
    const buildTable = async () => {
        await fetch("data_base_l3.json")
               .then(res => res.json())
                .then(res => Data = res);
                console.log(Data)
        for(let key in Data.users){
        let tr = document.createElement("tr");
            for(let key2 in Data.users[key]){
               console.log(Data.users[key][key2])
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(Data.users[key][key2]));
            tr.appendChild(td);
            }
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(Data.users[key].name +"_" + Data.users[key].last_name + "@gmail.com"));
            tr.appendChild(td);
            document.getElementById("tab").appendChild(tr);
        }
        // document.getElementById("tab").style.display = "block";    
    }
        
        