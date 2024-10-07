let users = document.querySelector('.users')

async function getUSers() {
    try {
        let res =await fetch('https://jsonplaceholder.typicode.com/comments')
        let data =await res.json()
        
        data.forEach((item) => {
            
            let user = document.createElement('div')
            user.classList.add('user')
            
            let name = document.createElement('h2')
            let body = document.createElement('p')
            let mail = document.createElement('a')
            
            name.textContent = item.name
            body.textContent = item.body
            mail.textContent = item.email
            mail.href = `mailto:${item.email}`
            
            user.append(name,body,mail)
            users.append(user)
        })
    } catch (error) {
        console.log('ошибка при получение данных');
        
    }
}

window.addEventListener('DOMContentLoaded', () => getUSers())