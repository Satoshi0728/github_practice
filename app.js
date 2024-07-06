$("#addTodo").click(function() {
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type = 'checkbox'>" + inputTodo + "</li>");

    $("#input").val("");

    $("li").click(function() {
        $(this).toggleClass("completed");
    }  );
    });
