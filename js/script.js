const countwords = () =>{
    let noc = document.getElementById('words').value.length;
    let now = document.getElementById('words').value;
    now = now.match(/\w+/g );
    now = now.length;

    document.getElementById('showdata').innerHTML="The total characters = " + noc;
    document.getElementById('showwords').innerHTML="The total words = " + now;
        }