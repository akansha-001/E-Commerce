import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Announcement } from "../components/Announcment"

const Container = styled.div`

`
const ProductList = () => {
    return (
      <Container>
        <Navbar/>
        <Announcement/>

      </Container>
    );
};

export default ProductList;      