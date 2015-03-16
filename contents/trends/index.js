var trends = {

    searchByLatLong: function() {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://apitwitterhack.herokuapp.com/trends/available.json", function(data) {
            
            

        })
        .complete(function(data) {
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

    load: function() {

        $.get("/twitter/trends/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        trends.searchByLatLong('Toronto')

    }

}
