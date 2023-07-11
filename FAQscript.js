function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
    menu.classList.toggle('hide')
}

const dropdownTitle = document.querySelectorAll('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');
dropdownTitle.forEach(item => {
    item.addEventListener('click', toggleMenuDisplay);
})