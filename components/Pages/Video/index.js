import React from 'react'

const Video = () => {
  return (
    <section className='tf-video__about section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='tf-video__about__bg-img'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className='col-lg-7'>
            <h2>Headline of Modern and Digital Lending Platform In a Few Seconds for You</h2>
            <p>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process Gorgeous, high-quality design system for mobile, tablet & a few reasons digital</p>

            <button type="button" className="btn play-btn" data-toggle="modal" data-target="#videoModal">
              Play Tutorial
            </button>

            <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>

                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QFaFIcGhPoM" title="Tutorial Video" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
