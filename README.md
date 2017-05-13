Vanilla JS form submit once protection
-----------

Forms usually need to be submitted once. 

When double submission does occur (i.e. because of double clicking), unwanted side effect can occur:
 * duplication of records in a database
 * multiple actions such as i.e. sending duplicate emails
 * thrown exceptions as systems could not expect certain actions to be executed twice
 
This "Js-SubmitOnce" script is a plain JS vanilla script to prevent this undesired behavior.

Installation
------------


Installation is done by composer, requiring:
 
 ```json
 {
   "require": {
    "dynasource/js-submitonce" : "*"
   }
}
```    

Include it in your webpage with:

```js
window.addEventListener('load', function () {
    new SubmitOnce({
        'selector': 'btn'
    });
});
```