let nameInp= document.getElementById('nameInp');
let urlInp= document.getElementById('urlInp');
let submit=document.getElementById('submit')
let bookMarkContainer;

if(localStorage.getItem('name')==null){
    bookMarkContainer=[]
}
else{
   bookMarkContainer= JSON.parse(localStorage.getItem('name'));
   displayBookMark();
}

function addBookMark() {
    let bookMark = {
        name:nameInp.value,
        url:urlInp.value
    }
    bookMarkContainer.push(bookMark)
    localStorage.setItem(bookMark.name,JSON.stringify(bookMarkContainer))
    displayBookMark();
    clearForm();

}

function displayBookMark() {
    var cartona = ``;
    for (var i = 0; i < bookMarkContainer.length; i++) {
      cartona += `

      <div class="face py-5 m-auto" id="item">
      <h2>${bookMarkContainer[i].name}</h2>
          <button onclick='visitUrl("${bookMarkContainer[i].url}")' class="btn btn-primary">visit</button>
          <button onclick='deleteBookMark(${i},"${bookMarkContainer[i].name}")'  class="btn btn-danger btnDelete">delete</button>
        </div>
          `;

    }
    document.getElementById("myBookMark").innerHTML = cartona;
}

function clearForm() {
    nameInp.value='';
    urlInp.value='';
    
}

function deleteBookMark(bookMarkIndex,bookMarkName) {
    bookMarkContainer.splice(bookMarkIndex,1);
    localStorage.removeItem(bookMarkName);
    displayBookMark()
}
function visitUrl(params) {
    window.open(params,'_blank').focus();
}















submit.addEventListener('click',function () {addBookMark()
    
})