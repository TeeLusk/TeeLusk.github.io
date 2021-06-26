# W10

## Readings
### MDN: Validating Forms
(Question) use cases for Fieldset?
* (See [MDN: Fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)) Good for grouping controls like radio inputs as well as disabling parts of the form if need be
  * i.e. If you wanted to ensure certain parts of the form we filled out first before enabling a form
  * See also [CanIUse: Fieldset Disabled Attribute](https://caniuse.com/fieldset-disabled) Not fully supported on some browsers



### MDN: Using Fetch
**Promises**
"Fetch is a modern alternative to XMLHttpRequest"

**Example: Checking for Success**
```js
fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
```

#### Headers
Use headers() constructor

See [Postman export Client Code](https://learning.postman.com/docs/sending-requests/generate-code-snippets/)
* Can generate fetch, along with quite a few more request structures
