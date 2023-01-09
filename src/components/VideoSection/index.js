import React from 'react'

const VideoSection = () => {
  return (
    <section className='tf-video section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
            <h3>Headline Sample</h3>
            <p>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons digital</p>

            <div className='row'>
              <div className='col-6'>
                <h2>18k</h2>
                <p>Gorgeous, high-quality design system for mobile, tablet & desktop devices</p>
              </div>
              <div className='col-6'>
                <h2>92%</h2>
                <p>Gorgeous, high-quality design system for mobile, tablet & desktop devices</p>
              </div>
            </div>

          </div>

          <div className='col-lg-6 '>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item"
                src="https://www.youtube.com/embed/QFaFIcGhPoM"
                title="YouTube video player" allowfullscreen></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default VideoSection
