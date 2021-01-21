import * as React from "react"

 
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

const handleSubmit = (event) => {
  event.preventDefault()
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": event.target.getAttribute("name"),
      ...name
    })
  }).then(() => navigate("/thank-you/")).catch(error => alert(error))
}

const IndexPage = () => {
return (
 <form data-netlify="true" name="pizzaOrder" method="post" onSubmit={handleSubmit}>
    <input name="form-name" value="pizzaOrder" />
    <label>What order did the pizza give to the pineapple?
      <input name="order" type="text" onChange={handleChange} />
    </label>
    <input type="submit"/>
  </form>
 
 );
 
}

export default IndexPage;
