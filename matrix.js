
function box(arr){
	let clickedItems = []; 
  let totalItem = 0;
	const body = document.querySelector('body');
  for(let i=0; i<arr.length; i++){
  	const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper');	
    for(let j=0; j<arr[i].length; j++){
    const div = document.createElement('div');
    div.id =  `id_${i}${j}`;
    div.textContent = `${i}${j}`;
      if(arr[i][j]!== 0){
          div.classList.add('box', 'black');	
          totalItem++;
          div.addEventListener('click', ()=>{
						clickedItems.push(div.id)
						console.log('id - ',clickedItems,totalItem );
            div.classList.replace('black','green');
						if(clickedItems.length === totalItem){
            let time = 500;
              clickedItems.forEach((el)=>{
                setTimeout(()=>{
                  document.querySelector(`#${el}`).classList.replace('green','black');  
                },time);
                time = time + 300;
              });
						     
              clickedItems = [];
						}
          });
      }else{
        div.classList.add('box','grey');
      }
      wrapperDiv.appendChild(div);
    }
    body.appendChild(wrapperDiv);
  }
		
   
}

box([[1,1,1],[1,1,0],[1,0,0]]);
