Link
  .create({
    title: "MA",
    url: "http://www.makersacademy.com",
    text: "Makers Academy official website"
  })
   .complete(function(err) {
         if (!!err) {
                 console.log('The instance has not been saved:', err)
         } else {
                 console.log('We have a persisted instance now')
         }
           })
