const form = document.querySelector('form');
const container = document.querySelector('.container');
const inputform = document.querySelector('.input');
const mainBtn = document.querySelector('.btn-main');

const editImg = document.createElement('img');
editImg.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEklEQVRIS92V7RHBQBCGn1SACuiAEuiEDuiADnSASiiBDuhAB8xrcmZz+bi7kDHjfmWSzfu1O3sZHZ+sY3y+RbAEHsABuFvRPsEU2AGjgLMFsAf6wBGY5PVnYGZJfIIrMGwBfsn/GQMFEp9ANnVC0VnlApdznRMgkhWwrQKKIaiLRXgurg2wbkPgKxeGi0XP6oVz9Gp2SkShWIRXAE8hqAKXwrr37zmJcZAKrpg0SZXT4je5DbgaPYglkBI10WbbFIti69nehiJyjqQoJvPSmMcSqC7Y0HwfFYYnlsBuj9Iomo+tHTiMJnDVJBME9l7p8+8J3JilKrf1N3ufVF04ukhCd0KdAIHP87Udtfc/cfInBE9SomMZFW4kRwAAAABJRU5ErkJggg==')


form.addEventListener('submit', (e) => {
    e.preventDefault()


    const card = document.createElement('div');
    card.className = 'card'

    container.append(card)


    const p = document.createElement('p')





    const editImg = document.createElement('img');
    editImg.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEklEQVRIS92V7RHBQBCGn1SACuiAEuiEDuiADnSASiiBDuhAB8xrcmZz+bi7kDHjfmWSzfu1O3sZHZ+sY3y+RbAEHsABuFvRPsEU2AGjgLMFsAf6wBGY5PVnYGZJfIIrMGwBfsn/GQMFEp9ANnVC0VnlApdznRMgkhWwrQKKIaiLRXgurg2wbkPgKxeGi0XP6oVz9Gp2SkShWIRXAE8hqAKXwrr37zmJcZAKrpg0SZXT4je5DbgaPYglkBI10WbbFIti69nehiJyjqQoJvPSmMcSqC7Y0HwfFYYnlsBuj9Iomo+tHTiMJnDVJBME9l7p8+8J3JilKrf1N3ufVF04ukhCd0KdAIHP87Udtfc/cfInBE9SomMZFW4kRwAAAABJRU5ErkJggg==')
    const removeImg = document.createElement('img');
    removeImg.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAqUlEQVRIS+2VwRFAMBBFn0qUgE6UQgWUpBQ6oBImMziEnR8iN7llNtn3/+4km5F4ZYnzowA10AGlIWQGWmCwhCqAS5ALlyNQvQWs+0VLiIrLEqkEKn4BHBdie3869q0nBxzKpXXPonn+dfO+BvgK1f7khzpQCaNL9AMu7+ppSf4eyK8pukSK8BgQMmh86HQ3+ayX7EZlDxRK+h5fgOZudKqRGZjfPpYcsAFQOTgZ+46nzgAAAABJRU5ErkJggg==')



    const checkbox = document.createElement('img')
    checkbox.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAtUlEQVRIS+2U0Q2DMAwFjw26CR2BTtQRaDdgIzpC2aQjoCeB5AYaGwp/yRco4U5+dqg4eVUn8ykCN+ES0RzRBbgDzzSzIyISvAeuk+BhJf8KLHwAGuBzlMCFS7S3ghDcEyjLLi0ZCMNzAsFb4A3cjGQTPCcQ6AXURqLz87SsNnTtWud6kEr0vUYxDPd6oH0r0fsmeERgJXpezLn3t4uOqSrR+rpEHjxaQYTz80y0gt2SInCjGwGG9SYZcTX5YQAAAABJRU5ErkJggg==')
    const notDone = document.createElement('img')

    notDone.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAw0lEQVRIS+2U3Q2CQBCEPzqwEyxBO5BKtQMtQTuxBDOJJCfuHyYXX+ANssy3Ozt3A52fobM+GyB1+O8WnYAb8HRa3QEH4OKNEk0g8TNwB44GROJXYA9MHiQCSEDdjwakFX+8pzCnzHZgQeTG3HkorsIMoJolRN9kSypeBSwhei+JrwXMtug/b/FfYapa1HouEWvxZlIzgJUWCXnpWjVBFMUowh+QykHzFtpCfjpo6qTrVZHelJWCbMkVjbBmA6QWdrfoBQwINBmYmmoWAAAAAElFTkSuQmCC')



    p.innerText = e.target.elements.task.value
    card.append(p)

    e.target.elements.task.value = "";

    card.append(removeImg)
    card.append(editImg)
    card.append(checkbox)
    card.append(notDone)



    removeImg.addEventListener('click', e => {
        card.remove()
    })


    checkbox.addEventListener('click', e => {
        p.style.textDecoration = 'line-through'
        card.style.backgroundColor = "lightgreen"

    })



    editImg.addEventListener('click', (e) => {
        inputform.value = p.innerText
        mainBtn.innerText = 'Edit'

        card.remove()

    })


    notDone.addEventListener('click', (e) => {
        card.style.backgroundColor = "lavenderblush"
        p.style.textDecoration = 'none';


    })


    mainBtn.innerText = 'Add'



})