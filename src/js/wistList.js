$(document).ready(function(){
    //wrap deleteWishList within bindDeleteEvents
    function bindDeleteEvent() {
        $('.deleteWishList').on('submit', function(event){
            //stop from from submitting
            event.preventDefault();
    
            let form = $(this);
            //take action value from the targetted form
            let actionURL = form.attr('action');
            //send ajax post to delete item
            $.ajax({
                url: actionURL,
                method: 'POST',
                success: function(response) {
                    //fade out the item, then actually delete it instead of just hiding it
                    form.closest('.card').fadeOut(400, function(){
                        $(this).remove()
                    });
                },
                error: function(err) {
                    console.log('Error deleting item: ' + err);
                }
            })
        });
    }

    $('#addWishList').on('submit', function(event){
        event.preventDefault();

        let form = $(this);
        let actionURL = form.attr('action');
        //take form data and stringify it
        let formData = form.serialize();

        $.ajax({
            url: actionURL,
            method: 'POST',
            data: formData,
            success: function(response) {
                //take json response from server and append it to container
                let newItem = $(
                    `
                    <a href="${response.link}" class="card" style="display: none;">
                        <div class="cardDetailsContainer">
                            <h4><b>
                                ${response.title}
                            </b></h4>
                            <p>
                                ${response.desc}
                            </p>
                            <p>
                                ${response.price}
                            </p>
                            <form class="deleteWishList"action="/wishlist/delete/${response.itemID}" method="POST">
                                <button type="submit">Delete</button>
                            </form>
                        </div>
                    </a>
                    `
                );

                $('.gridContainer').append(newItem);
                newItem.fadeIn(400);

                bindDeleteEvent();
            }
        })
    });

    //makes sure .deleteWishList functionality works on existing items
    bindDeleteEvent();
});
