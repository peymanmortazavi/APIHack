var trends = {

    searchByZipcode: function(zipcode) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        var zipcode = zipcode || '80301'

        $.get("https://congress.api.sunlightfoundation.com/legislators/locate?zip=" + zipcode, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/twitter/trends/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    searchByName: function(name) {

        // search legistalors by name
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/legislators?query=" + name, apikey, function(data) {

            $.get("/twitter/trends/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },


    searchByChamber: function(chamber) {

        // search legistalors by chamber 
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/legislators?chamber=" + chamber, apikey, function(data) {

            $.get("/twitter/trends/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },    

    load: function() {

        $.get("/twitter/trends/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        legislators.searchByChamber('senate')

    }

}