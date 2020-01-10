
 function search()	{	      
        var moviesSearchUrl = "https://www.omdbapi.com/?apikey=e4db3ced&t";
        var searchQuery = $( "#FilmoId" ).val();

        if(searchQuery == ""){
            $('#filmuForma').html("<h1>Prašome ką nors įvesti!</h1>");
         } else {

            $.ajax({
                url: moviesSearchUrl + '&s=' + encodeURI(searchQuery),
                dataType: "jsonp",
                success: searchCallback
            });
        }
    }
function searchCallback(data) {	
        console.log (JSON.stringify(data));



        $("#filmuForma").html('<h1>Iš viso surasta ' + data.totalResults + ' paieškos rezultatai!</h1><br>');
        
       var movies = data.Search;
            $.each(movies, function(index, movie) {
            $("#filmuForma").append('<h3>Filmo pavadinimas:' + movie.Title + '</h3>');
            $("#filmuForma").append('<p>Metai: ' + movie.Year + '</p>');
            $("#filmuForma").append('<p>Imbd ID: ' + movie.imdbID + '</p>');
            $("#filmuForma").append('<p>Tipas: ' + movie.Type + '</p>');

        }  
        );
    
    }


