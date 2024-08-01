let allData = [];
let n=[];
let newD = fetch('../alldata.json')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
    
  });

newD.then((data) => {
  allData = data;
  console.log(allData);
  displayData(allData);
});


let songData= document.querySelector('.songArt');
function displayData(allData){
    allData.forEach((elem)=>{
      let list=document.createElement('div');
      list.className="list";
      list.innerHTML=`
      <img src="${elem.img}" alt="">
            <p class="name">${elem.name}</p>
            <p class="type">${elem.type}</p>
            <p class="follower"><i class="fas fa-users"></i>  ${elem.followers}</p>
            <p class="request"><i class="fas fa-tags"></i>  on Request</p>
      `
songData.appendChild(list);
})

}

let song=document.getElementById('song');
song.addEventListener('click',()=>{
    document.location.href="./component/song/song.html";
})