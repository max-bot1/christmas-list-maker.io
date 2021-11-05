(function whole (){
    let idCounter = 0

    document.querySelector("form").addEventListener("submit", addItem)


    const itemArr = []

    
    function addItem (event){
        event.preventDefault();

        let itemPrice 
        if(document.getElementById('price').value === ""){
            itemPrice = 0
        } else {
            itemPrice = document.getElementById('price').value
        }

        let imgUrl
        if(document.getElementById('img').value === ""){
            imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmR2FrTPQN68vNb3USC5kY_3NABut1T2RFcw&usqp=CAU'
        } else {
            imgUrl = document.getElementById('img').value
        }

        const item = {
            imageUrl: imgUrl,
            name: document.getElementById('name').value,
            price: parseInt(itemPrice),
            id: idCounter,
            checked: false
            
        }
       
        itemArr.push(item)
        
        
        const listItem = document.createElement('div')
        listItem.className = 'item-card'
        listItem.innerHTML = `<img src=${item.imageUrl}> <span class="name" id="${item.id}">${item.name}</span>
        <span class="price" style= padding:20px>$${item.price}</span>`
        
        if(document.querySelector('#img').src === ""){
            document.querySelector('#img').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Hi5TAzGX52sRt9XylXAqe8x5faRIi-gF_w&usqp=CAU"
        }

        const id = document.createElement('input')
        id.type = 'hidden'
        id.value = item.id
        listItem.appendChild(id)
        
        
        document.getElementById('section').appendChild(listItem)
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X'
        deleteBtn.className = 'deleteBtn'
        deleteBtn.addEventListener('click', deleteItem)
        listItem.appendChild(deleteBtn)
        
        
        const checkBox = document.createElement('input')
        checkBox.class = 'check-box'
        checkBox.type = 'checkbox'
        checkBox.checked = item.checked
        checkBox.price = item.price
        
        listItem.appendChild(checkBox)
        
        document.querySelector('#img').value = ''
        document.querySelector('#name').value = ''
        document.querySelector('#price').value = ''
        
        idCounter++
        
        document.getElementById(item.id).addEventListener('click', crossOffItem)
        checkBox.addEventListener('click', checkTheBox)
        checkBox.addEventListener('click', calculateSumChecked)
        
        calculateSumTotal(itemArr)
        calculateSumChecked(itemArr)
        
    }
    
    function calculateSumTotal (arr) {
        let sum = 0
        for(let i=0;i<arr.length;i++){

            sum += arr[i].price
        
        }
        document.getElementById('total').innerHTML = `Total: $${sum}`
    }
    
    let checkedSum = 0
    function calculateSumChecked (arr) {
        
        for(let i=0;i<arr.length;i++){
            if(arr[i].checked === true){
                checkedSum += arr[i].price
            }
        }
        checkedTotal.innerHTML = `Total of Checked Items: $${checkedSum}`
    }

    function checkTheBox (event) {
        if(event.target.checked === true){
            checkedSum = checkedSum + +event.target.price
        } else {
            checkedSum = checkedSum - +event.target.price
        }
        
        
    }

    function deleteItem(event){
        event.target.parentNode.remove()
        itemArr.splice(event.target.id, 1)
        
        calculateSumTotal(itemArr)
        calculateSumChecked(itemArr)
        
    }
    
    function crossOffItem(event){
        event.target.classList.toggle('checked') 
    }
    
    
    
    


})()