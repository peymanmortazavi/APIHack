var tweets = {

    searchByPhrase: function(phrase) {

        var phrase = phrase || 'lazy'

        $.get("https://congress.api.sunlightfoundation.com/legislators/locate?zip=" + phrase, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/twitter/tweets/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    load: function() {

        $.get("/twitter/tweets/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        legislators.searchByChamber('senate')

    }

}