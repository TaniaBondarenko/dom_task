function openMonth(evt, monthName) {
        // Объявить все переменные
        var i, content, month;

        // Получить все элементы с class="content" и скрыть их
        content = document.getElementsByClassName("content");
        for (i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }

        // Получить все элементы с class="month" и удалить class "active"
        month = document.getElementsByClassName("month");
        for (i = 0; i < month.length; i++) {
            month[i].className = month[i].className.replace(" active", "");
        }

        // Показать текущую вкладку и добавить "active" класс по ссылке, открывшей вкладку
        document.getElementById(monthName).style.display = "block";
        evt.currentTarget.className += " active";
}
