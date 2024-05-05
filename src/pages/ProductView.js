import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const product = {
  //... (keep the product object as it is)
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProductView() {
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || {})
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[2] || {})

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container">
          <div className="pt-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumb">
                {product.breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id} className="breadcrumb-item">
                    <a href={breadcrumb.href} className="text-decoration-none">
                      {breadcrumb.name}
                    </a>
                  </li>
                ))}
                <li className="breadcrumb-item active" aria-current="page">
                  <a href={product.href} className="text-decoration-none">
                    {product.name}
                  </a>
                </li>
              </ol>
            </nav>

            {/* Image gallery */}
            <div className="row mt-6">
              <div className="col-lg-4 d-none d-lg-block">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={product.images[1].src}
                      alt={product.images[1].alt}
                      className="img-fluid rounded mb-4"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={product.images[2].src}
                      alt={product.images[2].alt}
                      className="img-fluid rounded mb-4"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <img
                  src={product.images[3].src}
                  alt={product.images[3].alt}
                  className="img-fluid rounded"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="row px-4 pb-16 pt-10">
              <div className="col-lg-8 border-right border-secondary pr-lg-5">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              </div>

              <div className="col-lg-4 mt-4">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-10">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                      <div className="d-flex align-items-center">
                        {product.colors?.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="text-sm font-medium text-gray-900">Size</h3>
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Size guide
                      </a>
                    </div>

                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                      <div className="row row-cols-2 row-cols-sm-4 row-cols-lg-2 g-4">
                        {product.sizes?.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                  : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                active ? 'ring-2 ring-indigo-500' : '',
                                'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? 'border' : 'border-2',
                                      checked ? 'border-indigo-500' : 'border-transparent',
                                      'pointer-events-none absolute -inset-px rounded-md'
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <button
                    type="submit"
                    className="mt-10 btn btn-primary w-100"
                  >
                    Add to bag
                  </button>
                </form>
              </div>

              <div className="col-lg-8 py-10 border-right border-secondary pr-lg-5">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">{product.description}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                  <div className="mt-4">
                    <ul className="list-unstyled">
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  )
}

export default ProductView;
