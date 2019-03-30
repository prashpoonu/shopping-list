
$(function(){
       
$('.shopping-list').on('click','button',function(){
    if($(this).attr('class')=== 'shopping-item-toggle')
    {
        $(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked'); 
    }

    else if($(this).attr('class')=== 'shopping-item-delete')
    {
        $(this).closest('li').remove();
    }
})
});      
           


$("#js-shopping-list-form").submit(function( event) 
{  
    event.preventDefault();
    let textInput = $(this).find('input#shopping-list-entry').val();
    $('.shopping-list').append( `<li>
    <span class="shopping-item">${textInput}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>` );
});








