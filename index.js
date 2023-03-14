
var idItem = 0;
function addToCart(item){
    idItem += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', idItem);

    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);

    var title = document.createElement('div');
    title.innerText = "Helloo world";
    
    var delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.setAttribute('onclick', 'del('+idItem+')')
    
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(delBtn);
    
    cartItems = document.getElementById('title');
    cartItems.append(selectedItem);
}

function del(item){
    document.getElementById(item).remove();
}