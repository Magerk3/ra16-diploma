# Дипломный проект курса «React»

Дипломный проект представляет собой интернет-магазин обуви всеми основными функциями которого можно пользоваться.


Перейдём к самому приложению.


## Содержание

Приложение содержит следующие самостоятельные экраны (страницы):

1. Главная страница.
1. Каталог товаров.
1. Информационная страница.
1. Страница товара.
1. Корзина.
1. 404

## Переходы между экранами

Навигационным центром приложения являются шапка и футер каждого экрана (страницы):

![Header](https://github.com/netology-code/ra16-diploma/blob/master/assets/header-menu.png)

![Footer](https://github.com/netology-code/ra16-diploma/blob/master/assets/footer-menu.png)

Из шапки можно попасть на следующие экраны:
* логотип и ссылка «Главная» — ведут на главную страницу, URL — "/";
* каталог — ведёт на страницу каталога, URL — "/catalog";
* о магазине — ведёт на страницу «О магазине», URL — "/about";
* контакты — ведёт на страницу «Контакты», URL — "/contacts".

Из футера можно попасть на следующие экраны:
* о магазине — ведёт на страницу «О магазине», URL — "/about";
* каталог — ведёт на страницу каталога, URL — "/catalog";
* контакты — ведёт на страницу «Контакты», URL — "/contacts.

## Описание экранов

### Главная страница

Экран «Главная страница» доступен по умолчанию при открытии приложения.

![Frontpage](https://github.com/netology-code/ra16-diploma/blob/master/assets/index-loading.png)

При загрузке любых данных с помощью сетевых запросов должен отображаться лоадер. У каждого виджета лоадер свой, то есть у вас не должно быть одного лоадера на всё приложение.

После загрузки страница выглядит следующим образом:

![Frontpage](https://github.com/netology-code/ra16-diploma/blob/master/assets/index-loaded-comments.png)

Реализовано:

1. Хиты продаж — GET http://localhost:7070/api/top-sales. В ответ приходит JSON, содержащий данные. Если в ответе пришёл пустой массив, то есть хитов продаж нет, то компонент ничего  не отображает, так и не занимает место на экране.

1. Категории каталога — GET http://localhost:7070/api/categories. В ответ приходит массив категорий без элемента «Все». По умолчанию выбранный элемент служит для определения того, какие будут загружаться товары из каталога. Если «Все» — загружаются все, если «Женская обувь» — загружается только женская обувь. Активный элемент выделен. При смене категории делается новый запрос, предыдущие загруженные данные удаляются.

1. Элементы каталога — GET http://localhost:7070/api/items для варианта «Все». При другой выбранной категории делается запрос вида GET http://localhost:7070/api/items?categoryId=X. Возвращается массив элементов, соответствующих вашему запросу.

1. Загрузить ещё — при запросе элементов каталога загружаются следующие 6. При нажатии на «Загрузить ещё» загружаются ещё 6: GET http://localhost:7070/api/items?offset=6, где `offset` определяет, сколько элементов пропустить. Если сервер вернул пустой массив или меньше 6 элементов, то кнопка «Загрузить ещё» должна исчезнуть. На время загрузки над кнопкой также показывается лоадер, сама кнопка отключается.

Обратите внимание, при загрузке по кнопке «Ещё» учитывается выбранная категория: то есть если выбрана категория «Женская обувь», то при нажатии на «Ещё» делается запрос GET http://localhost:7070/api/items?categoryId=X&offset=6 и т. д.


Рекламный баннер и текст на нём являются статичными.

### Каталог товаров

Экран «Каталог товаров» должен выглядеть следующим образом:

![Catalog](https://github.com/netology-code/ra16-diploma/blob/master/assets/catalog.png)

Фактически он полностью повторяет функциональность каталога на главной странице, за одним исключением: у него есть поле поиска.

При заполнении этого поля отправляется запрос вида: GET http://localhost:7070/api/items?q=<текст в строке поиска>. При этом все правила относительно категории кнопки «Загрузить ещё» сохраняются.

Если категория меняется, то данные перезагружаются с учётом строки поиска.

Строка поиска реагирует только на полный ввод, не live-поиск.

### Поиск

На всех страницах в шапке присутствует виджет поиска:

![Search](https://github.com/netology-code/ra16-diploma/blob/master/assets/search-comments.png)

По умолчанию поисковое поле скрыто, отображается только иконка:

![Search](https://github.com/netology-code/ra16-diploma/blob/master/assets/search-closed.png)

Эта иконка работает следующим образом: при первом клике открывает строку поиска, при втором, если был введён какой-то текст, то перенаправляет пользователя на страницу каталога (/catalog.html), при этом в поисковом поле  отображён тот же текст, что был ввёден в строку поиска в шапке, и загрузка данных происходит исходя из этого:

![Search](https://github.com/netology-code/ra16-diploma/blob/master/assets/search-catalog-comments.png)

Поиск на сервере работает по точному совпадению цвета без учёта регистра, например, «чёрный», и по содержанию слова для названия без учёта регистра, например, можно найти «жар» в «Туфли Жар-птицы».

Если пользователь не ввёл никакой текст, то строка поиска просто схлопывается обратно.

### О магазине, контакты

Это просто контентные страницы, в которые жёстко зашит контент. Никакой логики, кроме работы виджета поиска и ссылок, там нет.

### Страница товара

Страница товара выглядит следующим образом:

![Item](https://github.com/netology-code/ra16-diploma/blob/master/assets/catalog-item.png)

Страница открывается при нажатии кнопок «Заказать» в карточках товаров. URL — /catalog/:id. Где id — это ID товара.

На ней интерес представляет только блок самого товара:

![Item](https://github.com/netology-code/ra16-diploma/blob/master/assets/catalog-item-comments.png)

Ключевые моменты:
1. При загрузке показывается лоадер.
1. Для загрузки полной информации о товаре делается GET http://localhost:7070/api/items/:id, где id — это ID товара.
1. Сбоку выводится табличка с данными.
1. Размеры — выводятся все доступные размеры, у которых флаг `available` равен `true`. По умолчанию ни один размер не выбран. После выбора он становится выделенным, как на скриншоте. Кнопка «В корзину» активируется только тогда, когда есть размеры в наличии и выбран конкретный размер. Размер можно выбрать только один.
1. Количество — от 1 до 10.

Особые случаи: если ни одного размера не доступно, блок «Количество» и кнопка «В корзину» не отображаются.

После нажатия на кнопку «В корзину» пользователь перемещается в страницу корзины /cart.

### Страница корзины

В корзину можно попасть, либо заказав что-то, либо кликнув на иконку корзины в шапке сайта.

Корзина выглядит следующим образом:

![Cart](https://github.com/netology-code/ra16-diploma/blob/master/assets/cart-comments.png)

Блок «Корзина» отображает товары, находящиеся в корзине. Все товары хранятся локально в localStorage. Товар можно удалить из корзины, тогда он удаляется и из localStorage тоже.

Одной позицией считается пара — товар + размер. То есть если купить те же босоножки другого размера, то это будет две позиции в корзине. А если два раза купить босоножки того же размера, то изменится количество и общая стоимость, но запись останется в табличке одна.

Общая сумма рассчитывается на базе суммирования всех позиций при отображении.

Соответственно, виджет корзинки отображает количество позиций в корзине:

![Cart](https://github.com/netology-code/ra16-diploma/blob/master/assets/cart-widget.png)

Если в корзине товаров нет вообще, то розового индикатора с числом тоже нет.

Блок оформления заказа позволяет оформить заказ — POST http://localhost:7070/api/order.

В теле — JSON:
```json
{
  "owner": {
    "phone": "+7xxxxxxxxxxx",
    "address": "Moscow City",
  },
  "items": [
    {
      "id": 1,
      "price": 34000,
      "count": 1
    }
  ]
}
```

После успешного оформления заказа все данные корзины вычищаюся из state и из localStorage.

Пользователю показывается loader и сообщение об успехе.

### 404

При вводе несуществующего URL, не соответствующего ни одному из путей, пользователю показыватся страница 404.


