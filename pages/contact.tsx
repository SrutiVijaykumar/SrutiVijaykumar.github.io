import React from 'react'
import MainLayout from '../components/layouts/MainLayout'

const Contact = (): JSX.Element => {
  return (
    <MainLayout title="Contact | Sruti Vijaykumar">
      <div className="container lg:px-24 sm:px-8 bg-gray-100 my-12">
        <section className="leading-loose">
          <h1 className="text-brand text-3xl font-bold py-8">Let&apos;s Chat</h1>
          <div className="grid grid-cols-1 font-light">
            <div>
              <ol type="1" className="list-inside list-decimal mb-12">
                <li>Interested in hiring me</li>
                <li>Want to chat about UXR and/or web accessibility</li>
                <li>Need help getting started in web accessibility</li>
                <li>Want to learn about the experiences of an international student in America</li>
              </ol>
              <p className="mb-12">
                All good reasons to get in touch :)
              </p>
              <p>
                Email: <a href="mailto: srutivijaykumar@gmail.com">srutivijaykumar@gmail.com</a>
              </p>
              <p className="mb-12">
                Social Media: <a href="https://www.linkedin.com/in/sruti-vijaykumar" className="text-brand underline focus:no-underline hover:no-underline">LinkedIn</a>
              </p>
            </div>
        </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default Contact
