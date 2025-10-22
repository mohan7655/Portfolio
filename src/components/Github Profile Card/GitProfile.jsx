import React from "react";

const GitProfile = ()=>{
    const githubUserName = "mohan7655"

var profileData;

getProfileData = async () => {
    await axios.get(`https://api.github.com/users/${githubUserName}`)
        .then(res => profileData = res.data)
        .catch(err => console.log(err))

    document.getElementById("name").innerHTML = `Hi All I'm ${profileData.login}`
    document.getElementById("avatar").src = profileData.avatar_url
    document.getElementById("bio").innerHTML = profileData.bio
    document.getElementById("location").innerHTML = profileData.location
}
getProfileData();

    return (
        <>
                <div class="section-lg  bg-primary shadow-lg border-0 card">
      <div class="container">
        <div class="p-5">
          <div class="row">
            <div class="order-lg-2 col-lg-4">
              <img
                id="avatar"
                alt=""
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                style="width: 200px"
                src=""
              />
            </div>
            <div class="order-lg-1 col-lg-8">
              <h2 class="text-white mt-3" id="name"></h2>
              <p class="lead text-white mt-3" id="bio"></p>
              <div
                class="my-3 lead text-white"
              >
                <i class="fa fa-location-arrow mr-2" aria-hidden="true"></i>
                <span id="location"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
    {/* <script src="index.jsx"></script> */}
        </>
    )
};
export default GitProfile;