let movies = [
    {
        movieId: 101,
        movieName: 'Salar',
        type: 'Action',
        actorName: 'Prabash'
    },
     {
        movieId: 102,
        movieName: 'Housefull',
        type: 'Comedy',
        actorName: 'Akshay kumar'
    },
     {
        movieId: 103,
        movieName: 'Dhurandhar',
        type: 'Action',
        actorName: 'Ranveer Singh'
    },
     {
        movieId: 104,
        movieName: 'Aashiqui 2',
        type: 'Romantic',
        actorName: 'Aditya rao'
    },
     {
        movieId: 105,
        movieName: 'Kanchana',
        type: 'Horror',
        actorName: 'Shiva'
    }
]
let cinemas = [
                {
                    movieId: 101,
                    hallName: 'Regal',
                },
                {
                    movieId: 102,
                    hallName: 'Maya Hall'
                },
                {
                    movieId: 101,
                    hallName: 'Miraj Hall'
                },
                {
                    movieId: 102,
                    hallName: 'Kamal Cinema'
                },
                {
                    movieId: 102,
                    hallName: 'Juble Talkies'
                }
]
function getMovie(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let movie = movies.find((movie) => movie.movieId === id)
           if(!movie) {
                reject("Movie Not Found....")
            } else {
                resolve(movie);
            }
        }, 3000)
    });
    return pr;
}
function getCinema(movieId) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
           let movieCinema = cinemas.filter((cinema) => cinema.movieId === movieId);
           if(movieCinema) {
            resolve(movieCinema);
           } else {
            reject("No Cinema Hall Found....");
           }
        }, 2000);
    });
    return pr;
}
function getTicket(cinemaName) {
    return pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cinemaName === 'Regal') {
                resolve({
                    Premium: 600,
                    Diamond: 400,
                    Gold: 200
                })
            } else {
                reject("No Cinema Name Found...");
            }
        }, 1000)
    });
}
async function movieSummary() {
    try{
        let movie = await getMovie(101)
        let cinemas = await getCinema(movie.movieId)
        let ticket = await getTicket(cinemas[0].hallName)
        console.log(ticket);
    } catch(error) {
        console.log(error);
    }
}
movieSummary()