const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

async function getRandomDog() {
	try{
        let response = await fetch('https://random.dog/woof.json')
		result = await response.json();
		console.log(result);
			if(result.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${result.url} alt="dog" />`;
			}
    }catch(err){
        alert(err);
    }
		
}


// document.querySelector("main").innerHTML = `
//     <div class="container>
//         <div class="col-md-8 col-sm-12">
//             <h1>
//             Dog Breeds
//             </h1>
            
//         </div>
//         <div class="form-group">
//                 <label for="dog_breed">Select Dog Breed</label>
//                 <select class="form-control text-center" id="breed">
//                     <option vlaue="Affenpinscher">Affenpinscher</option>
//                     <option value="African">African</option>
//                     <option value="Airedale">Airedale</option>
//                     <option value="Akita">Akita</option>
//                     <option value="Appenzeller">Appenzeller</option>
//                     <option value="Australian Shepherd">Australian Shepherd</option>
//                     <option value="Basenji">Basenji</option>
//                     <option value="Beagel">Beagel</option>
//                     <option value="Bluetick">Bluetick</option>
//                     <option vlaue="Borzoi">Borzoi</option>
//                     <option vlaue="Bouvier">Bouvier</option>
//                     <option vlaue="Boxer">Boxer</option>
//                     <option vlaue="Brabancon">Brabancon</option>
//                     <option vlaue="Briard">Briard</option>
//                     <option vlaue="Buhund">Buhund</option>
//                     <option vlaue="Bulldog">Bulldog</option>
//                     <option vlaue="Bullterrier">Bullterrier</option>
//                     <option vlaue="Cairn">Cairn</option>
//                     <option vlaue="Cattledog">Cattledog</option>
//                     <option vlaue="Chihuahua">Chihuahua</option>
//                     <option vlaue="Chow">Chow</option>
//                     <option vlaue="Clumber">Clumber</option>                               
//                     <option value="Cockapoo">Cockapoo</option>
//                     <option value="Collie">Collie</option>
//                     <option value="Coonhound">Coonhound</option>
//                     <option value="Corgi">Corgi</option>
//                     <option value="Cotondetulear">Cotondetulear</option>
//                     <option value="Dachshund">Dachshund</option>
//                     <option value="Dalmatian">Dalmatian</option>
//                     <option value="Dane">Dane</option>
//                     <option value="Deerhound">Deerhound</option>
//                     <option value="Dhole">Dhole</option>
//                     <option value="Dingo">Dingo</option>
//                     <option value="Doberman">Doberman</option>
//                     <option value="Elkhound (Norwegian) ">Elkhound (norwegian)</option>
//                     <option value="Entlebucher">Entlebucher</option>
//                     <option value="Eskimo">Eskimo</option>
//                     <option value="Finnish">Finnish</option>
//                     <option value="Frise">Frise</option>
//                     <option value="Germanshepherd">Germanshepherd</option>
//                     <option value="Greyhound">Greyhound</option>
//                     <option value="Groenendael">Groenendael</option>
//                     <option value="Havanese">Havanese</option>
//                     <option value="Hound">Hound</option>
//                     <option value="Husky">Husky</option>
//                     <option value="Keeshond">Keeshond</option>
//                     <option value="Kelpie">Kelpie</option>
//                     <option value="Komondor">Komondor</option>
//                     <option value="Kuvasz">Kuvasz</option>
//                     <option value="Labradoodle">Labradoodle</option>
//                     <option value="Labrado">Labrado</option>
//                     <option value="Leonberg">Leonberg</option>
//                     <option value="Lhasa">Lhasa</option>
//                     <option value="Malamute">Malamute</option>
//                     <option value="Malinois">Malinois</option>
//                     <option value="Maltese">Maltese</option>
//                     <option value="Mastiff">Mastiff</option>
//                     <option value="Mexicanhairless">Mexicanhairless</option>
//                     <option value="Mix">Mix/option>
//                     <option value="Mountain">Mountain</option>
//                     <option value="Newfoundland">Newfoundland</option>
//                     <option value="Otterhound">Otterhound</option>
//                     <option value="Ovcharka">Ovcharka</option>
//                     <option value="Papillon">Papillon</option>
//                     <option value="Pekinese">Pekinese</option>
//                     <option value="Pembroke">Pembroke</option>
//                     <option value="Pinscher">pinscher</option>
//                     <option value="Pitbull">Pitbull</option>
//                     <option value="Pomeranian">Pomeranian</option>
//                     <option value="Pug">Pug</option>
//                     <option value="Puggle">Puggle</option>
//                     <option value="Retriever">Retriever</option>
//                     <option value="Rottweiler">Rottweiler</option>
//                     <option value="Shiba">Shiba</option>
//                     <option value="Shihtzu">Shihtzu</option>
//                     <option value="Springer">Springer</option>
//                     <option value="Stbernard">Stbernard</option>
//                 </select>
//             </div>
//             <button class="btn btn-warning btn-block" id="mybutton">Go</button>
            
//         </form>
//         <img id="dog_image">Image here</img>
//     </div>`

//     function createMyElement(elem, elemClass = "", elemId = "") {
//         let element = document.createElement(elem);
//         element.setAttribute("class", elemClass);
//         element.setAttribute("id", elemId);
//         return element;
//       }

// let selectedBreed;let result;

// function firstData(result){
//     if(document.getElementById('breed').value === "Affenpinscher"){
//         console.log(result);
//         imageData(result[0])
//     }
// }

// imageData = (value) => {
//     document.getElementById('dog_image').setAttribute('src', value);
//     console.log(value);
//     console.log('hai');
// }

// //calling the data through fetch
// let getData = async () => {
//     try{
//         let res = await fetch("https://dog.ceo/api/breeds/list/all")
//         let result = await res.json();
//         console.log(result);
//         firstData(result);

//     }catch(err){
//         alert(err);
//     }
// }
// getData();


// document.getElementById('mybutton').addEventListener('click',function(e){
//     e.preventDefault();
//     selectedBreed = document.getElementById('breed').value;
//     imageData(result);
// })






