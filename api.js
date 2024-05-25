const url = "https://tpcconfessions.onrender.com/api";

function getConfession(){
    const rollNo = document.getElementById("roll_no").value;
    console.log(rollNo);
    fetch(`${url}/getConfession?roll_no=${rollNo}`)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        if (data.length > 0) {
          document.getElementById("to-you").innerText = `Confession: ${data[0].confession}`; 
        } else {
          document.getElementById("to-you").innerText ="No confession found for this roll number.";
          document.getElementById("to-you").style.color = "grey";
        }
        console.log(data);
      })
    .catch((error) => {
        document.getElementById("to-you").innerText = `Error: ${error.message}`;
        console.error("Error:", error);
        document.getElementById("to-you").style.color = "rgb(184, 135, 10)";
      });
}

function postConfession(){
    const confession= document.getElementById("feed").value;
    const rollNo = document.getElementById("roll_no").value;

    fetch(`${url}/postConfession`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            roll_no: rollNo,
            confession: confession,
        }),
    })
    .then((response) =>{
        return response.json();
    })
    .then(data => {
        document.getElementById("to-you").innerText ="Posted Confession Successfully.";
        document.getElementById("to-you").style.color = "blue";
        console.log(data)
    })
    .catch((error) => {
        document.getElementById("to-you").innerText = `Error: ${error.message}`;
        console.error("Error:", error);
        document.getElementById("to-you").style.color = "rgb(184, 135, 10)";
      });
}