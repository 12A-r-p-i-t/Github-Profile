function handleClick() {
    var username = document.querySelector("input").value
    console.log(username)
    var url = "https://api.github.com/users/" 
    url += username 
    document.querySelector("input").value = "" 
    var accessToken = "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"
    const fetchPromise = fetch( url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
      })
    fetchPromise
        .then((response) => {
            if(!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            console.log(response)
            return response.json()
        })   
        .then((data) => {
            console.log(data)
            document.querySelector("img").setAttribute("src",data.avatar_url)
            document.querySelector("#bio").innerHTML = data.bio
            document.querySelector("#login").textContent = `@${data.login}`
            document.querySelector("#followers").textContent = data.followers
            document.querySelector("#following").textContent = data.following 
            document.querySelector("#Repos").textContent = data.public_repos 
            document.querySelector("#name").textContent = data.name
            document.querySelector("#profileLink").setAttribute("href",data.html_url)
            document.querySelector(".flex-container-1").style.display = "flex";

        })
        .catch((error) => {
            console.error(`could not get output : ${error}`)
        })
}

// AUTH_TOKEN = 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
//Authentication: `Bearer ${accessToken}`

avatar_url
: 
"https://avatars.githubusercontent.com/u/50476777?v=4"
bio
: 
"Youtuber | Instructor | Influencer | FullStack MERN DEVELOPER + Flutter Developer"
blog
: 
"www.dosomecoding.com"
company
: 
null
created_at
: 
"2019-05-10T06:09:45Z"
email
: 
null
events_url
: 
"https://api.github.com/users/anshuopinion/events{/privacy}"
followers
: 
340
followers_url
: 
"https://api.github.com/users/anshuopinion/followers"
following
: 
4
following_url
: 
"https://api.github.com/users/anshuopinion/following{/other_user}"
gists_url
: 
"https://api.github.com/users/anshuopinion/gists{/gist_id}"
gravatar_id
: 
""
hireable
: 
null
html_url
: 
"https://github.com/anshuopinion"
id
: 
50476777
location
: 
"India"
login
: 
"anshuopinion"
name
: 
"Anshu Raj"
node_id
: 
"MDQ6VXNlcjUwNDc2Nzc3"
organizations_url
: 
"https://api.github.com/users/anshuopinion/orgs"
public_gists
: 
0
public_repos
: 
74
received_events_url
: 
"https://api.github.com/users/anshuopinion/received_events"
repos_url
: 
"https://api.github.com/users/anshuopinion/repos"
site_admin
: 
false
starred_url
: 
"https://api.github.com/users/anshuopinion/starred{/owner}{/repo}"
subscriptions_url
: 
"https://api.github.com/users/anshuopinion/subscriptions"
twitter_username
: 
"dosomecoding"
type
: 
"User"
updated_at
: 
"2023-06-19T02:05:01Z"
url
: 
"https://api.github.com/users/anshuopinion"