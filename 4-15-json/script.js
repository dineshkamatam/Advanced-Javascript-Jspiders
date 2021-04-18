// let x = '{ "name":"John", "age":30, "city":"New York"}';
// let y = JSON.parse(x);
// console.log(y);

// how to fetch data
// window
//   .fetch("data1.json")
//   .then((data) => {
//     data
//       .json()
//       .then((Response) => {
//         let output = "";
//         for (let res of Response) {
//           output += `<tr>
//                 <td>${res.emp_id}</td>
//                 <td>${res.emp_name}</td>
//                 <td>${res.emp_salary}</td>
//                 <td>${res.emp_designation}</td>
//                 </tr>`;
//         }
//         document.getElementById("demo").innerHTML = output;
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

window
  .fetch("https://api.covid19api.com/summary")
  .then((data) => {
    data
      .json()
      .then((response) => {
        let res = response.Countries;
        let output = "";
        console.log(res);
        res.forEach((covid, index) => {
          output += ` <tr>
         <td>${index + 1}</td>
         <td>${covid.Country}</td>
         <td>${covid.Date}</td>
         <td>${covid.NewConfirmed}</td>
         <td>${covid.NewDeaths}</td>
         <td>${covid.NewRecovered}</td>
         <td>${covid.TotalConfirmed}</td>
         <td>${covid.TotalDeaths}</td>
         <td>${covid.TotalRecovered}</td>
         </tr>`;
        }); //end od loop
        document.getElementById("demo").innerHTML = output;
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
