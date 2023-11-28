import React from "react";
import Table from "../Components/Table/Table";

const Products = () => {
    return <div className="products-container">
        <div className="title-group">
            <h2>Products</h2>
            <button className="add-button">Add</button>
        </div>

        <Table />
    </div>
}

export default Products;