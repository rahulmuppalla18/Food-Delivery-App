import React, { useState } from 'react';
import Helmet from "./../components/Helmet/Helmet";
import CommonSection from "./../components/UI/common-section/CommonSection";
import {Container, Row, Col} from "reactstrap";
import ReactPaginate from "react-paginate";
import "./../styles/pagination.css";

import products from "./../assets/fake-data/products";
import ProductCard from "./../components/UI/product-card/ProductCard";

import "./../styles/all-foods.css";

const AllFood = () => {

  let [searchTerm, setSearchTerm] = useState("");
  let [productsData, setProductData] = useState(products);
  let [pageNumber, setPageNumber] = useState(0);

  let searchedProduct = products.filter((item) => {
    if (searchTerm === "") return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  let productPerPage = 8;
  let visitedPage = pageNumber * productPerPage;
  let displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  let pageCount = Math.ceil(searchedProduct.length / productPerPage);

  let changePage = ({selected}) => {
    setPageNumber(selected);
  }

  let handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex justify-content-between align-items-center ">
                <input type="text" placeholder="I'm looking for...." value={searchTerm} onChange={handleSearch}/>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="sorting__widget text-end">
                <select className=''>
                  <option>Default</option>
                  <option value="ascending">Alphabetically A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col
                lg="3"
                md="4"
                sm="6"
                xs="12"
                key={item.id}
                className="mt-5"
              >
                <ProductCard product={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate pageCount={pageCount} onPageChange={changePage} previousLabel="Prev" nextLabel="Next" 
              containerClassName="paginationBtns"/>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AllFood