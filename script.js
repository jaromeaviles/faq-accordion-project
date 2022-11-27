const lists = document.querySelectorAll('.list-group li');

for(let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', () => {
        let dropdown = document.querySelectorAll('.dropdown-content p');
        let img = document.querySelectorAll('.dropbtn img');
        // add Class
        lists[i].classList.toggle('active-list');
        img[i].classList.toggle('expand');
        dropdown[i].classList.toggle('show');
    });
}