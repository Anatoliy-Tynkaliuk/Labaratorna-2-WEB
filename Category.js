let posts = [
    { id: 1, title: "Nik PT aniom", description: "<strong>Країна виробник:</strong> Китай  <br> <strong>Вид взуття:</strong> Багатошиповки, стоноги <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 1500 грн.</strong>", image: "Сороканіжки Nik PT aniom.jpg", category: "Сороконіжки" },
    { id: 2, title: "Adidas X Speedportal TF", description: "<strong>Країна виробник:</strong> Індонезія <br> <strong>Вид взуття:</strong> Багатошиповки, стоноги <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2120 грн.</strong>", image: "Сороканіжки Adidas X Speedportal TF.jpg", category: "Сороконіжки" },
    { id: 3, title: "Nike Tiempo X Legend", description: "<strong>Країна виробник:</strong> В'єтнам <br> <strong>Вид взуття:</strong> Багатошиповки, стоноги <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2400 грн.</strong>", image: "Сороконіжки Nike Tiempo X.jpg", category: "Сороконіжки" },
    { id: 4, title: "Nike Air Zoom", description: "<strong>Країна виробник:</strong> В'єтнам <br> <strong>Вид взуття:</strong> Багатошиповки <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 3100 грн.</strong>", image: "Nike Air Zoom.jpg", category: "Сороконіжки" },
    { id: 5, title: "Nike Tiempo X PRO FG", description: "<strong>Країна виробник:</strong> Китай <br> <strong>Вид взуття:</strong> Бутси <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2280 грн.</strong>", image: "Бутси Nike Tiempo X PRO FG.jpg", category: "Бутси" },
    { id: 6, title: "Nike Phantom GX FG", description: "<strong>Країна виробник:</strong> Боснія та Герцеговина <br> <strong>Вид взуття:</strong> Бутси <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2550 грн.</strong>", image: "Бутси Nike Phantom GX FG.jpg", category: "Бутси" },
    { id: 7, title: "Nike Mercurial Superfly 9", description: "<strong>Країна виробник:</strong> Китай <br> <strong>Вид взуття:</strong> Бутси <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 4000 грн.</strong>", image: "Бутси Nike Mercurial Superfly 9.jpg", category: "Бутси" },
    { id: 8, title: "Puma Future 1.3", description: "<strong>Країна виробник:</strong> В'єтнам <br> <strong>Вид взуття:</strong> Бутси <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2150 грн.</strong>", image: "Бутси Puma Future 1.3.jpg", category: "Бутси" }
];

function loadPosts(category) {
    const container = document.getElementById("cardsContainer");
    let postsHtml = '';

    posts.forEach(function(post, index){
        if (category === "Всі товари" || post.category === category) {
            postsHtml += `<div class="image-card">
                                <div class="image_and_text-container">
                                    <img class="image" src="${post.image}" alt="${post.title}">
                                    <div class="discount">-20%</div>
                                    <p class="name">${post.title}</p>
                                    <button class="toggle-description" data-index="${index}">Показати опис</button>
                                    <p class="description hidden">${post.description}</p>
                                </div>
                            </div>`;
        }
    });

    container.innerHTML = postsHtml;
    document.querySelectorAll('.toggle-description').forEach(button => {
        button.addEventListener('click', function() {
            let desc = this.nextElementSibling;
    
            desc.classList.toggle('hidden');
    
            if (desc.classList.contains('hidden')) {
                this.textContent = "Показати опис";
            } else {
                this.textContent = "Приховати опис";
            }
        });
    });    
}

loadPosts("Всі товари");

const filterButtons = document.querySelectorAll('.navig button');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        loadPosts(this.textContent);
    });
});

