import React from 'react';

const Product = () => (
  <>
    <div className="bg-light mx-3 mt-2">Search</div>
    <div className="badge bg-primary ms-3 mt-2">Product</div>
    <div className="d-flex bg-light mx-3 mt-2">
      <section className="w-100">
        <article>Item</article>
        <article>Path</article>
        <div className="card mb-3">
          <div className="row g-0 d-flex">
            <div className="col-md-2">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body w-100">
                <h5 className="card-title">Card title</h5>
                <h5 className="card-title">Description</h5>
                <p className="card-text">Quantity</p>
                <p className="card-text"><small className="text-muted">Price</small></p>
              </div>
            </div>
            <div className="col-md-2">
              <button type="button">Bay</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
)

export default Product
