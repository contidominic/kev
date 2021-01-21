import * as React from "react"


 

const handleSubmit = (e) => {
  const handleSubmit = (e) => {
      e.preventDefault()
      let myForm = document.getElementById('myForm');
      let formData = new FormData(myForm)
      fetch('/', {
    	method: 'POST',
    	body: formData
      })
    	.then(() => alert('success!'))
    	.catch((error) => alert(error))
    }
}

const IndexPage = () => {

return (
 <form method="post" name="Contact Form" id="myForm" data-netlify="true">
      <p>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
      </p>
      <p>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
      </p>
      <p>
        <label for="comments">Comments:</label><br/>
        <textarea name="comments" id="comments"></textarea>
      </p>
      <p>
        <button onSubmit={handleSubmit} type="submit">Submit</button>
      </p>
    </form>
 
 );


}


 
export default IndexPage
