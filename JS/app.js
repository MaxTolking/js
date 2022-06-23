document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById('add_button')
    const tableBody = document.getElementById('table_body')
    addButton.addEventListener("click", function () {
        tableBody.insertAdjacentHTML('beforeend', '<tr><td class="table_element">Номер</td> <td class="table_element">Название</td> <td class="table_element">Описание</td> <td><a id="remove" href="#">Удалить</a></td> </tr>')
    })

    tableBody.addEventListener("click", function (event) {
        if (event.target.id !== 'remove') {
            return
        }
        event.target.closest('tr').remove() 
    })

    const search = document.getElementById('search')
    search.addEventListener("input", function () {
        const elements = tableBody.querySelectorAll('.table_element')
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerText.indexOf(this.value) != -1) {
                console.log(elements[i].innerText)
                elements[i].style.backgroundColor = "green"
                if (this.value =='') {
                    elements[i].style.backgroundColor = "white"
                }    
            }else {
                elements[i].style.backgroundColor = "white"
            }
        }  
    })
})


