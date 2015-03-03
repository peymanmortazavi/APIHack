var users = {

    searchByName: function(name) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/legislators.html


        $.get("https://apitwitterhack.herokuapp.com/users/search.json?q="+name+"&page=1&count=15", function(data) {

           // var items=JSON.parse(data)
          // var item=jQuery.parseJSON(data)
            console.log('got ' + data)

            if (data){

                $.get("/twitter/users/list.jade", function(template) {
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

        $.get("/twitter/users/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        users.searchByName('Twitter%20API')

    }

}