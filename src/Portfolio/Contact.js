import React from 'react'

function Contact() {
  return (
    <div class="container">
    <div class="row justify-content-center">
      <h1 class="text-center p-3">Contact</h1><br/>
      <div class="col-lg-6 p-3">
        <h3>Connect with me</h3>
        <p>If you want to know more about me or my work, or if you would just
          like to say hello, send me a message. I'd love to hear from you.</p>

          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

    </div>
    <div class="col-lg-6 p-3 text-end">
     <h1 >Email</h1>
        <a href="mailto:kalanjiyaraj01@gmail.com">
          kalanjiyaraj01@gmail.com</a><br/><br/><br/>
          <h1>Address</h1>
          <p>Ramapuram, Chennai-600087<br/>Tamil Nadun<br/>India</p><br/><br/>
          <h1>Social</h1>
          <a href="https://stackoverflow.com/users/20807131/raj" target="_blank">
            <img alt="stackoverflow.com" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img alt="www.instagram.com" src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"/>
          </a>
          <a href="https://github.com/KALANJIYARAJ" target="_blank">
            <img alt="github.com" src="https://img.icons8.com/doodle/40/000000/github--v1.png"/>
          </a>
          <a href="https://www.linkedin.com/in/kalanjiya-raj-130385169/" target="_blank">
            <img alt="www.linkedin.com" src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"/>
          </a>
    </div>
    </div><br/>
  </div>
  )
}

export default Contact