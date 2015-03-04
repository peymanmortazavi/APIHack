var tweets = {

    searchByPhrase: function(inputPhrase) {

        var phrase = inputPhrase || 'lazy'
        debugger

        $.get("http://apitwitterhack.herokuapp.com/search/tweets.json?q=\"" + phrase +"\"", function(data) {
            data = data.statuses

                $.get("/twitter/tweets/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    $("#list").html(html)
                })



        })

    },

    load: function() {

        $.get("/twitter/tweets/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        tweets.searchByPhrase('Twitter')

    }

}