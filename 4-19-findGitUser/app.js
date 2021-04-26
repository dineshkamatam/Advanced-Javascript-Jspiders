let input = document.getElementById("input");
let form = document.getElementById("form");
let templet = document.getElementById("templet");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  let searchText = input.value;
  FindUser(searchText);
  input.value = "";
});

async function FindUser(searchText) {
  let clientId = "Iv1.be681b605b9021d5";
  let clientSecret = "8e5d860298b7712e108973457b35cf8b3050df02";
  try {
    let response = await window.fetch(
      `https://api.github.com/users/${searchText}?Client_id${clientId}&Client_Secret${clientSecret}`
    );
    let finaldata = await response.json();
    console.log(finaldata);
    let output = `
          <section>
              <div class="image">
                <img src=${finaldata.avatar_url}/>
              </div>
              <div class="data">
              <h2>${finaldata.name}</h2><br/>
              <h4><i class="fas fa-user"></i> ${finaldata.login}</h4>
              <h4><i class="fa fa-map-marker-alt"></i> ${finaldata.location}</h4>
              <h4><i class="fas fa-building"></i> ${finaldata.company}</h4>
              <h4><i class="fas fa-book"></i> ${finaldata.public_repos} Repositories</h4>
                </div>
          </section>
       `;
    templet.innerHTML = output;
  } catch (error) {
    console.log(error);
  }
}
