function openCity(evt, cityName) {
        // Объявить все переменные
        var i, tabcontent, tablinks;

        // Получить все элементы с class="tabcontent" и скрыть их
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Получить все элементы с class="tablinks" и удалить class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Показать текущую вкладку и добавить "active" класс по ссылке, открывшей вкладку
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }




