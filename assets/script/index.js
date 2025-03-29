function makePost(title, body) {
  const paragraph = document.querySelector('.err-message');

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
  .then(res => res.json())

  .then(data => {
    addPost(data);
  })

  .catch(err => {
    paragraph.textContent = `Ошибка: ${err}`;
  })
}

//Добавляем пост в контейнер:
function addPost(post) {
  const container = document.querySelector('.post-container');
  const postDiv = document.createElement('div');
  postDiv.classList.add('post-container__div');

  postDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;

  container.appendChild(postDiv);

  /* В этом случае посты просто заменяют друг друга, но так, наверное, не очень:
  const postTitle = document.querySelector('.post-container__title');
  const postBody = document.querySelector('.post-container__article');

  postTitle.innerText = post.title;
  postBody.innerText = post.body;
  */
}

//Вешаем событие на кнопку:
const addButton = document.getElementById('btn');

addButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  const titleInput = document.getElementById('title-input');
  const bodyInput = document.getElementById('body-input');

  const title = titleInput.value;
  const body = bodyInput.value;

//Условие для ввода всех необходимых данных:
  if (title && body) {
    makePost(title, body);
  } else {
    alert('Заполните, пожалуйста, все поля!')
  } 

 //Очищаем инпуты: 
  titleInput.value = '';
  bodyInput.value = '';
});



