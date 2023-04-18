import { useState } from 'react'
import Link from 'next/link'


export default function MyFooter({links, branding, socialMedia}){


  const [contactUs, setContactUs] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     lastName,
    //     email,
    //     phoneNumber,
    //     message
    //   })
    // })
    //
    //const data = await response.json()

    //data.success
    if (true) {
      setSubmitted(true)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhoneNumber('')
      setMessage('')
    }
  }
  return(
    <footer className='flex justify-around border-t pt-4'>
      <div>
      
      </div>

      {!contactUs ? (<div className='flex justify-center'>
        <button className="bg-primary hover:bg-primaryDark text-textColor font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-auto"
          onClick={() => setContactUs(true)}>Contact Us</button>
        </div> ) : (
        <div className="">
        {submitted ? (
          <p className="text-textColorConfirmed font-bold text-lg text-center my-4">
            Thank you for contacting us!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-textColor font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-textColor leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-text-color font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-textColor leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-textColor font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-text-color font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-text-color font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
            <div className="flex justify-around">
              <button onClick={handleSubmit} >
                <span className="text-textColor py-1 px-5 font-bold border rounded hover:bg-primaryDark">Submit</span>
              </button>
            </div>
          </form>
        )}
      </div>
      )}
      <div className='bg-primary flex justify-around'>
        <div>
          <h4 className='font-bold text-xl'>Site Map</h4>
          <ul>
            {
              links.map(link =>
                <li className={`font-semibold text-lg`} key={`${link.title}-footer`}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </footer>
  );
}