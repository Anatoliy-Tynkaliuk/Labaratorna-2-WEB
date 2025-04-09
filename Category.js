let posts = [
    { id: 1, discounts: "20%", title: "Nik PT aniom", description: "<strong>Країна виробник:</strong> Китай  <br> <strong>Вид взуття:</strong> Багатошиповки, стоноги <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 1500 грн.</strong>", image: "Сороканіжки Nik PT aniom.jpg", category: "Сороконіжки" },
    { id: 2, discounts: "45%", title: "Adidas X Speedportal TF", description: "<strong>Країна виробник:</strong> Індонезія <br> <strong>Вид взуття:</strong> Багатошиповки, стоноги <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2120 грн.</strong>", image: "Сороканіжки Adidas X Speedportal TF.jpg", category: "Сороконіжки" },
    { id: 3, discounts: "55%", title: "Nike Tiempo X Legend", description: "<strong>Країна виробник:</strong> В'єтнам <br> <strong>Вид взуття:</strong> Багатошиповки, стоноги <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2400 грн.</strong>", image: "Сороконіжки Nike Tiempo X.jpg", category: "Сороконіжки" },
    { id: 4, discounts: "85%", title: "Nike Air Zoom", description: "<strong>Країна виробник:</strong> В'єтнам <br> <strong>Вид взуття:</strong> Багатошиповки <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 3100 грн.</strong>", image: "Nike Air Zoom.jpg", category: "Сороконіжки" },
    { id: 5, discounts: "20%", title: "Nike Tiempo X PRO FG", description: "<strong>Країна виробник:</strong> Китай <br> <strong>Вид взуття:</strong> Бутси <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2280 грн.</strong>", image: "Бутси Nike Tiempo X PRO FG.jpg", category: "Бутси" },
    { id: 6, discounts: "30%", title: "Nike Phantom GX FG", description: "<strong>Країна виробник:</strong> Боснія та Герцеговина <br> <strong>Вид взуття:</strong> Бутси <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2550 грн.</strong>", image: "Бутси Nike Phantom GX FG.jpg", category: "Бутси" },
    { id: 7, discounts: "90%", title: "Nike Mercurial Superfly 9", description: "<strong>Країна виробник:</strong> Китай <br> <strong>Вид взуття:</strong> Бутси <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 4000 грн.</strong>", image: "Бутси Nike Mercurial Superfly 9.jpg", category: "Бутси" },
    { id: 8, discounts: "70%", title: "Puma Future 1.3", description: "<strong>Країна виробник:</strong> В'єтнам <br> <strong>Вид взуття:</strong> Бутси <br> <strong>Стан:</strong> Новий <br> <strong>Ціна: 2150 грн.</strong>", image: "Бутси Puma Future 1.3.jpg", category: "Бутси" }
];

function loadPosts(category) {
    const container = document.getElementById("cardsContainer");
    let postsHtml = '';

    posts.forEach(function(post, index){
        if (category === "Всі товари" || post.category === category) {
            postsHtml += `<div class="image-card">
                                <div class="image_and_text-container">
                                    <img class="image" src="${post.image}" alt="${post.title}">
                                    <div class="discount">${post.discounts}</div>
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
            let descript = this.nextElementSibling;
    
            descript.classList.toggle('hidden');
    
            if (descript.classList.contains('hidden')) {
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

